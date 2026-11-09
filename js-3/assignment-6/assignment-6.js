function rollDice(){
    let roll_dice = Math.floor(Math.random() *  6) + 1
    return roll_dice
}

const ol_element = document.getElementById("target")
while(true){
    let roll = rollDice();
    let li_element = document.createElement("li")
    li_element.textContent = roll;
    ol_element.appendChild(li_element)

    if (roll === 6){
        break
    }
}