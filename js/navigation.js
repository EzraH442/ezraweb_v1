const toggle = document.getElementById("toggle");
const menu = document.querySelector(".top-navigation");
const submenuToggles = document.getElementsByClassName("toggle-submenu");

function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
    } else {
        menu.classList.add("active");
    }
}

toggle.addEventListener("click", toggleMenu, false);

function toggleDropdown() {
    if (this.parentNode.parentNode.classList.contains("submenu-active")) {
        this.parentNode.parentNode.classList.remove("submenu-active");
    } else {
        this.parentNode.parentNode.classList.add("submenu-active");
    }
}

for (let i = 0; i < submenuToggles.length; i++) {
    submenuToggles[i].addEventListener('click', toggleDropdown, false);
}