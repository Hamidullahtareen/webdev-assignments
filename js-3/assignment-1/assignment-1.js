const list_of_number = [];

for(let i = 0; i < 5; i++){
    const user_input = parseFloat(prompt("Enter your number:"))
    list_of_number.push(user_input)
}
for(let i = list_of_number.length - 1; i >= 0; i--)
        console.log(list_of_number[i])
