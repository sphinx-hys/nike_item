import "https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min.js"; //引入第三方的类库
function randerlist() {
    // 通过克隆渲染
    $.ajax({
        url: 'http://10.31.155.37/week04/nike_item/php/alldata.php',
        dataType: 'json'
    }).done(function(data) {
        if (localStorage.getItem('localsid') && localStorage.getItem('localnum')) {
            let arrsid = localStorage.getItem('localsid').split(',');
            let arrnum = localStorage.getItem('localnum').split(',');
            for (let i = 0; i < arrsid.length; i++) { //遍历获取当前本地存储中的sid
                $.each(data, function(index, value) {
                    if (arrsid[i] == value.sid) {
                        let newgoods = $('.goods:hidden').clone(true);
                        newgoods.attr('sid', value.sid);
                        newgoods.attr('perprice', value.price);
                        newgoods.find('img').attr('src', value.url); //图片
                        newgoods.find('.detail').html(value.title); //描述
                        newgoods.find('.num').val(arrnum[i]);
                        newgoods.find('.price p').html((value.price * arrnum[i]).toFixed(2)); //单价
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
            sumprice += parseFloat($(this).find('.price p').html());
        });
        $('.summary div span').html(sumprice.toFixed(2));
    }
    // 数量改变
    $('.num').on('input', function() {
        let reg = /^\d+$/; //匹配数字
        if (!reg.test($(this).val())) {
            $(this).val(1) //输入数字重置为1
        } else if ($(this).val() > 100) {
            $(this).val(100)
        }
        $(this).parents('.goods').find('.price p').html(perprice($(this)));
        calc();
        setlocalstorage($(this));
    });
    //计算单件商品的单价*数量
    function perprice(obj) {
        let per = obj.parents('.goods').attr('perprice'); //单价
        let num = parseInt(obj.parents('.goods').find('.num').val()); //数量
        return (per * num).toFixed(2);
    }

    //本地存储数量
    function setlocalstorage(obj) {
        let arrsid = [];
        let arrnum = [];
        if (localStorage.getItem('localsid') && localStorage.getItem('localnum')) {
            arrsid = localStorage.getItem('localsid').split(',');
            arrnum = localStorage.getItem('localnum').split(',');
        }
        let sid = obj.parents('.goods').attr('sid');
        let index = arrsid.indexOf(sid);
        arrnum[index] = obj.parents('.goods').find('.num').val();
        localStorage.setItem('localnum', arrnum)
    }
    // 删除商品并存储在本地
    $('.delete').on('click', function() {
        $(this).parents('.goods').remove();
        calc();
        let index = null;
        let arrsid = [];
        let arrnum = [];
        if (localStorage.getItem('localsid') && localStorage.getItem('localnum')) {
            arrsid = localStorage.getItem('localsid').split(',');
            arrnum = localStorage.getItem('localnum').split(',');
        }
        index = arrsid.indexOf($('.delete').parents('.goods').attr('sid'));
        arrsid.splice(index, 1);
        arrnum.splice(index, 1);
        localStorage.setItem('localsid', arrsid)
        localStorage.setItem('localnum', arrnum)
    })
}
export {
    randerlist
}