function rollDice() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    
    const diceImage = document.querySelector('#dice img');
    
    diceImage.src = `./img/${randomNumber}.png`;
}

document.getElementById('dice').addEventListener('click', rollDice);
