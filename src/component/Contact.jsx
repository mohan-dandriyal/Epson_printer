
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Contact = () => {


    return (

        <>
            <div id="contact" className="  pt-4 pb-5" style={{backgroundColor: '#fafafae8'}}>
                <div className="container">
                    <div className="sec-ttitle">
                        <h2 className="text-center text-light">Contact Us</h2>
                        <p className="col-lg-7 text-light col-md-8 mt-3 mx-auto text-center">Connect with Epson: Reach Out for Printer Solutions and Expert Support - Contact Us Today for Personalized Assistance</p>
                    </div>

                    <div className="row" style={{ rowGap: '30px' }}>
                        <div className="col-md-5 cont">
                            <h3 className="text-light">Get In Touch</h3>
                            <ul className="ps-0 mt-4">
                                <li><a href="tel:9087654321" className="align-items-center con-link"><IoCall /> +91 9087654321</a></li>
                                <li><a href="mailto:demo@gmail.com" className="align-items-center con-link"><IoMdMail /> demo@gmail.com</a></li>
                                <li><a href="#"><IoLocationSharp /> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, incidunt.</a> </li>
                            </ul>

                            <ul className="social_link d-flex ps-0" style={{ flexDirection: 'row' }}>
                                <li><a href="www.facebook.com"><FaFacebookF /></a></li>
                                <li><a href="www.twitter.com"><IoLogoTwitter /></a></li>
                                <li><a href="www.instagram"><FaInstagram /></a></li>
                                <li><a href="www.linkdin.com"><FaLinkedinIn /></a></li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <form action="">
                                <div className="row col-md-12 col-sm-11">
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Enter Name ..." className="form-control" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Email Id ..." className="form-control" />
                                    </div>

                                    <div className="input-box">
                                        <input type="text" placeholder="Subject" className="form-control" />
                                        <textarea name="" placeholder="Message" id="" cols="30" rows="4" className="form-control"></textarea>
                                    </div>

                                    <div className="button">
                                        <button className="btn btns mt-4">Send The Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact

// git remote add origin https://github.com/mohanchandrad/epson_pri.git
//   git branch -M main
//   git push -u origin main