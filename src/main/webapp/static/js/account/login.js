if (localStorage.getItem("id") != "") {
    window.location = 'http://127.0.0.1:8090/afterlogin'
}

$(document).ready(function () {
    $('#enter').click(function () {
        $.ajax({
            method: 'POST',
            url: '/login',
            contentType: 'application/json',
            data: JSON.stringify({
                "username": $('#name').val(),
                "password": $('#pass').val()
            })
        }).done(function (data) {
            if (data.code == 1) {
                localStorage.setItem("id", data.data.id)
                localStorage.setItem("username", data.data.username)
                window.location = 'http://127.0.0.1:8090/accounts/detail'
            } else {
                swal(data.message);
            }
        })
    })
})