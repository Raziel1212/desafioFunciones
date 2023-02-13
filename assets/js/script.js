function pintar(element1, color = "green"){
    element1.style.backgroundColor = color;
}
let element1 = document.getElementById('element1');

element1.addEventListener("click", function(){
    pintar(element1, "yellow");

})