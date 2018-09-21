    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open('GET', 'http://localhost:8090/api/accounts/detail/' + localStorage.getItem("id"), true);

    xhr.onload = function (ev) {
        var data = JSON.parse(this.response);

        console.log(data)
        var username = document.getElementById("username");
        var accountNumber = document.getElementById("accountNumber");
        var amount = document.getElementById("amount");
        username.innerHTML = data.username;
        accountNumber.innerHTML = data.accountNumber;
        amount.innerHTML = data.amount
    }

    xhr.send();