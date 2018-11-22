<?php
header("Content-type:text/html;charset=utf-8");

$name = $_POST['name'];
$keyword = $_POST['keyword'];
$datas = $_POST['data'];
$date = $_POST['date'];

$json_file = file_get_contents("DATA.json");

if($json_file==null){
  $json_data = array();
}
else{
  $json_data = json_decode($json_file,true);
}
$json_data[$name][$keyword][$date]["acceleration"] = $datas[0];
$json_data[$name][$keyword][$date]["orientaions"] = $datas[1];
$json_data[$name][$keyword][$date]["time_acc"] = $datas[2];
$json_data[$name][$keyword][$date]["time_ori"] = $datas[3];
$newJson = json_encode($json_data);
file_put_contents('DATA.json',$newJson);


?>
