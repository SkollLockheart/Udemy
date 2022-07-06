//function fonction
//nom "panier" ; argument "aliment"
function panier(aliment){
    var prixReference = 6; //variable de référence 6
    var tailleAliment = aliment.length; //taille de la variable aliment
    var prixPanier = prixReference*tailleAliment; //multiplication des deux variable précedement créé
    return prixPanier; //rappel du résultat de la fonction
}

var aliment = "orange"; //"orange" définie comme variable de aliment
var prix = panier(aliment); //variable prix défini par la fonction panier(aliment)

console.log(prix);

// la console affiche
36


function shopping(aliment1,aliment2,aliment3){
    return panier(aliment1)+panier(aliment2)+panier(aliment3)
}

var a = shopping("citron","banane","poire");
panier("citron"); //6*6=36
panier("banane"); //6*6=36
panier("poire"); //6*5=30

console.log(a);

// la console affiche
102