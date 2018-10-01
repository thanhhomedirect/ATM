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
                        <div class="btn-group">
                            <button type="button" class="btn dropdown-toggle" data-toggle="dropdown"><span
                                    id="user"></span> <span class="caret"></span></button>
                            <ul class="dropdown-menu" role="menu">
                                <li><a href="/accounts/detail">Information</a></li>
                                <li><a href="/accounts/change-password">Change Password</a></li>
                                <li><a href="../home" onclick="logout()">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    <div class="container" style="background: rgb(255, 255, 255);">
        <div class="w3-center w3-animate-zoom">
            <div id="content" class="panel panel-default">

                <h3>ELECTRONIC BANKING</h3>
                <h4>For individual customers - Show History Transaction</h4>
                <div>
                    <div class="form-group" class="well">
                        <label class="control-label col-sm-3" for="fromDate"
                               style="color: #1c478e; font-size: 17px;">From Date</label>
                        <div class="col-xs-9">
                            <input type="date" class="form-control" id="fromDate" name="fromDate" required>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="form-group" class="well">
                        <label class="control-label col-sm-3" for="toDate"
                               style="color: #1c478e; font-size: 17px;">To Date</label>
                        <div class="col-xs-9">
                            <input type="date" class="form-control" id="toDate" name="toDate" required>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="form-group" class="well">
                        <label class="control-label col-sm-3" style="color: #1c478e; font-size: 17px;">Type</label>
                        <div class="col-xs-9">
                            <select id="type" class="form-control">
                                <option value="null">---</option>
                                <option value="1">Deposit</option>
                                <option value="2">Withdrawal</option>
                                <option value="3">Transfer</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3" style="margin-top: 20px">
                    <button type="button" class="btn btn-basic btn-block" id="enter">OK</button>
                </div>

            </div><!--content end-->
        </div>
    </div>
    <div id="history" class="container" style="background: rgb(255, 255, 255);"></div>
</div><!--container end-->