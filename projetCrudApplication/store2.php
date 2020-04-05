<?php


include "connection.php";


// requete sql permettant d'inserer des données dans notre table movies en utilisant des donnees de substitution

$query = "INSERT INTO roles (name) VALUES (:name)";

$createRole = $dbConnection->prepare($query);


// Remplacement des données de substitution par les données du formulaire reçu
// de PDO 'bindparam()'

$createRole->bindParam(":name", $_POST['name']);

$createRole->execute();

// Redirection une fois le rôle inséré en DB

header('Location: list2.php');


