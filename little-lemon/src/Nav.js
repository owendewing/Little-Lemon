function Nav() {
    return(
        <nav class = "navbar">
            <img src={require("./little-lemon-logo.png")} alt="Little Lemon logo" id="logo"/>
            <ul class="list">
                <li a href="">Home</li>
                <li a href="">About</li>
                <li a href="">Menu</li>
                <li a href="">Reservations</li>
                <li a href="">Order Online</li>
                <li a href="">Login</li>
            </ul>
        </nav>
    );
}

export default Nav;
