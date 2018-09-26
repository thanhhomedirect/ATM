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
                        <a class="btn btn-info" href="register">Register</a>
                        <a class="btn btn-info" href="login">Login</a>
                    </div>
                    <div class="btn">
                        <button type="button" class="btn btn-primary">Login with Facebook</button>
                    </div>
                </div><!--/.nav-collapse -->
            </div>
        </nav>
    </div>
    <img class="mySlides" src="/static/images/1.jpg" >
    <img class="mySlides" src="/static/images/2.jpg" >
    <img class="mySlides" src="/static/images/3.jpg" >
    <button class="slider-button slider-display-left" onclick="plusDivs(-1)">&#10094;</button>
    <button class="slider-button slider-display-right" onclick="plusDivs(1)">&#10095;</button>
</div>
<!--container end-->