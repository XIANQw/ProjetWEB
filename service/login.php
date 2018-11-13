<?php
header("Content-type: text/html; charset=UTF-8");
session_start();
$username = $_POST['username'];
$password = $_POST['password'];
$sql = file_get_contents("UserJson.json");
if($sql==null){
  //echo 3; // user not exist
}
else{
  $users = json_decode($sql,true);
}

$notExist=true;
if($users!=null){
  foreach ($users as $user) {
    if($user["username"] == $username){
      if($user["password"] == $password){
        echo 1; // login sucess
      }
      else{
        echo 2; // password false
      }
      $notExist = false;
    }
  }
}
if ($notExist){
  echo 3; //user not exist
}

?>
