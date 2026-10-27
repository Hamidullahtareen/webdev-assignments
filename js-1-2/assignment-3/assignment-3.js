num1 = Number(prompt("Enter first number: "))
num2 = Number(prompt("Enter second number: "))
num3 = Number(prompt("Enter third number: "))

sum = num1 + num2 + num3
product = num1 * num2 * num3
average = sum / 3


document.getElementById("sum").textContent = "Sum:" + sum;
document.getElementById("product").textContent = "Product:" + product;
document.getElementById("average").textContent = "Average:" + average;
