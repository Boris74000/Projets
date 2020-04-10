<?php

if (!empty($_POST) && isset($_POST)) {

    include 'connection.php';

    // var_dump($_POST);


    $query = "UPDATE projet.roles SET name = :role WHERE id = :role_id";

    $updateRole = $dbConnection->prepare($query);

    //var_dump($updateRole);

    $updateRole->bindParam(":role", $_POST['role']);
    $updateRole->bindParam(":role_id", $_POST['role_id']);

    $updateRole->execute();
    //var_dump($updateRole);

    header('Location:list2.php');


} else {
    header('Location:list2.php');
}




