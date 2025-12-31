import React from 'react'

function RightSection({ imageURL, productName, productDescription, learnMore }) {
    return (
        <div className="container pt-5 pb-3 mt-5">
            <div className="row">

                <div className="col-6 p-5 mt-5">
                    <h1 className=''>{productName}</h1>
                    <p className=''>{productDescription}</p>
                    <div>
                        <a href={learnMore} >Learn More</a>
                    </div>
                </div>
                <div className="col-6 pr-5">
                    <img src={imageURL} alt="" style={{ width: "90%" }} />
                </div>
            </div>
        </div>
    );
}

export default RightSection;