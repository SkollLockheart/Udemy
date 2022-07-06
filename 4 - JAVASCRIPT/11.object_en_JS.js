//création d'object
var perso1 = {
    name: "Shtroumpf",
    age: 15,
    nationalite:"Belge",
    defaut: "paresseux",
    afficheEnnemi: function(){
        alert("Gargamel");
    }
}

perso1.afficheEnnemi()

//la console affiche en alert
"Gargamel"

var perso2 = {
    name: "Homer",
    age: 30,
    nationalite: "Americain",
    défaut: "gourmant",
    afficheEnnemi: function(){
        alert("Burns");
    }
}

perso2.nationalite
//la console affiche
"Americain"

var perso3 = {
    name: "Dora",
    age: 8,
    nationalite: "Americaine",
    defaut: "gentille",
    afficheEnnemi: function(){
        alert("Chiper")
    }
}

perso3.name

//la console affiche
"Dora"

//constructeur création de plusieurs object
//nom d'un object constructeur toujours avec une majuscule Perso
function Perso(name,age,nationalite,defaut,ennemi){
    //this défini un object
    this.name = name;
    this.age = age;
    this.nationalite = nationalite;
    this.defaut = defaut;
    this.afficheEnnemi = function(){
        alert(ennemi);
    };
}

var dora = new Perso("Dora",8,"Americaine","gentille","Chipper");

dora.name

//la console affiche
"Dora"

var homer = new Perso("homer",30,"Americain","gourmant","Burns");

homer.afficheEnnemi()

//la console affiche en alert
"Burns"