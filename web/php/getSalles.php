<?php
    session_start();
    // echo $_SESSION["token"];

    $arr = array(
        array('numero' => "B113", 'nom' => "Pascal", 'statut' => 0), 
        array('numero' => "B114", 'nom' => "Gauchy", 'statut' => 1),
        array('numero' => "B115", 'nom' => "Fourier", 'statut' => 2), 
        array('numero' => "B116", 'nom' => "Descartes", 'statut' => 3)
    );

    echo json_encode($arr);
?>
