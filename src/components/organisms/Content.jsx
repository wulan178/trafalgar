import React from "react";
import Button from "../atoms/Button";

export default function Content({ id, type, title, desc, img, button }) {
    return (
        <section
            id={id}
            className={`content mx-5 my-5 d-flex justify-content-between ${
                type === "reverse" ? "flex-row-reverse" : "flex-row"
            }`}
        >
            <div className='mx-auto my-5'>
                <img src={`/images/${img}`} alt='' />
            </div>
            <div
                className={`contentText my-auto  ${
                    type === "reverse" ? "me-5 pe-5" : "ms-5 ps-5"
                }`}
            >
                <h1 className='fw-bold mb-5'>{title}</h1>
                <p className='pe-4 mb-5'>{desc}</p>
                <Button text={button} />
            </div>
        </section>
    );
}
