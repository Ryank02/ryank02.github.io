// Init swup
const swup = new Swup();

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
            const dialog = document.getElementById("dialog");
            document.forms[0].onsubmit = function (e) {
                e.preventDefault();
                const data = new FormData(this);
                data.append("*subject", this.elements.subject.value);
                const xhr = new XMLHttpRequest();
                xhr.open(this.method, this.action);
                xhr.onload = function () {
                    dialog.children[0].innerHTML =
                        xhr.status === 200
                            ? "Het bericht is verzonden!"
                            : "Er is iets misgegaan, probeer het later aub opnieuw.";
                    dialog.className = "show";
                    setTimeout(function () { dialog.className = "" }, 3000);
                }
                xhr.send(data);
            }
            break;
    }
}

swup.on("contentReplaced", initPages);
initPages();