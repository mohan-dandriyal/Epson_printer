
import React from "react";
import pri_icon_1 from '../image/prin-1.png'
import pri_icon_2 from '../image/prin_icon_2.png'
import pri_icon_3 from '../image/prin-3.png'
import pri_icon_4 from '../image/prin.png'

const Chose = () => {

    return (
        <>
            <section className="chose pt-4 pb-5" style={{backgroundColor: '#fafafae8'}}>
                <div className="container">
                    <div className="sec-ttitle" style={{ marginBottom: '10px' }}>
                        <h2 className="text-center" >Why Choose us</h2>
                        <p className="col-lg-7 col-md-8 mt-3 mx-auto text-center">
                            When providing online support for laptops without hardware support, you'll want to focus on addressing software-related issues. Here are some key sections you can include in your online support</p>
                    </div>

                    <div className="row justify-content-center text-center ">
                        <div className="col-lg-3 col-sm-8 mx-auto col-11 col-md-5 chose_card pt-4 ">
                            <img src={pri_icon_2} alt="" />
                            <h3>Print Quality</h3>
                            <p> Epson printers are known for their high-quality print output. Whether you're printing text documents or high-resolution images, Epson printers generally provide crisp and clear prints.</p>
                        </div>

                        <div className="col-lg-3 col-sm-8 mx-auto col-11 col-md-5 chose_card pt-4 ">
                            <img src={pri_icon_1} alt="" />
                            <h3>Ink Technology</h3>
                            <p> Epson printers are known for their high-quality print output. Whether you're printing text documents or high-resolution images, Epson printers generally provide crisp and clear prints.</p>
                        </div>

                        <div className="col-lg-3 col-sm-8 mx-auto col-11 col-md-5 chose_card pt-4 ">
                            <img src={pri_icon_3} alt="" />
                            <h3>Wide Range of Models</h3>
                            <p> Epson printers are known for their high-quality print output. Whether you're printing text documents or high-resolution images, Epson printers generally provide crisp and clear prints.</p>
                        </div>

                        <div className="col-lg-3 col-sm-8 mx-auto col-11 col-md-5 chose_card pt-4 ">
                            <img src={pri_icon_4
                            } alt="" />
                            <h3>Features and Functions</h3>
                            <p>
                                Epson printers boast high-quality prints, wireless connectivity, mobile printing, scanning capabilities, and a versatile range of models for diverse printing requirements.</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Chose

// git remote add origin https://github.com/mohanchandrad/epson_pri.git
//   git branch -M main
//   git push -u origin main