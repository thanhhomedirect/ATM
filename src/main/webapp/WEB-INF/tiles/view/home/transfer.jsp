
<div id="container">
    <div id="menu" class="blue-background">
        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div class="container">
                <div class="row grid-row">
                    <div class="col-sm-8 col-xs-4 col-md-8 col-lg-9">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="home"><strong><em>BBC<span class="yellow-text">Banking</span></em></strong></a>
                        </div>
                    </div>
                    <div class="col-sm-2 col-xs-2.5 col-md-0 col-lg-1" style="float: right">

                    </div>
                    <div class="col-sm-1 col-xs-2.1 col-md-0 col-lg-1" style="float: right">
                        <div class="btn-group">
                            <button type="button" class="btn dropdown-toggle" data-toggle="dropdown"><span id="user"></span> <span class="caret"></span></button>
                            <ul class="dropdown-menu" role="menu">
                                <li><a href="/accounts/detail">Information</a></li>
                                <li><a href="/accounts/change-password">Change Password</a></li>
                                <li><a href="home" onclick="logout()">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>

    <div class="container" style="background: rgb(255, 255, 255);">
        <div id="content" class="panel panel-default">
            <h3>ELECTRONIC BANKING</h3>
            <h4>For individual customers</h4>
            <div>
                <div class="form-group" class="well">
                    <label class="control-label col-sm-3" for="toAccount"
                           style="color: #1c478e; font-size: 17px;">Account Number</label>
                    <div class="col-xs-9">
                        <input type="text" class="form-control" id="toAccount" placeholder="Enter Receiver Account Number" name="toAccount">
                    </div>
                </div>
                <br>
                <div class="form-group" class="well">
                    <label class="control-label col-sm-3" for="contenttransfer"
                           style="color: #1c478e; font-size: 17px;">Content</label>
                    <div class="col-xs-9">
                        <input type="text" class="form-control" id="contenttransfer" placeholder="Enter Content" name="contenttransfer">
                    </div>
                </div>
                <br>
                <div class="form-group" class="well">
                    <label class="control-label col-sm-3" for="amount"
                           style="color: #1c478e; font-size: 17px;">Money</label>
                    <div class="col-xs-9">
                        <input type="number" class="form-control" id="amount" placeholder="Enter Money" name="amount" onkeydown="enterdown(event)">
                    </div>

                </div>

                <br>
                <div class="form-group" style="padding-bottom: 5px">
                    <label class="control-label col-sm-3" for="confirm" style="color: #1c478e; font-size: 17px;">Confirm Password:</label>
                    <div class="col-xs-9">
                        <input type="password" class="form-control" id="confirm" placeholder="Confirm password" name="confirm" onkeydown="enterdown(event)"><span id="error"></span>
                    </div>
                </div>
            </div>
            <div class="col-lg-3" style="margin-top: 20px">
                <button type="button" class="btn btn-basic btn-block" id="enter">OK</button>
            </div>

        </div>
    </div><!--content end-->
</div>

</div><!--container end-->