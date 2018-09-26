
if (localStorage.getItem("id") != ""){
    window.location = 'http://127.0.0.1:8090/afterlogin'
}

function login() {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open('POST', 'http://127.0.0.1:8090/api/login', true);
    var request = {
        username: document.getElementById("name").value,
        password: document.getElementById("pass").value
    };
    xhr.onload = function () {
        // begin accessing JSON data here
        var data = JSON.parse(this.response);
        console.log(data)
        if (data.accountResponse != null) {
            localStorage.setItem("id", data.accountResponse.id)
            localStorage.setItem("username", data.accountResponse.username)
            window.location = 'http://127.0.0.1:8090/accounts/detail'
        } else {
            alert(data.message);
        }
    }
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(request))
}