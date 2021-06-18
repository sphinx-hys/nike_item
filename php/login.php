<?php
include "conn.php";
//获取前端传入的用户名，进行存在检测
if (isset($_POST['telnum'])) {
    $telnum = $_POST['telnum'];
    $result = $conn->query("select * from nike_user where telnum='$telnum'");
    if ($result->fetch_assoc()) { //存在结果，登录成功
        if (isset($_POST['password'])) { //用户名存在，获取密码
            $password = sha1($_POST['password']);
            //将用户名和密码通过sql语句查询当前的数据表中是否存在。
            $result = $conn->query("select * from nike_user where telnum='$telnum' and password='$password'");
            if ($result->fetch_assoc()) { //存在结果，登录成功
                echo 'success';
            } else { //登录失败
                echo 'passwordfail';
            }
        }
    } else { //登录失败
        echo 'false';
    }
}
