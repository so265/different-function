//Différentes façons d'écrire les fonctions

//1ére façon d'écrire une fonction avec le mot function

function salut() {
    console.log("salut tout le monde");
}

salut()

//2éme façon d'écrire une fonction avec une variable const

const hola = function() {
    console.log("hola todos");
}

hola();

//3éme façon d'écrire une fonction avec une variable const =>

const hello = () => {
    console.log("hello everybody");
}

hello();

//Toutes ces fonctions sont statiques, pour l'instant, elles ne servent pas à grand chose

//je reprends la 1ére et je la personnalise

function salut(nom) {  //C'est la façon de paramétriser la fonction, en ajoutant un paramétre
    console.log("bonjour " + nom); //ça permet de customiser le texte bojour, je le change qd je veux
}

salut("Nathalia");
salut("Joe");
salut("Bambou");

//Opération de calcul
//function anonyme() sans paramétre, la le paramétre est compteur

function plus(compteur) {
compteur ++
return compteur; //pour que l'ajout de 1 au compteur se réalise il faut mettre return ici, aussi non, cela ne fonctionne pas
}

let compteur = 1; //Je créé une  variable avec let car modifiable
compteur = plus(compteur); //Je reprends ma variable let compteur qui est = à ma fonction plus compteur
console.log(compteur);