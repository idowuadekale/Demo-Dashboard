//window EventListener
window.addEventListener("DOMContentLoaded", function(e) {
    console.log("The page is loaded.");
});

//Toggle

var myVar = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    document.getElementById("link").innerHTML = d.toLocaleTimeString();
}

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function myLink() {
    alert("You are going to Idowu Adekale Github");
}