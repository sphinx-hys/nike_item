import "https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min.js"; //引入第三方的类库
import "https://cdn.bootcdn.net/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.min.js"; //引入懒加载的插件

function list() {
    $.ajax({
        url: 'http://10.31.155.37/week04/nike_item/php/alldata.php',
        dataType: 'json',
    }).done(function(data) {
        //渲染商品列表
        let str = '';
        $.each(data, function(index, value) {
            str += `
                <li>
                    <a href="detail.html?sid=${value.sid}">
                        <img data-original="${value.url}" class="lazy"/>
                        <p>${value.title}</p>
                        <span>${value.price}</span>
                    </a>
                </li>
            `;
        });
        $('main ul').html(str);
        $('.lazy').lazyload({ effect: "fadeIn" });
    });
}
export {
    list
}