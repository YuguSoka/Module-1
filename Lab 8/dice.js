function rollDice() {
    const dice1 = document.getElementById('dice1');
    const dice2 = document.getElementById('dice2');
    const result = document.getElementById('result');
    
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;
    
    dice1.src = "Dice1${randomNumber1}.png";
    dice2.src = "Dice2${randomNumber2}.png";
    
    const sum = randomNumber1 + randomNumber2;
    result.textContent = 'Result: ' + sum;
}
