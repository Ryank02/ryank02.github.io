// Disable scrolling when overlay is open
const elems = document.getElementsByClassName("img-container");
function scrollToggle(e) { document.body.style.overflow = e.type === "blur" ? "" : "hidden"; }
for (let i = elems.length; i--;) {
    elems[i].onblur = scrollToggle;
    elems[i].onfocus = scrollToggle;
}

// Fix for hash navigation on IE and MS Edge (but exclude Chromium Edge)
let linkClicked = false;
if (document.documentMode || navigator.userAgent.includes("Edge") && !navigator.vendor.includes("Google")) {
    window.onhashchange = function () {
        if (!linkClicked) {
            document.body.style.display = "none";
            document.body.style.display = "";
        } else {
            linkClicked = false;
        }
    }
}

// Fade animation when switching page
const navLinks = document.querySelectorAll("nav a");
const main = document.getElementsByTagName("main")[0];
function switchPage(e) {
    e.preventDefault();
    if (e.target.href !== window.location.href) {
        linkClicked = true;
        main.style.opacity = 0;
        setTimeout(function () {
            window.location = e.target.href;
            main.style.cssText = "";
        }, 300);
    }
}
for (let i = navLinks.length; i--;) { navLinks[i].onclick = switchPage; }

// About page
const date = new Date("8/19/2002") - new Date();
document.getElementById("age").innerHTML = ~~(-date / 31536e6);

// Contact page
function dialog() { document.getElementById("dialog").classList.toggle("show"); }
document.forms[0].onsubmit = function () {
    dialog();
    setTimeout(dialog, 3000);
}