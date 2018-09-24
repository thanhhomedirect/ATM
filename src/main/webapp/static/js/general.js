if (localStorage.getItem("id") == "") {
    document.getElementById("leftmenu").style.display = "none";
}

function logout() {
    localStorage.setItem("id", "");
    localStorage.setItem("username", "");
}

if (localStorage.getItem("username") != "") {
    document.getElementById("user").innerHTML = localStorage.getItem("username");
}

function enterdown(event) {
    var x = event.keyCode || event.which;
    if (x == 13) {
        document.getElementById("enter").click();
    }
}