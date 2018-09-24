if (localStorage.getItem("id") == "") {
    alert("Please login!")
    window.location = 'http://127.0.0.1:8090/login'
    console.log(localStorage.getItem("username"));
} else {
    document.getElementById("user").innerHTML = localStorage.getItem("username");
}
function transfer() {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open('PUT', 'http://127.0.0.1:8090/api/transactions/transfer', true);
    var request = {};
    request.fromId = localStorage.getItem("id");
    request.toAccountNumber = document.getElementById("toAccount").value;
    request.content = document.getElementById("contenttransfer").value;
    request.amount = document.getElementById("amount").value;

    console.log(request)
    xhr.onload = function () {
        // begin accessing JSON data here
        var data = JSON.parse(this.response);

        console.log(data)
        if (data.username != null) {
            alert("SUCCESS!");
            window.location = 'http://127.0.0.1:8090/afterlogin'
        } else {
            alert("FAIL!");
        }
    }
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(request))
}