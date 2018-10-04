<div id="container">
    <div id="menu" class="blue-background">
        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div class="container">
                <div class="row grid-row">
                    <div class="col-sm-8 col-xs-4 col-md-8 col-lg-9">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="../home"><strong><em>BBC<span
                                    class="yellow-text">Banking</span></em></strong></a>
                        </div>
                    </div>
                    <div class="col-sm-2 col-xs-2.5 col-md-0 col-lg-1" style="float: right">

                    </div>
                    <div class="col-sm-1 col-xs-2.1 col-md-0 col-lg-1" style="float: right">
                        <div class="w3-dropdown-hover">
                            <button class="w3-padding-large w3-button w3-black" title="More"><span id="user"></span> <span class="caret"></span></button>
                            <div class="w3-dropdown-content w3-bar-block w3-card-4">
                                <a href="/accounts/detail" class="w3-bar-item w3-button">Information</a>
                                <a href="/accounts/change-password" class="w3-bar-item w3-button">Change Password</a>
                                <a href="../home" class="w3-bar-item w3-button" onclick="logout()">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    <div class="container" style="background: rgb(255, 255, 255);">
        <div class="w3-center w3-animate-zoom">
            <div id="content" class="panel panel-default">

                <div class="col-xs-9">
                    <input type="text" class="form-control" id="param" name="param" required>
                </div>
                <div class="col-lg-3" >
                    <button type="button" class="btn btn-basic btn-block" id="enter">Search</button>
                </div>

                    <table id="table" class="table table-bodered" style="color: #3a3a3a">
                        <tr>
                            <th>STT</th>
                            <th>ID</th>
                            <th>Account Number</th>
                            <th>User Name</th>
                            <th>Amount</th>
                        </tr>
                        <div id="body">

                        </div>
                    </table>
                <button id="back" type="button" title="Back">Back</button>
                <button id="next" type="button" title="Next">Next</button>
            </div><!--content end-->
        </div>
    </div>
</div><!--container end-->