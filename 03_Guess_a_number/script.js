// Guess a number.
// Étape 1 :
//* Créer une fonction qui demande un nombre à l’utilisateur à l’aide d’un prompteur. 
//  Stocker sa réponse dans une variable de type adéquat nommée givenNumber.

// Je déclare une fonction nommée askNumber (nom explicite lié à "demande un nombre à l'utlisateur").
function askNumber(){

// La consigne étant de créer un prompteur, je déclare une variable nommée input (référence au nombre que l'utilisateur va "entrer").
// Le message "Devine un nombre" oriente l'interaction utilisateur vers le bon comportement.
// `const` est utilisé ici car cette valeur n'a pas besoin d'être modifiée ensuite.
    const input = prompt("Devine un nombre")

//* Il est demandé de stocker sa réponse dans une variable de type adéquate.
//  Je déclare donc une variable givenNumber et convertis la valeur stocké dans input en un type Number grâce à la fonction native Number().
//  `const` est approprié car `givenNumber` est assigné une seule fois et ne change pas ensuite.
    const givenNumber = Number(input)

//* Je souhaite que ma fonction askNumber() produise un résultat : le nombre saisi par l'utilisateur, converti en type number.
//  J'utilise donc l'instruction return givenNumber pour renvoyer cette valeur en sortie de la fonction.
    return givenNumber
}

//* Je déclare une variable givenNumber avec le mot-clé let, car je souhaite stocker le résultat retourné par la fonction askNumber().
//  Cette fonction exécute une demande à l'utilisateur, récupère son entrée via prompt, la convertit en type number, puis me la renvoie avec return.
//  En stockant ce résultat dans givenNumber, je peux ensuite l'utiliser ailleurs.
//  ➤ Ici, `let` est utilisé car on pourrait envisager de modifier la valeur (ex : plusieurs tentatives).
let givenNumber = askNumber()

//  J'affiche le résultat dans la console pour le vérifier.
//  console.log("Tu as écris : " + givenNumber)


//--------------------------------------------------------------------------------------------------------//

// Étape 2 :

// function didIWin(givenNumber){
//     if(givenNumber === 22){
//         alert("Bravo! Tu as deviné le nombre")
//     }else if(givenNumber < 22){
//         alert("Plus grand.")
//     }else if(givenNumber > 22){
//         alert("Plus petit.")
//     }
// }

// function gamePlay() {
//   const givenNumber = askNumber();
//   didIWin(givenNumber);
// }

// gamePlay()

//--------------------------------------------------------------------------------------------------------//

// Étape 3 :

// Fonction qui demande un nombre au joueur avec un prompt
function askNumber() {
  const input = prompt("Devine un nombre");         // Demande à l'utilisateur de saisir un nombre
  const givenNumber = Number(input);                // Convertit l'entrée en nombre
  return givenNumber;                               // Renvoie le nombre converti
}

// Fonction qui vérifie si le nombre proposé est correct
function didIWin(givenNumber) {
  if (givenNumber === 22) {                         // Si le nombre est égal à 22
    alert("Bravo ! Vous avez deviné le nombre");    // Message de victoire
    return true;                                    // Le joueur a gagné
  } else if (givenNumber < 22) {                    // Si le nombre est trop petit
    alert("Plus grand");                            // Indice : il faut deviner plus grand
  } else {                                          // Si le nombre est trop grand
    alert("Plus petit");                            // Indice : il faut deviner plus petit
  }
  return false;                                     // Le joueur n’a pas encore gagné
}

// Fonction principale qui gère la boucle du jeu
function gamePlay() {
  let hasWon = false;                               // Variable pour suivre l’état du jeu

  while (!hasWon) {                                 // Tant que le joueur n’a pas gagné
    const givenNumber = askNumber();                // On demande un nombre au joueur
    hasWon = didIWin(givenNumber);                  // On vérifie s’il a gagné
  }
}

// Démarre le jeu
gamePlay();


//--------------------------------------------------------------------------------------------------------//

