
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
<<<<<<< HEAD
        if (data.username != null) {
            localStorage.setItem("id", data.id)
            localStorage.setItem("username", data.username)
            window.location = 'http://localhost:8090/accounts/detail'
=======
        if (data.object != null) {
            localStorage.setItem("id", data.object.id)
            localStorage.setItem("username", data.object.username)
            window.location = 'http://127.0.0.1:8090/accounts/detail'
>>>>>>> 2fa2cfc7e6cefb7b007f1a738f9fe4a80d73a285
        } else {
            alert(data.message);
        }
    }
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(request))
}