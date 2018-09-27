<div id="container">
    <div id="menu" class="blue-background">
        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div class="container">
                <div class="navbar-header">
                    <a class="navbar-brand" href="home"><strong><em>BBC<span
                            class="yellow-text">Banking</span></em></strong></a>
                </div>
                <div id="navbar" class="collapse navbar-collapse navbar-right">
                    <div class="form-group" style="float: left; margin: 5px; margin-top: 10px; display: block;">
                        <input type="text" name="search" class="form-control" id="usr" placeholder="Search...">
                    </div>
                    <button type="submit" class="btn btn-warning" name="search">Search</button>
                    <div class="btn-group">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown"><span
                                id="user"></span> <span class="caret"></span></button>
                        <ul class="dropdown-menu" role="menu">
                            <li><a href="/accounts/detail">Information</a></li>
                            <li><a href="/accounts/change-password">Change Password</a></li>
                            <li><a href="home" onclick="logout()">Logout</a></li>
                        </ul>
                    </div>
                    <div class="btn">
                        <button type="button" class="btn btn-primary">Login with Facebook</button>
                    </div>
                </div><!--/.nav-collapse -->
            </div>
        </nav>
    </div>
    <div id="content">
        <p class="afterlogin">Welcome to BBC Bank</p>
        <p class="afterlogin">Have a nice day!</p>
        <p class="afterlogin">Good Luck!</p>
    </div>


</div>
<!--container end-->