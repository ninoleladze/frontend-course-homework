let count = 1;
const countElement = document.getElementById("count");

function increase() {
    count++;
    updateCount();
}

function decrease() {
    if (count > 0) {
        count--;
        updateCount();
    }
}

function reset() {
    count = 1;
    updateCount();
}

function updateCount() {
    countElement.textContent = count;
}
