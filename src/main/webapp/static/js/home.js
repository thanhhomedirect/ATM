if (localStorage.getItem("id") == null){
    localStorage.setItem("id","");
}
if (localStorage.getItem("id") != ""){
    window.location = 'http://127.0.0.1:8090/afterlogin'
}