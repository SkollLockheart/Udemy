//indexOf
var chaine = "maman";

//indexOf appel la 1er occurance
var indice = chaine.indexOf("am");

console.log(indice);

// la console affiche
1

// la console donne la première occurance de am dans la varriable chaine
// m(0)a(1)m(2)a(3)n(4)

//length
var chaine = "maman";

//lenght donne le taille d'une chaine de caractère 
var taille = chaine.length;

console.log(taille);

// la console affiche
5

//slice
var chaine = "maman";

//slice permet de prendere une portion
//() premiere valeur le départ, seconde valeur la fin exclut
var taille = chaine.slice(1,3);

console.log(taille);

// la console affiche
"am"

//substring
var chaine = "maman";

//substring permet de prendere une portion
//() premiere valeur le départ, seconde valeur la fin exclut
var taille = chaine.substring(1,3);

console.log(taille);

// la console affiche
"am"

//toUpperCase
var chaine = "maman";

//toUpperCase mais la chaine de caractère en majuscule
var taille = chaine.toUpperCase();

console.log(taille);

// la console affiche
"MAMAN"

//toLowerCase
var chaine = "MAMAN";

//toLowerCase mais la chaine de caractère en minuscule
var taille = chaine.toLowerCase();

console.log(taille);

// la console affiche
"maman"

//charAt
var chaine = "maman";

//charAt donne l'information d'un caratère dans une chaine
var taille = chaine.charAt(4);

console.log(taille);

//la console affiche
"n"

//concat
var chaine = "maman";

//concat sert à concatener différente valeurs
var taille = chaine.concat(" ","et papa");

console.log(taille);

// la console affiche
"maman et papa"