import React from "react";
import Button from "./atoms/Button";

export default function Providers() {
    return (
        <section className="content mx-5 my-5 d-flex">
            <div className="mx-auto my-5">
                <img src="/images/leading.svg" alt="" />
            </div>
            <div className="contentText my-auto ms-5 ps-5">
                <h1 className="fw-bold mb-5">Leading healthcare providers</h1>
                <p className="pe-4 mb-5">
                    Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just
                    work. We take pride in the solutions we deliver
                </p>
                <Button text="Learn more" />
            </div>
        </section>
    );
}
