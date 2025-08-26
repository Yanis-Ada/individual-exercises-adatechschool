// Demander a l'utilisateur combien d'allumettes il souhaite retirer tant qu’il y a des allumettes dans le tas. 
// Pour rappel, on a 50 allumettes au départ.

let nombre_allumettes = 50; // initialisation du nombre d'allumettes de base

function retrait_allumettes(){ // prompt + valeur du retrait d'allumettes
   let nombre_retrait = parseInt(prompt("Combien d'allumettes prends-tu ?"));
   return nombre_retrait; // retour de la valeur de retrait d'allumettes
}

function regles_allumettes(retrait){ // regles de retrait du nombre d'allumettes
   if (retrait < 1 || retrait > 6){ // condition si retrait dépasse range de 1 à 6
      alert("Tu peux retirer entre 1 et 6 allumettes");
      return false; // booléen de validation de condition
   } else if (retrait > nombre_allumettes) { // condition si retrait depasse le nombre d'allumettes restant
      alert(`Il n'y a que ${nombre_allumettes} allumettes restantes. Tu ne peux pas en retirer ${retrait}.`);
      return false; // booléen de validation de condition
   }
   return true;
}

function tas_d_allumettes(allumettes_retirees) { // décrémentation du nombre d'allumettes
   nombre_allumettes -= allumettes_retirees;
   alert(`Il reste ${nombre_allumettes} allumettes`);
} 

function tour_de_jeu() {
   while (nombre_allumettes > 0){ // tant que le nombre d'allumettes est strictement sup à 0
      let allumettes_retirees = retrait_allumettes(); // appel de la fonction retrait allumettes et mise en variable
      if (regles_allumettes(allumettes_retirees)){ // vérifie que les règles sont respectées puisque que fonction booléenne
         tas_d_allumettes(allumettes_retirees); // si retour de la fonction regles_allumettes true => éxecution du code tas_d'allumettes 
      }
   } 
   if (nombre_allumettes === 0){ // condition de victoire
      alert("Bravo, tu as pris la dernière allumette !");
   }
}

tour_de_jeu();

