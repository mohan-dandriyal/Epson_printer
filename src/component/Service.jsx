
import React from "react";
import { Link } from "react-router-dom";

const Service = () => {

    return (
        <>
            <div className="service pt-4" style={{backgroundColor: '#fafafae8'}}>
                <div className="container">
                    <div className="sec-ttitle">
                        <h2 className="text-center">Our Service</h2>
                        <p className="col-lg-7 col-md-8 mt-3 mx-auto text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam doloremque nihil expedita eum omnis aliquam, delectus ab corporis ipsa incidunt rerum vero </p>
                    </div>
                    <div className="row justify-content-center pb-5  home-ser" style={{ rowGap: '30px', columnGap: '25px' }}>
                        <div className="col-lg-4 home-ser-col col-md-4 col-sm-6 pe-2 p-2 ps-2 col-11">
                            <div className="">
                                <div className="">
                                    <div className="card-image">
                                        <img src="https://img.freepik.com/premium-photo/technician-hand-open-cover-photocopier-photocopy-fix-paper-jam_619210-342.jpg?w=826" className="w-100" alt="" />
                                    </div>
                                    <div className="card-con">
                                        <h3 className="mt-4 mb-3 text-center">Remote Assistance</h3>
                                        <p className="text-center">Dell provides customer support for troubleshooting and technical assistance for their products.</p>
                                        <Link class=" btn-loc mx-auto mb-3  " to="/service">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 home-ser-col col-md-4 col-sm-6 pe-2 p-2 ps-2 col-11">
                            <div className="">
                                <div className="">
                                    <div className="card-image">
                                        <img src="https://img.freepik.com/premium-photo/there-is-printer-sitting-desk-office-generative-ai_958078-19464.jpg?size=626&ext=jpg&uid=P125233532&ga=GA1.1.1326273119.1694753008&semt=ais" className="w-100" alt="" />
                                    </div>
                                    <div className="card-con">
                                        <h3 className="mt-4 mb-3 text-center">Cloud Computing</h3>
                                        <p className="text-center">Dell offers cloud solutions and services to help businesses with data storage, computing power, and other IT needs.</p>
                                          <Link class=" btn-loc mx-auto mb-3  " to="/service">Read More</Link>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4 home-ser-col col-md-4 col-sm-6 pe-2 p-2 ps-2 col-11">
                            <div className="">
                                <div className="">
                                    <div className="card-image">
                                        <img src="https://img.freepik.com/free-photo/side-view-hand-using-office-printer_23-2149628837.jpg?w=826&t=st=1700802375~exp=1700802975~hmac=358f1a45a18ef750b317f5b7eca485dd509f053e36824bb0d483df7304428068" className="w-100" alt="" />
                                    </div>
                                    <div className="card-con">
                                        <h3 className="mt-4 mb-3 text-center">Security Services</h3>
                                        <p className="text-center"> Dell provides security solutions and services to help protect data and systems from cyber threats.</p>
                                        <Link class=" btn-loc mx-auto mb-3  " to="/service">Read More</Link>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4 home-ser-col col-md-4 col-sm-6 pe-2 p-2 ps-2 col-11">
                            <div className="">
                                <div className="">
                                    <div className="card-image">
                                        <img src="https://img.freepik.com/free-photo/top-view-still-life-printer-composition_23-2149120739.jpg?w=826&t=st=1700802447~exp=1700803047~hmac=6ee1bcd7d39e2db1cfc16821f02501477d1a7d7dbbe37dd9c9a08d4bfd2920c0" className="w-100" alt="" />
                                    </div>
                                    <div className="card-con">
                                        <h3 className="mt-4 mb-3 text-center">Warranty Services</h3>
                                        <p className="text-center">Dell offers warranties on their products, which may include repair or replacement services for a specified period.</p>
                                        <Link class=" btn-loc mx-auto mb-3  " to="/service">Read More</Link>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* <div className="container">
        <div id="phisyo">
            <div className="section_title">
                <h2>BEST PHYSIO CARE</h2>
                <p>We are committed to ensuring that our clients have easy access to our physiotherapy services, whether
                    it's at any of our Clinics or through scheduling a convenient Home visit</p>
            </div>

            <div className="ph-row">
                <div className="ph-col">
                    <img src='./images/img-1.jpg' alt="" />
                    <div className="col-title">
                        <h3>CLINIC TREATMENTS</h3>
                    </div>
                    <div className="col-dis">
                        <p>High quality physiotherapy care at our CB Physiotherapy Centre near you. Best Treatment for
                            Ortho / Neuro Issues</p>
                    </div>
                </div>

                <div className="ph-col">
                    <img src='https://img.freepik.com/free-photo/senior-man-nursing-home-with-doing-physical-therapy-with-help-from-nurse-using-dumbbells_482257-45265.jpg?t=st=1699249178~exp=1699249778~hmac=a08dc49b79e9e467e3ee29bd9c70052298af54ee29c8d457b2f18bbdb3afed3f'
                        alt="" />
                    <div className="col-title">
                        <h3>PHYSIO HOME VISITS</h3>
                    </div>
                    <div className="col-dis">
                        <p>Home Visits by certified CB Physiotherapists for Patients with mobility issues & for
                            patientsfor convenience</p>
                    </div>
                </div>

                <div className="ph-col">
                    <img src='./images/img-3.jpg' alt="" />
                    <div className="col-title">
                        <h3>DIGITAL CARE (FIZO)</h3>
                    </div>
                    <div className="col-dis">
                        <p>Digital Physio Assistant 'FIZO' for personalized PT exercises at home. Enables affordable &
                            long-term care </p>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
        </>
    )
}

export default Service