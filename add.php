<?php

ini_set('display_errors',1 );


$datetoday = date('Y-m-j');
$url = "http://webnext.fr/epg_cache/programme-tv-rss_".$datetoday.".xml";

echo '<a target="_blank" href="'.$url.'">'.$url.'</a><br><hr>';

// Initialiser cURL
$curl = curl_init();
// Définir l'adresse à ouvrir
curl_setopt($curl, CURLOPT_URL, $url);
// Suivre les redirections s'il y en a
@curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
// Exécuter
//$result = curl_exec($curl);
// Fermer pour libérer des ressources systèmes
curl_close($curl);
// Afficher le code source de la page

//echo htmlentities($url);

$xmlDoc = new DOMDocument();
$xmlDoc->load($url);

/* Connection à la base de donnée */

include "www/script/db.php";

$xmlObject = $xmlDoc->getElementsByTagName('item');
$itemCount = $xmlObject->length;

/* FONCTIONS */

    /* Fonction pour récupérer un valeur entre deux string */
    function GetBetween($content,$start,$end){
        $r = explode($start, $content);
        if (isset($r[1])){
            $r = explode($end, $r[1]);
            echo $r[0];
            return $r[0];
        }
        return '';
    }

    /* Fonction pour enlever les caractère spéciaux */
    function clean($string) {
        return preg_replace('/[^A-Za-z0-9éè:\-]/', ' ', $string); // Removes special chars.
    }

    /*CONDITION: si le XML s'est chargé correctement alors on vide la table et on continue */

    if ($xmlObject->item(1)->getElementsByTagName('title')->item(0)->childNodes->length === 0){
        echo "Erreur lors du chargement du XML\n";
        foreach(libxml_get_errors() as $error) {
            echo "\t", $error->message;
        }
    }else {
        /* On vide la table items avant de insert */
        $sql = $db->exec("TRUNCATE items");


        /* Boucle pour ajouter chaque élements du xml dans mysql */
        for ($i = 0; $i < $itemCount; $i++) {

            $title = $xmlObject->item($i)->getElementsByTagName('title')->item(0)->childNodes->item(0)->nodeValue;
            $description = $xmlObject->item($i)->getElementsByTagName('description')->item(0)->childNodes->item(0)->nodeValue;
            $comments = $xmlObject->item($i)->getElementsByTagName('comments')->item(0)->childNodes->item(0)->nodeValue;

            /* On récupère les catégorie dans la descrpition */
            $categorie = GetBetween($description, "<strong>", "</strong>");


            /* CONDITIONS */
            if ($categorie == "Film policier" || $categorie == "Téléfilm policier") {
                $categorie = "film-policier";
            } elseif ($categorie == "Film de science-fiction" || $categorie == "Téléfilm de science-fiction") {
                $categorie = "film-science-fiction";
            } elseif ($categorie == "Comédie dramatique" || $categorie == "Film dramatique" || $categorie == "Téléfilm dramatique" || $categorie == "Drame") {
                $categorie = "film-dramatique";
            } elseif ($categorie == "Film catastrophe" || $categorie == "Téléfilm catastrophe") {
                $categorie = "film-catastrophe";
            } elseif ($categorie == "Film documentaire" || $categorie == "Téléfilm documentaire") {
                $categorie = "film-documentaire";
            } elseif ($categorie == "Film catastrophe" || $categorie == "Téléfilm catastrophe") {
                $categorie = "film-catastrophe";
            } elseif ($categorie == "Film fantastique" || $categorie == "Téléfilm fantastique") {
                $categorie = "film-fantastique";
            } elseif ($categorie == "Film catastrophe" || $categorie == "Téléfilm catastrophe") {
                $categorie = "film-catastrophe";
            } elseif ($categorie == "Film d'aventures" || $categorie == "Téléfilm d'aventures") {
                $categorie = "film-aventures";
            } elseif ($categorie == "Film humoristique" || $categorie == "Téléfilm humoristique" || $categorie == "Divertissement-humour") {
                $categorie = "film-humoristique";
            } elseif ($categorie == "Film historique" || $categorie == "Téléfilm historique") {
                $categorie = "film-historique";
            } elseif ($categorie == "Film sentimental" || $categorie == "Téléfilm sentimental") {
                $categorie = "film-sentimental";
            } elseif ($categorie == "Film d'horreur" || $categorie == "Téléfilm d'horreur" || $categorie == "Film suspense" || $categorie == "Téléfilm suspense") {
                $categorie = "film-horreur";
            } elseif ($categorie == "Film catastrophe" || $categorie == "Téléfilm catastrophe") {
                $categorie = "film-catastrophe";
            } elseif ($categorie == "Film d'action" || $categorie == "Téléfilm d'action") {
                $categorie = "film-action";
            } elseif ($categorie == "Série sentimentale" || $categorie == "Feuilleton sentimental") {
                $categorie = "serie-sentimentale";
            } elseif ($categorie == "Série réaliste" || $categorie == "Feuilleton réaliste") {
                $categorie = "serie-realiste";
            };


            /*
                    $title = utf8_decode($xmlObject->item($i)->getElementsByTagName('title')->item(0)->childNodes->item(0)->nodeValue);
                    $description = utf8_decode($xmlObject->item($i)->getElementsByTagName('description')->item(0)->childNodes->item(0)->nodeValue);
                    $comments = utf8_decode($xmlObject->item($i)->getElementsByTagName('comments')->item(0)->childNodes->item(0)->nodeValue);
                    $categorie = utf8_decode($categorie);*/


            /* On enleve les caractère spéciaux */
            $title = clean($title);

            /* Insertion bdd */
            $sql = $db->prepare("INSERT INTO items (title, description, comments, categorie) VALUES (?, ?, ?, ?)");
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
            </ul>";
        }
    }