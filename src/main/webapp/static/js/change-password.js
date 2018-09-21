function confirmPass() {
    var newpass = document.getElementById("newpass").value;
    var confirmpass = document.getElementById("confirmpass").value;
    if (newpass != confirmpass) {
        document.getElementById("error").innerHTML = "Two passwords do not match";
    } else {
        document.getElementById("error").innerHTML = "OK";
    }
}

function changePass() {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open('PUT', 'http://127.0.0.1:8090/api/accounts/change-password', true);
    var request = {};
    request.id = localStorage.getItem("id");
    request.oldPassword = document.getElementById("oldpass").value;
    request.newPassword = document.getElementById("newpass").value;
    xhr.onload = function () {
        // begin accessing JSON data here
        var data = JSON.parse(this.response);

        console.log(data)
        if (data.username != null) {
            alert("SUCCESS!");
            window.location = 'http://127.0.0.1:8090/accounts'
        } else {
            alert("FAIL!");
        }
    }
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(request))
}