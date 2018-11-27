<?php
header("Content-type:text/html;charset=utf-8");

$name = $_POST['name'];
$keyword = $_POST['keyword'];
$datas = $_POST['data'];
$date = date("d-m-Y H:m:s");

$json_file = file_get_contents("DATA.json");


 if($json_file==null){
   $json_data = array();
 }
 else{
      $json_data = json_decode($json_file,true);
}
$json_data[$name][$keyword][$date]["X"] = $datas[0];
$json_data[$name][$keyword][$date]["Y"] = $datas[1];
$json_data[$name][$keyword][$date]["Z"] = $datas[2];
$json_data[$name][$keyword][$date]["time_acc"] = $datas[3];
$json_data[$name][$keyword][$date]["A"] = $datas[4];
$json_data[$name][$keyword][$date]["B"] = $datas[5];
$json_data[$name][$keyword][$date]["G"] = $datas[6];
$json_data[$name][$keyword][$date]["time_ori"] = $datas[7];
$newJson = json_encode($json_data);
file_put_contents('DATA.json',$newJson);


$sql = json_encode($json_data);
file_put_contents('DATA.json', $sql);
?>
