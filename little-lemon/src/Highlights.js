function Highlights() {
    return(
        <div className="highlights-background">
            <div className="highlights-content">
                <h1 id="highlights-title">This Weeks Specials!</h1>
                <button className="buttons">Online Menu</button>
            </div>
            <div className="highlights-specials">
                <div className="highlights-column">
                <img src={require("./greek-salad.jpg")} alt="greek salad" className="column-image"/>
                <div className="highlights-text-price">
                    <h2 className="highlights-text">Greek salad</h2>
                    <h3 className="highlights-price">$12.99</h3>
                </div>
                <p className="highlights-description">The famous greek salad of <br></br> crispy lettuce,
                pepper, olives <br></br> and our Chicago style feta<br></br>cheese, garnished with<br></br>
                crunchy garlic and rosemary<br></br>croutons.</p>
                <button className="delivery-button">Order for Delivery</button>
                </div>
                <div className="highlights-column">
                <img src={require("./bruchetta.jpg")} alt="bruchetta" className="column-image"/>
                <div className="highlights-text-price">
                    <h2 className="highlights-text">Bruchetta</h2>
                    <h3 className="highlights-price">$5.99</h3>
                </div>
                <p className="highlights-description">Our Bruchetta is made from <br></br> gilled bread
                that has been <br></br> smeared with garlic and<br></br>seasoned with salt and olive<br></br>
                oil.</p>
                <button className="delivery-button">Order for Delivery</button>
                </div>
                <div className="highlights-column">
                <img src={require("./lemon-dessert.jpg")} alt="lemon-dessert" className="column-image"/>
                <div className="highlights-text-price">
                    <h2 className="highlights-text">Lemon Dessert</h2>
                    <h3 className="highlights-price">$5.00</h3>
                </div>
                <p className="highlights-description">This comes straight from <br></br> grandma's
                recipe book, every <br></br> last ingredient has been<br></br>sourced and is as authentic<br></br>
                as can be imagined.</p>
                <button className="delivery-button">Order for Delivery</button>
                </div>
            </div>
        </div>
    )
}

export default Highlights;