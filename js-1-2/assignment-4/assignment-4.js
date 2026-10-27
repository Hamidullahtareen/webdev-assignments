studne_name = prompt("Enter your name: ")
const place = ["Gryffindor", "Slytherin", "Hufflepuff"," Ravenclaw"]

const selection = Math.floor(Math.random() * place.length)
if (selection == 0){
    document.getElementById("result").textContent = studne_name, +", you are " + place[0] + ".";
}else if  (selection == 1){
    document.getElementById("result").textContent = studne_name +", you are " + place[1] + ".";
}else if (selection == 2){
    document.getElementById("result").textContent = studne_name +", you are " + place[2] + ".";
}else if (selection == 3){
    document.getElementById("result").textContent = studne_name +", you are " + place[3] + ".";
}