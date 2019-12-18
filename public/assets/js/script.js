// Disable scrolling when overlay is open
const elem = document.querySelectorAll("header > a, div.img-container");
function scrollToggle() { document.body.classList.toggle("noscroll"); }
for (let i = elem.length; i--;) {
    elem[i].onblur = scrollToggle;
    elem[i].onfocus = scrollToggle;
}

// Open mobile nav by swiping
const nav = document.getElementsByTagName("nav")[0];
const swipe = document.getElementsByClassName("swipe")[0];
swipe.ontouchstart = function () { nav.style.transition = "none"; };
swipe.ontouchmove = function (e) {
    nav.style.right = "-" + e.changedTouches[0].pageX + "px";
    e.changedTouches[0].pageX <= nav.clientWidth * .7
        ? elem[0].focus()
        : elem[0].blur();
}
swipe.ontouchend = function () { nav.style.cssText = ""; }

// About page
const date = new Date("8/19/2002") - new Date();
document.getElementById("age").innerHTML = ~~(-date / 31536e6);

// Contact page
document.forms[0].onsubmit = function (e) {
    e.preventDefault();
    const data = new FormData(this);
    data.append("*subject", this.elements.subject.value);
    const xhr = new XMLHttpRequest();
    xhr.open(this.method, this.action);
    xhr.onload = function () {
        alert(
            xhr.status === 200
                ? "Het bericht is verzonden!"
                : "Er is iets misgegaan, probeer het later aub opnieuw."
        );
    };
    xhr.send(data);
};
