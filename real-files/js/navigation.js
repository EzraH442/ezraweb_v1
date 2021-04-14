const toggle = document.getElementById("toggle");
const menu = document.querySelector(".top-navigation");
const submenuToggles = document.getElementsByClassName("toggle-submenu");

function getDropdownMenus() {
    return document.getElementsByClassName("submenu-active");
}
function closeDropdowns() {
    let x = getDropdownMenus();
    for (let i = 0; i < x.length; i++) {
        x[i].classList.remove("submenu-active");
    }
}
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        closeDropdowns();
    } else {
        menu.classList.add("active");
    }
}
function toggleDropdown() {
    if (this.parentNode.parentNode.classList.contains("submenu-active")) {
        this.parentNode.parentNode.classList.remove("submenu-active");
    } else {
        this.parentNode.parentNode.classList.add("submenu-active");
    }
}
function handleResize() {
    if (window.innerWidth > 960) {
        closeDropdowns();
    }
}
toggle.addEventListener("click", toggleMenu, false);
for (let i = 0; i < submenuToggles.length; i++) {
    submenuToggles[i].addEventListener('click', toggleDropdown, false);
}
window.addEventListener('resize', handleResize, false);