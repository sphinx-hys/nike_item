import "https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min.js"; //引入第三方的类库
function reg() {
    // 表单验证
    const registry_form = $('.registry_form'); //注册表
    const telnum = $('.registry_form .telnum'); //电话
    const password = $('.registry_form .password'); //密码
    const checkspans = $('.checkspan'); //报错信息

    telnum.on('click', function() {
        aSpan[2].innerHTML = '请输入11位手机号码';
        aSpan[2].style.color = '#333';
    })
    telnum.onblur = function() {
        if (this.value !== '') {
            const reg = /^1\d{10}$/g;
            if (reg.test(this.value)) {
                aSpan[2].innerHTML = '☑';
                aSpan[2].style.color = 'green';
                telflag = true;
            } else {
                aSpan[2].innerHTML = '手机号码格式有误';
                aSpan[2].style.color = 'red';
            }
        } else {
            aSpan[2].innerHTML = '手机号码不能为空';
            aSpan[2].style.color = 'red';
        }
    }
};
export {
    reg
}