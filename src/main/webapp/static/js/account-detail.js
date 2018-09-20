function accountDetail() {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open('GET', 'http://127.0.0.1:8090/api/accounts/detail/' + localStorage.getItem("id"), true);
    xhr.send();
}