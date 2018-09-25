var regexPass = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,32}$/;
function validate() {
    var pass = document.getElementById("pass").value;
    var confirm = document.getElementById("confirm").value;
    var checkconditions = document.getElementById("checkconditions").checked;
    var testPass = regexPass.exec(pass);
    if (pass == "" || pass == null) {
        document.getElementById("errorpass").innerHTML = "Password can not null";
        return false;
    }
    document.getElementById("errorpass").innerHTML = "";
    if (!testPass) {
        document.getElementById("errorpass").innerHTML = "Password must have at least 1 capital letter, 1 lower case, 1 special character, 1 digit and minimum 8, maximum 32 characters";
        return false;
    }
    document.getElementById("errorpass").innerHTML = "";
    if (pass != confirm) {
        document.getElementById("error").innerHTML = "Two passwords do not match";
        return false;
    }
    document.getElementById("error").innerHTML = "";
    if (checkconditions == false) {
        document.getElementById("errorconditions").innerHTML = "Check can not null";
        alert(checkconditions);
        return false;
    }
    document.getElementById("errorconditions").innerHTML = "";
    return true;
}
function register() {
    if(!validate()){
        return false;
    }
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open('POST', 'http://127.0.0.1:8090/api/create', true);
    var request = {};
    request.username = document.getElementById("name").value;
    request.password = document.getElementById("pass").value;

    xhr.onload = function () {
        // begin accessing JSON data here
        var data = JSON.parse(this.response);

        if (data.username != null) {
            alert("Hello " + data.username);
            window.location = 'http://127.0.0.1:8090/login'
        } else {
            alert(data.message);
        }
    }
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(request))
}
