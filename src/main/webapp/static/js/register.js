document.getElementById("pass").addEventListener('input', function (evt) {
    confirmPass();
});
document.getElementById("confirm").addEventListener('input', function (evt) {
    confirmPass();
});

function confirmPass() {
    var pass = document.getElementById("pass").value;
    var confirm = document.getElementById("confirm").value;
    if (pass != confirm) {
        document.getElementById("error").innerHTML = "Two passwords do not match";
    } else {
        document.getElementById("error").innerHTML = "";
    }
}
function register() {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open('POST', 'http://127.0.0.1:8090/api/create', true);
    var request = {};
    request.username = document.getElementById("name").value;
    request.password = document.getElementById("pass").value;

    xhr.onload = function () {
        // begin accessing JSON data here
        var data = JSON.parse(this.response);

        console.log(data)
        if (data.username != null) {
            alert("Hello " + data.username);
            window.location = 'http://127.0.0.1:8090/login'
        } else {
            alert("Register Fail!");
        }
    }
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(request))
}
