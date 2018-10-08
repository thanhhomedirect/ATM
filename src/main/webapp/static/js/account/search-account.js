if (localStorage.getItem("id") == "" || localStorage.getItem("id") == null) {
    document.getElementById("content").style.display = "none";
    swal({
        title: "Please Login!",
        icon: "warning"
    }).then(function () {
        window.location = 'http://127.0.0.1:8090/login'
    });
}

$(document).ready(function () {
    var accountId = localStorage.getItem("id");
    var param = $('#param').val();
    var currentIndex = 0;
    var currentPage = 0;
    var fetch;
    var size;

    $.ajax({
        method: 'GET',
        url: '/search-account?username='
    }).done(function (data) {
        drawTable();
        if (currentPage == (data.data.totalPages - 1)) {
            $('#next').prop('disabled', true);
        } else {
            $('#next').prop('disabled', false);
        }

        if (currentPage == 0) {
            $('#back').prop('disabled', true);
        } else {
            $('#back').prop('disabled', false);
        }
        if (data.code == 1 && data.data.content != null && data.data.content != "") {
            fetch = data.data.size;
            size = data.data.size;
            if (data.data.totalElements < data.data.size) {
                fetch = data.data.totalElements;
            }
            for (i = 0; i < fetch; i++) {
                var markup =
                    '<tr>' +
                    '<td>' + (currentIndex + 1) + '</td>' +
                    '<td>' + data.data.content[i].id + '</td>' +
                    '<td>' + data.data.content[i].accountNumber + '</td>' +
                    '<td>' + data.data.content[i].username + '</td>' +
                    '<td>' + (data.data.content[i].amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + " VND") + '</td>' +
                    '</tr>';
                $("#table > tbody").append(markup);
                currentIndex++;
            }
        } else {
            swal("No data can found!");
        }
    });

    function drawTable() {

        $('#next').click(function () {
            next(param);
        });

        $('#back').click(function () {
            back(param);
        });
    }

    $('#enter').click(function () {
        $("#table > tbody").empty();
        param = $('#param').val();
        console.log(param)
        currentIndex = 0;
        $.ajax({
            method: 'GET',
            url: '/search-account?username=' + param
        }).done(function (data) {
            drawTable();
            if (currentPage == (data.data.totalPages - 1)) {
                $('#next').prop('disabled', true);
            } else {
                $('#next').prop('disabled', false);
            }

            if (currentPage == 0) {
                $('#back').prop('disabled', true);
            } else {
                $('#back').prop('disabled', false);
            }
            if (data.code == 1 && data.data.content != null && data.data.content != "") {
                fetch = data.data.size;
                size = data.data.size;
                if (data.data.totalElements < data.data.size) {
                    fetch = data.data.totalElements;
                }
                for (i = 0; i < fetch; i++) {
                    var markup =
                        '<tr>' +
                        '<td>' + (currentIndex + 1) + '</td>' +
                        '<td>' + data.data.content[i].id + '</td>' +
                        '<td>' + data.data.content[i].accountNumber + '</td>' +
                        '<td>' + data.data.content[i].username + '</td>' +
                        '<td>' + (data.data.content[i].amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + " VND") + '</td>' +
                        '</tr>';
                    $("#table > tbody").append(markup);
                    currentIndex++;
                }

                if (currentPage == (data.data.totalPages - 1)) {
                    $('#next').prop('disabled', true);
                } else {
                    $('#next').prop('disabled', false);
                }

                if (currentPage == 0) {
                    $('#back').prop('disabled', true);
                } else {
                    $('#back').prop('disabled', false);
                }
            } else {
                swal("No data can found!");
            }
        });
    })

    $('#download').click(function () {
        $.ajax({
            method: 'GET',
            url: '/excel-accounts'
        }).done(function (data) {
            swal({
                title: "Download " + data,
                icon: "success"
            })
        });
    })

    //////
    function next(param) {
        $("#table > tbody").empty();
        currentPage++;
        $.ajax({
            method: 'GET',
            url: '/search-account?username=' + param + '&pageNo=' + currentPage
        }).done(function (data) {
            console.log(data)
            if (currentPage == (data.data.totalPages - 1)) {
                if (data.data.totalElements % data.data.size != 0) {
                    fetch = data.data.totalElements % data.data.size;
                } else {
                    fetch = data.data.size;
                }
            }
            fetch = data.data.size;
            if (data.data.totalElements < data.data.size) {
                fetch = data.data.totalElements;
            }
            drawTable();
            if (currentPage == (data.data.totalPages - 1)) {
                $('#next').prop('disabled', true);
            } else {
                $('#next').prop('disabled', false);
            }

            if (currentPage == 0) {
                $('#back').prop('disabled', true);
            } else {
                $('#back').prop('disabled', false);
            }
            for (i = 0; i < fetch; i++) {
                var markup =
                    '<tr>' +
                    '<td>' + (currentIndex + 1) + '</td>' +
                    '<td>' + data.data.content[i].id + '</td>' +
                    '<td>' + data.data.content[i].accountNumber + '</td>' +
                    '<td>' + data.data.content[i].username + '</td>' +
                    '<td>' + (data.data.content[i].amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + " VND") + '</td>' +
                    '</tr>';
                $("#table > tbody").append(markup);
                currentIndex++;
            }

            if (currentPage == (data.data.totalPages - 1)) {
                $('#next').prop('disabled', true);
            } else {
                $('#next').prop('disabled', false);
            }

            if (currentPage == 0) {
                $('#back').prop('disabled', true);
            } else {
                $('#back').prop('disabled', false);
            }
        })
    }

    function back(param) {
        $("#table > tbody").empty();
        currentPage--;
        currentIndex = currentIndex - fetch - size;
        $.ajax({
            method: 'GET',
            url: '/search-account?username=' + param + '&pageNo=' + currentPage
        }).done(function (data) {
            drawTable();
            if (currentPage == (data.data.totalPages - 1)) {
                $('#next').prop('disabled', true);
            } else {
                $('#next').prop('disabled', false);
            }

            if (currentPage == 0) {
                $('#back').prop('disabled', true);
            } else {
                $('#back').prop('disabled', false);
            }
            fetch = data.data.size;
            for (i = 0; i < fetch; i++) {
                var markup =
                    '<tr>' +
                    '<td>' + (currentIndex + 1) + '</td>' +
                    '<td>' + data.data.content[i].id + '</td>' +
                    '<td>' + data.data.content[i].accountNumber + '</td>' +
                    '<td>' + data.data.content[i].username + '</td>' +
                    '<td>' + (data.data.content[i].amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + " VND") + '</td>' +
                    '</tr>';
                $("#table > tbody").append(markup);
                currentIndex++;
            }

            if (currentPage == (data.data.totalPages - 1)) {
                $('#next').prop('disabled', true);
            } else {
                $('#next').prop('disabled', false);
            }

            if (currentPage == 0) {
                $('#back').prop('disabled', true);
            } else {
                $('#back').prop('disabled', false);
            }
        })
    }
})

