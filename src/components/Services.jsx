import React from "react";
import Button from "./atoms/Button";

export default function Services() {
    return (
        <section id="services" className="mx-5 my-5 pt-4">
            <h2 className="mt-5 mb-4 text-center">Our services</h2>
            <p className="text-center w-75 mx-auto">
                We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly
                qualified doctors you can consult with us which type of service is suitable for your health
            </p>

            {/* START :CARDS */}
            <div className="d-flex my-5 justify-content-center flex-wrap gap-5">
                <div className="card px-3 py-3 shadow border-0">
                    <img src="/icons/services1.svg" className="card-img-top ms-auto me-auto my-4" alt="search" />
                    <div className="card-body">
                        <h5 className="card-title my-2">Search doctor</h5>
                        <p className="card-text mt-3">Choose your doctor from thousands of specialist, general, and trusted hospitals</p>
                    </div>
                </div>

                <div className="card px-3 py-3 shadow border-0">
                    <img src="/icons/services2.svg" className="card-img-top ms-auto me-auto my-4" alt="pharmacy" />
                    <div className="card-body">
                        <h5 className="card-title my-2">Online pharmacy</h5>
                        <p className="card-text mt-3">Buy your medicines with our mobile application with a simple delivery system</p>
                    </div>
                </div>

                <div className="card px-3 py-3 shadow border-0">
                    <img src="/icons/services3.svg" className="card-img-top ms-auto me-auto my-4" alt="consult" />
                    <div className="card-body">
                        <h5 className="card-title my-2">Consultation</h5>
                        <p className="card-text mt-3">Free consultation with our trusted doctors and get the best recomendations</p>
                    </div>
                </div>

                <div className="card px-3 py-3 shadow border-0">
                    <img src="/icons/services4.svg" className="card-img-top ms-auto me-auto my-4" alt="Details" />
                    <div className="card-body">
                        <h5 className="card-title my-2">Details info</h5>
                        <p className="card-text mt-3">Free consultation with our trusted doctors and get the best recomendations</p>
                    </div>
                </div>

                <div className="card px-3 py-3 shadow border-0">
                    <img src="/icons/services5.svg" className="card-img-top ms-auto me-auto my-4" alt="Emergency" />
                    <div className="card-body">
                        <h5 className="card-title my-2">Emergency care</h5>
                        <p className="card-text mt-3">You can get 24/7 urgent care for yourself or your children and your lovely family</p>
                    </div>
                </div>

                <div className="card px-3 py-3 shadow border-0">
                    <img src="/icons/services6.svg" className="card-img-top ms-auto me-auto my-4" alt="Tracking" />
                    <div className="card-body">
                        <h5 className="card-title my-2">Tracking</h5>
                        <p className="card-text mt-3">Track and save your medical history and health data</p>
                    </div>
                </div>
            </div>
            {/* END: CARDS */}

            <div className="text-center">
                <Button text="Learn more" />
            </div>

            <img src="assets/illustration/bg.svg" alt="" className="decore position-absolute" />
        </section>
    );
}
