import React from "react";
import Button from "./atoms/Button";

export default function Download() {
    return (
        <section className="content mx-5 my-5 d-flex">
            <div className="contentText my-auto me-5 pe-5">
                <h1 className="fw-bold mb-5 w-75">Download our mobile apps</h1>
                <p className="pe-4 mb-5">
                    Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls,
                    or administrative hassle) and securely
                </p>
                {/* <a href="/" className="rounded-pill px-4 py-2">
                    <button className="bg-transparent border-0 me-2">Download</button>
                </a> */}
                <Button text="Download" />
            </div>
            <div className="mx-auto my-5">
                <img src="/images/download.svg" alt="" />
            </div>
        </section>
    );
}
