if (localStorage.getItem("id") == "") {
    alert("Please login!")
    window.location = 'http://127.0.0.1:8090/login'
} else {
    document.getElementById("user").innerHTML = localStorage.getItem("username");
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
        $('<div id="div1"></div><br>').appendTo('#history');
        $('<button id="back" style="color: black;">Back</button>').appendTo('#div1');
        $('<button id="next" style="color: black;">Next</button>').appendTo('#div1');
        $('#div1').append(
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
        $("#div1").html("");
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
                size = data.data.size
                if (data.data.numberOfElements < data.data.size) {
                    fetch = data.data.numberOfElements;
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
                for (i = 0; i < fetch; i++) {
                    var markup =
                        '<tr>' +
                        '<td>' + (currentIndex + 1) + '</td>' +
                        '<td>' + data.data.content[i].fromAccount + '</td>' +
                        '<td>' + data.data.content[i].toAccount + '</td>' +
                        '<td>' + data.data.content[i].transferAmount + '</td>' +
                        '<td>' + data.data.content[i].content + '</td>' +
                        '<td>' + new Date(data.data.content[i].time).toUTCString() + '</td>' +
                        '<td>' + data.data.content[i].status + '</td>' +
                        '</tr>';
                    $("table tbody").append(markup);
                    currentIndex++;
                }
            } else {
                alert("No data found!")
            }
        });
    })

    function next(accountId, fromDate, toDate, type) {
        $("#div1").html("");
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
                    '<td>' + data.data.content[i].transferAmount + '</td>' +
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
        $("#div1").html("");
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
                    '<td>' + data.data.content[i].transferAmount + '</td>' +
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