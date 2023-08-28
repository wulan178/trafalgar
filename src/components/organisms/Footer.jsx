import React from "react";
import { footer } from "../../utils/constants";

export default function Footer() {
    return (
        <footer className='d-flex text-white px-5 py-5 gap-5'>
            <ul className='w-50 pe-5'>
                <li className='d-inline-flex align-items-center mb-2'>
                    <a
                        href='/'
                        className='navbar-brand fw-bold d-flex align-items-center'
                    >
                        <img
                            src='/icons/logo.svg'
                            width={32}
                            height={32}
                            alt='logo'
                            className='me-2'
                        />
                        <h5 className='mt-2'>Trafalgar</h5>
                    </a>
                </li>
                <li>
                    Trafalgar provides progressive, and affordable healthcare,
                    accessible on mobile and online for everyone
                </li>
                <br />
                <li>©Trafalgar PTY LTD 2020. All rights reserved</li>
            </ul>

            {footer.map((items, index) => (
                <ul key={index} className='w-25'>
                    {items.map((item, i) => (
                        <li key={i} className={i > 0 ? "mb-2" : "fw-bold my-3"}>
                            {item}
                        </li>
                    ))}
                </ul>
            ))}

            <img src='/images/hero-element.svg' alt='' />
        </footer>
    );
}
