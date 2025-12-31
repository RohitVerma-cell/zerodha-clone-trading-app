import React from 'react'

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className="container pt-5 pb-3 mt-5">
            <div className="row">
                <div className="col-6 pr-5">
                    <img src={imageURL} alt="" style={{width:"80%"}} />
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1 className=''>{productName}</h1>
                    <p className=''>{productDescription}</p>
                    <div>
                    <a href={tryDemo}>Try Demo</a>
                    <a href={learnMore} style={{marginLeft:"50px"}}>Learn More</a>
                    </div>
                    <div className='mt-3'>
                    <a href={googlePlay}>
                        <img src="media/images/googlePlayBadge.svg" alt="logo" /></a>
                    <a href={appStore} style={{marginLeft:"50px"}}><img src="media/images/appstoreBadge.svg" alt="logo" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;