import { Link } from "react-router-dom";

function Footer(){
    return(
        <footer>
            <div className="footer">
                <div className="footer-background">
                    <div className="footer-image-container">
                        <img id="footer-image" src = {require("./Footer-Logo.png")} alt="Footer Logo" style={{
                            filter: "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(3deg) brightness(104%) contrast(103%)"
                            }}
                        />
                    </div>
                    <div className="footer-list-container">
                        <ul className="footer-list">
                            <li id="footer-title"><h2>Little Lemon</h2></li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">About</Link></li>
                            <li><Link to="/">Menu</Link></li>
                            <li><Link to="/">Reservations</Link></li>
                            <li><Link to="/">Order Online</Link></li>
                            <li><Link to="/">Login</Link></li>
                        </ul>
                    </div>
                    <div className="footer-social-media-container">
                        <ul className="footer-social-media-list">
                            <li><h2 id="footer-social-media">Find us on social media!</h2></li>
                            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        </ul>
                    </div>
                    <div className="footer-contact-information-container">
                        <ul className = "footer-contact-information-list">
                            <li><h2>Contact Information</h2></li>
                            <li>Address: Chicago, USA</li>
                            <li>Phone: 123-456-7890</li>
                            <li>Email: example@littlelemon.com</li>
                        </ul>
                    </div>
                </div>
                <h6 id="footer-copyright">Developed by Owen Dewing. <br></br>© 2024 Little Lemon. All rights reserved.</h6>
            </div>
        </footer>
    );
}

export default Footer;