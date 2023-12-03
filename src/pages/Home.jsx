
import React from "react"

import Benar from '../component/Benar'
import Service from '../component/Service'
import Chose from '../component/Chose'
import Contact from "../component/Contact"
import AboutHome from "../component/HomeAbout"
import Faq from "../component/Faq"

const Home = () => {
    return (
        <>
            <Benar />
            {/* <AboutHome /> */}
            <Service />
            <Chose />
            <Faq />
            <Contact />
        </>
    )
}

export default Home