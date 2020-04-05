<?php

if (!empty($_POST) && isset($_POST)) {

    $title = "Editer";

    include "header.php";
    include "connection.php";

    $query = "SELECT * FROM roles WHERE id = :role_id";

    $editRole = $dbConnection->prepare($query);

    $editRole->bindParam(":role_id", $_POST['role_id']);

    $editRole->execute();

    $role = $editRole->fetch();

    ?>
    <div class="formulaire">
        <form action="update2.php" method="POST">
            <div>
                <label for="name"> Rôle </label>
                <input type="text" name="role" id="role" required value="<?php echo $role['name'] ?>">
            </div>
            <div class="bouton">
                <input type="submit" value="Créer" class="creer">
                <input type="hidden" name="role_id" value="<?php echo $role['id'] ?>">
            </div>
        </form>
    </div>
    <?php


} else {
    header('Location:list2.php');
}

include 'footer.php';

