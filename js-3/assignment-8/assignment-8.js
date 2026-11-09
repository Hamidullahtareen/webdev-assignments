const names = ["Hamid", "Sonam", "Seyar", "Marky", "DeeDee"]
function concat(list){
    let result = "";
    for (let i = 0; i < list.length; i++){
        result = result + list[i]
    }
    return result

}

document.getElementById("target").textContent = concat(names)