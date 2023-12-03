
import React from "react";
import Services from "../component/Services";
import Contact from "../component/Contact";
import InnerBenar from "../component/InnerBenar";

const Service = () => {
    const dis = ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolor laborum porro sit ex perspiciatis provident rem quos quasi ipsa.'

    return (
        <>
       
            <InnerBenar title='Our Service' dis={dis} />
            <Services />
            <Contact />
        </>
    )
}

export default Service