alert("welcome to the game Suvovol!")

var a = 0
var vraag = "";
var bessen = "";
var strand = "";
var schip = "";
var o = "";
var hut = "";
var eten = "";
var ontsnappen = "";

function next() {
  a += 1
  if(a == 1){
    alert("je bent tijdens een geweldig leuk feestje op een boot genaamd Royal Princess. je hebt het zo naar je zin dat je perongelijk teveel hebt gedronken. daardoor wist je niet meer wat je deed en je sprong van het schip. je wordt wakker op een onbewoond eiland. (Succes met overleven op het eiland)");
  }else if(a == 2){
    alert("dag 1");
    vraag = prompt("Je wordt wakker niet wetend wat er gebeurt is. je kijkt rond op het eiland. het eerste wat in je opkomt is dat je eten moet halen of een schuilplaats moet maken. kies schuilplaats of eten halen.");
    if(vraag == "schuilplaats"){
      alert("Je loopt het strand over en gaat het bos in. Je vind veel takken en neemt ze mee. Je vind een prachtige plek aan de zijkant van een boom en zet daar je takken tegen aan.");
      hut = prompt("Je ligt in je schuilplaats en het begint te regenen je bent heel blij dat je je schuilplaats af hebt. je kan nu kiezen of je wilt slapen of wil je toch nog verder verkennen in de regen.(type verkennen of slapen)");
      if(hut == "verkennen"){
        alert("je loopt langs een rivier en je raakt de weg kwijt. je hoort achter je iets raars je draait je om en je ziet een kleine beer.");
        alert("achter de kleine beer staat mama beer ze eet je op.");
        alert("U Died!");
        a="dood"
      }else if(hut == "slapen"){
        alert("je gaat slapen")
      }
    }else if(vraag == "eten halen"){
      alert("Je loopt rond op het strand en je ziet een bessen struik vol met rode bessen je denk niet 2 keer na en rent er heen.");
      bessen = prompt("je plukt de bessen en eet ze direct op. je kijkt naar de zee en ziet dat de zon al onder gaat. je kijkt snel om je heen en je ziet een boom en de struik waar je net van geplukt had. ga je onder de struik of in de boom slapen? (type boom of struik.)");
    }
  }else if(a == 3){
    alert("dag 2");
    if(hut == "slapen"){
      alert("je slaapt door de nacht heen. je wordt wakker en je ziet dat je veilig hebt kunnen slapen. je maag begint te rammelen je gaat je hut uit en kijkt om je heen.");
      alert("Je loopt voorzichtig van je hut vandaan en vind een appel boom vol met appels. je pakt een tak en slaat er 2 vanaf je eet ze op. zee zijn heerlijk. ");
      eten = prompt("je bedenkt dat je een manier nodig hebt om jezelf te beschermen. je vind een hele dikke tak een een pols dikte tak je bedenkt dat je deze kan gebruiken je ziet oof een grote steen. (type tak slijpen of knots. om te kiezen.) ");
      alert("je bent her de hele dag mee bezig je besluit om tegaan slapen en morgen verder tegaan.")
    }else if(bessen == "boom"){
      alert("Je je sliep heerlijk in de boom. je kijkt naar benden en ziet twee beren lopen je houd jezelf dood stil en de twee beren liepen weg.");
      alert("je klom omlaag en je keek om je heen. je zag om het strand een oud schip vrak je liep er heen en vind een geladen flaregun. je stopt hem en je achter zak.");
      strand = prompt("Na dat je hele schip vrak het door zocht heb je 1 zwaard, 1 geladen flaregun, 2 blikken eten en 1 laken gevonden. je kan nu kiezen of je het schip je schuilplaats wil maken of verder wil verkennen.(type schip of verkennen)");
      if(strand == "schip"){
        alert("je verbouwt het hele schip in een schuilplaats je hebt zelfs een bed :D.");
        schip = prompt("je kijkt om je schip heen je je ziet een persoon op het strand liggen. wil je het persoon helpen of daar laten liggen. (type helpen of liggen)");
        if(schip == "helpen"){
          alert("je rent naar de persoon toe en neemt hem mee naar je schuilplaats. de persoon blijkt al 1 uur dood tezijn. er ligt nu een lijk in je schuilplaats.");
          persoon = prompt("je kan nu kiezen of je het lijk wil verplaatsen of het in de zee wil gooien.(type verplaatsen of gooien)");
          if(persoon == "verplaatsen"){
            alert("je verplaatst de lijk naar het bos uit je eigen zicht. je draaide je om en je ziet een beer die je eerder hebt ontkomen. de beer valt je aan. maar je hebt nu een wapen je slaat naar de beer alleen je beer is streker en eet je op.");
            alert("je bent dood");
            a = "dood"
          }else if(persoon == "gooien"){
            alert("je gooit het lijk in de zee en je kijkt naar de zee en je ziet dat de zon weer onder gaat je gaat weer slapen");
            o = "ja"
          }
        }else if(schip == "liggen"){
          alert("je laat de persoon liggen en je hoort na 30 min iets bij de persoon vandaan komen. je gaat kijken wat het is en je ziet er twee beren om heen staan. je voelt je echt verschikkelijk omdat je hem hebt laten liggen.");
          alert("je rent als een idiot op de twee beren af met je zwaard je slaat wilt om je heen en tijdens het gevecht kom je erachter dat de persoon al dood was voodat de beren er waren op dat moment bijt een beer je in je been en je valt. de beren eten je op");
          alert("U Died");
          a = "dood"
        }
      }else if(strand == "verkennen"){
        alert("je loopt verder op het strand en je ziet een cactus staan en je loopt er verwaard naar toe en op het moment dat je dicht bij kwam stond je oog in oog met een beer. de beer eet je op.");
        alert("Tip eet nooit bessen die je niet kent misschien zijn ze giftig of laten ze je hallucineren");
        alert("U Died BTW");
        a = "dood"
      }
    }else if(bessen == "struik"){
      alert("je hebt niet lekker geslapen onder de struik. je komt onder de struik vandaan en je hoort iets achter je en je draait je om.");
      alert("je staat oog in oog met een beer. de beer valt aan. je bent dood.");
      a = "dood"
    }
  }else if (a == 4){
    alert("dag 3");
    if(eten == "tak slijpen"){
      alert("je maakt de tak heel scherp. je gaat naar buiten je hebt heel veel honger omdat je gisteren niks gegeten hebt. je loopt naar de rivier en steekt de stok in wat vissen en maakt een kamp vuur kookt de vissen en eet ze op.");
      ontsnappen = prompt("je buik zit nu helemaal vol je bedenkt dan dat je van dit eiland af moet komen. je verzint allemaal dingen van een hovercraft to een brug. je komt dan op twee ideeen. (type bericht of signaal)");
    }else if(eten == "knots"){
      alert("je verbouwt de dikke tak in een prachtige knots. je gaat naar buiten je hebt heel veel honger omdat je gisteren niks gegeten hebt. je loopt naar de rivier en slaat als een idiot op het water je maakt de vissen boos en je wordt geëlectrocuteerd door drie aalen.");
      alert("je bent gedood door een vis. wie slaat er ook als een idiot op het water met een knots.");
      a = "dood"
    }else if(o == "ja"){
      alert("je hebt heerlijk geslapen in je schuilplaats en je eet 1 van de 2 blikken op. je loopt daarna naar buiten en je ziet een schip varen je twijfelt niet en schiet je flare in de lucht het schip ziet het en vaart naar je toe.");
      alert("je hebt het overleeft.");
      alert("U Won!");
      a == "win"
    }
  }else if(a == 5){
    alert("dag 4");
    if(ontsnappen == "bericht"){
      alert("je schrijft met stenen op het strand HELP. je gaat daarna weer terug naar je hut. je ging je hut binnen en je zag daar een beer. de beer eet je op.");
      alert("je bent dood");
      a == "Dood"
    }else if(ontsnappen == "signaal"){
      alert("je hebt het hele groep bomen in de brand gezet. na 2 uur komt er een schip lang dat het eiland doorzocht en vonden jouw. je bent het overleeft");
      alert("U Won");
      a == "win"
    }
  }
}
function back(){
  alert("Your game has been rest");
  a = 0
}