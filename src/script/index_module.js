import "https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min.js"; //引入第三方的类库
//jquery下面的方法介绍
// 1.获取元素 - $符号 - 获取一个或者多个元素 - 不会报错
// 2.on(events,[selector],[data],fn)在选择元素上绑定一个或多个事件的事件处理函数。
// events:事件类型，不带on
// selector:事件委托的元素，fn函数里面的this就是被委托的元素
// data:当一个事件被触发时要传递event.data给事件处理函数 - 几乎不使用
// fn:该事件被触发时执行的函数
// 3.addClass(class|fn) 为每个匹配的元素添加指定的类名。
// 4.removeClass([class|fn]) 从所有匹配的元素中删除全部或者指定的类。
// 5.siblings([expr]) 获取当前元素其他的兄弟元素 - 注意传递参数
// 6.eq(index|-index) 获取第N个元素
// 7.index([selector|element])获取元素对象的索引值，从0开始计数。 $(this).index() - 当前操作的元素的索引
// 8.animate(params,[speed],[easing],[fn])用于创建自定义动画的函数。
// params:设置动画属性最终值的集合,对象做参数。
// speed:三种预定速度之一的字符串("slow","normal", or "fast")或表示动画时长的毫秒数值(如：1000)
// easing:"linear" 和 "swing" 两种运动形式
// fn:在动画完成时执行的函数，每个元素执行一次。
// 9.hover():同时操作鼠标移入和移出

// 10.css():读写css属性值的方法。
// 逐个设置
// $('.box').css('width', '100px').css('height', '100px'); //写
// $('.box').css('width'); //读

// 整体设置css
// $('.box').css({
//     width:100,
//     height:100,
//     background:'red'
// });

// 11.盒子的宽高。
// width(): 元素的宽度，和边框border和填充padding没有关系
// innerWidth(): 元素的宽度 + 填充padding
// outerWidth(): 元素的宽度 + 填充padding + border宽度 = 盒模型
// outerWidth(true): 元素的宽度 + 填充padding + border宽度 + margin宽度

// 12.hide()/show()
// hide():隐藏显示的元素。
// show():显示隐藏的元素(display:none/block)


// 13.stop([clearQueue],[jumpToEnd])停止所有在指定元素上正在运行的动画。
// jquery下面的事件只要触发了存的队列(queue)中,直到全部执行完。
// clearQueue:如果设置成true，则清空队列。可以立即结束动画。
// jumpToEnd:如果设置成true，则完成队列。可以立即完成动画。
// $('.box').hover(function() {
//     $(this).stop(true).animate({
//         width: 500
//     })
// }, function() {
//     $(this).stop(true).animate({
//         width: 100
//     })
// })

// 14.offset():元素的位置,返回一个对象，对象里面包含{left:,top:}  offset().top -> offsetTop

// 15.scrollTop():获取滚动条的top值   $(window).scrollTop()


//tab选项卡模块
function tabSwitch() {
    const btns = $('.tab_title li');
    const items = $('.tab_content .item'); //获取元素
    btns.on('mouseover', function() {
        //$(this).index() - 当前操作的元素的索引
        $(this).addClass('active').siblings('li').removeClass('active');
        items.eq($(this).index()).addClass('show').siblings('.item').removeClass('show');
    });
}

//轮播图
function lunboPic() {
    const banner = $('.banner');
    const picli = $('.banner ul li');
    const btnli = $('.banner ol li');
    const left = $('#left');
    const right = $('#right');
    let num = null; //存储索引
    let timer = null;

    function tabswitch() {
        btnli.eq(num).addClass('active').siblings('li').removeClass('active');
        picli.eq(num).animate({ opacity: 1 }).siblings('li').animate({ opacity: 0 })
    }
    btnli.on('mouseover', function() {
        num = $(this).index(); //存储当前的索引
        tabswitch();
    });

    right.on('click', function() {
        num++;
        if (num > btnli.length - 1) {
            num = 0;
        }
        tabswitch();
    });

    left.on('click', function() {
        num--;
        if (num < 0) {
            num = btnli.length - 1;
        }
        tabswitch();
    });

    timer = setInterval(function() {
        right.click();
    }, 3000);

    banner.hover(function() {
        clearInterval(timer);
    }, function() {
        timer = setInterval(function() {
            right.click();
        }, 3000);
    });

}

//幻灯片效果
function taobaoPic() {
    const taobao = $('.taobao');
    const picul = $('.taobao ul'); //运动的盒子
    const picli = $('.taobao ul li');
    const btnli = $('.taobao ol li');
    const leftarrow = $('#leftarrow');
    const rightarrow = $('#rightarrow');
    let num = null; //存储索引
    let timer = null;

    let liwidth = picli.eq(0).width(); //一个li的width790
    //1.改变布局 - 无缝运动都要改变布局。
    //计算ul列表的宽度
    picul.css({
        width: picli.length * liwidth
    });


    //2.点击小圆圈，图片位置移动(和索引有关，索引*790)
    btnli.on('click', function() {
        num = $(this).index(); //当前小圆圈对应的索引
        change();
    });

    //3.显示左右箭头
    taobao.hover(function() {
        leftarrow.show();
        rightarrow.show();
    }, function() {
        leftarrow.hide();
        rightarrow.hide();
    });

    //4.左右箭头事件
    rightarrow.on('click', function() {
        num++;
        change();
    });

    leftarrow.on('click', function() {
        num--;
        change();
    });

    //封装图片运动的过程
    function change() {
        //判断如果是最后一张，改变picul位置。
        if (num > btnli.length) { //当前的索引>5,先重置picul的位置，然后位置改变
            picul.css('left', 0);
            num = 1;
        }
        if (num === -1) {
            picul.css('left', -liwidth * btnli.length);
            num = btnli.length - 1;
        }
        //改变小圆圈的状态
        if (num === btnli.length) { //右箭头
            btnli.eq(0).addClass('active').siblings('li').removeClass('active');
        } else {
            btnli.eq(num).addClass('active').siblings('li').removeClass('active');
        }
        picul.stop(true).animate({ //stop:保证运动完成
            left: -num * liwidth
        }, 200);
    }




}

//二级菜单
function twomenu() {
    const menuli = $('.menu li'); //18个
    const items = $('.item'); //18个
    const cartlist = $('.cartlist');
    //鼠标移入对应的li显示cartlist盒子
    menuli.hover(function() {
        $(this).addClass('active').siblings('li').removeClass('active');
        items.eq($(this).index()).show().siblings('.item').hide(); //当前和索引对应的内容显示其他的隐藏。
        cartlist.show();

        //拖到滚动条完整的显示cartlist里面的内容。
        let scrolltop = $(window).scrollTop();
        let bannertop = $('.banner1').offset().top; //获取banner1离顶部的距离。
        if (scrolltop > bannertop) {
            cartlist.css({
                top: scrolltop - bannertop
            })
        } else {
            cartlist.css({
                top: 0
            })
        }


    }, function() {
        cartlist.hide();
    });

    //cartlist移入显示，移出隐藏,cartlist和li有重叠的部分。
    cartlist.hover(function() {
        $(this).show();
    }, function() {
        $(this).hide();
    })
}
export {
    tabSwitch,
    lunboPic,
    taobaoPic,
    twomenu
}