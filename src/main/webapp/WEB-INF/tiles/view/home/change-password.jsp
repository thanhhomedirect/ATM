
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
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown"><span id="user"></span> <span class="caret"></span></button>
                        <ul class="dropdown-menu" role="menu">
                            <li><a href="/accounts/detail">Information</a></li>
                            <li><a href="/accounts/change-password">Change Password</a></li>
                            <li><a href="../home" onclick="logout()">Logout</a></li>
                        </ul>
                    </div>
                    <div class="btn">
                        <button type="button" class="btn btn-primary">Login with Facebook</button>
                    </div>
                </div><!--/.nav-collapse -->
            </div>
        </nav>
    </div>

    <div class="container" style="background: rgb(255, 255, 255);">
        <div class="progress">
            <div id="row" class="row">
                <div class="col-sm-2"><a href="../afterlogin"><strong>Home</strong></a></div>
                <div class="col-sm-2"><a href="#"><strong>About Us</strong></a></div>
                <div class="col-sm-2"><a href="#"><strong>You Should Know</strong></a></div>
                <div class="col-sm-2"><a href="#"><strong>Contact Us</strong></a></div>
                <div class="col-sm-2"><a href="#"><strong></strong></a></div>
                <div class="col-sm-2"><a href="#"><strong></strong></a></div>
            </div>
        </div>
        <div id="content" class="panel panel-default">

            <h3>ELECTRONIC BANKING</h3>
            <h4>For individual customers</h4>
            <div>
                <div class="form-group" class="well">
                    <label class="control-label col-sm-3" for="oldpass" style="color: #1c478e; font-size: 17px;">Old Password:</label>
                    <div class="col-xs-9">
                        <input type="text" class="form-control" id="oldpass" placeholder="Enter Old Password" required name="name">
                    </div>
                </div>
                <br>
                <div class="form-group">
                    <label class="control-label col-sm-3" for="newpass" style="color: #1c478e; font-size: 17px;">New Password:</label>
                    <div class="col-xs-9">
                        <input type="password" class="form-control" id="newpass" placeholder="Enter new password" required name="newpass">
                    </div>
                </div>
                <br>
                <div class="form-group">
                    <label class="control-label col-sm-3" for="confirmpass" style="color: #1c478e; font-size: 17px;">Confirm Password:</label>
                    <div class="col-xs-9">
                        <input type="password" class="form-control" id="confirmpass" name="newpass" required onblur="confirmPass()" placeholder="Confirm new password"><span id="error"></span>
                    </div>
                </div>
            </div>
            <div class="col-lg-3" style="margin-top: 20px">
                <button type="button" class="btn btn-basic btn-block" onclick="changePass()">OK</button>
            </div>

            </div>
        </div><!--content end-->
    </div>

</div><!--container end-->