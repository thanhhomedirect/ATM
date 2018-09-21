function withdrawal() {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open('PUT', 'http://127.0.0.1:8090/api/transactions/withdrawal', true);
    var request = {};
    request.id = localStorage.getItem("id");
    request.amount = document.getElementById("amount").value;

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