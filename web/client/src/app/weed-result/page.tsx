
export default function Page(){

    return(
        <main>
            <div className={"container-fluid"}>
                <div className={'row'}>
                    <div className={'col-6 mt-5 pt-5'}>
                        <p className={'display-6 fw-lighter'}><a href={'/try-weed-detector'} className={'text-decoration-none'}><i className="bi bi-arrow-left-circle text-decoration-none text-black"></i></a> Weed Result</p>
                        <h5>Fill This Form to Detect your Weed</h5>
                    </div>
                    <div className={'col-6'}>
                        <img className={'img-fluid vh-100 p-2 w-100'} src={'/images/Rectangle 3.png'}/>
                    </div>
                </div>
            </div>
        </main>
    )
}