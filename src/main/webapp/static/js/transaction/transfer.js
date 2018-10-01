if (localStorage.getItem("id") == "" || localStorage.getItem("id") == null) {
    document.getElementById("content").style.display = "none";
    swal({
        title: "Please Login!",
        icon: "warning"
    }).then(function() {
        window.location = 'http://127.0.0.1:8090/login'
    });
}

$(document).ready(function () {
    $('#enter').click(function () {
        $.ajax({
            url: '/transactions/transfer',
            method: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify({
                "fromId": localStorage.getItem("id"),
                "toAccountNumber": $('#toAccount').val(),
                "content": $('#contenttransfer').val(),
                "amount": $('#amount').val(),
                "password": $('#confirm').val()
            })
        }).done(function (data) {
            if (data.code == 1) {
                swal({
                    title: "SUCCESS!",
                    icon: "success"
                }).then(function() {
                    window.location = 'http://127.0.0.1:8090/accounts/detail'
                });
            } else {
                sweetAlert("Oops...", data.message, "error");
            }
        });
    })
})