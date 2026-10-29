userInput = Number(prompt("Enter the year: "))

if (userInput % 4 == 0 && userInput % 100 != 0 || userInput % 400 == 0){
    document.getElementById("target").textContent = userInput + "is a leap year"
}else{
    document.getElementById("target").textContent = userInput + "is not a leap year"
}


