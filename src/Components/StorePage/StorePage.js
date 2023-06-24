import "./../../assets/css/storepage.css"

import Header from "../Header/Header";
import Hero_Banner from "./Hero-Banner";
import NavBar from "./../NavBar/NavBar";
import Product_area from "./Product-area";
import Footer from "../Footer/Footer";



const StorePage = () => {
    return (
        <div>
            <Header />
            <NavBar />
            <div className="storepage-aligner">
                <Hero_Banner />
                <Product_area />
            </div>
            <Footer />
        </div>
    );
}

export default StorePage;