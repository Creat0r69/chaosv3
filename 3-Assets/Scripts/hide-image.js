const welcomeImage = document.querySelector('.welcome-image')
const mainboxURL = document.getElementById("target").contentWindow.location.href
const mainbox = document.getElementById("target")

//Active/inactive for the welcome image
function setWelcomeImgInactive() {
    welcomeImage.classList.add('inactive');
}

function setWelcomeImgActive() {
    welcomeImage.classList.remove('inactive');
}

function updateURL() {
    const mainboxURL = document.getElementById("target").contentWindow.location.href
    if (mainboxURL.indexOf("main") == -1) {
        setWelcomeImgInactive();
    } else {
        setWelcomeImgActive();
    }
}

//Event Listener
//homeBtn.addEventListener('click', () => {
    //setWelcomeImgActive();
    //console.log(mainboxURL);
//})

//otherBtn.addEventListener('click', () => {
    //setWelcomeImgInactive();
//})