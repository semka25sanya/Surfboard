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


