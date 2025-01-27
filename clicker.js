incrementValue = 1;

function increment() {
    countElement = document.getElementById("count");
    count = parseInt(countElement.textContent);
    count += incrementValue;
    countElement.textContent = count

    if (count === 10) {
        showDoubleButton();
    }
}

function showDoubleButton() {
    const doubleButton = document.getElementById("doubleButton");
    doubleButton.style.display = "block";
}

function doubleClick() {
    incrementValue *= 2;
    alert("The value of extortion has now doubled! It is now worth " + incrementValue + "money per click!")
    doubleButton.style.display = "none";
}
