let trigger = document.getElementById("trigger")
let target = document.getElementById("target")

trigger.addEventListener("mouseenter", function(){
    target.src = "picB.jpg"

})

trigger.addEventListener("mouseout", function(){
    target.src = "picA.jpg"

})