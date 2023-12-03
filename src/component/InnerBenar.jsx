
const InnerBenar = (props) => {
    console.log(props);

    return (
        <>
            <div className="conteiner-fluid" >
                <div className="inner_benar">
                    <h1>{props.title}</h1>
                    <p className="text-light pt-3 col-md-6 col-sm-8 col-11 text-center">{props.dis}</p>
                </div>
            </div>
        </>
    )
}

export default InnerBenar