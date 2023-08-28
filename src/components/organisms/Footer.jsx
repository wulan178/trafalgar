import React from "react";
import { footer } from "../../utils/constants";

export default function Footer() {
    return (
        <footer className='position-relative row text-white p-md-5 p-4 gap-md-5'>
            <ul className='col-md-6 col-12 pe-5'>
                <li className='d-flex flex-wrap align-items-center mb-2'>
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
                        <h1 className='mt-2'>Trafalgar</h1>
                    </a>
                </li>
                <li className='mb-3'>
                    Trafalgar provides progressive, and affordable healthcare,
                    accessible on mobile and online for everyone
                </li>
                <li>©Trafalgar PTY LTD 2020. All rights reserved</li>
            </ul>

            {footer.map((items, index) => (
                <ul key={index} className='col-md-3 col-6'>
                    {items.map((item, i) => (
                        <li key={i} className={i > 0 ? "mb-2" : "fw-bold my-3"}>
                            {item}
                        </li>
                    ))}
                </ul>
            ))}
        </footer>
    );
}
