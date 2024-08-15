import Header from "./Header.js";
import Footer from "./Footer.js";
import Hero from "./Hero.js";
import Highlights from "./Highlights.js";
import Nav from './Nav.js';
import Testimonials from './Testimonials.js';

function Homepage(){
    return(
        <>
        <Header></Header>
        <Nav></Nav>
        <Hero></Hero>
        <Highlights></Highlights>
        <Testimonials></Testimonials>
        <Footer></Footer>
        </>
    )
}

export default Homepage;