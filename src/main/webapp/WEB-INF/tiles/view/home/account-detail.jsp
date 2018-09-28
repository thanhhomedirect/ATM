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
                <div id="content">
                <h3>CUSTOMER INFORMATION</h3>
                <div class="col-md-10">
                    <div class="col-sm-6">
                        <span>Username</span><br>
                        <span>Account Number</span><br>
                        <span>Amount</span><br>
                    </div>
                    <div class="col-sm-6">
                        <span id="username"></span><br>
                        <span id="accountNumber"></span><br>
                        <span id="amount"></span><br>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div><!--container end-->