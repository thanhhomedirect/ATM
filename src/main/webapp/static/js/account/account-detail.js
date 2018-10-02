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
    $.ajax({
        method: "GET",
        url: "/accounts/detail/" + localStorage.getItem("id"),
    }).done(function (data) {
        if (data.code == 1) {
            $('#username').text(data.data.username);
            $('#accountNumber').text(data.data.accountNumber);
            $('#amount').text(data.data.amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + " VND");
        }
    })
});