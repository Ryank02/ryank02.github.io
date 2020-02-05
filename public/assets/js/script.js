// Init swup
const swup = new Swup({
    animationSelector: "main",
    containers: ["main"]
});

// Disable scrolling when overlay is open
const elem = document.querySelectorAll("header > a, div.img-container");
function scrollToggle(e) { document.body.style.overflow = e.type === "blur" ? "" : "hidden"; }
for (let i = elem.length; i--;) {
    elem[i].onblur = scrollToggle;
    elem[i].onfocus = scrollToggle;
}

// Open mobile nav by swiping
const nav = document.getElementsByTagName("nav")[0];
const swipe = document.getElementsByClassName("swipe")[0];
swipe.ontouchstart = function () { nav.style.transition = "none"; }
swipe.ontouchmove = function (e) {
    nav.style.right = "-" + e.changedTouches[0].pageX + "px";
    e.changedTouches[0].pageX <= nav.clientWidth / 2
        ? elem[0].focus()
        : elem[0].blur();
}
swipe.ontouchend = function () { nav.style.cssText = ""; }

// Function to execute page specific code
function initPages() {
    switch (window.location.pathname) {
        case "/over-mij":
            // About page
            const date = new Date("8/19/2002") - new Date();
            document.getElementById("age").innerHTML = ~~(-date / 31536e6);
            break;
        case "/contact":
            // Contact page
            function dialog() { document.getElementById("dialog").classList.toggle("show"); }
            document.forms[0].onsubmit = function () {
                dialog();
                setTimeout(dialog, 3000);
            }
            break;
    }
}

swup.on("contentReplaced", initPages);
initPages();