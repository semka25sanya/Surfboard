let burgerbutton = document.querySelector("#burgerbutton")
let fullscreenmenu = document.querySelector("#fullscreenmenu")
let link = document.querySelectorAll(".fullscreen-menu__link")
let close = document.querySelector("#closebutton");

burgerbutton.addEventListener("click", function(e) {
    e.preventDefault()
});
for (var i = 0; i < link.length; i++)
    link[i].addEventListener("click", function(e) {
        fullscreenmenu.style.display = "none"
    });
    burgerbutton.addEventListener("click", function() {
        fullscreenmenu.style.display = "block"
}),
close.addEventListener("click", function() {
    fullscreenmenu.style.display = "none"
});



const left = document.querySelector("#left")
const right = document.querySelector("#right")
const innerProducts = document.querySelector("#innerProducts");

left.addEventListener("click", function(e) {
  e.preventDefault
}),

right.addEventListener("click", function(e) {
  e.preventDefault
});

let minRight = 0;
let maxRight = 1880;
let step = 940;
let currentRight = 0;

innerProducts.style.right = currentRight,
right.addEventListener("click", function() {
  currentRight < maxRight && (currentRight += step,
    innerProducts.style.right = currentRight + "px")
}),

right.addEventListener("click", function() {
  currentRight > minRight && (currentRight -= step,
    innerProducts.style.right = currentRight + "px")
});


