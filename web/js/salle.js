$(document).ready(function(){

    // $("#etage1").hover(
    //     function() {
    //         $("#etage1").css("transform", "rotateX(0deg)");
    //     }, function() {
    //         $("#etage1").css("transform", "rotateX(80deg)");
    //     }
    // );      
    

    // $("path").click(function(event) {
    //     window.location.href = 'reservation.html?salle=' + $(this).attr('id');
    // });

     
    

    /* get token from the cookies the run getSalles
*/

    // let searchParams = new URLSearchParams(location.search);
    // var token = searchParams.get("mdp");

    // document.cookie = 'token=gggg';

    // alert(document.cookie);

    // if(token == null){
    //     window.location.href = 'index.html';
    // }else{
    //     // getSalles()
    // }

    // $(".card-body").hide();

    // $(".card").hover(
    //     function() {
    //         $(this).find(".card-title").fadeOut("slow");
    //         $(this).find(".card-body").slideDown("slow", function(){
    //             $('[data-toggle="tooltip"]').tooltip('update')
    //         });
    //     }, function() {
    //         $(this).find(".card-title").fadeIn("slow");
    //         $(this).find(".card-body").slideUp("slow");
    //     }
    // )

    $(".card").click(function() {
        $(this).find(".card-title").slideUp("slow");
        $(this).find(".card-body").slideDown("slow");

        $(".card-title").not($(this).find(".card-title")).slideDown("slow");
        $(".card-body").not($(this).find(".card-body")).slideUp("slow");


    });

    $("path").attr("data-toggle", "tooltip");
    $("path").attr("data-html", "true");
    $("path").attr("cursor", "pointer");

    $("path").map(function(){
        $(this).attr("title", "<span>Premier Étage</span> <br> <b>" + $(this).attr('id') + "</b> <br> <em>Pascal</em>");
    })
    
    $("path").hover(
        function() {
            $(this).css("fill", "#000000");
            $(this).css("fill-opacity", 0.2);
        }, function() {
            $(this).css("fill-opacity", 0);
        }
    );

    $("path").click(function(event) {
        window.location.href = 'reservation.html?salle=' + $(this).attr('id');
    });

    $('[data-toggle="tooltip"]').tooltip({ boundary: 'viewport', placement: 'auto' })


});

function getSalles(){
    $.ajax({
        url : 'php/getSalle.php',
        type : 'Get',
        data : {
            token: token
        },
        success : function(result){

            for (salle of JSON.parse(result)) {
                salleArray.push(new Salle(salle.numero, salle.nom, salle.statut));
            }
        },
        error : ajaxError
    });	
}

class Salle {
    constructor(numero, nom, statut) {
        this.numero = numero;
        this.nom = nom;
        this.statut = statut;
        var self = this;
        $('#'+this.numero).click(self.onClick);
        $('#'+this.numero).hover(self.hoverIn(), self.hoverOut());
    }

    onClick(){
        window.location.href = 'reservation.html?salle=' + this.numero;
    }

    hoverIn(){
        $('#'+this.numero).css("fill-opacity", 0.5);
    }

    hoverOut(){
        $('#'+this.numero).css("fill-opacity", 0);
    }

}