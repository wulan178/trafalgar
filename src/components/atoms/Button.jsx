import React from "react";

export default function Button({ text }) {
    return (
        <a href='/' className='btn btn-outline-primary rounded-pill px-4 py-2'>
            {text}
        </a>
    );
}
