import React, { ReactNode } from "react";

interface LogoPropTypes {
    title: string;
    className: string;
    children: ReactNode;
}

export default function Logo({title, className, children}: LogoPropTypes) {
    return (
        <div>
            <h2 className={className}>{title}</h2>
            <p>{children}</p>
        </div>
    )
}