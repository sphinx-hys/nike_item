/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : h5_2104

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2021-06-10 15:23:02
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `registry`
-- ----------------------------
DROP TABLE IF EXISTS `registry`;
CREATE TABLE `registry` (
  `sid` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(20) DEFAULT NULL,
  `password` varchar(40) DEFAULT NULL,
  `repass` varchar(40) DEFAULT NULL,
  `tel` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of registry
-- ----------------------------
INSERT INTO `registry` VALUES ('1', 'zhangsan', '123456', null, '13412345678');
INSERT INTO `registry` VALUES ('2', 'zhangsanabc', 'f61a56082c62717815e7024bd7694bf3ac7f49a1', 'f61a56082c62717815e7024bd7694bf3ac7f49a1', '13412345678');
INSERT INTO `registry` VALUES ('3', 'wangwu', '895b317c76b8e504c2fb32dbb4420178f60ce321', '895b317c76b8e504c2fb32dbb4420178f60ce321', '13412345678');
INSERT INTO `registry` VALUES ('4', 'lisi', '895b317c76b8e504c2fb32dbb4420178f60ce321', '895b317c76b8e504c2fb32dbb4420178f60ce321', '13412345676');

-- ----------------------------
-- Table structure for `taobaogoods`
-- ----------------------------
DROP TABLE IF EXISTS `taobaogoods`;
CREATE TABLE `taobaogoods` (
  `sid` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,
  `price` float(8,2) DEFAULT NULL,
  `sailnumber` int(11) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM AUTO_INCREMENT=61 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of taobaogoods
-- ----------------------------
INSERT INTO `taobaogoods` VALUES ('1', '//img.alicdn.com/bao/uploaded/i2/3327042818/O1CN010LWLHy1WggnD6KOz5_!!3327042818.jpg_200x200q90.jpg_.webp', 'Jordan官方 DELTA BREATHE女子运动鞋REACT夏季新款夏季DM0977', '1099.12', '41');
INSERT INTO `taobaogoods` VALUES ('2', '//img.alicdn.com/bao/uploaded/i3/890482188/O1CN01HtlS0z1S29Gq6Veu4_!!890482188.jpg_200x200q90.jpg_.webp', 'Jordan官方AIR JORDAN双肩包隔层夏季CW7699', '399.11', '43');
INSERT INTO `taobaogoods` VALUES ('3', '//img.alicdn.com/bao/uploaded/i2/454291526/O1CN0177Bfx21N8x4XKdIYH_!!0-item_pic.jpg_200x200q90.jpg_.webp', 'GXG男装【X-LAB】 勇闯天涯SUPER X联名21年夏季新品多色渔夫帽', '129.11', '13');
INSERT INTO `taobaogoods` VALUES ('4', '//img.alicdn.com/bao/uploaded///gma.alicdn.com/bao/uploaded/i3/28890195/O1CN01LBGF6b1DJLufBl8Yb_!!0-saturn_solar.jpg_200x200q90.jpg_.webp', 'Vans范斯白色经典LOGO运动休闲情侣短袖T恤', '157.11', '33');
INSERT INTO `taobaogoods` VALUES ('5', '//img.alicdn.com/bao/uploaded/i3/3586957598/O1CN01u4PtHi25zvzF1qMKB_!!0-item_pic.jpg_200x200q90.jpg_.webp', '李宁篮球鞋男夏季闪击6 premium减震专业比赛专业比赛鞋', '699.11', '187');
INSERT INTO `taobaogoods` VALUES ('6', '//img.alicdn.com/bao/uploaded/i2/11119200/O1CN01oAquaN2HpeSyWtXNK_!!11119200.jpg_200x200q90.jpg_.webp', 'Nike耐克双肩包男女书包大容量校园风高中学生运动电脑背包BA5876', '138.11', '29');
INSERT INTO `taobaogoods` VALUES ('7', '//img.alicdn.com/bao/uploaded/i1/2208335417608/O1CN01fTKBIc264VwqnAQGK_!!2208335417608-0-picasso.jpg_200x200q90.jpg_.webp', 'Hold Colour美式潮牌帅气杜宾犬印花T恤男女ins潮流情侣bf短袖衫', '88.12', '28');
INSERT INTO `taobaogoods` VALUES ('8', '//img.alicdn.com/bao/uploaded/i4/2228361831/O1CN01VzAvuz1POdsNWOolY_!!0-item_pic.jpg_200x200q90.jpg_.webp', 'ZARA 新款男装 联名PATRICKNAGEL? 印花短袖T恤 00962400800', '199.13', '67');
INSERT INTO `taobaogoods` VALUES ('9', '//img.alicdn.com/bao/uploaded///gma.alicdn.com/bao/uploaded/i3/110422064/O1CN01DG2eOY1R7M9zx9jKE_!!0-saturn_solar.jpg_200x200q90.jpg_.webp', '丝塔芙倍润保湿乳473ml 温和修护面霜牛油果', '126.22', '36');
INSERT INTO `taobaogoods` VALUES ('10', '//img.alicdn.com/bao/uploaded/i2/3327042818/O1CN01QJPu151Wggn8Ws4mu_!!3327042818.jpg_200x200q90.jpg_.webp', 'Jordan官方 LS SLIDE男子拖鞋透气一脚踩夏季新款凉鞋CZ0791', '399.33', '132');
INSERT INTO `taobaogoods` VALUES ('11', '//img.alicdn.com/bao/uploaded/i3/746866993/O1CN01qZS8qn21WqMpE5ITn_!!0-item_pic.jpg_200x200q90.jpg_.webp', '【618预售】Vans范斯官方 复古logo棋盘格图案运动斜挎包单肩包', '138.66', '66');
INSERT INTO `taobaogoods` VALUES ('12', '//img.alicdn.com/bao/uploaded/i1/2208678652479/O1CN01MVxFOi1UBQVLIUpAa_!!0-item_pic.jpg_200x200q90.jpg_.webp', 'fine little day复古玫瑰花装饰画海报画芯不支持七天无理由退换', '39.98', '83');
INSERT INTO `taobaogoods` VALUES ('13', '//img.alicdn.com/bao/uploaded///gma.alicdn.com/bao/uploaded/i4/12974530/O1CN01SHnRPu1jKmrLhYPEA_!!0-saturn_solar.jpg_200x200q90.jpg_.webp', '李宁短袖男夏季新款吸汗透气圆领宽松半袖休', '98.99', '1');
INSERT INTO `taobaogoods` VALUES ('14', '//img.alicdn.com/bao/uploaded/i4/3327042818/O1CN01N9bnWi1WggnI22wUr_!!3327042818.jpg_200x200q90.jpg_.webp', 'Jordan官方Jordan Air Cadence (GS)大童运动童鞋夏季CQ9233', '599.99', '17');
INSERT INTO `taobaogoods` VALUES ('15', '//img.alicdn.com/bao/uploaded/i4/2616970884/O1CN01HQLpUE1IOunrmjbzc_!!2616970884.jpg_200x200q90.jpg_.webp', '【预定立减200元】Apple/苹果 iPhone 12 mini 移动联通电信全网通5G新品智能手', '5499.99', '307');
INSERT INTO `taobaogoods` VALUES ('16', '//img.alicdn.com/bao/uploaded/i2/3914754094/O1CN010m6bDX1g76AsrAbei_!!3914754094.jpg_200x200q90.jpg_.webp', '美国TIMEX/天美时手表男户外运动智能多功能树脂带电子表学生表', '469.88', '2');
INSERT INTO `taobaogoods` VALUES ('17', '//img.alicdn.com/bao/uploaded/i4/890482188/O1CN01ADhvm31S29Gt6JWvT_!!890482188.jpg_200x200q90.jpg_.webp', 'Nike耐克官方NIKE SPORTSWEAR 男子短袖上衣新款DA0654', '329.89', '62');
INSERT INTO `taobaogoods` VALUES ('18', '//img.alicdn.com/bao/uploaded///gma.alicdn.com/bao/uploaded/i3/508250061/O1CN01ZqwYaO1CJypePBfA3_!!0-saturn_solar.jpg_200x200q90.jpg_.webp', '空刻番茄肉酱意大利面意粉空客意面通心粉', '29.89', '34000');
INSERT INTO `taobaogoods` VALUES ('19', '//img.alicdn.com/bao/uploaded/i3/2200788949915/O1CN01ZMUEGY2N77fekHISs_!!0-item_pic.jpg_200x200q90.jpg_.webp', '李宁xLINE FRIENDS联名系列斜挎包男包女包2021新款运动包', '199.69', '3');
INSERT INTO `taobaogoods` VALUES ('20', '//img.alicdn.com/bao/uploaded///gma.alicdn.com/bao/uploaded/i3/29682025/O1CN01QaXVH41QpUiIHfhoB_!!0-saturn_solar.jpg_200x200q90.jpg_.webp', 'Paul Frank/大嘴猴2021夏季新款圆领印花短', '119.89', '380');
INSERT INTO `taobaogoods` VALUES ('21', '//img.alicdn.com/bao/uploaded/i4/2207519025955/O1CN011TBcnc1trREVsRdgI_!!0-item_pic.jpg_200x200q90.jpg_.webp', '【限定发售】卡西欧五虎将上将关羽联名gshock手表男GA-110SGG-3A', '1390.99', '20');
INSERT INTO `taobaogoods` VALUES ('22', '//img.alicdn.com/bao/uploaded///gma.alicdn.com/bao/uploaded/i4/117845398/O1CN01kKjupZ1pkKdzeZsjK_!!0-saturn_solar.jpg_200x200q90.jpg_.webp', '娇兰帝皇蜂姿蜜润修护精粹水润泽肌肤保湿', '640.32', '5403');
INSERT INTO `taobaogoods` VALUES ('23', '//img.alicdn.com/bao/uploaded/i3/831128858/O1CN016bn9eo2FJ11z5tIGG_!!0-item_pic.jpg_200x200q90.jpg_.webp', '匹克态极闪现篮球鞋樱花配色警告高中黑人月新款太极减震防滑球鞋', '509.36', '26');
INSERT INTO `taobaogoods` VALUES ('24', '//img.alicdn.com/bao/uploaded/i1/2204122318676/O1CN01uuvvzC2DxetBPXIYt_!!0-item_pic.jpg_200x200q90.jpg_.webp', '瑞典Fine Little Day 可爱大象北欧原装海报装饰画儿童房床头挂画', '130.99', '18');
INSERT INTO `taobaogoods` VALUES ('25', '//img.alicdn.com/bao/uploaded///gma.alicdn.com/bao/uploaded/i2/124207904/O1CN01Gas4ux28G5BX23a3S_!!0-saturn_solar.jpg_200x200q90.jpg_.webp', '废克赛文2021新款超火T恤短袖男生夏季ins潮', '99.99', '1655');
INSERT INTO `taobaogoods` VALUES ('26', '//img.alicdn.com/bao/uploaded/i3/1085315961/O1CN01vXSNgS1tuBZAFuf9v_!!0-item_pic.jpg_200x200q90.jpg_.webp', 'Razer雷蛇北海巨妖标准版X头戴式耳机7.1环绕水银电竞游戏USB耳麦', '249.99', '828');
INSERT INTO `taobaogoods` VALUES ('27', '//img.alicdn.com/bao/uploaded///gma.alicdn.com/bao/uploaded/i1/114351721/O1CN012jKuqE1OaGJ9Iyn0V_!!0-saturn_solar.jpg_200x200q90.jpg_.webp', '[618预售]欧莱雅男士爽肤水搞定水油平衡', '139.45', '584');
INSERT INTO `taobaogoods` VALUES ('28', '//img.alicdn.com/bao/uploaded/i3/3927861518/O1CN01mkffP31N5HuL9rKqR_!!3927861518.jpg_200x200q90.jpg_.webp', 'Lining李宁韦德之道7净信 男子中帮篮球鞋ABAN079-11 YT', '899.32', '39');
INSERT INTO `taobaogoods` VALUES ('29', '//img.alicdn.com/bao/uploaded/i2/2396781037/O1CN01Fxh0hC1JWzNlKncLE_!!0-item_pic.jpg_200x200q90.jpg_.webp', '【李现同款】WEDGWOOD玮致活漫游美境上海限定马克杯骨瓷杯子茶杯', '500.21', '500');
INSERT INTO `taobaogoods` VALUES ('30', '//img.alicdn.com/bao/uploaded///gma.alicdn.com/bao/uploaded/i2/16206966/O1CN01gckClb21KTfUvXYEY_!!0-saturn_solar.jpg_200x200q90.jpg_.webp', '卡宾男装休闲白色短袖T恤2021春夏新款潮流', '259.36', '460');
INSERT INTO `taobaogoods` VALUES ('31', '//img.alicdn.com/bao/uploaded/i3/2209688331857/O1CN01jT8laY1PaY9WKZl8q_!!2209688331857.jpg_200x200q90.jpg_.webp', 'Beats Solo3 Wireless 头戴式耳机魔音B无线蓝牙苹果安卓运动耳麦', '589.66', '85');
INSERT INTO `taobaogoods` VALUES ('32', '//img.alicdn.com/bao/uploaded/i3/2922922768/O1CN01grEap01WJmtAZv0hy_!!2922922768.jpg_200x200q90.jpg_.webp', '画家乡 鬼灭之刃灶门炭治郎diy数字油彩画自绘填充涂色装饰画人物', '35.33', '5');
INSERT INTO `taobaogoods` VALUES ('33', '//img.alicdn.com/bao/uploaded/i4/TB1vra3NFXXXXacXFXXXXXXXXXX_!!0-item_pic.jpg_200x200q90.jpg_.webp', '【请先咨询，单拍无效！】正品龙泉宝剑  客户定制定金专拍', '100.99', '10');
INSERT INTO `taobaogoods` VALUES ('34', '//img.alicdn.com/bao/uploaded///gma.alicdn.com/bao/uploaded/i2/167690009/O1CN01J966sG1BwAEWzTMHJ_!!0-saturn_solar.jpg_200x200q90.jpg_.webp', 'inxxstreet潮牌情侣短袖简约印花圆领T恤', '279.99', '431');
INSERT INTO `taobaogoods` VALUES ('35', '//img.alicdn.com/bao/uploaded/i4/1737053096/O1CN01uHBuGP1Yk0tngQVzP_!!0-item_pic.jpg_200x200q90.jpg_.webp', '天猫首发 瑞典进口ABSOLUT绝对伏特加2020限量螺旋瓶700ml 洋酒', '199.76', '158');
INSERT INTO `taobaogoods` VALUES ('36', '//img.alicdn.com/bao/uploaded/i1/4144746849/O1CN012nZEVX20StKkiGm3h_!!0-item_pic.jpg_200x200q90.jpg_.webp', 'COLMO  EVO套系雾岩蓝智能无双电热水器储水式家用洗澡CFDV5032', '6999.99', '30');
INSERT INTO `taobaogoods` VALUES ('37', '//img.alicdn.com/bao/uploaded/i1/2011851803/O1CN01MCOA241PBoltPe8kK_!!2011851803.jpg_200x200q90.jpg_.webp', 'EleksTubeIPS创意复古RGB拟辉光管时钟diy套件桌面前苏联钟表摆件', '649.99', '91');
INSERT INTO `taobaogoods` VALUES ('38', '//img.alicdn.com/bao/uploaded///gma.alicdn.com/bao/uploaded/i2/167690009/O1CN01tHGExL1BwAFBAmivj_!!0-saturn_solar.jpg_200x200q90.jpg_.webp', 'inxxstreet  潮牌短袖夏新品印花圆领T恤漂', '229.31', '70');
INSERT INTO `taobaogoods` VALUES ('39', '//img.alicdn.com/bao/uploaded/i1/2207800973115/O1CN01hCf6bG1YsiQNnXHOy_!!2207800973115-0-picasso.jpg_200x200q90.jpg_.webp', '百事冰箱家用小型宿舍冷藏冷冻38L单开门租房静音省电迷你小冰箱', '399.99', '756');
INSERT INTO `taobaogoods` VALUES ('40', '//img.alicdn.com/bao/uploaded/i1/2207997826148/O1CN01ZHpyLW1vHph1uA3BB_!!2207997826148-0-picasso.jpg_200x200q90.jpg_.webp', '【秒杀】dw手表男学生石英表男40mm大表盘休闲丹尼尔惠灵顿官方', '1450.99', '27');
INSERT INTO `taobaogoods` VALUES ('41', '//img.alicdn.com/bao/uploaded/i1/2838892713/O1CN01fVyWIs1VubBZlVNNc_!!0-item_pic.jpg_200x200q90.jpg_.webp', '【官方正品】华为FreeBuds3无线蓝牙耳机有线充版主动降噪', '899.99', '5732');
INSERT INTO `taobaogoods` VALUES ('42', '//img.alicdn.com/bao/uploaded///gma.alicdn.com/bao/uploaded/i3/152920030/O1CN01LmQkd01C5mYZOnjkG_!!0-saturn_solar.jpg_200x200q90.jpg_.webp', 'Champion冠军T恤2021新款春夏大C情侣短袖纯', '269.44', '315');
INSERT INTO `taobaogoods` VALUES ('43', '//img.alicdn.com/bao/uploaded/i3/2391849588/O1CN01modtpH2KhM7RMdnlA_!!2391849588.jpg_200x200q90.jpg_.webp', '刺绣手工diy材料包自绣索隆对勾图案送男友情侣新疆棉T恤刺绣diy', '10.13', '62');
INSERT INTO `taobaogoods` VALUES ('44', '//img.alicdn.com/bao/uploaded/i1/4133096651/O1CN01i4mVu91z0Coxafgf2_!!0-item_pic.jpg_200x200q90.jpg_.webp', 'Stanley史丹利304不锈钢便携扁平迷你随身小酒壶樽户外复古风男女', '178.96', '321');
INSERT INTO `taobaogoods` VALUES ('45', '//img.alicdn.com/bao/uploaded/i2/2200674901717/O1CN01CDLMI51OYQj3fsXAv_!!0-item_pic.jpg_200x200q90.jpg_.webp', '回力官方旗舰店帆布鞋男鞋2021新款国潮小白鞋爱国青年板鞋透气夏', '89.36', '3058');
INSERT INTO `taobaogoods` VALUES ('46', '//img.alicdn.com/bao/uploaded///gma.alicdn.com/bao/uploaded/i2/53061593/O1CN01VCvKXw1NddbXGttpv_!!0-saturn_solar.jpg_200x200q90.jpg_.webp', 'INXXSTAND BY潮牌21夏新款情侣装大码漫', '266.66', '817');
INSERT INTO `taobaogoods` VALUES ('47', '//img.alicdn.com/bao/uploaded///gma.alicdn.com/bao/uploaded/i1/27847377/O1CN01knlofM24MiSRaKsa4_!!0-saturn_solar.jpg_200x200q90.jpg_.webp', '薇娅推荐Dickies印花情侣装短袖男t 夏', '199.37', '419');
INSERT INTO `taobaogoods` VALUES ('48', '//img.alicdn.com/bao/uploaded///gma.alicdn.com/bao/uploaded/i2/15110871/O1CN01sezxQk1IIxccI9unE_!!0-saturn_solar.jpg_200x200q90.jpg_.webp', 'JackJones杰克琼斯男夏OVERSIZED舒适莱卡高', '199.59', '251');
INSERT INTO `taobaogoods` VALUES ('49', '//img.alicdn.com/bao/uploaded///gma.alicdn.com/bao/uploaded/i4/130740643/O1CN01SQQniR1GcXLnc58J0_!!0-saturn_solar.jpg_200x200q90.jpg_.webp', '永璞|闪萃常温榛果咖啡/黑咖啡液/宇治抹茶/', '59.67', '2223');
INSERT INTO `taobaogoods` VALUES ('50', '//img.alicdn.com/bao/uploaded///gma.alicdn.com/bao/uploaded/i3/53887732/O1CN01A3rMfK26zJ3dBmcTa_!!0-saturn_solar.jpg_200x200q90.jpg_.webp', 'YOTIME端午节长粽子礼盒装绿豆糕棕子水晶粽', '199.29', '45');
INSERT INTO `taobaogoods` VALUES ('51', '//img.alicdn.com/bao/uploaded/i3/2206504728101/O1CN01kZQIib29iJCzssvVc_!!0-item_pic.jpg_200x200q90.jpg_.webp', '7喜7up莫7托moji7o碳酸饮料汽水330ml*6享特调雪克杯', '79.32', '305');
INSERT INTO `taobaogoods` VALUES ('52', '//img.alicdn.com/bao/uploaded/i1/2634283647/O1CN01ty9kCA1coN7yvYFXP_!!2-item_pic.png_200x200q90.jpg_.webp', '星巴克杯子刺猬款杯壶组可爱创意壶盖卡通图案带手柄玻璃水杯套组', '269.37', '1157');
INSERT INTO `taobaogoods` VALUES ('53', '//img.alicdn.com/bao/uploaded///gma.alicdn.com/bao/uploaded/i1/450740075/O1CN01wynQzJ1CQONPJWVec_!!0-saturn_solar.jpg_200x200q90.jpg_.webp', '小ck包包女2020旗舰店官网秋冬新款星空亮片', '279.35', '25');
INSERT INTO `taobaogoods` VALUES ('54', '//img.alicdn.com/bao/uploaded/i1/108403081/O1CN019JGqBa1Yd8miTtROo_!!108403081.jpg_200x200q90.jpg_.webp', '客厅水果盘家用 创意防烫手双耳陶瓷盘子深盘 西式餐具汤盘烘烤盘', '28.81', '9');
INSERT INTO `taobaogoods` VALUES ('55', '//img.alicdn.com/bao/uploaded///asearch.alicdn.com/bao/uploaded//i3/2948497791/O1CN01Yt7Twf27QKMI8Twiy_!!2948497791.jpg_200x200q90.jpg_.webp', '【24期免息】Sony/索尼 WF-SP800N 真无线蓝牙降噪耳机入耳式双耳运动跑步防水防汗耳塞适', '1499.99', '153');
INSERT INTO `taobaogoods` VALUES ('56', '//img.alicdn.com/bao/uploaded///gma.alicdn.com/bao/uploaded/i3/31114641/O1CN01SGUndY1k9coxUUMld_!!0-saturn_solar.jpg_200x200q90.jpg_.webp', 'innisfree/悦诗风吟绿茶精萃平衡护肤水乳套', '179.63', '1253');
INSERT INTO `taobaogoods` VALUES ('57', '//img.alicdn.com/bao/uploaded///asearch.alicdn.com/bao/uploaded//i2/3441564776/O1CN01Cl882j1l9SGWqgfCL_!!3441564776.jpg_200x200q90.jpg_.webp', 'DEVIALET GEMINI帝瓦雷真无线耳机主动降噪蓝牙超强续航耳塞式', '2380.00', '4');
INSERT INTO `taobaogoods` VALUES ('58', '//img.alicdn.com/bao/uploaded/i1/3708258109/O1CN010KyCPo29lyNEpzOSs_!!0-item_pic.jpg_200x200q90.jpg_.webp', '三味酥屋＆sevenbus联名 豆乳波波牛油果酥网红零食推荐糕点代餐', '42.86', '35000');
INSERT INTO `taobaogoods` VALUES ('59', '//img.alicdn.com/bao/uploaded///gma.alicdn.com/bao/uploaded/i4/119998370/O1CN017Psxa52BhVjvlhNgX_!!0-saturn_solar.jpg_200x200q90.jpg_.webp', '尊乐小烤肠小芝肠蜜汁小香肠350g6盒芝士蜜', '278.21', '78');
INSERT INTO `taobaogoods` VALUES ('60', '//img.alicdn.com/bao/uploaded/i1/1783508404/O1CN01zlm5312Bx5DHEyUv0_!!1783508404.jpg_200x200q90.jpg_.webp', '兼容乐高FMG 9科技积木枪成年拼装可连射moc高难度武器玩具男孩子', '198.31', '87');
