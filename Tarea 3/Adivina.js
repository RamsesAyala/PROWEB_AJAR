const randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;
let attemptsLeft = 5;

function checkGuess() {
    attempts++;
    attemptsLeft--;

    const guess = parseInt(document.getElementById('guessInput').value);

    if (guess === randomNumber) {
        displayResult(`Adivinaste el número ${randomNumber} en ${attempts} intentos.`);
    } else if (attempts === 5) {
        displayResult(`Se acabaron los intentos. El número era ${randomNumber}.`);
    } else {
        displayResult(`Intento ${attempts}: Incorrecto te quedan ${attemptsLeft} intentos.`);
    }
}

function displayResult(message) {
    document.getElementById('result').textContent = message;
}
