import React from "react";

export default function Testimonials() {
    return (
        <section id="banner" className="w-75 mx-auto my-5 px-5 py-5 text-white">
            <h2 className="text-center mb-5">What our customer are saying</h2>
            <div className="d-flex align-items-center">
                <img src="/images/ava.svg" alt="" className="rounded-circle border border-2 border-light" />
                <div className="d-block my-auto ms-3">
                    <p className="fw-bold text-white">Edward Newgate</p>
                    <p className="text-white">Founder Circle</p>
                </div>
                <p className="w-50 ms-auto text-white">
                    “Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls,
                    or administrative hassle) and securely”
                </p>
            </div>
        </section>
    );
}
