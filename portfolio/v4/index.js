const menuToggleBtn = document.getElementById("menu-bars")
const closeBtn = document.getElementById("close-menu")
const navBar = document.getElementById("nav-ul")

if(menuToggleBtn) {
    menuToggleBtn.addEventListener('click', function() {
        navBar.classList.add('opened')
        closeBtn.classList.toggle('hidden')
    })
}

if(closeBtn) {
    closeBtn.addEventListener('click', function() {
        navBar.classList.remove('opened')
        closeBtn.classList.toggle('hidden')
    })
}

const switchEl = document.getElementById("themeSwitch")
const iconEl = document.getElementById("themeIcon")
const sunIcon = document.getElementById("sun-icon")
const moonIcon = document.getElementById("moon-icon")
const darkHeroImg = document.getElementById("dark-hero")
const lightHeroImg = document.getElementById("light-hero")

switchEl.addEventListener("click", (e) => {
    document.querySelector('html').classList.toggle("dark")
    sunIcon.classList.toggle('hidden')
    moonIcon.classList.toggle('hidden')
    darkHeroImg.classList.toggle('hidden')
    lightHeroImg.classList.toggle('hidden')
});