// Disable scrolling when overlay is open
const elem = document.querySelectorAll("header > a, div.img-container");
function scrollToggle(e) { document.body.style.overflow = e.type === "blur" ? "" : "hidden"; }
for (let i = elem.length; i--;) {
    elem[i].onblur = scrollToggle;
    elem[i].onfocus = scrollToggle;
}

// About page
const date = new Date("8/19/2002") - new Date();
document.getElementById("age").innerHTML = ~~(-date / 31536e6);

// Contact page
function dialog() { document.getElementById("dialog").classList.toggle("show"); }
document.forms[0].onsubmit = function () {
    dialog();
    setTimeout(dialog, 3000);
}