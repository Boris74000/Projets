<?php

$title = 'Liste des utilisateurs';
include "header.php";
include "connection.php";

// creation d'une requête pour montrer tous les utilisateurs de la table "users"
$query = 'SELECT users.id, users.name, email, password, phone, roles.name as role FROM projet.users JOIN projet.roles ON users.role_id = roles.id';

// préparation de la requête avec execution
$preparedQuery = $dbConnection ->prepare($query);

// execute la reqête
$preparedQuery -> execute();

// permet de recupérer le résultat de la requête executé précédement et de la stocker dans une
// variable $users
$users = $preparedQuery->fetchAll();
//var_dump($users);


?>

<table border="1">
    <thead>
    <tr>
        <th> NOM </th>
        <th> EMAIL </th>
        <th> PASSWORD </th>
        <th> PHONE </th>
        <th> ROLE</th>
        <th> MODIFIER</th>
        <th> SUPPRIMER </th>
    </tr>
    </thead>
    <tbody>
    <?php
    foreach ($users as $user) {
        ?>
        <tr class="listUsers" >
            <td> <?php echo $user['name'];?> </td>
            <td> <?php echo $user['email'];?></td>
            <td> <?php echo $user['password']; ?> </td>
            <td> <?php echo $user['phone']; ?> </td>
            <td> <?php echo $user['role']; ?> </td>
            <td>
                <form action="edit.php" method="POST">
                    <input type="hidden" name="user_id" value="<?php echo $user['id'];?>">
                    <input type="hidden" name="user_name" value="<?php echo $user['name'];?>">
                    <input type="hidden" name="user_email" value="<?php echo $user['email'];?>">
                    <input type="hidden" name="user_password" value="<?php echo $user['password'];?>">
                    <input type="hidden" name="user_phone" value="<?php echo $user['phone'];?>">
                    <input type="hidden" name="user_role" value="<?php echo $user['role'];?>">
                    <input type="submit" value="Modifier">
                </form>
            </td>
            <td>
                <form action="delete.php" method="POST">
                    <input type="hidden" name="user_id" value="<?php echo $user['id'];?>">
                    <input type="submit" value="Supprimer">
                </form>
            </td>
        </tr>
        <?php
    }

    ?>
    </tbody>
</table>


<?php


include "footer.php";
