<?php

include "conn.php"; //引入数据库连接
//重名检测
if(isset($_POST['name'])){
    $name = $_POST['name'];//获取用户名
    $result = $conn->query("select * from registry where username='$name'");
    if($result->fetch_assoc()){//获得结果，说明当前的用户名存在数据库
        echo 'true';
    }else{//否则不存在
        echo 'false';
    }
}

//获取注册的数据，将其插入给数据库。
if(isset($_POST['submit'])){//前端点击了用户注册按钮，这里才开始取值，判断前端是否点击了注册按钮。
    $user = $_POST['username'];  //username是表单name后面的值
    $pass = sha1($_POST['password']); 
    $repass = sha1($_POST['repass']); //表里面密码字段长度设置为40因为sha1加密的长度
    $tel = $_POST['tel']; 

    $conn->query("insert registry values(null,'$user','$pass','$repass','$tel')");
    //第一项null，表示sid是自动递增，无符号(数据库表里面进行设置)

    //跳转登录页面
    header('location:http://10.31.163.14/JS2103/projectname/src/login.html');
}
