<?php

include "conn.php";
//获取前端出入的用户名，进行存在检测

if(isset($_POST['username'])){
    $username = $_POST['username'];
    $result = $conn->query("select * from registry where username='$username'");
    if($result->fetch_assoc()){//存在结果，登录成功
        echo 'true';
    }else{//登录失败
        echo 'false';
    }
}

//后端接收前端传入的用户名和密码，和数据库进行匹配，将匹配的结果返回给前端
if(isset($_POST['user']) && isset($_POST['pass'])){//检测前端是否传入了用户名和密码
    $user = $_POST['user'];
    $pass = sha1($_POST['pass']);
    //将用户名和密码通过sql语句查询当前的数据表中是否存在。
    $result = $conn->query("select * from registry where username='$user' and password='$pass'");
    if($result->fetch_assoc()){//存在结果，登录成功
        echo 'true';
    }else{//登录失败
        echo 'false';
    }
}