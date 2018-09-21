

if(localStorage.getItem("id") == ""){
    alert("Please login!")
    window.location = 'http://127.0.0.1:8090/login'
} else {
    document.getElementById("user").innerHTML = localStorage.getItem("user");
}
function logout() {
    localStorage.setItem("id","");
}