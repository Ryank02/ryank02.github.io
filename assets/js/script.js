// Disable scrolling when overlay is open
const elem = document.querySelectorAll("header > div, div.img-container");
for (let i = elem.length; i--;) {
    elem[i].onblur = function () { document.body.classList.remove("noscroll"); };
    elem[i].onfocus = function () { document.body.classList.add("noscroll"); };
}

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
        xhr.status === 200
            ? alert("Het bericht is verzonden!")
            : alert("Er is iets misgegaan, probeer het later aub opnieuw.");
    };
    xhr.send(data);
};
