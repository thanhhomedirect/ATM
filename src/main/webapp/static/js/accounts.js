function accountDetail() {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open('GET', 'http://127.0.0.1:8090/api/accounts/detail/' + localStorage.getItem("id"), true);

    xhr.onload = function (ev) {
        var data = JSON.parse(this.response);

        console.log(data)
        if (data.accountNumber != null) {
            window.location = 'http://127.0.0.1:8090/account-detail'
        } else {
            alert("abc");
        }
    }

    xhr.send();
}