import React from "react";
import Button from "../atoms/Button";
import { services } from "../../utils/constants";
import Card from "../molecules/Card";

export default function Services() {
    return (
        <section id='services' className='mx-lg-5 mx-4 my-5 pt-lg-4 pt-2'>
            <h2 className='mt-5 mb-lg-4 mb-3 text-center'>Our services</h2>
            <p className='text-center mx-auto w-md-75'>
                We provide to you the best choiches for you. Adjust it to your
                health needs and make sure your undergo treatment with our
                highly qualified doctors you can consult with us which type of
                service is suitable for your health
            </p>

            {/* START :CARDS */}
            <div className='d-flex my-5 justify-content-center flex-wrap gap-md-5 gap-3'>
                {services.map((item, i) => (
                    <Card
                        key={i}
                        title={item.title}
                        img={item.img}
                        desc={item.desc}
                    />
                ))}
            </div>
            {/* END: CARDS */}

            <div className='text-center'>
                <Button text='Learn more' />
            </div>
        </section>
    );
}
