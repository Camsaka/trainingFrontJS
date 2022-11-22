let varTest = "Coucou la console";

console.log(varTest);
console.log("Salut la console");


let firstElement = document.createElement("p");
firstElement.textContent = `Magie ${varTest}`;

document.body.appendChild(firstElement);