var regexPass = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,32}$/;
if (localStorage.getItem("id") == "" || localStorage.getItem("id") == null) {
    document.getElementById("content").style.display = "none";
    swal({
        title: "Please Login!",
        icon: "warning"
    }).then(function() {
        window.location = 'http://127.0.0.1:8090/login'
    });
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

$(document).ready(function () {
    $('#button').click(function () {
        $.ajax({
            method : 'PUT',
            url : '/accounts/change-password',
            contentType : 'application/json',
            data : JSON.stringify({
                "id" : localStorage.getItem("id"),
                "oldPassword" : $('#oldpass').val(),
                "newPassword" : $('#newpass').val(),
            })
        }).done(function (data) {
            if (data.code == 1) {
                swal({
                    title: "SUCCESS!",
                    icon: "success"
                }).then(function() {
                    window.location = 'http://127.0.0.1:8090/afterlogin'
                });
            } else {
                sweetAlert("Oops...", data.message, "error");
            }
        });
    })
})