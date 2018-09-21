<div id="container">
    <div id="menu" class="blue-background">
        <ul>
            <li><a href="afterlogin">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">You should know</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
    </div><!--menu end-->
    <div id="content">
        <p>
            <label for="toaccount">Receiver AccountNumber</label>
            <input type="number" name="toaccount" id="toaccount"/>
        </p>
        <p>
            <label for="contenttransfer">Content</label>
            <input type="text" name="content" id="contenttransfer"/>
        </p>
        <p>
            <label for="amount">Money</label>
            <input type="number" name="amount" id="amount"/>
        </p>
        <p>
            <button class="title" onclick="transfer()">OK</button>
        </p>
    </div>
</div>