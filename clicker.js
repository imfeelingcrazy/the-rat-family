const introScreen = document.getElementById('intro-screen');
function hideIntro() {
    introScreen.style.display = 'none';
}
document.addEventListener('keydown', hideIntro);
document.addEventListener('click', hideIntro);
