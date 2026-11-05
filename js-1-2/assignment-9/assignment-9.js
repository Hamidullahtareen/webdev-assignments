const n = parseInt(prompt("Enter an integer:"));
let prime = n > 1;

for (let i = 2; i < n; i++) {
  if (n % i === 0) prime = false;
}

document.getElementById("target").innerHTML =
  n + (prime ? " is a prime number." : " is not a prime number.");