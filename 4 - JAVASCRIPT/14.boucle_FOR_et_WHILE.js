//for permet la creation d'une boucle
//var i=0 indice de départ
for(var i=0;i<10;i++){
    console.log(i);
}

//la console affiche
0
1
2
3
4
5
6
7
8
9

//creation d'une chaine de caratere
var a = "";
for(var i=0;i<10;i++){
    a+=i;
}
console.log(a);

//la console affiche
"0123456789"

var a = "";
for(var i=0;i<10;i++){
    a+=i;
    console.log(a);
}

//la console affiche
0
01
012
0123
01234
012345
0123456
01234567
"012345678"
"0123456789"

//vider un tableau
var a = ["un","deux","trois","quatre"];
for(var i=0;i<4,i++;){
    a.pop();
}

//vérifie si un element est égal a "trois" et supprime les élément suivants
var a = ["un","deux","trois","quatre"];
for(var i=0;i<a.length,i++;){
    if(a[i]=="trois"){
        a.pop();
    }
}

//while creation d'un boucle tant que 
var i = 0
var a = ""
while(i<10){
    a+=i;
    i++;
}
console.log(a);

//la console affiche
"0123456789"