<?php

include "conn.php"; //引入数据库连接
//总结易错问题
//1.重名检测获取前端传来的用户名(通过key值获取)。
//2.数据库表中的字段没有对应。
//3.提交按钮是否设置了name值，name='submit'
//4.表里面的sid设置为[自动递增,无符号]
//5.sql语句不会在页面中报错。通过navicat软件 - 菜单栏 - 工具 - 命令行界面，将sql语句($conn->query双引号里面的内容)赋值到命令行界面运行，结尾添加分号
//6.问问题的基本方式
//截取包括行号的代码 - 截取错误(描述错误)

//重名检测
if(isset($_POST['telnum'])){//判断当前是否存在值。
    $telnum = $_POST['telnum'];//获取用户名
    $result = $conn->query("select * from nike_user where telnum='$telnum'");//根据前端出入的用户名检测数据中是否存在结果。
    // $result->fetch_assoc()：以数组的格式,获取结果集
    if($result->fetch_assoc()){//获得结果，说明当前的用户名存在数据库
        echo 'true';
    }else{//否则不存在
        echo 'false';
    }
}

//获取注册的数据，将其插入给数据库。
if(isset($_POST['registry_submit'])){//前端点击了用户注册按钮，这里才开始取值，判断前端是否点击了注册按钮。
    $telnum = $_POST['registry_telnum'];  //username是表单name后面的值
    $pass = sha1($_POST['registry_password']); 
echo $telnum.$password;
    $conn->query("insert nike_user values(null,'$telnum','$pass')");
    //第一项null，表示sid是自动递增，无符号(数据库表里面进行设置)

    //跳转登录页面,前端和后端通信采用绝对路径(完整的路径),其他都采用相对路径
    header('location:http://10.31.155.37/week04/nike_item/src/index1.html');
}
