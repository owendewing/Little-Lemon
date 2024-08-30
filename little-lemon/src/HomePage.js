import Header from "./Header.js";
import Footer from "./Footer.js";
import Hero from "./Hero.js";
import Highlights from "./Highlights.js";
import Nav from './Nav.js';

function HomePage(){
    return(
        <>
        <Header></Header>
        <Nav></Nav>
        <Hero></Hero>
        <Highlights></Highlights>
        <Footer></Footer>
        </>
    )
}

export default HomePage;