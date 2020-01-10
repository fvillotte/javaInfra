$(document).ready(function(){

    getSalles();

    $(".card").click(function() {
        $(this).find(".card-title").slideUp("slow");
        $(this).find(".card-body").slideDown("slow");
        $(".card-title").not($(this).find(".card-title")).slideDown("slow");
        $(".card-body").not($(this).find(".card-body")).slideUp("slow");
    });

    if(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i)){
        $("main").attr("style", "width: 100%");
    }
});

function getSalles(){
    $.ajax({
        url : 'php/getSalles.php',
        type : 'Get',
        success : function(result){

            for (salle of JSON.parse(result)) {
                new Salle(salle.numero, salle.nom, salle.statut);
            }

        },
        // error : ajaxError
    });	
}

class Salle {
    constructor(numero, nom, statut) {
        this.numero = numero;
        this.nom = nom;
        this.statut = statut;

        $('#'+this.numero).hover(
            function() {
                $(this).css("fill", "#000000");
                $(this).css("fill-opacity", 0.2);
            }, function() {
                $(this).css("fill-opacity", 0);
            }
        );

        if(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i)){
            $('#'+this.numero).on('shown.bs.tooltip', function () {
                $(this).click(function() {
                    window.location.href = 'reservation.html?salle=' + $(this).attr('id');
                });
            })
            $('#'+this.numero).on('hidden.bs.tooltip', function () {
                $(this).unbind("click");
            })
        }else{
            $('#'+this.numero).click(function() {
                window.location.href = 'reservation.html?salle=' + $(this).attr('id');
            });
        }

        $('#'+this.numero).attr("data-toggle", "tooltip");
        $('#'+this.numero).attr("data-html", "true");
        $('#'+this.numero).attr("cursor", "pointer");

        let title = $("<div>");
        title.append($("<span>").text($('#'+this.numero).closest(".card").find("h4").text()));
        title.append("<br>");
        title.append($("<strong>").text(this.numero));
        title.append("<br>");
        title.append($("<em>").text(this.nom));

        switch (this.statut) {
            case 0:
                title.append("<br>");
                title.append($("<span></span>").text("Indisponible"));
                break;
            case 1:
                title.append("<br>");
                title.append($("<span></span>").text("Reservé au profs"));
                break;
            case 3:
                title.append("<br>");
                title.append($("<span></span>").text("J'ai pas d'idée"));
                break;
            default:
                break;
        }

        $('#'+this.numero).attr("title", title.prop('outerHTML'));

        $('#'+this.numero).tooltip({ boundary: 'viewport', placement: 'auto' })
    }
}