if (localStorage.getItem("id") == "") {
    alert("Please login!")
    window.location = 'http://127.0.0.1:8090/login'
    console.log(localStorage.getItem("username"));
} else {
    document.getElementById("user").innerHTML = localStorage.getItem("username");
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