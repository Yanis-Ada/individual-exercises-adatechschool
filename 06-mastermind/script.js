'use strict';

const allowedColors = ['blue', 'red', 'yellow', 'green'];
const codeLength = 2;
const maxAttempts = 12;
const secretCode = ['blue', 'red'];

Object.freeze(allowedColors);
Object.freeze(secretCode);

function normalizeGuess(guess) {
    return guess.map((c) => String(c).toLowerCase().trim());
}

function isValidGuess(guess) {
    if (!Array.isArray(guess)) return false;
    if (guess.length !== codeLength) return false;

    const normalized = normalizeGuess(guess);

    return normalized.every((color) => allowedColors.includes(color));
}

function isWinningGuess(guess) {
    if (!isValidGuess(guess)) return false;

    const normalized = normalizeGuess(guess);

    return normalized.every((color, index) => color === secretCode[index]);
}


function getFeedback(guess, secret = secretCode) {
  const g = normalizeGuess(guess);
  const s = [...secret]; 

  let wellPlaced = 0;
  const remainingGuess = [];
  const remainingSecret = [];

  
  for (let i = 0; i < codeLength; i++) {
    if (g[i] === s[i]) {
      wellPlaced++;
    } else {
      remainingGuess.push(g[i]);
      remainingSecret.push(s[i]);
    }
  }


  const freq = {};
  for (const color of remainingSecret) {
    freq[color] = (freq[color] || 0) + 1;
  }

  let misplaced = 0;
  for (const color of remainingGuess) {
    if (freq[color] > 0) {
      misplaced++;
      freq[color]--;
    }
  }

  return { wellPlaced, misplaced };
}



const readline = require('readline');

function playGame() {
let attempts = 0;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(`Bienvenue dans le Mastermind !`);
console.log(`Devine la combinaison de ${codeLength} couleurs parmi : ${allowedColors.join(', ')}`);
console.log(`Tu as ${maxAttempts} essais.`);

function askGuess() {
    rl.question(`Essai ${attempts + 1}: `, (answer) => {
        const guess = answer
        .trim()
        .split(/[,\s]+/)   
        .filter(Boolean);  

        if (!isValidGuess(guess)) {
            console.log("❌ Proposition invalide. Utilise exactement", codeLength, "couleurs parmi :", allowedColors.join(', '));
        } else if (isWinningGuess(guess)) {
            console.log("🎉 Bravo ! Tu as la combinaison secrète :", secretCode.join(' '));
            rl.close();
            return;        
        } else {
            const { wellPlaced, misplaced } = getFeedback(guess, secretCode);
            console.log(`ℹ️ Indices → bien placées: ${wellPlaced}, mal placées: ${misplaced}`);
            console.log("❌ Mauvais essai. Essaie encore !");
        }

        attempts++;
        if (attempts < maxAttempts) {
            askGuess();
        } else {
            console.log("💀 Partie terminée. Le code était :", secretCode.join(' '));
        }
    });
}

askGuess();
}

playGame()
