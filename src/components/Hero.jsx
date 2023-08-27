import React from "react";

export default function Hero() {
    return (
        <section id="hero" className="d-flex mx-5 my-4">
            <div className="heroText my-auto">
                <h1 className="mb-4 fw-bold">Virtual healthcare for you</h1>
                <p className="w-75 mb-5">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                <button className="border-0 rounded-pill px-5 py-3 fw-bold text-white">Consult today</button>
            </div>
            <div className="heroImg">
                <img src="/images/header.svg" alt="" />
            </div>
        </section>
    );
}
