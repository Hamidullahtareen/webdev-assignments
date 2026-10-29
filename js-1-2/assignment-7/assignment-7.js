let dice_roll = Number(prompt("How many rolls: "))
let sum = 0;
for (let i = 1; i <= dice_roll; i++){
    let dice = Math.floor(Math.random() * 6) + 1
    document.getElementById("target").textContent= sum += dice 
}

