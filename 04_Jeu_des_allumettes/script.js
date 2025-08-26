

function gamePlay(numberOfPlayers) {

  let totalMatchstick = 50;        
  let currentPlayer = 1;          
  const info = document.getElementById("info");                     
  const inputField = document.getElementById("matchstickInput");    
  const playBtn = document.getElementById("playBtn");               

  
  info.textContent = `🎮 Le jeu commence avec ${numberOfPlayers} joueur(s) ! Joueur ${currentPlayer}, combien d’allumettes veux-tu retirer ?`;

  
  playBtn.addEventListener("click", () => {
    const num = parseInt(inputField.value);         
    const errorMessage = document.getElementById("error-message");

    errorMessage.textContent = "";


    if (isNaN(num) || num < 1 || num > 6) {
      alert("Entrée invalide. Tu dois retirer entre 1 et 6 allumettes.");
      return;
    }

    if (num > totalMatchstick) {
    errorMessage.textContent = `❌ Impossible ! Il ne reste que ${totalMatchstick} allumette(s).`;
    return;
    }

    
    totalMatchstick -= num;

    
    if (totalMatchstick <= 0) {
      info.textContent = `🎉 Bravo Joueur ${currentPlayer}, tu as gagné en retirant la dernière allumette !`;
      playBtn.disabled = true;
      inputField.disabled = true;
      return;
    }

  
    currentPlayer = currentPlayer === numberOfPlayers ? 1 : currentPlayer + 1;

    info.textContent = `✅ Il reste ${totalMatchstick} allumette(s). Joueur ${currentPlayer}, à toi de jouer !`;
    inputField.value = ""; 
  });
}

document.getElementById("startBtn").addEventListener("click", () => {
  const playerInput = document.getElementById("playerCount");
  const numberOfPlayers = parseInt(playerInput.value);

  if (isNaN(numberOfPlayers) || numberOfPlayers < 2) {
    alert("Entrée invalide. Entrez un nombre valide (au moins 2 joueurs)");
    return;
  }

 
  document.getElementById("setup").style.display = "none";
  document.getElementById("gameplay").style.display = "block";

  gamePlay(numberOfPlayers);
});
