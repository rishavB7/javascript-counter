let number = document.getElementById("number");
let count = 0;

function increase() {
    count++;
    number.textContent = count
}
function decrease() {
    count--;
    number.textContent = count
}
function reset() {
    count = 0;
    number.textContent = count
}