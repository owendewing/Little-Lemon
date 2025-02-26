import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar">
      <img src={require("./little-lemon-logo.png")} alt="Little Lemon logo" id="logo" />
      <ul className="list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/">Menu</Link></li>
        <li><Link to="/">Reservations</Link></li>
        <li><Link to="/">Order Online</Link></li>
        <li><Link to="/">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;