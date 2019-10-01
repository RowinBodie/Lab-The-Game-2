alert("welcome to the GAME!")


var a = 0
var vraag = "";
var bessen = "";
var strand = "";
var hut = "";
var eten = "";
function next() {
  a += 1
  if(a == 1){
    alert("je bent tijdens een geweldig leuk feestje op een boot genaamd Royal Princess. je hebt het zo naar je zin dat je perongelijk teveel hebt gedronken. daardoor wist je niet meer wat je deed en je sprong van het schip. je wordt wakker op een onbewoond eiland. (Succes met overleven op het eiland)")
  }else if(a == 2){
    alert("dag 1")
    vraag = prompt("Je wordt wakker niet wetend wat er gebeurt is. je kijkt rond op het eiland. het eerste wat in je opkomt is dat je eten moet halen of een schuilplaats moet maken. kies schuilplaats of eten halen.")
    if(vraag == "schuilplaats"){
      alert("Je loopt het strand over en gaat het bos in. Je vind veel takken en neemt ze mee. Je vind een prachtige plek aan de zijkant van een boom en zet daar je takken tegen aan.")
      hut = prompt("Je ligt in je schuilplaats en het begint te regenen je bent heel blij dat je je schuilplaats af hebt. je kan nu kiezen of je wilt slapen of wil je toch nog verder verkennen in de regen.(type verkennen of slapen)")
      if(hut == "verkennen"){
        alert("je loopt langs een rivier en je raakt de weg kwijt. je hoort achter je iets raars je draait je om en je ziet een kleine beer.")
        alert("achter de kleine beer staat mama beer ze eet je op.")
        alert("U Died!")
        a="dood"
      }
    }else if(vraag == "eten halen"){
      alert("Je loopt rond op het strand en je ziet een bessen struik vol met rode bessen je denk niet 2 keer na en rent er heen.")
      bessen = prompt("je plukt de bessen en eet ze direct op. je kijkt naar de zee en ziet dat de zon al onder gaat. je kijkt snel om je heen en je ziet een boom en de struik waar je net van geplukt had. ga je onder de struik of in de boom slapen? (type boom of struik.)")
    }
  }else if(a == 3){
    alert("dag 2")
    if(hut == "slapen"){
      alert("je slaapt door de nacht heen. je wordt wakker en je ziet dat je veilig hebt kunnen slapen. je maag begint te rammelen je gaat je hut uit en kijkt om je heen.")
      alert("Je loopt voorzichtig van je hut vandaan en vind een appel boom vol met appels. je pakt een tak en slaat er 2 vanaf je eet ze op. zee zijn heerlijk. ")
      eten = prompt("je bedenkt dat je een manier nodig hebt om jezelf te beschermen. je vind een hele dikke tak een een pols dikte tak je bedenkt dat je deze kan gebruiken je ziet oof een grote steen. (type tak slijpen of knots. om te kiezen.) ")
    }else if(bessen == "boom"){
      alert("Je je sliep heerlijk in de boom. je kijkt naar benden en ziet twee beren lopen je houd jezelf dood stil en de twee beren liepen weg.")
      alert("je klom omlaag en je keek om je heen. je zag om het strand een oud schip vrak je liep er heen en vind een geladen flaregun. je stopt hem en je achter zak.")
      strand = prompt("Na dat je hele schip vrak het door zocht heb je 1 zwaard, 1 geladen flaregun, 2 blikken eten en 1 laken gevonden. je kan nu kiezen of je het schip je schuilplaats wil maken of verder wil verkennen.(type schip of verkennen)")
    }else if(bessen == "struik"){
      alert("je hebt niet lekker geslapen onder de struik. je komt onder de struik vandaan en je hoort iets achter je en je draait je om.")
      alert("je staat oog in oog met een beer. de beer valt aan. je bent dood.")
      a = "dood"
    }
  }
}
function back(){
  alert("Your game has been rest")
  a = 0
}d