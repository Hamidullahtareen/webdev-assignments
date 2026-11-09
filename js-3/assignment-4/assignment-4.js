const list_of_number = [];

while(true){
    let user_input = parseFloat(prompt("Enter the number: "))

    if (user_input === 0){
        break
    }
    list_of_number.push(user_input)
}
list_of_number.sort((a,b) => b - a)
console.log(list_of_number)