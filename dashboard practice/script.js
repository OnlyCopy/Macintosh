const safariW = document.getElementById('safari')
const safariL = document.getElementById('safariLogo')
const appleMusic = document.getElementById('AppleMusic')
const appleL = document.getElementById('musicLogo')
const OSToggle = document.getElementById('MacOsBtn')
const MacOSV = document.getElementById('MacOs')

function toggleTagSafari() {
    safariW.classList.toggle("hidden")
}

function toggleTagMusic() {
    appleMusic.classList.toggle("hidden")
}

function toggleTagOS() {
    MacOSV.classList.toggle("hidden")
}

