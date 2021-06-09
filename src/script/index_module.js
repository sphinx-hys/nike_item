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



function tabSwitch() { //tab选项卡模块
    const btns = $('.tab_title li');
    const items = $('.tab_content .item'); //获取元素
    btns.on('mouseover', function() {
        //$(this).index() - 当前操作的元素的索引
        $(this).addClass('active').siblings('li').removeClass('active');
        items.eq($(this).index()).addClass('show').siblings('.item').removeClass('show');
    });
}

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
export {
    tabSwitch,
    lunboPic
}