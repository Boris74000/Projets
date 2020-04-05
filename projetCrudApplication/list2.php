<?php

$title = "Liste des rôles";

include "header.php";
include "connection.php";

// creation d'une requête pour montrer tous les utilisateurs de la table "users"
$query = 'SELECT * FROM roles';

// préparation de la requête avec execution
$preparedQuery = $dbConnection ->prepare($query);

// execute la reqête
$preparedQuery -> execute();

// permet de recupérer le résultat de la requête execute précédement et de la stocker dans une
// variable $roles
$roles = $preparedQuery->fetchAll();

?>

<table border="1">
    <thead>
    <tr>
        <th> NOM </th>
        <th> MODIFIER </th>
        <th> SUPPRIMER </th>
    </tr>
    </thead>
    <tbody>
    <?php
    foreach ($roles as $role) {
        ?>
        <tr class="listUsers">
            <td> <?php echo $role['name'];?> </td>

            <td>
                <form action="edit2.php" method="POST">
                    <input type="hidden" name="role_id" value="<?php echo $role['id'];?>">
                    <input type="submit" value="Modifier">

                </form>
            </td>
            <td>
                <form action="delete2.php" method="POST">
                    <input type="hidden" name="role_id" value="<?php echo $role['id'];?>">
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
