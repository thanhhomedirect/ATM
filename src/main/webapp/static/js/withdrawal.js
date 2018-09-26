if (localStorage.getItem("id") == "") {
    alert("Please login!")
    window.location = 'http://127.0.0.1:8090/login'
    console.log(localStorage.getItem("username"));
} else {
    document.getElementById("user").innerHTML = localStorage.getItem("username");
}
function withdrawal() {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open('PUT', 'http://127.0.0.1:8090/api/transactions/withdrawal', true);
    var request = {
        id: localStorage.getItem("id"),
        amount: document.getElementById("amount").value,
        password: document.getElementById("confirm").value
    };

    xhr.onload = function () {
        // begin accessing JSON data here
        var data = JSON.parse(this.response);
        if (data.code == 1) {
            alert("SUCCESS!");
            window.location = 'http://127.0.0.1:8090/accounts/detail'
        } else {
            alert(data.message);
        }
    }
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(request))
}