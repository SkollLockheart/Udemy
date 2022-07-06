var musicien = {
    name: "Mickael",
    age: 20,
    nationalite: "francaise",
    instrument: ["piano","guitare"],
    afficheBestMusique: function(){
        var tab = ["Beat It","Billie Jean","Thriller","Smooth Criminal"];
        var musique = tab[Math.floor(Math.random()*4)];
        alert(musique);
    }    
};

musicien.afficheBestMusique();

//constructeur
function Musicien(name,age,nationalite,instrument,tableau_musique){
    this.name = name;
    this.age = age;
    this.nationalite = nationalite;
    this.instrument = instrument;
    this.afficheBestMusique = function(){
        var taille = tableau = tableau_musique.length;
        var musique = tableau_musique[Math.floor(Math.random()*taille)];
        alert(musique);
    }
}

var instrumentCollins = ["piano","batterie"];
var musiqueCollins = ["Against All Odds","Misunderstanding"];
var collins = new Musicien("Phil Collins",45,"Britanique",instrumentCollins,musiqueCollins);

collins.nationalite;

//la console affiche
"Britanique"

function Musicien(name,age,nationalite,instrument,tableau_musique){
    this.name = name;
    this.age = age;
    this.nationalite = nationalite;
    this.instrument = instrument;
    this.modifieNationalite = function(){
        var a = prompt("Rentre la nationalite");
        this.nationalite = a;
    }
}

var instrumentCollins = ["piano","batterie"];
var musiqueCollins = ["Against All Odds","Misunderstanding"];
var collins = new Musicien("Phil Collins",45,"Britanique",instrumentCollins,musiqueCollins);

collins.modifieNationalite();
collins.nationalite