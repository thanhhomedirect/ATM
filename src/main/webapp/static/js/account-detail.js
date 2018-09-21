
if(localStorage.getItem("id") == ""){
    alert("Please login!")
    window.location = 'http://127.0.0.1:8090/login'
} else {
    document.getElementById("user").innerHTML = localStorage.getItem("user");
}
function logout() {
    localStorage.setItem("id","");
}
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.open('GET', 'http://127.0.0.1:8090/api/accounts/detail/' + localStorage.getItem("id"), true);

xhr.onload = function (ev) {
    var data = JSON.parse(this.response);

    console.log(data)
    var username = document.getElementById("username");
    var accountNumber = document.getElementById("accountNumber");
    var amount = document.getElementById("amount");
    username.innerHTML = data.username;
    accountNumber.innerHTML = data.accountNumber;
    amount.innerHTML = data.amount
}

xhr.send();