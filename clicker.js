incrementValue = 1;

function gamble() {
    return Math.floor(Math.random() * 10) + 1;
}

function increment() {
    countElement = document.getElementById("count");
    count = parseInt(countElement.textContent);
    count += incrementValue;
    countElement.textContent = count

    if (count === 1) {
        showDoubleButton();
    }
}

function showDoubleButton() {
    const doubleButton = document.getElementById("doubleButton");
    doubleButton.style.display = "block";
}

function doubleClick() {
    if (gamble() >= 8) {
        incrementValue *= 2;
        alert("The value of extortion has now doubled! It is now worth " + incrementValue + " money per click!")
        doubleButton.style.display = "none";
    }
    else {
        count = 0;
        countElement.textContent = count
        doubleButton.style.display = "none";
    }
}
