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
});
