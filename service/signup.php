<?php
header("Content-type:text/html;charset=utf-8");
$username = $_POST['username'];
$password = $_POST['password'];
$hash = password_hash($password, PASSWORD_DEFAULT);
$json_arr = array("username"=>$username,"password"=>$hash);
$json_obj = json_encode($json_arr);


$sql = file_get_contents("UserJson.json");

if($sql==null){
  $users = array();
}
else{
  $users = json_decode($sql,true);
}

$push=true;
if($users!=null){
  foreach ($users as $user) {
    if($user["username"] == $username){
      echo 2; // user exist
      $push = false;
    }
  }
}

if($push==true){
  array_push($users,$json_arr);
  $sql = json_encode($users);
  file_put_contents('UserJson.json', $sql);
  echo 1; // create success
}

?>
