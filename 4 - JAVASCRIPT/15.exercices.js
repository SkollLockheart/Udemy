//-------------------------------------------------------------
//EXERCICE 1
//FONCTION QUI PREND EN ARGUMENT UN TABLEAU ET QUI RENVOIE
//LE MAXIMUM DE CE TABLEAU
//FONCTION QUI PREND EN ARGUMENT UN TABLEAU ET QUI RENVOIE
//LE MINIMUM DE CE TABLEAU

var tab = [10,25,5,46,30];
var max = Math.max.apply(null,tab);
var min = Math.min.apply(null,tab);

console.log(max);
console.log(min);

//pas d'utilisation de fonction

//deuxieme essai

//MAX
function max(tableau){
    var maximal = Math.max(tableau);
    return maximal;
}
var tableau = [10,25,5,46,30];
var maxTableau = max(tableau);
console.log(maxTableau);

//MIN
function min(tableau){
    var minimal = Math.min.apply(null,tableau);
    return minimal;
}

var tableau = [10,25,55,46,30];
var minTableau = min(tableau);
console.log(minTableau);

//CORRECTION
function max(tableau){
    var max = tableau[0];
    for(var i=0;i<tableau.length;i++){
        if(tableau[i]>max){
            max = tableau[i];
        }
    }
    return max;
}
max([3,4,1,2]);

function min(tableau){
    var min = tableau[0]
    for(var i=0;i<tableau.length;i++){
        if(tableau[i]<min){
            min = tableau[i];
        }
    }
    return min;
}
min([3,4,1,2]);

//-------------------------------------------------------------
//EXERCICE 2
//FONCTION QUI PREND EN ARGUMENT UN TABLEAU ET QUI AJOUTE
//UN "s" A TOUS LES ELEMENTS DE CE TABLEAU

function ajoutS(tableau){
    for(i=0;i<tableau.length;i++){
        tableau[i]+="s";
    }
    return tableau;
}
tableau = ["chat","chien","lapin"];
ajoutS(tableau);

//CORRECTION

function ajoute(tableau){
    for(var i=0;i<tableau.length;i++){
        tableau[i]+="s";
    }
    return tableau;
}
ajoute(["chat","chien","lapin"]);


//-------------------------------------------------------------
//EXERCICE 3
//FONCTION QUI PREND EN ARGUMENT UN TABLEAU DE NOMBRES
//ET QUI RENVOIE UN NOUVEAU TABLEAU CONTENANT UNIQUEMENT
//LES NOMBRES PAIRS

function pair(tableau){
    var tableaupair = [];
    for(var i=0;i<tableau.length;i++){
        if(tableau[i]%2==0){
            tableaupair.push(tableau[i]);
        }
    }
    return tableaupair;
}
pair([1,2,3,4,5,6]);


//-------------------------------------------------------------
//EXERCICE 4
//FONCTION QUI PREND EN ARGUMENT UN TABLEAU ET QUI RENVOIE
//UN BOOLEAN TRUE SI CE TABLEAU CONTIENT DEUX NOMBRE DIVISIBLE
//PAR 8

function vrai(tableau){
    for(var i=0;i<tableau.length;i++){
        if(tableau[i]%8==0){
            return true;
        }else{
            return false;
        }
    }
}
vrai([16,15,25])

//CORRECTION
function nvFunc(tableau){ //[6,8,16]
    var compteur = 0;
    for(var i=0;i<tableau.length;i++){
        if(tableau[i]%8==0){
            compteur++;
        }
    }
    if(compteur>=2){
        return true;
    }else{
        return false;
    }
}
nvFunc([6,8,16])