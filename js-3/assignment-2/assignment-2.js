const list_of_name =[];

let participants = parseInt(prompt("Number of participants: "))

for(let i = 0; i < participants; i++){
    let name_of_participants = prompt("Names of all participants: ")
    list_of_name.push(name_of_participants)
}
list_of_name.sort()
console.log(list_of_name)

const ol_elements = document.getElementById("target");

for(let i = 0; i < list_of_name.length; i++){
    const li_element = document.createElement("li")
    li_element.textContent = list_of_name[i]
    ol_elements.appendChild(li_element)
}