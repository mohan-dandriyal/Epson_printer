


import React from "react";
import logo from '../image/bennar.avif'
import { Link } from "react-router-dom";

const Benar = () => {

    return (
        <>
            <div className="container-fluide ps-0 pe-0 d-flex align-items-center justify-content-center" id="benar" style={{ minHeight: '90vh' }}>
                <div className="benar h-100" style={{ minHeight: '90vh' }}>
                    <h1 className="col-lg-7 text-center">Whey Shoud Use Epson Printer</h1>
                    <p className="col-lg-5 mt-2 text-light text-center col-md-6">Epson printers are chosen for their exceptional print quality, versatility, and innovative features. With durable designs and eco-friendly options, they meet diverse printing needs for both home and business users.</p>
                    <Link to="/about" className="loc_btn">More Info</Link>
                </div>
            </div>
        </>
    )
}

export default Benar
