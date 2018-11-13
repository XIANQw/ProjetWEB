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
//json_data = ["zixi":["game":[x:[],y:[],z:[]..]] "xian":[]]
$json_data["name"][$keyword] = $datas;
echo 1;

?>
