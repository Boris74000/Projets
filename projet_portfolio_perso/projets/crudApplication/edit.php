<?php

if (!empty($_POST) && isset($_POST)) {

    $title = "Editer les utilisateurs";
    include "header.php";
    include "connection.php";

    //var_dump($_POST);

    $query = "SELECT * FROM roles";

    $fetchRoles = $dbConnection->prepare($query);

    $fetchRoles->execute();

    $roles = $fetchRoles->fetchAll();

    ?>
    <div class="formulaire">
        <form action="update.php" method="POST">
            <div>
                <label for="name"> Nom </label>
                <input type="text" name="name" id="name" required value="<?php echo $_POST['user_name']; ?>">
            </div>

            <div>
                <label for="email"> Email </label>
                <input type="email" name="email" id="email" required value="<?php echo $_POST['user_email']; ?>">
            </div>

            <div>
                <label for="password"> Mot de passe </label>
                <input type="password" name="password" id="password" required
                       value="<?php echo $_POST['user_password']; ?>">
            </div>

            <div>
                <label for="phone"> Téléphone </label>
                <input type="tel" name="phone" id="phone" required value="<?php echo $_POST['user_phone']; ?>">
            </div>

            <div>
                <label for="role_id"> Rôle </label>
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
                <input type="submit" value="Créer" class="creer">
                <input type="hidden" name="user_id" value="<?php echo $_POST['user_id']; ?>">
            </div>
        </form>
    </div>
    <?php

} else {
    header('Location:list.php');
}
 include 'footer.php';
