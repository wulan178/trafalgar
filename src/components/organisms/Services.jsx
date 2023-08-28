import React from "react";
import Button from "../atoms/Button";
import { services } from "../../utils/constants";
import Card from "../molecules/Card";

export default function Services() {
    return (
        <section id='services' className='mx-5 my-5 pt-4'>
            <h2 className='mt-5 mb-4 text-center'>Our services</h2>
            <p className='text-center w-75 mx-auto'>
                We provide to you the best choiches for you. Adjust it to your
                health needs and make sure your undergo treatment with our
                highly qualified doctors you can consult with us which type of
                service is suitable for your health
            </p>

            {/* START :CARDS */}
            <div className='d-flex my-5 justify-content-center flex-wrap gap-5'>
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

            <img
                src='assets/illustration/bg.svg'
                alt=''
                className='decore position-absolute'
            />
        </section>
    );
}
