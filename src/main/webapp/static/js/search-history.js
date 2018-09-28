if (localStorage.getItem("id") == "") {
    alert("Please login!")
    window.location = 'http://127.0.0.1:8090/login'
} else {
    document.getElementById("user").innerHTML = localStorage.getItem("username");
}

$(document).ready(function () {
    $('#enter').click(function () {
        var accountId = localStorage.getItem("id");
        var fromDate = $('#fromDate').val().toString();
        var toDate = $('#toDate').val().toString();
        var type = $('#type').val();
        var currentIndex = 0;
        var currentPage = 1;
        $.ajax({
            method: 'GET',
            url: '/transactions/search?accountId=' + accountId + '&toDate=' + toDate +
                '&fromDate=' + fromDate + '&type=' + type,
        }).done(function (data) {
            if (data.code == 1 && data.data.content != null && data.data.content != "") {
                var fetch = data.size;
                if (data.data.numberOfElements < data.data.size) {
                    fetch = data.data.numberOfElements;
                }
                $('<div id="div1"></div><br>').appendTo('#history');
                $('<button id="back" style="color: black;">Back</button>').appendTo('#div1');
                $('<button id="next" style="color: black;">Next</button>').appendTo('#div1');
                for (i = 0; i < fetch; i++) {
                    $('#div1').append('<p style="color: black;">' + (currentIndex+1) + '. ' + data.data.content[i] + '</p>');
                    currentIndex++;
                }

                if (currentPage == data.data.pageable.pageNumber) {
                    $('#next').hide();
                } else {
                    $('#next').show();
                }
                if (currentPage == 1) {
                    $('#back').hide();
                } else {
                    $('#back').show();
                }
            } else {
                alert("No data can found!")
            }
        });
    })
})