<html>
<body>
  <button> gogogo </button>
<?php

  $json_string = file_get_contents('User_Data.json');

  $nom=$_POST["username"];
  $data = json_decode($json_string, true);
  $push = true;
// Examiner si le nom est vide

  if($nom!=NULL&&!empty($nom)&&$nom!=""){
      foreach ($data as $name) {
        if($name == $nom ){
            echo "fuck you ca existe",'<br />';
            $push = false;
        }
      }

    if($push == true){
      array_push($data, $nom);
      //Changer la table de php à chaîne de JSON
      $json_string = json_encode($data);
      file_put_contents('User_Data.json', $json_string);
    }

    require("../page/mainpage.html");

  }




  var_dump($data);
?>
</body>
</html>
