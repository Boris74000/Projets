<?php

if (!empty($_POST) && isset($_POST)) {

    include 'connection.php';


// var_dump($_POST);



    $query = "UPDATE users SET
    name = :name,
    email = :email,
    password = :password,
    phone = :phone,
    role_id = :role_id
WHERE 
    id = :user_id ";

    $updateUser = $dbConnection->prepare($query);

//var_dump($updateMovie);

    $updateUser->bindParam(":name", $_POST['name']);
    $updateUser->bindParam(":email", $_POST['email']);
    $updateUser->bindParam(":password", $_POST['password']);
    $updateUser->bindParam(":phone", $_POST['phone']);
    $updateUser->bindParam(":role_id", $_POST['roles']);
    $updateUser->bindParam(":user_id", $_POST['user_id']);


    $updateUser->execute();
    //var_dump($updateUser);
    header('Location:list.php');


} else {
    header('Location:list.php');
}





