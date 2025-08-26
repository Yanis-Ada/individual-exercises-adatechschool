// JEU DES ALLUMETTES

// ETAPE 1

// Nb total d'allumettes
let nbTotalAllumettes = 50
const message = document.getElementById("message")
const inputAllumettesAretirer = document.getElementById("inputAllumettesAretirer")

message.textContent = "Choisis un nombre entre 1 et 6 d'allumettes à retirer"      

// Fonction soustraireAllumettes, qui prend en paramètre le nombre µ
// d'allumettes à enlever du reste et les enlève
function soustraireAllumettes(nbAllumettes){
    nbTotalAllumettes = nbTotalAllumettes - nbAllumettes
    // OU nbTotalAllumettes -= nbAllumettes
}

// ETAPE 2
// Fonction joueur, qui demande a l'utilisateur combien d'allumettes 
// il souhaite retirer tant qu’il y a des allumettes dans le tas
// et qui les retire
function joueur(){
    if(nbTotalAllumettes > 0){
        // On soustrait les allumettes
        soustraireAllumettes(inputAllumettesAretirer.value)
        console.log(nbTotalAllumettes)
        // On met à jour le nombre max d'allumettes qu'on peut retirer
        let maxAllumettesRetirables = Math.min(nbTotalAllumettes,6)
        console.log("maxAllumettesRetirables : " + maxAllumettesRetirables)
        // On met à jour l'input avec la valeur max possible
        inputAllumettesAretirer.max = maxAllumettesRetirables
        // On met à jour le message affiché
        message.textContent = "Choisis un nombre entre 1 et " + maxAllumettesRetirables + " d'allumettes à retirer"
    } else {
        console.log("yen a pu")
        message.textContent = "Bravo !"
    }
}

const boutonValider = document.getElementById("boutonValider")
boutonValider.addEventListener("click",joueur);

