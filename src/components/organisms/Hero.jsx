import React from "react";

export default function Hero() {
    return (
        <section className='row row-reverse px-md-4 px-3 d-flex flex-md-row flex-column flex-column-reverse align-items-center my-4 gap-md-5 hero'>
            <div className='col-12 col-md-6 my-auto text-md-start text-center'>
                <h1
                    className='mb-4 fw-bold pe-md-5'
                    style={{ fontSize: "48px", wordBreak: "break-word" }}
                >
                    Virtual healthcare for you
                </h1>
                <p className='mb-md-5 mb-4 pe-md-5'>
                    Trafalgar provides progressive, and affordable healthcare,
                    accessible on mobile and online for everyone
                </p>
                <button className='border-0 rounded-pill px-5 py-3 fw-semibold text-white'>
                    Consult today
                </button>
            </div>
            <div className='col d-flex justify-content-center mb-md-0 mb-5'>
                <img
                    src='/images/hero.svg'
                    alt='Hero'
                    className='illustration'
                    style={{ maxWidth: "70vw" }}
                />
            </div>
        </section>
    );
}
