//== egalité
if(7==5+3){
    console.log("cest bon")
} else{
    console.log("cest pas bon")
}

//la console affiche
"cest pas bon"

//=== egalité de type et de valeur
if(8===5+3){
    console.log("cest bon")
} else{
    console.log("cest pas bon")
}

//la console affiche
"cest bon"

if("8"===5+3){
    console.log("cest bon")
} else{
    console.log("cest pas bon")
}

//la console affiche
"cest pas bon"

//>= superieurs ou égal et <= inférieur ou égal
if(18>=100){
    console.log("cest bon")
} else{
    console.log("cest pas bon")
}

//la console affiche 
"cest pas bon"

var tab = ["Boeuf","Agneau","Mouton"]
if(tab[1]="Agneau"){
    console.log("bonjour");
}else{
    console.log("aurevoir")
}

//la console affiche
"bonjour"

var tab = ["Boeuf","Agneau","Mouton"]
if(tab[1]="agneau"){
    console.log("bonjour");
}else{
    console.log("aurevoir")
}

//la console affiche
"aurevoir"

//!== diférent
var tab = ["Boeuf","Agneau","Mouton"]
if(32!==32){
    console.log("different");
}else{
    console.log("identique")
}

//la console affiche
"identique"


//&& permet de combiner plusieurs condition en et
var tab = ["Boeuf","Agneau","Mouton"]
if(32===32 && tab[0]=="Boeuf"){
    console.log("Tu as raison");
}else{
    console.log("Tu as tord")
}

//la console affiche
"Tu as raison"

var tab = ["Boeuf","Agneau","Mouton"]
if(32===32 && tab[0]=="Agneau"){
    console.log("Tu as raison");
}else{
    console.log("Tu as tord")
}

//la console affiche
"Tu as tord"


//|| permet de combiner plusieurs condition en ou
var tab = ["Boeuf","Agneau","Mouton"]
if(32===32 || tab[0]=="Agneau"){
    console.log("Tu as raison");
}else{
    console.log("Tu as tord")
}

//la console affiche
"Tu as raison"