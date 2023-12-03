
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const Faq = () => {

    const faq = [
        {
            name: 'Can I find software updates for my printer?',
            dis: 'Yes, regularly check the Epson support website for the latest software updates. Download and install updates to ensure your printer operates with the latest features and improvements.'
        },
        {
            name: 'Where can I find user manuals for my Epson printer?',
            dis: 'User manuals for Epson printers are available on our official support website. Enter your printer model to access and download the relevant user manual for comprehensive guidance.'
        },
        {
            name: 'Do Epson printers come with a warranty?',
            dis: 'Yes, Epson printers typically come with a limited warranty. Check your product documentation for warranty details, and register your printer online for added support benefits.'
        },
        {
            name: ' Is there an eco-friendly option for Epson printers?',
            dis: 'Yes, Epson offers eco-friendly printer models designed with energy-saving features and environmentally conscious materials. Explore our EcoTank series for sustainable and efficient printing.'
        },
        {
            name: ' How can I troubleshoot print quality issues?',
            dis: 'Perform a nozzle check and head cleaning to address print quality problems. Consult your printer manual for specific instructions or visit our online support for detailed troubleshooting guides.'
        },
        {
            name: ' My printer is not printing. What should I do?',
            dis: 'Check the printer connections, ensure sufficient ink levels, and run a printer head cleaning cycle. If issues persist, consult our troubleshooting guides online or contact our support team.'
        }
    ]

    return (
        <>
            <div className="conatiner-fliud pb-5" style={{ backgroundColor: '#fafafae8' }}>
                <div className="container">
                    <div className="faq">
                        <h2 className="mb-5 mt-4 fw-semibold">Need Help? Read Popular Questions</h2>
                        <div className="row">
                                {
                                    faq.map((item, index) => {
                                        return (
                                            <>
                                             <div className="col-lg-6">
                                                <div className="qus mb-5">
                                                    <h3 className="bg-light mb-3 py-2 d-flex justify-content-between fw-bold fs-5 px-2 rounded">{item.name}</h3>
                                                    <p className=''>{item.dis}</p>
                                                </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            {/* <div className="col-lg-5">d</div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq