const list_of_number = [];


while(true){
    let userInput = parseFloat(prompt("Enter number here:"))
        if (list_of_number.includes(userInput)){
            alert("This number is already in the list")
            break
        }
        list_of_number.push(userInput)

    }

    list_of_number.sort((a,b) => a - b)
    console.log(list_of_number)
