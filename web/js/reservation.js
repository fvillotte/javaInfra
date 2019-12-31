$(document).ready(function(){

    // let searchParams = new URLSearchParams(location.search);
    // var token = searchParams.get("salle");

    // if(token == null){
    //     window.location.href = 'salle.html';
    // }else{
    //     // get cookie token
    //     getReservation()
    // }

});

function getReservation(){
    $.ajax({
        url : 'php/getReservation.php',
        type : 'Get',
        data : {
            salle: salle,
            token: token
        },
        success : function(result){

            for (reservation of JSON.parse(result)) {
                new Reservation(reservation.id, reservation.utilisateurId, reservation.dateDebut, reservation.dateFin);
            }
            
        },
        error : ajaxError
    });	
}

class Reservation {
    constructor(id, utilisateurId, dateDebut, dateFin) {
        this.id = id;
        this.utilisateurId = utilisateurId;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
    }
}