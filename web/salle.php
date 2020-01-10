<!doctype html>
<html>

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="icon" type="image/png" href="img/eseo.png" />

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    
    <script type="text/javascript" src="js/salle.js"></script>

    <title>Reseoroom</title>
  </head>
  
  <body>

   <nav class="navbar navbar-expand-md navbar-dark" style="background-color: #5a4d9b;">
      <div class="navbar-inner">
         <img src="img/eseo.png" width="40" height="40">
         <span class="navbar-brand" style="margin-left: 16px; cursor: default">Reseoroom</span>
      </div>
      
      <ul class="navbar-nav ml-md-auto">
         <li class="nav-item dropdown">
           <a class="nav-item nav-link dropdown-toggle" data-toggle="dropdown" style="cursor: pointer; color: white;">
             alexandre_robin@reseau.eseo.fr
           </a>
           <div class="dropdown-menu dropdown-menu-md-right">
             <a class="dropdown-item" href="php/deconnexion.php">Se déconnecter</a>
             <div class="dropdown-divider"></div>
             <a class="dropdown-item" href="reservation.html?salle=">Mes réservations</a>        
           </div>
         </li>
       </ul>
    </nav>

   <main class="text-center" style="width: 80%; min-width: 500px; max-width: 1000px; margin: auto;">

      <div class="card" style="margin: 16px; border-color: #5a4d9b;">
        <h4 class="card-title" style="margin: 12px; cursor: pointer;">Sous-sol</h4>
        <div class="card-body" style="display: none;">
         
         <?php include 'img/sous-sol.svg'; ?>

        </div>
      </div>

      <div class="card" style="margin: 16px; border-color: #5a4d9b;">
        <h4 class="card-title" style="margin: 12px; cursor: pointer;">Rez-De-Chaussée</h4>
        <div class="card-body" style="display: none;">
        
            <?php include 'img/rdc.svg'; ?>

        </div>
      </div>

      <div class="card" style="margin: 16px; border-color: #5a4d9b;">
        <h4 class="card-title" style="margin: 12px; cursor: pointer;">Premier Étage</h4>
        <div class="card-body" style="display: none;">
          
           <?php include 'img/etage1.svg'; ?>

        </div>
      </div>

      <div class="card" style="margin: 16px; border-color: #5a4d9b;">
        <h4 class="card-title" style="margin: 12px; cursor: pointer;">Deuxième Étage</h4>
        <div class="card-body" style="display: none;">
          
            <?php include 'img/etage2.svg'; ?>

        </div>
      </div>

      <div class="card" style="margin: 16px; border-color: #5a4d9b;">
        <h4 class="card-title" style="margin: 12px; cursor: pointer;">Troisième Étage</h4>
        <div class="card-body" style="display: none;">
          
            <?php include 'img/etage3.svg'; ?>

        </div>
      </div>

      <div class="card" style="margin: 16px; border-color: #5a4d9b;">
        <h4 class="card-title" style="margin: 12px">Quatrième Étage</h4>
        <div class="card-body" style="display: none;">
          
            <?php include 'img/etage4.svg'; ?>

        </div>
      </div>

    </div>

  </body>


</html>

