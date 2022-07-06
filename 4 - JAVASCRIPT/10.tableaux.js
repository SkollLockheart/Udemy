//tab tableau
var tab = ["courgette","carotte","aubergine","tomate"];
typeof(tab);

//la console affiche
Object

var tab = ["courgette","carotte","aubergine","tomate"];
var légume1 = tab [1];
console.log (legume1);

//la cosnsole affiche 
"carotte"

var tab = ["courgette","carotte","aubergine","tomate"];
var taille = tab.length;
var lastElement = tab[taille-1] //-1 car l'on compte de 0
console.log(taille);

//la console affiche
4

//push taille du tableau et ajoute un element au tableau
var tab = ["courgette","carotte","aubergine","tomate"];
var a = tab.push("conmbre");
console.log(a);

//la console affiche 
5

//pop retire un element et affiche l'élément enlevé
var tab = ["courgette","carotte","aubergine","tomate"];
tab.pop();

//la console affiche
"tomate"

//sort classe par ordre alphabétique
var tab = ["courgette","carotte","aubergine","tomate"];
tab.sort();

//la console affiche
["courgette","carotte","aubergine","tomate"]

//tab.concat permet de concatener 
var tab = ["courgette","carotte","aubergine","tomate"];
var tab1 = ["fraise","banane","pasteque","citron"];
var tab3 = tab.concat(tab1);

console.log(tab3);

//la console affiche
["courgette","carotte","aubergine","tomate","fraise","banane","pasteque","citron"]