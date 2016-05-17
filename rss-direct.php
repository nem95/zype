<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" dir="ltr" lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Charger directement un flux RSS et l'afficher</title></head>
<link type="text/css" href="rss-style.css" rel="stylesheet">
	
<body bgcolor="#FFFFFF">
<h1>RSS 2.0  Direct Démo</h1>
<hr>
<div id="zone" > Charger directement un flux RSS et afficher la liste des articles récents.</div>

<br>
<fieldset class="rsslib">
<?php
	require_once("rsslib.php");
	$url = "http://www.programme-television.org/programme-tv.xml";
	echo RSS_Display($url, 100, false, true);
/*
require_once 'rss_fetch.inc';

$url = 'http://www.programme-television.org/programme-tv.xml';
$rss = fetch_rss($url);

echo "Site: ", $rss->channel['title'], "<br>";
foreach ($rss->items as $item ) {
	$title = $item[title];
	$url   = $item[link];
	echo "<a href=$url>$title</a></li><br>";
}*/

?>
</fieldset>
</body>
</html>
