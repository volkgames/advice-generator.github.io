const button = document.getElementById("generate-button");
const id = document.getElementById("id");
const quote = document.getElementById("quote");

async function generate() {
    const data = await fetch("https://api.adviceslip.com/advice").then(res => res.json())

    id.innerText = data.slip.id;
    quote.innerText = data.slip.advice;
}

document.addEventListener("DOMContentLoaded", generate);
button.addEventListener("click", generate);