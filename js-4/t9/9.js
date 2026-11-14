
let calculation = document.getElementById("calculation");
let button = document.getElementById("start");
let final_result = document.getElementById("result")

button.addEventListener("click", function() {

    let userInput = calculation.value;
    let result = 0;
    let parts;

    if (userInput.includes("+")) {
        parts = userInput.split("+");
        result = Number(parts[0]) + Number(parts[1]);
    }

    if (userInput.includes("-")) {
        parts = userInput.split("-");
        result = Number(parts[0]) - Number(parts[1]);
    }

    if (userInput.includes("*")) {
        parts = userInput.split("*");
        result = Number(parts[0]) * Number(parts[1]);
    }

    if (userInput.includes("/")) {
        parts = userInput.split("/");
        result = Number(parts[0]) / Number(parts[1]);
    }
    final_result.textContent = result
});
