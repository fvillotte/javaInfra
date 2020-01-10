<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    if (isset($_POST['email']) && isset($_POST['mdp']) && isset($_POST['action'])) {

        if($_POST['action'] == "inscription"){
            echo "inscrit";
        }elseif($_POST['action'] == "connexion"){
            session_start();
            $_SESSION["token"]="mabite";
            header('Refresh: 2; URL = ../salle.php');
        }else{
            header('Refresh: 2; URL = ../index.html');
        }
				
    }
?>
