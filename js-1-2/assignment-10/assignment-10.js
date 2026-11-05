const dice = parseInt(prompt("Number of dice:"));
const sum = parseInt(prompt("Sum of eye:"));
const round = 10000;
let hits = 0;

for (let i = 0; i < round; i++){
    let total = 0;
    for (let d = 0; d < dice; d++){
        total += Math.floor(Math.random() * 6) + 1;
    }
    if (total === sum) hits++;
}

const probability = hits /round*100;

document.getElementById("target").innerHTML = "Probability to get sum " + sum + " with " + dice + " dice is " + probability.toFixed(2) +"%"