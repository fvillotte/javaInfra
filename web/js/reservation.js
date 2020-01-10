$(document).ready(function(){

    if(salle == null || salle == ""){
        $('[onclick="newReservation()"]').remove();
    }else{
        document.title = salle;
        $('#title').text(salle);
    }

    //     getReservation()    

    if(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i)){
        $("main").attr("style", "padding: 8px; padding-top: 50px; padding-bottom: 0px; width: 100%");
    }
});

var salle = new URLSearchParams(location.search).get("salle");

function getReservation(){
    $.ajax({
        url : 'php/getReservation.php',
        type : 'Get',
        data : {
            salle: salle
        },
        success : function(result){

            for (reservation of JSON.parse(result)) {
                new Reservation(reservation.id, reservation.utilisateurId, reservation.titre, reservation.dateDebut, reservation.dateFin);
            }
            
        },
        // error : ajaxError
    });	
}

function newReservation(){
    $('#popUp').remove();
    $.get("popUp.html", function(data) {
        $("body").append(data);
        $('#popUp').modal('show')

        $(".modal-title").text("Salle " + salle)

        $("#utilisateur").closest("div").remove();        

        $('#popUp').on('shown.bs.modal', function () {
            $('#titre').focus();
        })

        $('#date1').attr("disabled", true);
        $('#date2').attr("disabled", true);
        $("#sauvegarder").attr("disabled", true);

        $('#titre').change(function () {
            if($('#titre').val().replace(/\s/g, '').length){
                $("#titre").attr("class", "form-control is-valid");
                $('#date1').attr("disabled", false);
            }else{
                $("#titre").attr("class", "form-control is-invalid");
                $('#date1').attr("disabled", true);
            }
        });

        $('#date1').change(function () {
            if(new Date($('#date1').val()) > new Date()){
                $("#date1").attr("class", "form-control is-valid");
                $('#date2').attr("disabled", false);
            }else{
                $("#date1").attr("class", "form-control is-invalid");
                $('#date2').attr("disabled", true);
            }
        });

        $('#date2').change(function () {
            if(new Date($('#date2').val()) > new Date($('#date1').val()) && new Date($('#date2').val()).getFullYear() === new Date($('#date1').val()).getFullYear() && new Date($('#date2').val()).getMonth() === new Date($('#date1').val()).getMonth() && new Date($('#date2').val()).getDate() === new Date($('#date1').val()).getDate()){
                $("#date2").attr("class", "form-control is-valid");
                $('#sauvegarder').attr("disabled", false);
            }else{
                $("#date2").attr("class", "form-control is-invalid");
                $('#sauvegarder').attr("disabled", true);
            }
        });

        $("#sauvegarder").click(function() {
            alert("ok");
        });
        
    });
}

class Reservation {
    constructor(id, utilisateurId, titre, dateDebut, dateFin) {
        this.id = id;
        this.utilisateurId = utilisateurId;
        this.titre = titre;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
    }
}