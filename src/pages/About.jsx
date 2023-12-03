
import React from "react";
import InnerBenar from "../component/InnerBenar";
import Abouts from "../component/Abouts";
import AboutCart from "../component/AboutCard";
import Chose from '../component/Chose'
import Contact from "../component/Contact";

const About = () => {
    const dis = 'Dell offers cloud solutions and services to help businesses with data storage, computing power, and other IT needs.Dell offers cloud solutions and services to help businesses with data storage,'

    return (
        <>
            <InnerBenar title='About Us'  dis={dis} />
            <Abouts />
            <AboutCart />
            <Chose />
            <Contact />
        </>
    )
}

export default About