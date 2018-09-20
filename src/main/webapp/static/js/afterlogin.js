

if(localStorage.getItem("username") == ""){
    alert("Please login!")
    window.location = 'http://127.0.0.1:8090/login'
} else {
    document.getElementById("user").innerHTML = "Hello "+ localStorage.getItem("username");
}
function logout() {
    localStorage.setItem("username","");
}