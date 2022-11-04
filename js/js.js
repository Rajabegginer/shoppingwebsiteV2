

// function navon(){
//     document.getElementById('navbar').style.display = "block";
//     document.getElementById('ham1').style.display = "none";
//     document.getElementById('ham2').style.display = "block";
//     document.getElementById('overlay').style.display = "block";
// }

// function navoff(){
//     document.getElementById('navbar').style.display = "none";
//     document.getElementById('ham2').style.display = "none";
//     document.getElementById('ham1').style.display = "inline";
//     document.getElementById('overlay').style.display = "none";
// }

let btn1 = document.getElementById('ham1')
let btn2 = document.getElementById('ham2')
let nav = document.getElementById('navbar')
let overlay = document.getElementById('overlay')

btn1.addEventListener('click', toggleNavOn)
btn2.addEventListener('click', toggleNavOff)

function toggleNavOn() {
    
    btn1.style.display = 'none'
    nav.style.display = 'block'
    btn2.style.display = 'block'
    overlay.style.display = 'block'
    
    
}

function toggleNavOff() {
   
    btn1.style.display = 'block'
    nav.style.display = 'none'
    btn2.style.display = 'none'
    overlay.style.display = 'none'
    
}