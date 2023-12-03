
import React from "react";
import ContactCart from "../component/ContactCart";
import Contact from "../component/Contact";
import InnerBenar from "../component/InnerBenar";
 
const Contacts = () => {
        const dis = 'Contact Epson for Printer Support: Reach Our Experts Today - Your Source for Personalized Assistance and Solutions to Ensure Optimal Performance with Your Epson Printer'
    return(
        <>
        <InnerBenar title='Contact' dis={dis} />
        <ContactCart />
        <Contact />
        </>
    )
}

export default Contacts