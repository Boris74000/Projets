<?php

$title = "Enregistrement d'un utilisateur";

include "header.php";
include "connection.php";

$query = "SELECT * FROM roles";

$fetchRoles = $dbConnection->prepare($query);

$fetchRoles->execute();

$roles = $fetchRoles->fetchAll();

//var_dump($roles);
?>

<div class="formulaire">
    <form action="store.php" method="POST">
        <div>
            <label for="name"> Nom </label>
            <input type="text" name="name" id="name" required>
        </div>

        <div>
            <label for="email"> Email </label>
            <input type="email" name="email" id="email" required>
        </div>

        <div>
            <label for="password"> Mot de passe </label>
            <input type="password" name="password" id="password" required>
        </div>

        <div>
            <label for="phone"> Téléphone </label>
            <input type="tel" name="phone" id="phone" required>
        </div>

        <div>
            <label for="role_id">Choisissez un rôle</label>
            <select name="roles" id="role_id">
            <?php
            foreach ($roles as $role) {
            ?>
                    <option value="<?php echo $role['id'];?>"><?php echo $role['name'];?></option>
            <?php
            }
            ?>
            </select>
        </div>
        <div class="bouton">
            <input type="submit" value="Créer" class="creer" >
        </div>
    </form>
</div>

<?php




include "footer.php";
