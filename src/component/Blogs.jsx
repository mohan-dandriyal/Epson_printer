import { Link } from "react-router-dom"

import img_1 from '../image/blog-1.png'
import img_2 from '../image/blog-2.png'
import img_3 from '../image/blog-3.png'

const Blogs = () => {

    return(
        <>
            <div className="blog py-5"style={{backgroundColor: '#fafafae8'}}>
                <div className="container">
                    <div className="row pb-5 mt-5 justify-content-center" style={{gap: '40px'}}>
                        <div className="blog-card  col-lg-3 col-sm-5 col-11  col-md-5 px-0 pb-4">
                            <div className="overflow-hidden">
                                <img src={img_1} className="w-100" alt="" />
                            </div>
                            <div className="blog-body px-3">
                                <span><strong>Date :</strong> Dec. 24. 2023</span>
                                <h3>Endpoint Management</h3>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nobis.</p>
                                <Link to="/" className="btn-loc">View More</Link>
                            </div>
                        </div>

                        <div className="blog-card  col-lg-3 col-sm-5 col-11  col-md-5 px-0 pb-4">
                            <div className="overflow-hidden">
                                <img src={img_2} className="w-100" alt="" />
                            </div>
                            <div className="blog-body px-3">
                                <span><strong>Date :</strong> Dec. 24. 2023</span>
                                <h3>Endpoint Management</h3>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nobis.</p>
                                <Link to="/" className="btn-loc">View More</Link>
                            </div>
                        </div>

                        <div className="blog-card  col-lg-3 col-sm-5 col-11  col-md-5 px-0 pb-4">
                            <div className="overflow-hidden">
                                <img src={img_3} className="w-100" alt="" />
                            </div>
                            <div className="blog-body px-3">
                                <span><strong>Date :</strong> Dec. 24. 2023</span>
                                <h3>Endpoint Management</h3>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nobis.</p>
                                <Link to="/" className="btn-loc">View More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogs