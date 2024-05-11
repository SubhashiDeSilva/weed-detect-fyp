
export default function Page(){

    return(
        <main>
            <div className={"container-fluid"}>
                <div className={'row'}>
                    <div className={'col-6 mt-5 pt-5'}>
                        <p className={'display-6 fw-lighter'}><a href={'/'} className={'text-decoration-none'}><i className="bi bi-arrow-left-circle text-decoration-none text-black"></i></a> AI-Weed Detector</p>
                        <h5>Fill This Form to Detect your Weed</h5>
                        <form>
                            <div className={'row bg-secondary-subtle p-3 rounded-3'}>
                                <select className="form-select mt-3" aria-label="Default select example">
                                    <option selected>Growth Stage</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <select className="form-select mt-3" aria-label="Default select example">
                                    <option selected>Severity</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className={'row text-center mt-3'}>
                                <div className={'col-6'}>
                                    <button className={'btn btn-lg btn-outline-dark w-50 rounded-5 display-inline'}>Cancel</button>
                                </div>
                                <div className={'col-6'}>
                                    <a className={'btn btn-lg btn-dark w-50 rounded-5 display-inline'} href={'/weed-result'} >Submit</a>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className={'col-6'}>
                        <img className={'img-fluid vh-100 p-2 w-100'} src={'/images/Rectangle 2.png'}/>
                    </div>
                </div>
            </div>
        </main>
    )
}