/*********************************************************************************
 * 
 * Point d'entrée, c'est lui qui intialise le jeu et lance la boucle de jeu. 
 * 
 *********************************************************************************/

lancerJeu()


// selection éléments avec la méthode getElementById
let baliseInputUser = document.getElementById("inputEcriture");
console.log(baliseInputUser);

let baliseBtnValider = document.getElementById("btnValiderMot");
console.log(baliseBtnValider);


// selection éléments avec la méthode querySelector
let baliseZoneProposition = document.querySelector(".zoneProposition");
console.log(baliseZoneProposition);

let spanScore = document.querySelector(".zoneScore span");
console.log(spanScore);


// selection éléments avec la méthode querySelectorAll
let baliseBtnRadio = document.querySelectorAll(".optionSource input");
console.log(baliseBtnRadio);
for (let i = 0; i < baliseBtnRadio.length; i++) {
    console.log(baliseBtnRadio[i]);
}
