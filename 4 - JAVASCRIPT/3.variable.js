//var Variable nommé premiereVariable puis identifier en 5
var premiereVariable = 5 ;
//rappel de la premirerVariable et modifier en "Tu es nul"
premiereVariable = "Je ne suis plus 5"
//Appel de la variable premiereVariable par la console qui affiche "Tu es nul" car mis à jour
console.log(premiereVariable);
//la console affiche
"Je ne suis plus 5"

//const Constante variable nommé data et identifier en "12/04/2020
const date = "12/04/2020";
//Tantative de modification de la variable date en 23
date = 23;
//Appel de la variable date par la console qui affiche "12/04/2020" car elle ne peut être modifier
console.log(date);
//la console affiche
"Uncaught TypeError: Assignment to constant variable.at index.js:2"
//impossible de modifier une const
