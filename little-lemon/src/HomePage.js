import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import Highlights from "./Highlights";
import Nav from './Nav.js';
import Testimonials from './Testimonials.js';

function HomePage(){
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

export default HomePage