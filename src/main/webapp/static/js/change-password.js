var regexPass = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,32}$/;
if (localStorage.getItem("id") == "") {
    alert("Please login!")
    window.location = 'http://127.0.0.1:8090/login'
    console.log(localStorage.getItem("username"));
} else {
    document.getElementById("user").innerHTML = localStorage.getItem("username");
}

function validatePass() {
    var newpass = document.getElementById("newpass").value;
    var confirmpass = document.getElementById("confirmpass").value;
    var testPass = regexPass.exec(newpass);
    if (newpass == "" || newpass == null) {
        document.getElementById("errorpass").innerHTML = "Password can not null";
        return false;
    }

    document.getElementById("errorpass").innerHTML = "";
    if (!testPass) {
        document.getElementById("errorpass").innerHTML = "Password must have at least 1 capital letter, 1 lower case, 1 special character, 1 digit and minimum 8, maximum 32 characters";
        return false;
    }

    document.getElementById("errorpass").innerHTML = "";
    if (newpass != confirmpass) {
        document.getElementById("error").innerHTML = "Two passwords do not match";
        return false;
    }

    document.getElementById("error").innerHTML = "";
    return true;
}

function changePass() {
    if (!validatePass()) {
        return false;
    }
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open('PUT', 'http://127.0.0.1:8090/api/accounts/change-password', true);

    var request = {
        id: localStorage.getItem("id"),
        oldPassword: document.getElementById("oldpass").value,
        newPassword: document.getElementById("newpass").value,
    };

    xhr.onload = function () {
        // begin accessing JSON data here
        var data = JSON.parse(this.response);

        console.log(data)
        if (data.username != null) {
            alert("SUCCESS!");
            window.location = 'http://127.0.0.1:8090/afterlogin'
        } else {
            alert(data.message);
        }
    }
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(request))
}