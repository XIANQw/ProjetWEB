<?php
header("Content-type:text/html;charset=utf-8");
        $username = $_POST['username'];
        $password = $_POST['password'];
        $json_arr = array("username"=>$username,"password"=>$password);
        // $json_obj = json_encode($json_arr);
        echo $json_obj;
?>
