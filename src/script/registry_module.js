import "https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min.js"; //引入第三方的类库
function reg() {
    // 表单验证
    const r_submit = $('.registry_form'); //注册表
    const r_telnum = $('.registry_form .telnum'); //电话
    const r_password = $('.registry_form .password'); //密码
    const checkspans = $('.checkspan'); //报错信息

    let telflag = true;
    let passflag = true;
    //手机号码，即用户名
    r_telnum.on('click', function() {
        checkspans.eq(2).css('color', '#333').html('请输入11位手机号码')
    })
    r_telnum.on('blur', function() {
        if ($(this).val() !== '') {
            let reg = /^1[3456789]\d{9}$/; //11位电话号码
            if (reg.test($(this).val())) {
                //重名检测
                $.ajax({
                    type: 'post',
                    url: 'http://10.31.155.37/week04/nike_item/php/registry.php',
                    data: {
                        telnum: $(this).val()
                    }
                }).done(function(data) {
                    if (data === 'false') {
                        checkspans.eq(2).css('color', 'green').html('√')
                        telflag = true;
                    } else {
                        checkspans.eq(2).css('color', 'red').html('用户名已存在');
                        telflag = false;
                    }
                });
            } else {
                checkspans.eq(2).css('color', 'red').html('手机号码格式有误');
                telflag = false;
            }
        } else {
            checkspans.eq(2).css('color', 'red').html('手机号码不能为空');
            telflag = false;
        }
    });
    //密码
    r_password.on('focus', function() {
        checkspans.eq(3).css('color', '#333').html('请输入6-12位的密码');
    });
    // 判断弱中强
    r_password.on('input', function() {
        let reg1 = /[0-9]+/;
        let reg2 = /[a-z]+/;
        let reg3 = /[A-Z]+/;
        let reg4 = /[\W_]+/;
        let num = 0; //统计字符的种类
        if (reg1.test($(this).val())) {
            num++;
        }
        if (reg2.test($(this).val())) {
            num++;
        }
        if (reg3.test($(this).val())) {
            num++;
        }
        if (reg4.test($(this).val())) {
            num++;
        }

        switch (num) {
            case 1:
                checkspans.eq(3).css('color', 'red').html('弱');
                passflag = false;
                break;
            case 2:
            case 3:
                checkspans.eq(3).css('color', 'orange').html('中');
                passflag = true;
                break;
            case 4:
                checkspans.eq(3).css('color', 'green').html('强');
                passflag = true;
                break;
        }
    });
    r_password.on('blur', function() {
        if ($(this).val() !== '') {
            if ($(this).val().length >= 6 && $(this).val().length <= 12) {
                if (passflag) {
                    checkspans.eq(3).css('color', 'green').html('√');
                }
            } else {
                checkspans.eq(3).css('color', 'red').html('密码长度不正确');
                passflag = false;
            }
        } else {
            checkspans.eq(3).css('color', 'red').html('密码不能为空');
            passflag = false;
        }
    });
    r_submit.on('submit', function() {
        if (r_telnum.val() === '') {
            checkspans.eq(2).css('color', 'red').html('手机号码不能为空');
            telflag = false;
        }
        if (r_password.val() === '') {
            checkspans.eq(3).css('color', 'red').html('密码不能为空');
            passflag = false;
        }
        if (!telflag || !passflag) {
            return false;
        }
    });
};
export {
    reg
}