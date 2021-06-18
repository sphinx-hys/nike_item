import "https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min.js"; //引入第三方的类库
let sid = location.search.substring(1).split('=')[1];
if (!sid) {
    sid = 1;
}

function detail() {
    $.ajax({
        url: 'http://10.31.155.37/week04/nike_item/php/detail.php',
        data: {
            sid: sid
        },
        dataType: 'json'
    }).done(function(data) {
        //获取对应的数据，直接将数据添加给对应的元素对象。
        $('.pic img').attr('src', data.url);
        $('.detail').html(data.title);
        $('.price').html(data.price);
    });
}

//购物车
function goodscart() {
    let arrsid = [];
    let arrnum = [];

    function getlocalStorage() {
        if (localStorage.getItem('localsid') && localStorage.getItem('localnum')) { //存在则获取
            arrsid = localStorage.getItem('localsid').split(',')
            arrnum = localStorage.getItem('localnum').split(',')
        } else { //不存在则为空
            arrsid = [];
            arrnum = [];
        }
    }

    //添加本地存储
    $('.btn').on('click', function() {
        getlocalStorage();
        if (arrsid.includes(sid)) { //当前商品的sid存在,商品数量+1
            let index = arrsid.indexOf(sid);
            arrnum[index] = +arrnum[index] + 1;
            localStorage.setItem('localnum', arrnum);
        } else { //不存在，将商品的sid和数量存储到本地存储中
            arrsid.push(sid);
            localStorage.setItem('localsid', arrsid);
            arrnum.push(1);
            localStorage.setItem('localnum', arrnum);
        }
        alert('加入购物车成功');
    });
}

export {
    detail,
    goodscart
}