<div id="container">
    <div id="menu" class="blue-background">
        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div class="container">
                <div class="navbar-header">
                    <a class="navbar-brand" href="home"><strong><em>BBC<span class="yellow-text">Banking</span></em></strong></a>
                </div>
                <div id="navbar" class="collapse navbar-collapse navbar-right">
                    <div class="form-group" style="float: left; margin: 5px; margin-top: 10px; display: block;">
                        <input type="text" name="search" class="form-control" id="usr" placeholder="Search...">
                    </div>
                    <button type="submit" class="btn btn-warning" name="search">Search</button>
                    <div class="btn-group">
                        <a class="btn btn-info" href="register">Register</a>
                    </div>
                    <div class="btn">
                        <button type="button" class="btn btn-primary">Login with Facebook</button>
                    </div>
                </div><!--/.nav-collapse -->
            </div>
        </nav>
    </div>

    <div class="container" style="background-color: white;" >
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
                <h5><a href="forgetpassword.html">Forgot Password</a></h5>
                <h5><a href="conditions.html">Conditions and terms</a></h5>
                <h5><a href="guide.html">Guide to secure transactions</a></h5>
            </div>
        </div><!--content end-->
    </div>

</div><!--container end-->