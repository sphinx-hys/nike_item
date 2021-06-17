import "https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min.js"; //引入第三方的类库
function randerlist() {
    // 通过克隆渲染
    $.ajax({
        url: 'http://10.31.155.37/week04/nike_item/php/alldata.php',
        dataType: 'json'
    }).done(function(data) {
        if (localStorage.getItem('localsid')) { ///本地存储中sid存在
            let arrsid = localStorage.getItem('localsid').split(','); //sid数组
            for (let i = 0; i < arrsid.length; i++) { //遍历获取当前本地存储中的sid
                $.each(data, function(index, value) {
                    if (arrsid[i] == value.sid) {
                        let newgoods = $('.goods:hidden').clone(true);
                        newgoods.attr('sid', value.sid);
                        newgoods.find('.goods img').attr('src', value.url); //图片
                        newgoods.find('.goods .detail').html(value.title); //描述
                        newgoods.find('.goods .price p').html((value.price)); //单价
                        newgoods.css('display', 'block'); //显示
                        $('.cartlist').append(newgoods); //追加
                        calc(); //所有商品总价
                    }
                });
            }
        }
    });
    // 统计总价
    function calc() {
        let sumprice = 0;
        $('.goods:visible').each(function() {
            sumprice += parseFloat($(this).find('.goods .price p').html());
        });
        $('.summary div span').html(sumprice.toFixed(2));
    }
    // 数量改变
    $('.goods .num').on('input', function() {
        let reg = /^\d+$/; //匹配数字
        if (!reg.test($(this).val())) {
            $(this).val(1) //输入数字重置为1
        }
        $(this).parents('.goods').find('.goods .price p').html(perprice($(this)));
        calc();
        setlocalstorage($(this));
    });
    //计算单件商品的单价*数量
    function perprice(obj) {
        let per = parseFloat(obj.parents('.goods').find('.goods .price p').html()); //单价
        let num = parseInt(obj.parents('.goods').find('.goods .num').val()); //数量
        return (per * num).toFixed(2);
    }
    //本地存储数量
    function setlocalstorage(obj) {
        let arrsid = [];
        let arrnum = [];
        if (localStorage.getItem('localsid')) {
            arrsid = localStorage.getItem('localsid').split(',');
            for (let i = 0; i < arrsid.length; i++) {
                arrnum.push(1);
            }
        }
        let sid = obj.parents('.goods').attr('sid');
        let index = arrsid.indexOf(sid);
        arrnum[index] = obj.parents('.goods').find('.goods .num').val();
        localStorage.setItem('localnum', arrnum)
    }
    // 删除商品并存储在本地
    $('.goods .delete').on('click', function() {
        $(this).parents('.goods').remove();
        calc();
        let index = null;
        let arrsid = [];
        let arrnum = [];
        if (localStorage.getItem('localsid')) {
            arrsid = localStorage.getItem('localsid').split(',');
            for (let i = 0; i < arrsid.length; i++) {
                arrnum.push(1);
            }
        }
        index = arrsid.indexOf($('.goods .delete').parents('.goods').attr('sid'));
        arrsid.splice(index, 1); //删除
        arrnum.splice(index, 1); //删除
        localStorage.setItem('localsid', arrsid) //重新存储编号
        localStorage.setItem('localnum', arrnum) //重新存储数量
    })
}
export {
    randerlist
}