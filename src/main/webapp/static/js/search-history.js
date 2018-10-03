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
    var fromDate = $('#fromDate').val().toString();
    var toDate = $('#toDate').val().toString();
    var type = $('#type').val();
    var currentIndex = 0;
    var currentPage = 0;
    var fetch;
    var size;

    function getData() {
        fromDate = $('#fromDate').val().toString();
        toDate = $('#toDate').val().toString();
        type = $('#type').val();
    }

    function drawTable() {
        $('<button id="back" style="color: black;">Back</button>').appendTo('#tables');
        $('<button id="next" style="color: black;">Next</button>').appendTo('#tables');
        $('#tables').append(
            '<table id="table-history" class="table table-bordered" style="color: black">' +
            '<tr>' +
            '<th>STT</th>' +
            '<th>AccountNumber</th>' +
            '<th>Receiver AccountNumber</th>' +
            '<th>Amount</th>' +
            '<th>Content</th>' +
            '<th>Time</th>' +
            '<th>Status</th>' +
            '</tr>' +
            '</table>')

        $('#next').click(function () {
            next(accountId, fromDate, toDate, type);
        });

        $('#back').click(function () {
            back(accountId, fromDate, toDate, type);
        });
    }

    $('#enter').click(function () {
        $("#tables").empty();
        getData();
        currentIndex = 0;
        $.ajax({
            method: 'GET',
            url: '/transactions/search?accountId=' + accountId + '&toDate=' + toDate +
                '&fromDate=' + fromDate + '&type=' + type
        }).done(function (data) {
            drawTable();
            if (data.code == 1 && data.data.content != null && data.data.content != "") {
                fetch = data.data.size;
                size = data.data.size;
                if (data.data.numberOfElements < data.data.size) {
                    fetch = data.data.numberOfElements;
                }
                for (i = 0; i < fetch; i++) {
                    var markup =
                        '<tr>' +
                        '<td>' + (currentIndex + 1) + '</td>' +
                        '<td>' + data.data.content[i].fromAccount + '</td>' +
                        '<td>' + data.data.content[i].toAccount + '</td>' +
                        '<td>' + (data.data.content[i].transferAmount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + " VND") + '</td>' +
                        '<td>' + data.data.content[i].content + '</td>' +
                        '<td>' + new Date(data.data.content[i].time).toUTCString() + '</td>' +
                        '<td>' + data.data.content[i].status + '</td>' +
                        '</tr>';
                    $("table tbody").append(markup);
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

    function next(accountId, fromDate, toDate, type) {
        $("#tables").empty();
        currentPage++;
        $.ajax({
            method: 'GET',
            url: '/transactions/search?accountId=' + accountId + '&toDate=' + toDate +
                '&fromDate=' + fromDate + '&type=' + type + '&pageNo=' + currentPage
        }).done(function (data) {
            if (currentPage == (data.data.totalPages - 1)) {
                if (data.data.totalElements % data.data.size != 0) {
                    fetch = data.data.totalElements % data.data.size;
                } else {
                    fetch = data.data.size;
                }
            }
            fetch = data.data.size;
            if (data.data.numberOfElements < data.data.size) {
                fetch = data.data.numberOfElements;
            }
            drawTable();
            for (i = 0; i < fetch; i++) {
                var markup =
                    '<tr>' +
                    '<td>' + (currentIndex + 1) + '</td>' +
                    '<td>' + data.data.content[i].fromAccount + '</td>' +
                    '<td>' + data.data.content[i].toAccount + '</td>' +
                    '<td>' + (data.data.content[i].transferAmount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + " VND") + '</td>' +
                    '<td>' + data.data.content[i].content + '</td>' +
                    '<td>' + new Date(data.data.content[i].time).toUTCString() + '</td>' +
                    '<td>' + data.data.content[i].status + '</td>' +
                    '</tr>';
                $("table tbody").append(markup);
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

    function back(accountId, fromDate, toDate, type) {
        $("#tables").empty();
        currentPage--;
        currentIndex = currentIndex - fetch - size;
        $.ajax({
            method: 'GET',
            url: '/transactions/search?accountId=' + accountId + '&toDate=' + toDate +
                '&fromDate=' + fromDate + '&type=' + type + '&pageNo=' + currentPage
        }).done(function (data) {
            drawTable();
            fetch = data.data.size;
            for (i = 0; i < fetch; i++) {
                var markup =
                    '<tr>' +
                    '<td>' + (currentIndex + 1) + '</td>' +
                    '<td>' + data.data.content[i].fromAccount + '</td>' +
                    '<td>' + data.data.content[i].toAccount + '</td>' +
                    '<td>' + (data.data.content[i].transferAmount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + " VND") + '</td>' +
                    '<td>' + data.data.content[i].content + '</td>' +
                    '<td>' + new Date(data.data.content[i].time).toUTCString() + '</td>' +
                    '<td>' + data.data.content[i].status + '</td>' +
                    '</tr>';
                $("table tbody").append(markup);
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