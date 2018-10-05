
<div id="container">
    <div id="menu" class="blue-background">
        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div class="container">
                <div class="row grid-row">
                    <div class="col-sm-8 col-xs-4 col-md-8 col-lg-9">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="../home"><strong><em>BBC<span class="yellow-text">Banking</span></em></strong></a>
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

                <h3>ELECTRONIC BANKING</h3>
                <h4>For individual customers</h4>
                <div>
                    <div class="form-group" class="well">
                        <label class="control-label col-sm-3" for="oldpass" style="color: #1c478e; font-size: 17px;">Old Password:</label>
                        <div class="col-xs-9">
                            <input type="password" class="form-control" id="oldpass" placeholder="Enter Old Password" required name="name">
                        </div>
                        <br>
                        <br>
                    </div>

                    <div class="form-group">
                        <label class="control-label col-sm-3" for="newpass" style="color: #1c478e; font-size: 17px;">New Password:</label>
                        <div class="col-xs-9">
                            <input type="password" class="form-control" id="newpass" placeholder="Enter new password" required name="newpass">
                            <span id="errorpass" style="color: red;"></span>
                        </div>
                        <br>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-3" for="confirmpass" style="color: #1c478e; font-size: 17px;">Confirm Password:</label>
                        <div class="col-xs-9">
                            <input type="password" class="form-control" id="confirmpass" name="newpass" required placeholder="Confirm new password"><span id="error" style="color: red;"></span>
                        </div>
                    </div>
                    <br>
                </div>
                <div class="col-lg-3" style="margin-top: 20px">
                    <button id = "button" type="button" class="btn btn-basic btn-block">OK</button>
                </div>
            </div><!--content end-->
        </div>
    </div>

</div><!--container end-->