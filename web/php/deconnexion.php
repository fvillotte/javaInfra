<?php
   session_start();
   unset($_SESSION["token"]);
   header('Refresh: 2; URL = ../index.html');
?>