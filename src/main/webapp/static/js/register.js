var regexPass = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,32}$/;

function validatePass() {
    var pass = document.getElementById("pass").value;
    var confirm = document.getElementById("confirm").value;
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
    return true;
}

function checked() {
    if (!document.getElementById("check").checked) {
        document.getElementById("errorcondition").style.color = "red";
        return false;
    }
    return true;
}

$(document).ready(function () {
    $('#enter').click(function () {
        if (!validatePass()) {
            return false;
        }
        if (!checked()) {
            return false;
        }
        $.ajax({
            method: 'POST',
            url: '/create',
            contentType: 'application/json',
            data: JSON.stringify({
                "username": $('#name').val(),
                "password": $('#pass').val()
            })
        }).done(function (data) {
            if (data.code == 1) {
                alert("SUCCESS");
                window.location = 'http://localhost:8090/login'
            } else {
                alert(data.message);
            }
        });
    })
})
