// Disable scrolling when overlay is open
const elements = document.querySelectorAll("header div.nav-icon, div.flex div.col div.img-container");
for (let i = 0, l = elements.length; i < l; i++) {
    elements[i].onblur = function () { document.body.classList.remove("noscroll"); }
    elements[i].onfocus = function () { document.body.classList.add("noscroll"); }
}

// Swipe to open nav
let touchstart;
document.body.ontouchstart = function () { touchstart = event.changedTouches[0].clientX; }
document.body.ontouchend = function () {
    touchstart <= event.changedTouches[0].clientX - window.outerWidth / 6 && elements[0].blur();
    touchstart >= event.changedTouches[0].clientX + window.outerWidth / 6 && elements[0].focus();
}

// About page
const xhr = new XMLHttpRequest();
xhr.open("HEAD", "/");
xhr.onload = function () {
    const bDate = new Date("8/19/2002"),
           date = new Date(xhr.getResponseHeader("date"));
    document.querySelector("#age").innerHTML = ~~((date - bDate) / 31536e6);
}
xhr.send();

// Contact page
document.querySelector("#redirect").value = window.location.origin + "/#contact";
document.querySelector("#subjectInput").onchange = function () {
    document.querySelector("#subject").value = this.value;
}