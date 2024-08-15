function Highlights() {
    return(
        <div class="highlights-background">
            <div class="highlights-content">
                <h1 id="highlights-title">This Weeks Specials!</h1>
                <button class="buttons">Online Menu</button>
            </div>
            <div class="highlights-specials">
                <div class="highlights-column">
                <img src={require("./greek-salad.jpg")} alt="greek salad" class="column-image"/>
                <div class="highlights-text-price">
                    <h2 class="highlights-text">Greek salad</h2>
                    <text class="highlights-price">$12.99</text>
                </div>
                <body class="highlights-description">The famous greek salad of <br></br> crispy lettuce,
                pepper, olives <br></br> and our Chicago style feta<br></br>cheese, garnished with<br></br>
                crunchy garlic and rosemary<br></br>croutons.</body>
                <button class="delivery-button">Order for Delivery</button>
                </div>
                <div class="highlights-column">
                <img src={require("./bruchetta.jpg")} alt="bruchetta" class="column-image"/>
                <div class="highlights-text-price">
                    <h2 class="highlights-text">Bruchetta</h2>
                    <text class="highlights-price">$5.99</text>
                </div>
                <body class="highlights-description">Our Bruchetta is made from <br></br> gilled bread
                that has been <br></br> smeared with garlic and<br></br>seasoned with salt and olive<br></br>
                oil.</body>
                <button class="delivery-button">Order for Delivery</button>
                </div>
                <div class="highlights-column">
                <img src={require("./lemon-dessert.jpg")} alt="lemon-dessert" class="column-image"/>
                <div class="highlights-text-price">
                    <h2 class="highlights-text">Lemon Dessert</h2>
                    <text class="highlights-price">$5.00</text>
                </div>
                <body class="highlights-description">This comes straight from <br></br> grandma's
                recipe book, every <br></br> last ingredient has been<br></br>sourced and is as authentic<br></br>
                as can be imagined.</body>
                <button class="delivery-button">Order for Delivery</button>
                </div>
            </div>
        </div>
    )
}

export default Highlights