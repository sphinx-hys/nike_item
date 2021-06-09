<?php
include "conn.php";

if(isset($_GET['sid'])){
    $sid = $_GET['sid'];
    $result=$conn->query("select * from taobaogoods where sid = $sid ");//返回sid对应得数据
    echo json_encode($result->fetch_assoc());//输出
}