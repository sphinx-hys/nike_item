<?php
include "conn.php";
//获取前端传入的用户名，进行存在检测
if (isset($_POST['telnum'])) {
    $tel = $_POST['telnum'];
    $result = $conn->query("select * from nike_user where tel='$tel'");
    if ($result->fetch_assoc()) { //存在结果，登录成功
        if (isset($_POST['pass'])) { //用户名存在，获取密码
            $pass = sha1($_POST['pass']);
            //将用户名和密码通过sql语句查询当前的数据表中是否存在。
            $result = $conn->query("select * from nike_user where tel='$tel' and password='$pass'");
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
