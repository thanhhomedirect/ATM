if (localStorage.getItem("id") == "" || localStorage.getItem("id") == null) {
    document.getElementById("leftmenu").style.display = "none";
}

function logout() {
    localStorage.setItem("id", "");
    localStorage.setItem("username", "");
}

if (localStorage.getItem("username") !== undefined && localStorage.getItem("username") !== null && localStorage.getItem("username")!== '') {
    document.getElementById("user").innerHTML = "Wellcome " + localStorage.getItem("username");
}

function enterdown(event) {
    var x = event.keyCode || event.which;
    if (x == 13) {
        document.getElementById("enter").click();
    }
}