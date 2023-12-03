import React from "react"
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


import { FaFacebookF } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const ContactCart = () => {

    return (
        <>
            <div className="container-fluid py-5" style={{ backgroundColor: '#fafafae8' }}>
                <div className="container">
                <div className="sec-ttitle">
                        <h2 className="text-center text-dark">Follow Us</h2>
                    </div>
                    <div className="row pt-2 pb-4 align-items-center folloeUs">
                        <div className="col-lg-3 col-sm-6 col-12 ">
                            <ul>
                                <li><a href="www.facebook.com" className=""><FaFacebookF className="fs-2" /> Facebook</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <ul>
                                <li><a href="www.twitter.com"><IoLogoTwitter className="fs-2" /> Twitter</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <ul>
                                <li><a href="www.instagram"><FaInstagram className="fs-2" /> Instagram </a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                            <ul>
                                <li><a href="www.linkdin.com"><FaLinkedinIn className="fs-2" /> Linkedin </a></li>
                            </ul>
                        </div>
                    </div>



                    {/* <div className="row justify-content-center mt-5 py-5" style={{ gap: '50px' }}>
                        <div className="col-lg-3 col-md-5 col-sm-5 col-10 contact_card p-4">
                            <div className="card-img text-center" >
                                <div className="con-icons mb-5">
                                    <IoCall />
                                </div>
                                <h4>Contact</h4>
                                <a href="tel:0987654321">+91 9087654321</a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-5 col-sm-5 col-10 contact_card p-4">
                            <div className="card-img text-center" >
                                <div className="con-icons mb-5">
                                    <MdEmail />
                                </div>
                                <h4>Email</h4>
                                <a href="mailto:demo@gmail.com">demo@gmail.com</a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-5 col-sm-5 col-10 contact_card p-4">
                            <div className="card-img text-center" >
                                <div className="con-icons mb-5">
                                    <FaLocationDot />
                                </div>
                                <h4>Address</h4>
                                <a>Lorem ipsum dolor sit amet consectetur adipisicing </a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default ContactCart