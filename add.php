<?php
$datetoday = date('Y-m-j');
$url = "http://webnext.fr/epg_cache/programme-tv-rss_".$datetoday.".xml";

echo $url;

$xmlDoc = new DOMDocument();
$xmlDoc->load($url);
$mysql_hostname = "localhost"; // Example : localhost
$mysql_user = "root";
$mysql_password = "root";
$mysql_database = "zype_tv";

$dbh = new PDO("mysql:dbname={$mysql_database};host={$mysql_hostname};port=8889", $mysql_user, $mysql_password);

$xmlObject = $xmlDoc->getElementsByTagName('item');
$itemCount = $xmlObject->length;


function GetBetween($content,$start,$end){
    $r = explode($start, $content);
    if (isset($r[1])){
        $r = explode($end, $r[1]);
        return $r[0];
    }
    return '';
}
$sql = $dbh->exec("TRUNCATE items");

for ($i=0; $i < $itemCount; $i++){

    $title = utf8_decode($xmlObject->item($i)->getElementsByTagName('title')->item(0)->childNodes->item(0)->nodeValue);
    $description = utf8_decode($xmlObject->item($i)->getElementsByTagName('description')->item(0)->childNodes->item(0)->nodeValue);
    $comments = utf8_decode($xmlObject->item($i)->getElementsByTagName('comments')->item(0)->childNodes->item(0)->nodeValue);

    $categorie = GetBetween($description,"<strong>","</strong>");


    $sql = $dbh->prepare("INSERT INTO items (title, description, comments, categorie) VALUES (?, ?, ?, ?)");
    $sql->execute(array(
        $title,
        $description,
        $comments,
        $categorie
    ));

    print "Finished Item 
        <ul>
            <li>$title</li>
            <li>$description</li>
            <li>$categorie</li>
            <li>$comments</li>
        </ul>
     <br/>";
}