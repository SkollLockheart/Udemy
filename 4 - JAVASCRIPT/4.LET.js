let abh = 5;

if(9==9){
    //let variable utilisable dans des block
    let abh = "Maman";
    console.log(abh);
}

console.log(abh);

//La console affiche Maman référence au let abh dans le if
//La console affihce aussi 5 référence au let abh hors du if
//Le let peu etre mis dans une fonctionne pour cloisonner sa porter
//la console affiche donc
"Maman"
5

//------------------------------------------------------------------

//prompt popup avec un champ à renseigner
var firstVar = prompt("Salut comment tu t'appelles!?");
alert(firstVar);
//le pop up affiche ce qui a été renseigné dans le champ
console.log(firstVar);
//la console affiche ce qui a été renseigné dans le champ