'use strict';

const allowedColors = ['blue', 'red', 'yellow', 'green'];
const codeLength = 2;
const maxAttempts = 12;
const secretCode = ['blue', 'red'];

Object.freeze(allowedColors);
Object.freeze(secretCode);

console.log('[Init] Étape 1 - constantes chargées :', {
    allowedColors,
    codeLength,
    maxAttempts,
    secretCode,
});

function normalizeGuess(guess) {
    return guess.map((c) => String(c).toLowerCase().trim());
}

function isValideGuess(guess) {
    if (!Array.isArray(guess)) return false;
    if (guess.length !== codeLength) return false;

    const normalized = normalizeGuess(guess);

    return normalized.every((color) => allowedColors.includes(color));
}

function isWinningGuess(guess) {
    if (!isValideGuess(guess)) return false;

    const normalized = normalizeGuess(guess);

    return normalized.every((color, index) => color === secretCode[index]);
}

// --- Tests rapides 1C ---
console.log('isWinningGuess(["blue","red"]) =>', isWinningGuess(['blue','red'])); // true
console.log('isWinningGuess(["Blue"," RED "]) =>', isWinningGuess(['Blue',' RED '])); // true (normalisation)
console.log('isWinningGuess(["red","blue"]) =>', isWinningGuess(['red','blue'])); // false (mauvais ordre)
console.log('isWinningGuess(["blue","yellow"]) =>', isWinningGuess(['blue','yellow'])); // false
console.log('isWinningGuess(["purple","red"]) =>', isWinningGuess(['purple','red'])); // false (invalide)