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
                            <a class="btn" href="register">Register</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>

    <div class="container" style="background-color: white;" >
        <div class="login">
            <div id="content" class="panel panel-default">
                <h3>ELECTRONIC BANKING</h3>
                <h4>For individual customers</h4>
                <div>
                    <div class="form-group" class="well">
                        <label class="control-label col-sm-3" for="name" style="color: #1c478e; font-size: 17px;">Username:</label>
                        <div class="col-xs-9">
                            <input type="text" class="form-control" id="name" placeholder="Enter username" required name="name">
                        </div>
                    </div>
                    <br>
                    <br>
                    <div class="form-group">
                        <label class="control-label col-sm-3" for="pass" style="color: #1c478e; font-size: 17px;">Password:</label>
                        <div class="col-xs-9">
                            <input type="password" class="form-control" id="pass" placeholder="Enter password" name="pass" required onkeydown="enterdown(event)">
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <button id="enter" type="button" class="btn btn-basic btn-block" onclick="login()">Login</button>
                </div>
                <div class = "col-lg-12">
                    <h5><a href="forgotpassword">Forgot Password</a></h5>
                    <h5><a href="conditions" target="_blank">Conditions and terms</a></h5>
                    <h5><a href="guide">Guide to secure transactions</a></h5>
                </div>
            </div><!--content end-->
        </div>
    </div>

</div><!--container end-->