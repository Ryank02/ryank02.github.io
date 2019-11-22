// Disable scrolling when overlay is open
const elem = document.querySelectorAll("div.nav-icon, div.img-container");
for (let i = 0, l = elem.length; i < l; i++) {
    elem[i].onblur = function () { document.body.classList.remove("noscroll"); }
    elem[i].onfocus = function () { document.body.classList.add("noscroll"); }
}

// Swipe to open nav
let touch;
document.body.ontouchstart = function (e) { touch = e.changedTouches[0].clientX; }
document.body.ontouchend = function (e) {
    touch <= e.changedTouches[0].clientX - window.outerWidth / 6 && elem[0].blur();
    touch >= e.changedTouches[0].clientX + window.outerWidth / 6 && elem[0].focus();
}

// About page
const bDate = new Date("8/19/2002");
document.getElementById("age").innerHTML = ~~((new Date() - bDate) / 31536e6);

// Contact page
document.getElementById("redirect").value = window.location.origin + "/#contact";
document.getElementById("subjectInput").onchange = function () {
    document.getElementById("subject").value = this.value;
}