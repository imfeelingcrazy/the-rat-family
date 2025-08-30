let cheese = 0;
const cheeseCount = document.getElementById('cheese-count');
passiveIncome = 0;
setInterval(() => {
    if (passiveIncome > 0) {
        cheese += passiveIncome;
        updateCheeseDisplay();
        checkPrestige();
    }
}, 1000);
function updateCheeseDisplay() {
    cheeseCount.textContent = cheese;
}
let upgradePurchased = {};
const lemonrat = document.getElementById('lemonrat');
const pizzarat = document.getElementById('pizzarat');


reachPres1 = false;

function checkPrestige() {
    const extortButton = document.getElementById('extort');
    const prestige1 = document.getElementById('prestige1');

    const prestige1Threshold = 200;
    if (cheese >= prestige1Threshold && !reachPres1 && upgradePurchased['lemonade'] && upgradePurchased['pizza']) {
        extortButton.style.display = 'none';
        prestige1.style.display = 'block';
    }
}


const introScreen = document.getElementById('intro-screen');
function hideIntro() {
    introScreen.style.display = 'none';
}
document.addEventListener('keydown', hideIntro);
document.addEventListener('click', hideIntro);

const extort_button = document.getElementById('extort');
extort_button.addEventListener('click', function() {
    if (reachPres1 === false) {
        cheese += 1;
    } else if (reachPres1 === true) {
        cheese += 2;
    }
    updateCheeseDisplay();
    displayUpgrade();
    checkPrestige();
});

const upgradeButtons = document.querySelectorAll('.upgrade');
function displayUpgrade() {
    upgradeButtons.forEach(button => {
        const threshold = parseInt(button.getAttribute('cheese-threshold'));
        const id = button.id;
        if (cheese >= threshold && !upgradePurchased[id]) {
            button.style.display = 'inline-block';
        }
    });
}
const yippee = document.getElementById('upgrade-sound');
upgradeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const id = button.id;
        yippee.currentTime = 1;
        yippee.play();
        const cost = parseInt(button.getAttribute('cheese-threshold'));
        if (cheese >= cost && !upgradePurchased[id]) {
            cheese -= cost;
            updateCheeseDisplay();

            upgradePurchased[id] = true;
            button.style.display = 'none';


            if (id === 'lemonade') {
                lemonrat.style.display = "block";
                passiveIncome += 1;
            }

            if (id === 'pizza') {
                pizzarat.style.display = "block";
                passiveIncome += 2;
            }
        }
    });
});

const prestige1 = document.getElementById('prestige1');
const prestige1Screen = document.getElementById('prestige1-screen');
prestige1.addEventListener('click', function() {

    prestige1Screen.style.display = 'flex';

    document.addEventListener('keydown', continuePrestige1)
    prestige1Screen.addEventListener('click', continuePrestige1)
});

function continuePrestige1() {

    document.removeEventListener('keydown', continuePrestige1)
    prestige1Screen.removeEventListener('click', continuePrestige1)

    cheese = 0;
    updateCheeseDisplay();
    reachPres1 = true;
    prestige1.style.display = 'none';
    document.getElementById('extort').style.display = 'block';

    upgradeButtons.forEach(button => {
        button.style.display = 'none';
    });
    upgradePurchased = {};

    lemonrat.style.display = 'none';
    pizzarat.style.display = 'none';
    passiveIncome = 0;

    const chester_p1 = document.getElementById('chester_p1');
    const chester = document.getElementById('chester');
    chester.style.display = 'none'
    chester_p1.style.display = 'block'

    prestige1Screen.style.display = 'none';
}


