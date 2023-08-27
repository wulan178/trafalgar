import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
      <footer className="d-flex text-white px-5 py-5 gap-5">
          <ul className="w-50 pe-5">
              <li className="d-inline-flex align-items-center mb-2">
                  <Link to="/" className="navbar-brand fw-bold d-flex align-items-center">
                      <img src="/icons/logo.svg" width={32} height={32} alt="logo" className="me-2" />
                      <h5 className="mt-2">Trafalgar</h5>
                  </Link>
              </li>
              <li>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</li>
              <br />
              <li>©Trafalgar PTY LTD 2020. All rights reserved</li>
          </ul>

          <ul className="w-25">
              <li className="fw-bold my-3">Company</li>
              <li className="mb-2">About</li>
              <li className="mb-2">Testimonials</li>
              <li className="mb-2">Find a doctor</li>
              <li className="mb-2">Apps</li>
          </ul>

          <ul className="w-25">
              <li className="fw-bold my-3">Region</li>
              <li className="mb-2">Indonesia</li>
              <li className="mb-2">Singapore</li>
              <li className="mb-2">Hongkong</li>
              <li className="mb-2">Canada</li>
          </ul>

          <ul className="w-25">
              <li className="fw-bold my-3">Help</li>
              <li className="mb-2">Help center</li>
              <li className="mb-2">Contact support</li>
              <li className="mb-2">Instructions</li>
              <li className="mb-2">How it works</li>
          </ul>

          <img src="/images/hero-element.svg" alt="" />
      </footer>
  );
}
