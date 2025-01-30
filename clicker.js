incrementValue = 1;
cheese = false;

repButtonShown = false;
ppsButtonShown = false;

function gamble() {
    return Math.floor(Math.random() * 10) + 1;
}

function increment() {
    countElement = document.getElementById("count");
    count = parseInt(countElement.textContent);
    count += incrementValue;
    countElement.textContent = count;

    if (count >= 1 && !repButtonShown) {
        showRepButton();
    }

    if (count >= 5 && !ppsButtonShown) {
        showPPS();
        ppsButtonShown = true;
    } 

    if (count < 5 && ppsButtonShown) {
        hidePPS();
        ppsButtonShown = false;
    }
    
    if (count === 0 && ppsButtonShown) {
        hidePPS();
        ppsButtonShown = false;
    }

}

function showRepButton() {
    const repButton = document.getElementById("repButton");
    repButton.style.display = "block";
}

function showPPS() {
    const pps = document.getElementById("pps");
    pps.style.display = "block";
}

function hidePPS() {
    const pps = document.getElementById("pps"); 
    pps.style.display = "none";
}

function repUp() {
    const repButton = document.getElementById("repButton");
    if (gamble() >= 8) {
        incrementValue *= 2;
        alert("Your reputation in the family has increased! You now extort for " + incrementValue + " profit!");
        repButton.style.display = "none";
        repButtonShown = true;
    } else {
        count = 0;
        countElement.textContent = count;
        repButton.style.display = "none";
        hidePPS();
    }
}

function moreProf() {
    const pps = document.getElementById("pps");
    cheese = true;
    if (cheese == true) {
        setInterval(() => {
            count += 1;
            countElement.textContent = count;
        }, 1000);
        pps.style.display = "none";
    }
}
