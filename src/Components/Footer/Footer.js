import "./../../assets/css/footer.css"
import { FaTwitter, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import Copywrite from "./Copywrite";


const Footer = () => {
    return (
        <div>
            <footer className="footer">

                <nav>
                    <ul className="footer-nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">Products</a></li>
                        <li className="social-icons">
                            <a href="https://twitter.com">
                                <FaTwitter />
                            </a>
                            <a href="https://www.instagram.com/innopolisu/">
                                <FaInstagram />
                            </a>
                            <a href="https://www.facebook.com/innopolisU">
                                <FaFacebook />
                            </a>
                            <a href="https://youtube.com">
                                <FaYoutube />
                            </a>
                        </li>
                    </ul>
                </nav>

            </footer>
            <Copywrite />
        </div>
    );
};

export default Footer;