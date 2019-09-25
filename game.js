var start = prompt("je gaat een planeet maken, een planeet die naar jouw smaak is gemaakt. als je het spel wilt spelen type dan creatie.");
//teskt dat dit apart houd omdat ik dat wil dus let niet op mij!
if(start == "creatie"){
    var begin = prompt("wat voor vorm moet je planeet zijn? driehoek, vierkant of een cirkel?");
} else{
    alert("nice try buddie -_-");
    exit;
}
//teskt dat dit apart houd omdat ik dat wil dus let niet op mij!
if(begin == "driehoek"){
    var driehoek = prompt("Een driehoek hmmm, okay je heb een rare smaak maar dit kan. wil je dat er water is op de planeet of niet? (beantwoord met ja of nee)");
}else if(begin == "vierkant"){
    var vierkant = prompt("zo je houd van minecraft wat leuk, wil je water op je planeet of niet? (beantwoord met ja of nee)");
}else if(begin == "cirkel"){
    var cirkel = prompt("okay je bent standaard, saai! maar wil je water op je planeet of niet? (beantwoord met ja of nee)");
}else{
    alert("ik maar het niet echt moeilijk weet je dat DE VRAAG WAS SIMPEL!");
    exit;
}
//teskt dat dit apart houd omdat ik dat wil dus let niet op mij!
if(driehoek == "ja"){
    var dwater = prompt("je planeet is nu helemaal van water het heeft geen kern of land, wil je deze toevoegen? ja of nee");
}else if(driehoek == "nee"){
    var ddroog = prompt("okay je hebt geen water op de planeet, wil je dan inplaats van water vuur of lava hebben dan? (kies tussen nee, vuur of lava)");
}else if(vierkant == "ja"){
    var vwater = prompt("je planeet is nu helemaal van water het heeft geen kern of land, wil je deze toevoegen? ja of nee");
} else if(vierkant == "nee"){
    var vdroog = prompt("okay je hebt geen water op de planeet, wil je dan inplaats van water vuur of lava hebben dan? (kies tussen nee, vuur of lava)");
}else if(cirkel == "ja"){
    var cwater = prompt("je planeet is nu helemaal van water het heeft geen kern of land, wil je deze toevoegen? ja of nee");
} else if (cirkel == "nee"){
    var cdroog = prompt("okay je hebt geen water op de planeet, wil je dan inplaats van water vuur of lava hebben dan? (kies tussen nee, vuur of lava");
} else{
    alert("wil je gewoon doen wat ik je vraag het ies niet moeilijk ofzo");
    exit;
}

if(ddroog == "vuur"  || vdroog == "vuur" ||  cdroog == "vuur"){
    alert("je planeet is een vuurbal goedgedaan, je kan niks meer doen je vuurbal is weg. waarom? SINDS WANNEER BRAND VUUR IN DE RUIMTE! u failed.")
}