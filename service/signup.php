<?php
header("Content-type:text/html;charset=utf-8");
$username = $_POST['username'];
$password = $_POST['password'];
$json_arr = array("username"=>$username,"password"=>$password);
$json_obj = json_encode($json_arr);
echo $json_obj;

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
      echo "ca exit";
      $push = false;
    }
  }
}

if($push==true){
  array_push($users,$json_arr);
  $sql = json_encode($users);
  file_put_contents('UserJson.json', $sql);
}

?>
