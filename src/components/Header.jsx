import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light my-3">
            <div className="container-fluid mx-5 d-flex align-items-center">
                <Link to="/" className="navbar-brand fw-bold d-flex align-items-center">
                    <img
                        src="/icons/logo.svg"
                        width={32}
                        height={32}
                        alt="logo"
                        className="me-2"
                    />
                    <h5 className="mt-2">Trafalgar</h5>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-lg-auto">
                        <li className="nav-item ms-3">
                            <Link className="nav-link atoe /w-bold" aria-current="page" href="#">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item ms-3">
                            <Link to="/" className="nav-link">
                                Find a doctor
                            </Link>
                        </li>
                        <li className="nav-item ms-3">
                            <Link to="/" className="nav-link">
                                Apps
                            </Link>
                        </li>
                        <li className="nav-item ms-3">
                            <Link to="/" className="nav-link">
                                Testimonials
                            </Link>
                        </li>
                        <li className="nav-item ms-3">
                            <Link to="/" className="nav-link">
                                About us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
