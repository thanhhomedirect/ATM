if (localStorage.getItem("id") == "") {
    alert("Please login!")
    window.location = 'http://127.0.0.1:8090/login'
    console.log(localStorage.getItem("username"));
} else {
    document.getElementById("user").innerHTML = localStorage.getItem("username");
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
                alert("SUCCESS!");
                window.location = 'http://127.0.0.1:8090/accounts/detail'
            } else {
                alert(data.message);
            }
        });
    })
})