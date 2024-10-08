console.log("hello world");

document.querySelector("h1").addEventListener("click", onClick);
let cheeseImg = document.querySelector("img");

function onClick() {
    cheeseImg.classList.toggle("hidden");
}