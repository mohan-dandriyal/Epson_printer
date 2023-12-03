
import React from "react";
import icon_1 from '../image/prin_icon_2.png'
import icon_2 from '../image/prin-3.png'
import icon_3 from '../image/prin.png'

const AboutCart = () => {

    return (
        <>
        <div className="container-fluid" style={{backgroundColor: '#fafafae8'}}>
        <div className="container  py-5 pb-5">
                <div className="sec-ttitle">
                    <h2 className="text-center">Epson Printer</h2>
                    <p className="col-lg-7 col-md-8 mt-3 mx-auto text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam doloremque nihil expedita eum omnis aliquam, delectus ab corporis ipsa incidunt rerum vero </p>
                </div>
                <div className="row justify-content-center" style={{ gap: '50px' }}>
                    <div className="col-lg-3 col-md-5 col-sm-5 col-10 abort-card p-4">
                        <div className="card-img text-center" >
                            <img src={icon_1} className="w-50" alt="" />
                            <h4>Lorem, ipsum dolor.</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, optio.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-5 col-sm-5 col-10 abort-card p-4">
                        <div className="card-img text-center" >
                            <img src={icon_2} className="w-50" alt="" />
                            <h4>Lorem, ipsum dolor.</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, optio.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-5 col-sm-5 col-10 abort-card p-4">
                        <div className="card-img text-center" >
                            <img src={icon_3} className="w-50" alt="" />
                            <h4>Lorem, ipsum dolor.</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, optio.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutCart

// transform: perspective(500px) rotatey(340deg);