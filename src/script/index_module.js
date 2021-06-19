import "https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min.js"; //引入第三方的类库
function tabSwitch() { //tab选项卡
    const toRegistry = $('.login a'); //加入我们
    const toLogin = $('.registry a'); //立即登录
    const loginview = $('.login'); //登陆界面
    const registryview = $('.registry'); //注册界面
    toRegistry.on('click', function() { //跳转到注册界面
        loginview.hide().siblings('div').show(); //隐藏登陆界面，显示注册界面
    })
    toLogin.on('click', function() { //跳转到登陆界面
        registryview.hide().siblings('div').show(); //隐藏注册界面，显示登陆界面
    })
}

function showlogin() {
    $('.loginbtn').on('click', function() {
        $('.pre-modal-window').show();
    })
    $('.pre-modal-exit').on('click', function() {
        $('.pre-modal-window').hide();
    })
}
export {
    tabSwitch,
    showlogin
}