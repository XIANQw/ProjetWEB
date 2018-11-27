<?php
header("Content-type:text/html;charset=utf-8");

$datas = $_POST['donnes'];
$name = $_POST['name'];
$keyword = $_POST['keyword'];

$json_file = file_get_contents("DATA.json");


 if($json_file==null){
   $json_data = array();
 }
 else{
      $json_data = json_decode($json_file,true);
}
$json_data[$name][$keyword]["accx"]= $datas[0];
$json_data[$name][$keyword]["accy"]= $datas[1];
$json_data[$name][$keyword]["accz"]= $datas[2];
//$json_data[$name][$keyword]["datas[3]"]= $datas[3];


$sql = json_encode($json_data);
file_put_contents('DATA.json', $sql);
?>
