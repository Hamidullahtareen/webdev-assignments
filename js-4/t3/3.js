'use strict';
const names = ['John', 'Paul', 'Jones'];

let target = document.getElementById("target") 

for (let i = 0; i < names.length; i++ ){
    let list = document.createElement("li")
    list.innerHTML = names[i]
    target.appendChild(list) 
}
