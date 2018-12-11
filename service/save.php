<?php
header("Content-type:text/html;charset=utf-8");

$name = $_POST['name'];
$keyword = $_POST['keyword'];
$datas = $_POST['data'];
$date = date("d-m-Y H:m:s");

$json_file = file_get_contents("DATA.json");
$json_data = json_decode($json_file,true);


$action = Array("keyword" =>$keyword,"date"=>$date,"data"=>$datas);
$count = 0;
$pos = -1;

foreach($json_data as $user){
  if ($user["name"] == $name) $pos = $count;
   $count = $count + 1;
 }

if($pos==-1){
  $newUser = Array('name' =>$name,'actions'=>[]);
  $newUser['actions'][] = $action;
  $json_data[]=$newUser;
}else{
  $json_data[$pos]['actions'][]=$action;
}


echo $json_data[0]['actions'][0]['keyword'];
$newJson = json_encode($json_data);

file_put_contents('DATA.json',$newJson);

$sql = json_encode($json_data);
file_put_contents('DATA.json', $sql);
?>
