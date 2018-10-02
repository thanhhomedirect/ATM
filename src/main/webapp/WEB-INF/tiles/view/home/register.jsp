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
                            <a class="btn" href="login">Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>

    <div class="container" style="background: rgb(255, 255, 255);">
        <div class="w3-center w3-animate-zoom">
            <div class="login">
                <div id="content" class="panel panel-default">
                    <h3>ELECTRONIC BANKING</h3>
                    <h4>For individual customers</h4>
                    <div class="well-lg">
                        <div class="form-group" style="padding-bottom: 5px">
                            <label class="control-label col-sm-3" for="name"
                                   style="color: #1c478e; font-size: 17px;">Username:</label>
                            <div class="col-xs-9">
                                <input type="text" class="form-control" id="name" placeholder="Enter username" required
                                       name="name">
                            </div>
                        </div>
                        <br>
                        <div class="form-group" style="padding-bottom: 5px">
                            <label class="control-label col-sm-3" for="pass"
                                   style="color: #1c478e; font-size: 17px;">Password:</label>
                            <div class="col-xs-9">
                                <input type="password" class="form-control" id="pass" placeholder="Enter password" minlength="6"
                                       name="pass" required="true" onkeydown="enterdown(event)">
                                <span id="errorpass" style="color: red;"></span>
                            </div>
                        </div>
                        <br>
                        <div class="form-group" style="padding-bottom: 5px">
                            <label class="control-label col-sm-3" for="pass" style="color: #1c478e; font-size: 17px;">Confirm
                                Password:</label>
                            <div class="col-xs-9">
                                <input type="password" class="form-control" id="confirm" placeholder="Confirm password"
                                       name="confirm" onkeydown="enterdown(event)">
                                <span id="error" style="color:red;"></span>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-xs-12" style="margin: 10px 0 10px 2px;">
                                <input type="checkbox" name="services" id="check" required ><a href="conditions.html" id="errorcondition" target="_blank"><strong><em>  I have read and agree to all terms
                                    and conditions</em></strong></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <button type="button" class="btn btn-basic btn-block" onclick="register()" id="enter">Register</button>
                    </div>
                </div><!--content end-->
            </div>
        </div>
    </div>

</div>
<!--container end-->