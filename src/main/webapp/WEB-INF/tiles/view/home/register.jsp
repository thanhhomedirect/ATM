<div id="container">
    <div id="menu" class="blue-background">
        <ul>
            <li><a href="home.html">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">You should know</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
        <div id="register">
            <a href="login.html">Login</a>
        </div>
    </div><!--menu end-->
    <div id="content">
        <h3>CREATE NEW ACCOUNT</h3>
        <h4>For individual customers</h4>
            <p>
                <label for="name">Username:</label>
                <input id="name" type="text" name="name" minlength="8" required placeholder="10 characters minimum">
            </p>
            <p>
                <label for="pass">Password: </label>
                <input id="pass" type="password" name="pass" minlength="8" required placeholder="8 characters minimum">
            </p>
            <p>
                <a href="conditions.html"><input type="checkbox" name="services" value="design"><strong><em>I have read and agree to all terms and conditions</em></strong></a>
            </p>
            <p>
                <button class="title" onclick="create()">Register</button>
            </p>

    </div><!--content end-->

</div><!--container end-->