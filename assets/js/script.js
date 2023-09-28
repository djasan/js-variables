//  les variables*/

// pour déclarer une variable je peux utilser plusieurs termes, le premier : 
// var(outdated) ;const(une variable constante elle, gardera le même type dans tout mon script)
// let(une variable qui peut être réasignée à tous moments avec n'importe quelle valeur et n'importe quel type)
// ma permière instruction. chaque instruction se termine par un ;

let prenom = "julien" ;

// console.log("mon texte");  console. log affiche des informations de type string
console.log("mon texte");
console.log(prenom);
// let prenom ="Bob"; il est interdit de redéclarer une variable.

 prenom ="Bob"  
 //type sting
console.log(prenom);
prenom =42;
 //type number
console.log(prenom);

const lastName ="l'Éponge";
console.log(lastName);

//  lastName = 142; une varible const ne peut pas être réassignée. deux types de variables; let et const.(plus de var)
// /*  */

const block = document.querySelector("#block");
// block ="bonjour"; ne marche pas
block.style.backgroundColor ="red";
block.innerText ="Patate";
console.dir(block);

block.innerHTML="<button>Grosse Patate</button>";
block.textContent = "Grosse\"grosse\" patate";

// pour utiliser des caractères spéciaux dans une chaîne de caractères, je dois utiliser  devant ces derniers guillemets un anti\;

// const color1 ="orange";
// const color2= "blue";
// const color3="red";
// console.log(color1);
const themeColor =["orange","blue","red"];
themeColor[1]="green";
console.log(themeColor[1]);
const tva = [5.5,19.6];
console.log(tva);
console.log(tva[0]);
console.log(tva[1]);


console.log(tva);
console.dir(tva);



let priceBrut = 499;
console.log(priceBrut+(priceBrut*tva[0]/100));
console.log(priceBrut+(priceBrut*tva[1]/100));
// afficher dans la div le #resultatPrix1 le calcul de tva 5.5.

const resultatPrix1 = document.querySelector("#resultatprix1");
resultatPrix1.innerText =priceBrut+(priceBrut*tva[0]/100);

 priceBrut = 128 ;
console.log(priceBrut+(priceBrut*tva[0]/100));
console.log(priceBrut+(priceBrut*tva[1]/100));

const resultatPrix2 = document.querySelector("#resultatprix2");
resultatPrix2.innerText =priceBrut+(priceBrut*tva[0]/100);

