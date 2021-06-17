//首页
import { tabSwitch, showlogin } from './index_module.js';
import {} from './login_module.js';
import { reg } from './registry_module.js';
showlogin();
tabSwitch();
reg();
if (document.querySelector('#index')) {

}
import { list } from './list_module.js';
if (document.querySelector('#list')) {
    list();
}
import {} from './detail_module.js';
if (document.querySelector('#detail')) {

}
import { randerlist } from './cartlist_module.js';
if (document.querySelector('#cartlist')) {
    randerlist();
}