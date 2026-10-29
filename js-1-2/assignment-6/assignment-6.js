const userAswer = confirm("Should I calculate the square root?")

if (userAswer == true){
    let user_input = Number(prompt("Enter the number: "))
    if (user_input < 0){
    document.getElementById("target").textContent = "The square root of a negative number is not defined"
}else{
    document.getElementById("target").textContent = Math.sqrt(user_input)
}
}else {
    document.getElementById("target").textContent = "The square root is not calculated."
}

