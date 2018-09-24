

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

    <div class="container" style="background: rgb(255, 255, 255);">
        <div id="content" class="panel panel-default">

            <h3>ELECTRONIC BANKING</h3>
            <h4>For individual customers</h4>
            <div class="well-lg">
                <div class="form-group" style="padding-bottom: 5px">
                    <label class="control-label col-sm-3" for="name" style="color: #1c478e; font-size: 17px;">Username:</label>
                    <div class="col-xs-9">
                        <input type="text" class="form-control" id="name" placeholder="Enter username" required name="name">
                    </div>
                </div>
                <br>
                <div class="form-group" style="padding-bottom: 5px">
                    <label class="control-label col-sm-3" for="pass" style="color: #1c478e; font-size: 17px;">Password:</label>
                    <div class="col-xs-9">
                        <input type="password" class="form-control" id="pass" placeholder="Enter password" minlength="6" name="pass" required ="true" onkeydown="enterdown(event)">
                    </div>
                </div>
                <br>
                <div class="form-group" style="padding-bottom: 5px">
                    <label class="control-label col-sm-3" for="pass" style="color: #1c478e; font-size: 17px;">Confirm Password:</label>
                    <div class="col-xs-9">
                        <input type="password" class="form-control" id="confirm" placeholder="Confirm password" name="confirm" onkeydown="enterdown(event)"><span id="error"></span>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-xs-12" style="margin: 10px 0 10px 2px;">
                        <a href="conditions.html"><input type="checkbox" name="services" required value="design"><strong><em>I have read and agree to all terms and conditions</em></strong></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <button type="button" class="btn btn-basic btn-block" onclick="register()" id="enter">Register</button>
            </div>
        </div><!--content end-->
    </div>

</div><!--container end-->