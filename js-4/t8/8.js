
let input1 = document.getElementById("num1");
let input2 = document.getElementById("num2");
let selection = document.getElementById("operation")
let button = document.getElementById("start")



button.addEventListener("click", function(){
    let number1 = Number(input1.value);
    let number2 = Number(input2.value);
    let operation = selection.value;

    let result = 0;

    if (operation === "add"){
        result = number1 + number2
        document.getElementById("result").textContent = "The result " + result
    } else if(operation === "sub"){
        result = number1 - number2
        document.getElementById("result").textContent = "The result " + result
    }else if(operation === "multi"){
            result = number1 * number2
            document.getElementById("result").textContent = "The result " + result
    }else if(operation === "div"){
        result = number1 / number2
        document.getElementById("result").textContent = "The result " + result
    }
  

})
