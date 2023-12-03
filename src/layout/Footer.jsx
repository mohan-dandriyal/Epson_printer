
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <>
            <footer className="pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-9">
                            <h3>Contact Us</h3>
                            <ul className="ps-0 d-flex" style={{flexDirection: 'column', lineHeight: 2}}>
                                <li><strong>Contact : </strong><a href="tel: 9087654321">+91 9087654321</a></li>
                                <li><strong>Email Id : </strong>  <a href="tel: 9087654321">demo@gmail.com</a></li>
                                <li><strong>Address : </strong>  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, itaque.</li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-3 col-sm-4 links">
                            <h3>Quick Link</h3>
                            <ul className="ps-0">
                                <li><Link to="/privacy">privacy policy</Link></li>
                                <li><Link to="/terms_conditions">terms & conditions</Link></li>
                                <li><Link to="">terms & conditions</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-3 col-sm-4  links">
                            <h3>Leagal</h3>
                            <ul className="ps-0">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About us</Link></li>
                                <li><Link to="/service">Service</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="copy-right text-center">
                    <p className="mb-0">copy@right2023</p>
                </div>
                </div>
                
            </footer>
        </>
    )
}

export default Footer