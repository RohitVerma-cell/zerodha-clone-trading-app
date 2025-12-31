import React from 'react'

function Universe() {
    return (
        <div className="container">
            <div className="row text-center">
                <h1 className='fs-2 mb-3 text-muted'>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/smallcaseLogo.png" alt="no" />
                    <p className='text-small text-muted mt-3'>Thematic investing platform <br />
                        that helps you invest in diversified <br />
                        baskets of stocks on ETFs.</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/streakLogo.png" alt="no" style={{ width: "50%" }} />
                    <p className='text-small text-muted mt-3'>
                        Systematic trading platform <br />
                        that allows you to create and backtest <br />
                        strategies without coding.</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/sensibullLogo.svg" alt="no na" style={{ width: "80%" }} />
                    <p className='text-small text-muted mt-3'>Options trading platform that lets you <br />
                        create strategies, analyze positions, and examine <br />
                        data points like open interest, FII/DII, and more.
                    </p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img src="media/images/dittoLogo.png" alt="no" style={{ width: "50%" }} />
                    <p className='text-small text-muted mt-3'>Personalized advice on life <br />
                        and health insurance. No spam <br />
                        and no mis-selling.</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/sensibullLogo.svg" alt="no" style={{ width: "70%" }} />
                    <p className='text-small text-muted mt-3'>Options trading platform that lets you <br />
                        create strategies, analyze positions, and examine <br />
                        data points like open interest, FII/DII, and more.
                    </p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/zerodhaFundhouse.png" alt="no" style={{ width: "60%" }} />
                    <p className='text-small text-muted mt-3'>Options trading platform that lets you <br />
                        create strategies, analyze positions, and examine <br />
                        data points like open interest, FII/DII, and more.
                    </p>
                </div>
                <button className='p-2 btn btn-primary fs-5 mb-3' style={{ width: "20%", margin: "0 auto" }}>Signup now</button>
            </div>
        </div>
    );
}

export default Universe;