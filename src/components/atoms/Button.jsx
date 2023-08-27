import React from "react";

export default function Button({ text }) {
    return (
        <a href="/" className="rounded-pill px-4 py-2">
            <button className="bg-transparent border-0">{text}</button>
        </a>
    );
}
