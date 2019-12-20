class Salle {
    constructor(id, nom, numero, statut) {
        this.id = id;
        this.nom = nom;
        this.numero = numero;
        this.statut = statut;
    }

    setLink(){
        this.link = $('<a class="nav-link" style="color: white; margin-left: 32px"><i style="padding-right: 8px;"></i><span></span></a>');
        var it = this;
        this.link.click(function(){it.onClick();});
        this.link.find("span").text(this.name);
        if(this.schedule == "10min" || this.schedule == "30min"){
            this.link.find("i").attr("class", "fas fa-stopwatch");
        }else if(this.schedule == "1hour" || this.schedule == "3hour" || this.schedule == "6hour" || this.schedule == "12hour"){
            this.link.find("i").attr("class", "fas fa-hourglass-half");
        }else if(this.schedule == "1day" || this.schedule == "3day"){
            this.link.find("i").attr("class", "fas fa-calendar-day");
        }else if(this.schedule == "1week"){
            this.link.find("i").attr("class", "fas fa-calendar-week");
        }else if(this.schedule == "1month" || this.schedule == "3month" || this.schedule == "6month"){
            this.link.find("i").attr("class", "fas fa-calendar-alt");
        }else{
            this.link.find("i").attr("class", "fas fa-calendar-times");
        }
        $("#newConfig").before(this.link);
    }
}