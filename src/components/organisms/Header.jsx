/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { navigation } from "../../utils/constants";

export default function Header() {
    return (
        <nav className='navbar navbar-expand-lg navbar-light my-md-3 my-2 container-fluid'>
            <div className='container-fluid d-flex align-items-center'>
                <a
                    href='/'
                    className='navbar-brand fw-bold d-flex align-items-center'
                >
                    <img
                        src='/icons/logo.svg'
                        width={32}
                        height={32}
                        alt='Logo'
                        className='me-2'
                    />
                    <h1 className='mt-2'>Trafalgar</h1>
                </a>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarNav'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon' />
                </button>

                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav ms-lg-auto'>
                        {navigation.map((item, i) => (
                            <li key={i} className='nav-item ms-3'>
                                <a
                                    href={
                                        i > 0
                                            ? `#${item
                                                  .split(" ")
                                                  .join("_")
                                                  .toString()
                                                  .toLowerCase()}`
                                            : "/"
                                    }
                                    className='nav-link'
                                    aria-current='page'
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
