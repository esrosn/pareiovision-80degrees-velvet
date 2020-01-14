import React from "react";

const HomePage = () => {
    return (
        <div className='flex flex-column justify-center items-center w-100'>
            <div className='flex flex-column justify-center vh-75 w-75'>
                <div>
                    <h2 className='f-headline-l f1'>Contact</h2>
                </div>
                <div>
                    <div className='mb4 grid-container--content flex flex-column justify-between items-baseline'>
                        <div className='grid-block--title'>
                            <h3 className='text f3 ma0'>General inquiries</h3>
                        </div>

                        <div className="grid-block--content">
                            <p className="text f1-ns f4 measure-wide ma0-ns mt4">
                                <a className="link white dim" href="mailto:pareiovision@gmail.com">pareiovision@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default HomePage
