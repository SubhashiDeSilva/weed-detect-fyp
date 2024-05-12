
export default function Page() {

    return (
        <main>
            <div className={"container-fluid"}>
                <div className={'row'}>
                    <div className={'col-6 mt-5 pt-5'}>
                        <p className={'display-6 fw-lighter'}><a href={'/try-weed-detector'} className={'text-decoration-none'}><i className="bi bi-arrow-left-circle text-decoration-none text-black"></i></a> Weed Result</p>
                        <div className={'row bg-secondary-subtle p-3 rounded-3'}>
                            <p className={'fw-bold'}>Detected Weed  &nbsp;:{' Echinochloa colona'}</p>
                            <p className={'fw-bold'}>Growth stage   &nbsp;&nbsp;&nbsp;&nbsp;:{' Seedling'}</p>
                            <p className={'fw-bold'}>Severity       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :{' Low Growth'}</p>
                            <br />
                            <br />
                            <u><p className={'fw-bold'}>Symptoms</p></u>
                            <ul className={'px-5'}>
                                <li>Slow growth, pale leaves</li>
                            </ul>
                            <u><p className={'fw-bold'}>Control Strategies</p></u>
                            <p className={'px-3 mx-3'}>Mechanical Control</p>
                            <ul className={'px-5 mx-3'}>
                                <li>Hand-pulling</li>
                                <li>Cultivation</li>
                                <li>Mowing</li>
                            </ul>
                            <p className={'px-3 mx-3'}>Biological Control</p>
                            <ul className={'px-5 mx-3'}>
                                <li>Introduction of natural enemies</li>
                            </ul>
                            <p className={'px-3 mx-3'}>Cultural Control</p>
                            <ul className={'px-5 mx-3'}>
                                <li>Crop rotation</li>
                                <li>Mulching</li>
                                <li>Competitive planting</li>
                            </ul>
                        </div>
                        <div className={'row justify-content-center mt-3'}>
                            <a className={'btn btn-lg btn-outline-dark w-50 rounded-5 display-inline'} href={'try-weed-detector'}>Try Again</a>
                        </div>
                    </div>
                    <div className={'col-6'}>
                        <img className={'img-fluid vh-100 p-2 w-100'} src={'/images/Rectangle 3.png'} title={''} />
                    </div>
                </div>
            </div>
        </main>
    )
}