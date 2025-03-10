
let secc = document.getElementById("sec")
let maindiv = document.getElementById("main-div")
let navv = document.querySelector("nav")

secc.appendChild(maindiv)

maindiv.addEventListener("click", function(){
    
    maindiv.classList.toggle("t4")
    navv.classList.toggle("none")
})