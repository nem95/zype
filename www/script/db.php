<?php
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

?>