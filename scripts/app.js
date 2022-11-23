let varTest = "Coucou la console";

console.log(varTest);
console.log("Salut la console");


let firstElement = document.createElement("p");
firstElement.textContent = `Magie ${varTest}`;

document.body.appendChild(firstElement);

let element;
console.log(typeof(element));
let chiffre = 10;
let chaine = "Je suis un string";

element = chaine;

let result;
result = (typeof(element) == "number") ? 'C\'est bien un chiffre' : 'Nous demandons un chiffre';

let chaine2 = "fubhiniàhiànaf";
let chaineConverted = parseInt(chaine2);

console.log(chaineConverted);


//arrays

var tableau = ["abc","def","ghi"];
tableau.push("camille","gautier");
console.log(tableau);

//delete last element
tableau.pop();
console.log(tableau);
//delete first element
tableau.shift();
console.log(tableau);
//place un curseur avant la valeur du premier paramètre
//deuxieme param = nombre d'élément à modifier
//les autres sont les éléments à ajouter depuis la position du curseur
tableau.splice(1, 2, "splice", "splice2");
console.log(tableau);


let myDiv = document.getElementById("myDiv");
myDiv.innerHTML = "Clique ici";
myDiv.onclick = function() {
        this.style.backgroundColor = "blue";
        alert("Tu viens de cliquer ma div !!");
        location="https://google.com";
}