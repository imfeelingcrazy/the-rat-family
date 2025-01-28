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
        showRepButton();
    }
}

function showRepButton() {
    const repButton = document.getElementById("repButton");
    repButton.style.display = "block";
}

function repUp() {
    if (gamble() >= 8) {
        incrementValue *= 2;
        alert("Your reputation in the family has increased! You now extort for " + incrementValue + " 2 profit!");
        repButton.style.display = "none";
    }
    else {
        count = 0;
        countElement.textContent = count
        repButton.style.display = "none";
    }
}
