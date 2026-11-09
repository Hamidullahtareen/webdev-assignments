function rollDice(sides){
    let roll_dice = Math.floor(Math.random() *  sides) + 1
    return roll_dice
}

const ol_element = document.getElementById("target")

let maxSides = parseInt(prompt("How many sides the dice has"))
while(true){
    let roll = rollDice(maxSides);
    let li_element = document.createElement("li")
    li_element.textContent = roll;
    ol_element.appendChild(li_element)

    if (roll === maxSides){
        break
    }
}