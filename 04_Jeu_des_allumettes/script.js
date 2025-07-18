
// Fonction principale, appelée quand le joueur a cliqué sur le bouton "Démarrer" et entré un nombre de joueurs valide.
function gamePlay(numberOfPlayers) {
  // On initialise le jeu avec 
  let totalMatchstick = 50;       // 50 allumettes à retirer, 
  let currentPlayer = 1;          // le joueur 1 commence.

  // On récupère des éléments HTML pour :
  const info = document.getElementById("info");                     // afficher les messages (info),
  const inputField = document.getElementById("matchstickInput");    // lire l’entrée du joueur (inputField),
  const playBtn = document.getElementById("playBtn");               // écouter le clic sur le bouton "Jouer" (playBtn).

  // On affiche un message dans la page pour dire que le jeu a commencé, et c’est au tour du joueur en court.
  info.textContent = `🎮 Le jeu commence avec ${numberOfPlayers} joueur(s) ! Joueur ${currentPlayer}, combien d’allumettes veux-tu retirer ?`;

  // Quand on clique sur "Jouer", on exécute cette fonction fléchée.
  playBtn.addEventListener("click", () => {
    const num = parseInt(inputField.value);         // On lit le nombre d’allumettes saisies par le joueur et on le transforme en nombre entier.
    const errorMessage = document.getElementById("error-message");

    errorMessage.textContent = "";

    // On vérifie si le nombre est bien un chiffre entre 1 et 6. Sinon, on affiche une alerte et on quitte la fonction sans continuer.
    if (isNaN(num) || num < 1 || num > 6) {
      alert("Entrée invalide. Tu dois retirer entre 1 et 6 allumettes.");
      return;
    }

    if (num > totalMatchstick) {
    errorMessage.textContent = `❌ Impossible ! Il ne reste que ${totalMatchstick} allumette(s).`;
    return;
    }

    // On retire le nombre saisi du total d’allumettes.
    totalMatchstick -= num;

    // Si le total est à zéro ou moins, on affiche un message de victoire, on désactive le bouton et le champ, puis on arrête la fonction.
    if (totalMatchstick <= 0) {
      info.textContent = `🎉 Bravo Joueur ${currentPlayer}, tu as gagné en retirant la dernière allumette !`;
      playBtn.disabled = true;
      inputField.disabled = true;
      return;
    }

    // Change de joueur
    currentPlayer = currentPlayer === numberOfPlayers ? 1 : currentPlayer + 1;

    info.textContent = `✅ Il reste ${totalMatchstick} allumette(s). Joueur ${currentPlayer}, à toi de jouer !`;
    inputField.value = ""; // On vide le champ
  });
}

document.getElementById("startBtn").addEventListener("click", () => {
  const playerInput = document.getElementById("playerCount");
  const numberOfPlayers = parseInt(playerInput.value);

  if (isNaN(numberOfPlayers) || numberOfPlayers < 2) {
    alert("Entrée invalide. Entrez un nombre valide (au moins 2 joueurs)");
    return;
  }

  // Masque le champ de départ
  document.getElementById("setup").style.display = "none";
  document.getElementById("gameplay").style.display = "block";

  gamePlay(numberOfPlayers);
});
