<?php

    $name = valid_donnees($_POST["name"]);
    $mail = valid_donnees($_POST["mail"]);
    $message = valid_donnees($_POST["text"]);

    function valid_donnees($donnees){
            $donnees = trim($donnees); // va supprimer les espaces inutiles
            $donnees = stripslashes($donnees); //  va supprimer les antislashes que certains hackers pourraient utiliser pour échapper des caractères spéciaux.
            $donnees = htmlspecialchars($donnees); // va permettre d’échapper certains caractères spéciaux comme les chevrons « < » et « > » en les transformant en entités HTML.
            return $donnees;
        echo $donnees;
        }

    $to = 'c.dauvier@it-students.fr';
    $subject = $name;
    $message = $_POST["text"];
    $headers = array(
        'From' => $_POST["mail"],
        'Reply-To' => '',
        'X-Mailer' => 'PHP/' . phpversion()
    );

    mail($to, $subject, $message, $headers);



/* ============= A TERMINER =============== */

//if (!empty($_POST)) {
//
//    $name = valid_donnees($_POST["name"]);
//    $mail = valid_donnees($_POST["mail"]);
//    $message = valid_donnees($_POST["text"]);
//
//    function valid_donnees($donnees)
//    {
//        $donnees = trim($donnees);
//        $donnees = stripslashes($donnees);
//        $donnees = htmlspecialchars($donnees);
//        return $donnees;
//    }
//
//    if (empty($name)) {
//        echo "Le champs nom est vide";
//    } else if (strlen($name) > 20) {
//        echo "Le champs nom doit contenir moins de 20 caractères";
//    } else if (!preg_match("^[A-Za-z '-]+$", $name)) {
//        echo "Le champs nom doit seulement contenir des minuscules, majuscules ou des traits d'union";
//    }
//
//    if (empty($mail)) {
//        echo "Le champs e-mail est vide";
//    } else if (!filter_var($mail, FILTER_VALIDATE_EMAIL)) {
//        echo "L'email doit être de la forme : xxxxxxx@xxxxxx.xx";
//    }
//
//    if (empty($text)) {
//        echo "Le champs texte est vide";
//    } else {
//
//        $to = 'c.dauvier@it-students.fr';
//        $headers = array(
//            'From' => "$mail",
//            'Reply-To' => '',
//            'X-Mailer' => 'PHP/' . phpversion()
//        );
//    }
//    if (mail($to, $name, $message, $headers)) {
//        echo "L'email a été envoyé.";
//    } else {
//        echo "Erreur, email non envoyé.";
//    }
//}




/*
//si le formulaire de nom "Submit" a été validé
if (isset($_POST['envoi'])) {
//on place les éléments du formulaire dans des variables
    $name = $_POST['name'];
    $mail = $_POST['mail'];
    $text = $_POST['text'];
//on contrôle les éléments du formulaire
//si le champ nom est vide
    if (empty($name)) {
        echo 'Le champ Nom est vide !';
    }
//si le champ prenom est vide
    if (empty($mail)) {
        echo 'Le champ Prénom est vide !';
    } //si tout est bon
    else {
//Péparation du mail
//message
        $msg = "Nom : " . $nom . "<br/>Prénom : " . $prenom . "<br/>Message : " . $text;
//entête du mail
        $mailheaders = "From: $mail\n";
        $mailheaders .= "MIME-version: 1.0\n";
        $mailheaders .= "Content-type: text/html; charset= utf-8\n";
//on envoi l'email
//si le mail est envoyé
    }
    if (mail('email du destinataire', 'Objet du mail', $msg, $mailheaders)) {
        echo 'Email envoyé.';
    } //si il y a une erreur lors de l'envoi
    else {
        echo 'Erreur, email non envoyé.';
    }
}
*/







