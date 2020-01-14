import React from "react";
import cover from '../../assets/80DegreesVelvertCoverARtfinal.jpg'
import './HomePage.css'

const HomePage = () => {
    return (
        <>

        <div className="flex flex-column justify-center items-center mh4 mt5 image ">
        <a target='_blank' rel='noopener noreferrer' className='link white dim' href="https://ditto.fm/80-degrees-velvet">
            <figure className='cover-image ma0'>
                <img src={cover} alt ="80DegreesVelvetCover" />
            </figure>
            <div className='tc'>
                <h3 className='f3-ns f6'>


                    Listen to 80 Degrees / Velvet
                </h3>
            </div>
        </a>
        </div>
        </>
    )
}

export default HomePage
