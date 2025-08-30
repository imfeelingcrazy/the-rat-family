cheese = 0;

const introScreen = document.getElementById('intro-screen');
function hideIntro() {
    introScreen.style.display = 'none';
}
document.addEventListener('keydown', hideIntro);
document.addEventListener('click', hideIntro);

const extort_button = document.getElementById('extort');
const cheeseCount = document.getElementById('cheese-count');
extort_button.addEventListener('click', function() {
    cheese += 1;
    cheeseCount.textContent = cheese;
    displayUpgrade();
});

const upgradeButtons = document.querySelectorAll('.upgrade');
function displayUpgrade() {
    upgradeButtons.forEach(button => {
        const threshold = parseInt(button.getAttribute('cheese-threshold'));
        if (cheese >= threshold) {
            button.style.display = 'inline-block';
        }
    });
}
upgradeButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert(`Purchased: ${button.textContent}`);
        button.style.display = 'none';
    });
});
