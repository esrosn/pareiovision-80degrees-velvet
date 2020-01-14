import React from "react";
import './ListenPage.css'

const ListenPage = () => {
    return (
        <article className='flex flex-column justify-center h-100 w-100 mt4-ns mt4'>



            <div className='w-100 albums flex flex-column justify-center'>
                <h2 className='f1'>Listen</h2>
                <div className="flex flex-wrap cf">
                    <div className="fl w-100   album">
                        <a rel='noopener noreferrer'
                           target='_blank'
                           href="https://ditto.fm/80-degrees-velvet"
                           className="db link dim tc">
                            <img
                                src="https://d9nqml74o2sdi.cloudfront.net/605dda66-46cf-4774-b70d-98f5b9eeefa9.9075732d-0bbc-43f3-a1d4-0c147f8d34d1"
                                alt="Frank Ocean Blonde Album Cover" className="w-100 db outline black-10"/>
                            <dl className="mt2 f6 lh-copy">
                                <dt className="clip">Title</dt>
                                <dd className="ml0 white truncate w-100">80 Degrees/Velvet</dd>
                                <dt className="clip">Artist</dt>
                                <dd className="ml0 gray truncate w-100">Isaac Lewis</dd>
                            </dl>
                        </a>
                    </div>
                    <div className="fl w-100   ma2  album ">
                        <a rel='noopener noreferrer'
                           target='_blank'href="https://lnkfi.re/7WnC3Ac5"
                           className="db link dim tc">
                            <img
                                src="https://s.mxmcdn.net/images-storage/albums4/4/6/0/3/2/8/42823064_350_350.jpg"
                                alt="Frank Ocean Blonde Album Cover" className="w-100 db outline black-10"/>
                            <dl className="mt2 f6 lh-copy">
                                <dt className="clip">Title</dt>
                                <dd className="ml0 white truncate w-100">Dim</dd>
                                <dt className="clip">Artist</dt>
                                <dd className="ml0 gray truncate w-100">Isaac Lewis</dd>
                            </dl>
                        </a>
                    </div>
                    <div className="fl w-100   ma2  album ">
                        <a rel='noopener noreferrer'
                           target='_blank'
                           href="https://lnkfi.re/rWAOPbGC"
                           className="db link dim tc">
                            <img
                                src="https://is5-ssl.mzstatic.com/image/thumb/Music128/v4/c6/e9/79/c6e9799f-cf1a-4926-afd3-42899fa6717d/artwork.jpg/804x0w.jpg"
                                alt="Frank Ocean Blonde Album Cover" className="w-100 db outline black-10"/>
                            <dl className="mt2 f6 lh-copy">
                                <dt className="clip">Title</dt>
                                <dd className="ml0 white truncate w-100">Pareidolia</dd>
                                <dt className="clip">Artist</dt>
                                <dd className="ml0 gray truncate w-100">Isaac Lewis</dd>
                            </dl>
                        </a>
                    </div>

                    <div className="fl w-100   ma2  album ">
                        <a rel='noopener noreferrer'
                           target='_blank'
                           href="https://lnkfi.re/PR199bUe"
                           className="db link dim tc">
                            <img
                                src="https://m.media-amazon.com/images/I/81AQe4XHY9L._SS500_.jpg"
                                alt="Frank Ocean Blonde Album Cover" className="w-100 db outline black-10"/>
                            <dl className="mt2 f6 lh-copy">
                                <dt className="clip">Title</dt>
                                <dd className="ml0 white truncate w-100">Silk</dd>
                                <dt className="clip">Artist</dt>
                                <dd className="ml0 gray truncate w-100">Isaac Lewis</dd>
                            </dl>
                        </a>
                    </div>
                    <div className="fl w-100   ma2  album ">
                        <a rel='noopener noreferrer'
                           target='_blank'
                           href="https://lnkfi.re/6YXt6bcI"
                           className="db link dim tc">
                            <img
                                src="https://s.mxmcdn.net/images-storage/albums4/0/2/6/7/2/7/37727620_350_350.jpg"
                                alt="Frank Ocean Blonde Album Cover" className="w-100 db outline black-10"/>
                            <dl className="mt2 f6 lh-copy">
                                <dt className="clip">Title</dt>
                                <dd className="ml0 white truncate w-100">Fly</dd>
                                <dt className="clip">Artist</dt>
                                <dd className="ml0 gray truncate w-100">Isaac Lewis</dd>
                            </dl>
                        </a>
                    </div>

                </div>

            </div>


        </article>
    )
}

export default ListenPage
