// Variables
const x = {
    date: new Date("8/19/2002") - new Date(),
    nodes: document.querySelectorAll("div.nav-icon, div.img-container"),
    touch: null,
    xhr: new XMLHttpRequest(),
    xhrData: null
};

// Disable scrolling when overlay is open
for (let i = x.nodes.length; i--;) {
    x.nodes[i].onblur = function () { document.body.classList.remove("noscroll"); }
    x.nodes[i].onfocus = function () { document.body.classList.add("noscroll"); }
}

// Swipe to open nav
document.body.ontouchstart = function (e) { x.touch = e.changedTouches[0].clientX; }
document.body.ontouchend = function (e) {
    x.touch <= e.changedTouches[0].clientX - window.outerWidth / 6 && x.nodes[0].blur();
    x.touch >= e.changedTouches[0].clientX + window.outerWidth / 6 && x.nodes[0].focus();
}

// About page
document.getElementById("age").innerHTML = ~~(-x.date / 31536e6);

// Contact page
document.forms[0].onsubmit = function (e) {
    e.preventDefault();
    x.xhrData = new FormData(this);
    x.xhrData.append("*subject", this.elements.subject.value);
    x.xhr.open(this.method, this.action);
    x.xhr.onload = function () {
        this.status === 200
            ? alert("Het bericht is verzonden!") && e.target.reset()
            : alert("Er is iets misgegaan, probeer het later aub opnieuw.");
    }
    x.xhr.send(x.xhrData);
}