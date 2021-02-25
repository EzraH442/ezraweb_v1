let latestPostMain = "journals/2021-2-11.html";
let latestPostJournal = "2021-2-11.html";

let elements = document.getElementsByClassName("_latest-post-main")
let otherElements = document.getElementsByClassName("_latest-post-journal")

for (let i = 0; i < elements.length; i++) {
    elements[i].setAttribute("href", latestPostMain);
}

for (let i = 0; i < otherElements.length; i++) {
    otherElements[i].setAttribute("href", latestPostJournal);
}
