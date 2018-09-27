if (localStorage.getItem("id") == "" || localStorage.getItem("id") == null) {
    window.location = 'http://127.0.0.1:8090/home'
}
function enterdown(event) {
    var x = event.keyCode || event.which;
    if (x == 13) {
        document.getElementsByClassName("search").click();
    }
}