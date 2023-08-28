import React from "react";

export default function Testimonials() {
    return (
        <section
            id='testimonials'
            className='mx-auto my-5 p-md-5 p-4 text-white rounded-4'
            style={{ maxWidth: "800px" }}
        >
            <h2 className='text-center mb-md-5 mb-4'>What our customer are saying</h2>
            <div className='row flex-md-row flex-column justify-content-center align-items-center'>
                <div className='col d-flex flex-md-row flex-column justify-content-center align-items-center text-center text-md-start'>
                    <img
                        src='/images/ava.svg'
                        alt=''
                        className='rounded-circle border border-2 border-light'
                    />
                    <div className='d-block my-auto ms-md-3'>
                        <p className='fw-bold text-white mt-2 mt-md-0'>
                            Edward Newgate
                        </p>
                        <p className='text-white'>Founder Circle</p>
                    </div>
                </div>
                <p
                    className='col ms-md-auto text-white text-md-start text-center'
                >
                    “Our dedicated patient engagement app and web portal allow
                    you to access information instantaneously (no tedeous form,
                    long calls, or administrative hassle) and securely”
                </p>
            </div>
        </section>
    );
}
