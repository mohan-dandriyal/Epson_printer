
import React from "react";
import { Link } from 'react-router-dom'

import prin_1 from '../image/prin-1.webp'

const Abouts = () => {

    return (
        <>
            <div id="abouts" className="mt-0 pt-5" style={{ backgroundColor: '#fafafae8' }}>
                <div className="sec-ttitle ">
                    <h2 className="text-center">About Us</h2>
                    <p className="col-lg-7 col-md-8 mt-3 mx-auto text-center">Epson printers are renowned for their high-quality prints and advanced inkjet technology. With a diverse range of models, including eco-friendly options, Epson offers reliability and innovation. </p>
                </div>
                <div className="container">
                    <div className="row pb-4 justify-content-center" style={{ rowGap: '20px' }}>
                        <div className="col-lg-5 col-md-5 col-sm-12">
                            <img src={prin_1} className="w-100" alt="" />
                        </div>
                        <div className="col-lg-5 col-md-7">
                            <h3>Epson Printer</h3>
                            <p> Epson printers are known for their superior print quality and advanced technology. With diverse models catering to different needs, Epson offers reliability and innovation. Features like wireless connectivity, mobile printing, and eco-friendly options make Epson printers versatile. The brand's commitment to durability and strong customer support further enhances its appeal, making it a preferred choice for users.</p>
                            <Link to="/contact" className=" btn-loc ">Contact us</Link>
                        </div>
                    </div>

                    <div className="row pb-4 mt-5 justify-content-center flex-wrap-reverse" style={{ rowGap: '20px' }}>
                        <div className="col-lg-5 col-md-7">
                            <h3>Epson Printer</h3>
                            <p> Epson printers are known for their superior print quality and advanced technology. With diverse models catering to different needs, Epson offers reliability and innovation. Features like wireless connectivity, mobile printing, and eco-friendly options make Epson printers versatile. The brand's commitment to durability and strong customer support further enhances its appeal, making it a preferred choice for users.</p>
                            <Link to="/contact" className=" btn-loc ">Contact us</Link>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-12">
                            <img src={prin_1} className="w-100" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Abouts