const reqBtn = document.querySelector(".btn");
const punchLine = document.querySelector(".punch-line");
const setupLine = document.querySelector(".setup-line");
const loadScreen = document.querySelector(".loading");
let myFunc = () => {
    const req = new XMLHttpRequest();
    req.open('GET', 'https://official-joke-api.appspot.com/random_joke');
    req.send();
    reqBtn.disabled = true; // disable the button while fetching data
    loadScreen.style.display = "grid";
    reqBtn.style.boxShadow = "none";
    reqBtn.style.transform = "none";
    req.addEventListener('load', function () {
        loadScreen.style.display = "none";
        reqBtn.disabled = false;
        const data = JSON.parse(req.responseText);
        punchLine.textContent = data.punchline;
        setupLine.textContent = data.setup;
    });
}
reqBtn.addEventListener("mouseover", () => {
    reqBtn.style.boxShadow = "1px 1px 3px #FEF9E650";
    reqBtn.style.transform = "translateY(-2px)";
});
reqBtn.addEventListener("mouseout", () => {
    reqBtn.style.boxShadow = "none";
    reqBtn.style.transform = "none";
});
reqBtn.addEventListener("click", myFunc());




