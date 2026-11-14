
let form = document.getElementById("source");
let target = document.getElementById("target");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let firstName = document.querySelector('input[name="firstname"]').value;
    let lastName = document.querySelector('input[name="lastname"]').value;

    target.textContent = "Your name is " + firstName + " " + lastName;

});
