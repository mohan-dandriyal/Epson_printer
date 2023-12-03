import Blogs from "../component/Blogs"
import Contact from "../component/Contact"
import InnerBenar from "../component/InnerBenar"


const Blog = () => {

    const dis = 'In the dynamic world of printing technology, Epson stands as a beacon of innovation and reliability. Renowned for delivering exceptional print quality and cutting-edge features, Epson printers have become a staple for home users, businesses, and creative professionals alike.'

    return(
        <>
            <InnerBenar title='Blog' dis={dis} />
            <Blogs />
            <Contact />
        </>
    )
}

export default Blog