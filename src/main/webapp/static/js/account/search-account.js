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
    var param = $('#param').val();
    var currentIndex = 0;
    var currentPage = 0;
    var totalPages;
    var size;

    $.ajax({
        method: 'GET',
        url: '/search-account?username='
    }).done(function (data) {
        totalPages = data.data.totalPages
        $('#next').click(function () {
            next(param);
        });

        $('#back').click(function () {
            back(param);
        });
        activeButton();
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

    function activeButton() {

        if (currentPage == (totalPages - 1)) {
            $('#next').prop('disabled', true);
        } else {
            $('#next').prop('disabled', false);
        }

        if (currentPage <= 0) {
            $('#back').prop('disabled', true);
        } else {
            $('#back').prop('disabled', false);
        }
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
            totalPages = data.data.totalPages
            activeButton();
            if (data.code == 1 && data.data.content != null && data.data.content != "") {
                size = data.data.size;
                $.each(data.data.content, function (idx, obj) {
                    var markup =
                        '<tr>' +
                        '<td>' + (currentIndex + 1) + '</td>' +
                        '<td>' + obj.id + '</td>' +
                        '<td>' + obj.accountNumber + '</td>' +
                        '<td>' + obj.username + '</td>' +
                        '<td>' + obj.amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + " VND" + '</td>' +
                        '</tr>';
                    $("#table > tbody").append(markup);
                    currentIndex++;
                })

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
        currentPage = currentPage + 1;
        $.ajax({
            method: 'GET',
            url: '/search-account?username=' + param + '&pageNo=' + currentPage
        }).done(function (data) {
            fetch = data.data.size;
            if (data.data.totalElements < data.data.size) {
                fetch = data.data.totalElements;
            }

            console.log(currentPage + "nexxt")
            totalPages = data.data.totalPages
            activeButton();
            if (currentPage == (totalPages - 1)) {
                if (data.data.totalElements % data.data.size != 0) {
                    fetch = data.data.totalElements % data.data.size;
                } else {
                    fetch = data.data.size;
                }
            }
            $.each(data.data.content, function (idx, obj) {
                var markup =
                    '<tr>' +
                    '<td>' + (currentIndex + 1) + '</td>' +
                    '<td>' + obj.id + '</td>' +
                    '<td>' + obj.accountNumber + '</td>' +
                    '<td>' + obj.username + '</td>' +
                    '<td>' + obj.amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + " VND" + '</td>' +
                    '</tr>';
                $("#table > tbody").append(markup);
                currentIndex++;
            })
        })
    }

    function back(param) {
        $("#table > tbody").empty();
        currentPage--;
        currentIndex = currentIndex - fetch - size;
        console.log(currentPage)
        $.ajax({
            method: 'GET',
            url: '/search-account?username=' + param + '&pageNo=' + currentPage
        }).done(function (data) {
            totalPages = data.data.totalPages
            activeButton();
            fetch = data.data.size;
            console.log((data))
            $.each(data.data.content, function (idx, obj) {
                var markup =
                    '<tr>' +
                    '<td>' + (currentIndex + 1) + '</td>' +
                    '<td>' + obj.id + '</td>' +
                    '<td>' + obj.accountNumber + '</td>' +
                    '<td>' + obj.username + '</td>' +
                    '<td>' + obj.amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + " VND" + '</td>' +
                    '</tr>';
                $("#table > tbody").append(markup);
                currentIndex++;
            })
        })
    }
})

