//首页
import { tabSwitch, showlogin } from './index_module.js';

import { login } from './login_module.js';
import { reg } from './registry_module.js';
showlogin(); //展现登录窗口
tabSwitch(); //登录注册切换
reg(); //注册判断
login(); //登录判断
// 首页
if (document.querySelector('#index')) {

}

// 列表页
import { list } from './list_module.js';
if (document.querySelector('#list')) {
    list();
}
// 详情页
import { detail, goodscart } from './detail_module.js';
if (document.querySelector('#detail')) {
    detail();
    goodscart();
}
// 购物车页
import { randerlist } from './cartlist_module.js';
if (document.querySelector('#cartlist')) {
    randerlist();
}