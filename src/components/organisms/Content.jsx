import React from "react";
import Button from "../atoms/Button";

export default function Content({ id, type, title, desc, img, button }) {
    return (
        <section
            id={id}
            className={`content mx-md-5 mx-3 my-5 d-flex flex-wrap flex-md-nowrap justify-content-between ${
                type === "reverse"
                    ? "flex-row-reverse flex-col-reverse"
                    : "flex-row"
            }`}
        >
            <div className='mx-auto my-5'>
                <img
                    src={`/images/${img}`}
                    alt='Content Illustration'
                    className='illustration'
                    style={{ minWidth: "45vw" }}
                />
            </div>
            <div
                className={`contentText my-auto  ${
                    type === "reverse" ? "me-md-5 pe-md-5" : "ms-md-5 ps-md-5"
                }`}
            >
                <h1 className='fw-bold mb-md-5 mb-4'>{title}</h1>
                <p className='pe-md-4 pe-1 mb-md-5 mb-4'>{desc}</p>
                <Button text={button} />
            </div>
        </section>
    );
}
