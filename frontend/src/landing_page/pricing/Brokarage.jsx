import React from 'react'

function Brokarage() {
    return (
        <div className="container">
            <div className="row p-5 mt-5 text-center border-top">
                <div className="col-8">
                    <a href="" style={{ textDecoration: "none" }}><h3 className='fs-4'>Brokerage Fees</h3></a>
                    <ul className='text-start mt-3 text-muted' style={{ lineHeight: "1.8" }}>
                       <li> Online account</li>
                        <li>Offline account</li>
                        <li> NRI account (offline only)</li>
                        <li>Partnership, LLP, HUF, or Corporate accounts (offline only)</li>
                    </ul>
                </div>
                <div className="col-4">
                    <a href="" style={{ textDecoration: "none" }}><h3 className='fs-4'>List of charges</h3></a>

                </div>
            </div>
        </div>
    );
}

export default Brokarage;