<?php
/*
if(isset($_POST['add'])) {
    $data = json_decode(file_get_contents("php://input"));
    $comedie = mysql_real_escape_string($data->comedie);
    $policier = mysql_real_escape_string($data->policier);
    $drame = mysql_real_escape_string($data->drame);
    mysql_connect("localhost", "root", "root") or die(mysql_error());
    mysql_select_db("zype_tv") or die(mysql_error());
    mysql_query("INSERT INTO choixprogramme (comedie,policier,drame) VALUES ('$comedie','$policier','$drame')");
    Print "Your information has been successfully added to the database.";
}

*/
/*
//http://stackoverflow.com/questions/18382740/cors-not-working-php
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers:        
            {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}

//http://stackoverflow.com/questions/15485354/angular-http-post-to-php-and-undefined
$postdata = file_get_contents("php://input");
if (isset($postdata)) {
    $request = json_decode($postdata);
    $username = $request->username;

    if ($username != "") {
        echo "Server returns: " . $username;
    }
    else {
        echo "Empty username parameter!";
    }
}
else {
    echo "Not called properly with username parameter!";
}
*/?>
<?php

    $myjyson = json_decode($_POST['enviado'],true);
    var_dump($myjyson);

    define('SQL_HOST',       'localhost');
    define('SQL_USERNAME',   'root');
    define('SQL_PASSWORD',   'root');
    define('SQL_DBNAME',	 'zype_tv');

    try {
        $db = new PDO('mysql:dbname='.SQL_DBNAME.';host='.SQL_HOST, SQL_USERNAME, SQL_PASSWORD, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
    }

    catch(Exception $e) {
        exit('Erreur : ' . $e->getMessage());
    }


    $sql = "INSERT INTO choixprogramme VALUES "
        ."('" . $myjyson['comedie'] . "','".$myjyson['policier']."','".$myjyson['drame']."')";
    echo "OK";

    $req = $db->prepare($sql);
    $req->execute();

    ?>