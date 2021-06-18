import "https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min.js"; //引入第三方的类库
function login() {
    const l_telnum = $('.login_form .telnum'); //电话
    const l_password = $('.login_form .password'); //密码
    const checkspans = $('.checkspan'); //报错信息
    const l_submit = $('.login_form .submit'); //登录按钮
    let telflag = true;
    let passflag = true;
    l_telnum.on('blur', function() { //检测用户名是否存在
        if (l_telnum.val() === '') {
            checkspans.eq(0).css('color', 'red').html('手机号码不能为空');
            telflag = false;
        } else {
            $.ajax({
                type: 'post',
                url: 'http://10.31.155.37/week04/nike_item/php/login.php',
                data: {
                    telnum: $(this).val()
                }
            }).done(function(data) {
                if (data === 'false') {
                    checkspans.eq(0).css('color', 'red').html('用户名不存在');
                    telflag = false;
                } else {
                    checkspans.eq(0).html('');
                    telflag = true;
                }
            });
        }
    });
    //检测密码是否为空
    l_password.on('blur', function() {
        if (l_password.val() === '') {
            checkspans.eq(1).css('color', 'red').html('密码不能为空');
            passflag = false;
        } else {
            checkspans.eq(1).html('');
            passflag = true;
        }
    })

    //发送信息给后端
    l_submit.on('click', function() {
        if (l_telnum.val() === '') {
            checkspans.eq(0).css('color', 'red').html('手机号码不能为空');
            telflag = false;
        }
        if (l_password.val() === '') {
            checkspans.eq(1).css('color', 'red').html('密码不能为空');
            passflag = false;
        }
        if (!telflag || !passflag) {
            return false;
        }
        if (telflag) {
            $.ajax({
                type: 'post',
                url: 'http://10.31.155.37/week04/nike_item/php/login.php',
                data: {
                    telnum: l_telnum.val(),
                    password: l_password.val(),
                }
            }).done(function(data) {
                if (data === 'success') {
                    location.href = 'index1.html';
                    localStorage.setItem('telnum', l_telnum.val());
                } else {
                    if (data === 'passwordfail') {
                        checkspans.eq(1).css('color', 'red').html('密码错误');
                    } else {
                        checkspans.eq(1).html('');
                    }
                }
            });
        }
    });
}


export {
    login
}