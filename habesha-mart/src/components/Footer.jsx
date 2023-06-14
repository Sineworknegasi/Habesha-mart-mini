import { BsGithub, BsFacebook, BsInstagram } from "react-icons/bs";
import "./Footer.css";

function Footer() {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="footer-area footer-padding">
                    <div className="container">
                        <div className="row">
                            <div className="">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-logo mb-35">
                                        <img src='https://images.squarespace-cdn.com/content/v1/59f0a6e9f09ca487886b21e2/1527236501791-PL8UQJXN2C3M3GIMCX7R/Artboard+Landscap.png' alt="" width={100} />
                                    </div>
                                    <div className="footer-tittle">
                                        <div className="footer-pera">
                                            <p>
                                               You can contact us here 
                                            </p>
                                        </div>
                                    </div>
                                    <div className="footer-social">
                                        <a className='social-media' href="t">
                                            <i className='fa fa-twitter'></i>
                                        </a>
                                        <a className='social-media' href="y">
                                            <i className='fa fa-facebook' ></i>
                                        </a>
                                        <a className='social-media' href="y">
                                            <i className='fa fa-pinterest-p' ></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Quick links</h4>
                                        <ul>
                                            <li>
                                                <a href="y#">Product</a>
                                            </li>
                                            <li>
                                                <a href='y'>About</a>
                                            </li>
                                            <li>
                                                <a href="y">Blog</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Shop Catagory</h4>
                                        <ul>
                                            <li>
                                                <a href="electronics">Electronics</a>
                                            </li>
                                            <li>
                                                <a href='Skin-care'>Skincare</a>
                                            </li>
                                            <li>
                                                <a href="Chair">Furniture</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Partner</h4>
                                        <ul>
                                            <li>
                                                <a href="www.sineworknegasi38@gmail.com">Sinework Negasi</a>
                                            </li>
                                            <li>
                                                <a href='y'>Nebiyu Asfawosen </a>
                                            </li>
                                            <li>
                                                <a href="y">Privacy Policy</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom-area">
                            <p>
                                Copyright © {new Date().getFullYear()} All rights reserved |
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
