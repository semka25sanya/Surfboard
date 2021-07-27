var burger = document.querySelector(".hamburger")
var menu = document.querySelector(".burger-menu")
var item = document.querySelector(".burger-menu__item")
var link = document.querySelectorAll(".burger-menu__link")
var closemenu = document.querySelector(".burger-menu__close");

burger.addEventListener("click", function(e) {
    e.preventDefault()
});

burger.addEventListener("click", function(e) {
  menu.addClass("open");
});

closemenu.addEventListener("click", function (e) {
 menu.removeClass("open");
});

item.addEventListener("click", function (e) {
  menu.removeClass("open");
});



// for (var i = 0; i < link.length; i++)
//     link[i].addEventListener("click", function(e) {
//         fullscreenmenu.style.display = "none"
//     });
//     burgerbutton.addEventListener("click", function() {
//         fullscreenmenu.style.display = "block"
// }),
// close.addEventListener("click", function() {
//     fullscreenmenu.style.display = "none"
// });



const left = document.querySelector("#left")
const right = document.querySelector("#right")
const slider = document.querySelector("#slider");

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

slider.style.right = currentRight,
right.addEventListener("click", function() {
  currentRight < maxRight && (currentRight += step,
    slider.style.right = currentRight + "px")
}),

right.addEventListener("click", function() {
  currentRight > minRight && (currentRight -= step,
    slider.style.right = currentRight + "px")
});


