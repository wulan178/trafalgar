import React from "react";

export default function Card({ img, title, desc, type }) {
    return type === "article" ? (
        <div
            className='card border-0 bg-light rounded-4 shadow position-relative'
            style={{ maxWidth: "350px", minHeight: "480px" }}
        >
            <img
                src={`/images/${img}`}
                alt='article thumbnail'
                className='card-img-top'
            />
            <div className='card-bodyd-flex flex-column justify-content-between p-md-4 p-3'>
                <h1 className='card-title mb-3'>{title}</h1>
                <p className='card-text mb-5'>{desc}</p>
                <a
                    href='/'
                    className='d-flex text-decoration-none align-items-center position-absolute bottom-0 mb-3 mb-md-4'
                >
                    Read more
                    <img
                        src='/icons/right-arrow.svg'
                        alt='arrow'
                        width={12}
                        height={12}
                        className='ms-2 my-auto'
                    />
                </a>
            </div>
        </div>
    ) : (
        <div
            className='card bg-light rounded-3 px-3 py-3 shadow border-0 mx-auto'
            style={{ maxWidth: "300px" }}
        >
            <img
                src={`/icons/${img}`}
                alt={title}
                width={100}
                height={100}
                className='card-img-top ms-auto me-auto my-md-4 my-3'
                style={{ maxWidth: "20vw" }}
            />
            <div className='card-body'>
                <h1 className='card-title mb-2'>{title}</h1>
                <p className='card-text mt-3'>{desc}</p>
            </div>
        </div>
    );
}
