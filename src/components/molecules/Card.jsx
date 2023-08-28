import React from "react";

export default function Card({ img, title, desc, type }) {
    return type === "article" ? (
        <div className='card border-0 shadow'>
            <img src={`/images/${img}`} className='card-img-top' alt='article thumbnail' />
            <div className='card-body px-4 py-4'>
                <h1 className='card-title mb-4'>{title}</h1>
                <p className='card-text'>{desc}</p>
                <a
                    href='/'
                    className='d-flex h-25 text-decoration-none align-items-center'
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
        <div className='card px-3 py-3 shadow border-0'>
            <img
                src={`/icons/${img}`}
                className='card-img-top ms-auto me-auto my-4'
                alt={title}
            />
            <div className='card-body'>
                <h1 className='card-title my-2'>{title}</h1>
                <p className='card-text mt-3'>{desc}</p>
            </div>
        </div>
    );
}
