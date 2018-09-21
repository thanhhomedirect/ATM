
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
                            <li><a href="/accounts/change-password">Chang Password</a></li>
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

    <div class="container" style="background: rgb(255, 255, 255);">
        <div class="progress">
            <div id="row" class="row">
                <div class="col-sm-2"><a href="../afterlogin"><strong>Home</strong></a></div>
                <div class="col-sm-2"><a href="#"><strong>About Us</strong></a></div>
                <div class="col-sm-2"><a href="#"><strong>You Should Know</strong></a></div>
                <div class="col-sm-2"><a href="#"><strong>Contact Us</strong></a></div>
                <div class="col-sm-2"><a href="#"><strong></strong></a></div>
                <div class="col-sm-2">

                </div>

            </div>
        </div>
        <div id="leftmenu" class="col-sm-2">
            <h3>Links</h3>
            <ul>
                <li><a href="#">Loans</a></li>
                <li><a href="#">BBCbank cards</a></li>
                <li><a href="#">E-Banking</a></li>
                <li><a href="#">Saving Advices</a></li>
            </ul>
        </div><!--leftmenu end-->
        <div class="col-md-10">
            <table id="info-table" class="table table-bodered">
                <tr>
                    <th>Username</th>
                    <th>Account Number</th>
                    <th>Amount</th>
                </tr>
                <tr>
                    <td id="username"></td>
                    <td id="accountNumber"></td>
                    <td id="amount"></td>
                </tr>

            </table>
        </div>
    </div>

    </div>


</div><!--container end-->