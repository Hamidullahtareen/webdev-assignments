const list_of_dogs = [];

for(let i = 0; i < 6; i++){
    let user_input = prompt("write six dogs name: ")
    list_of_dogs.push(user_input) 
}

list_of_dogs.sort().reverse()
console.log(list_of_dogs)

const ul_element = document.getElementById("target");
for(let i = 0;  i < list_of_dogs.length; i++){
    const li_element = document.createElement("li");
    li_element.textContent = list_of_dogs[i]
    ul_element.appendChild(li_element)

}