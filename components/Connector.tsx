import React from 'react';

// Define props
interface ConnectorProps {
    direction: 'bend-down' | 'bend-up';
    className?: string;
}

export default function Connector({ direction, className = '' }: ConnectorProps) {
    // Logic: Horizontal -> Diagonal Only.
    // Adjusted start X to 10 to prevent the dot (r=6) from being cut off.

    // ViewBox 200 60
    // bend-down: Start (10,2) -> H 150 -> L 200 58
    // bend-up: Start (10,58) -> H 150 -> L 200 2

    const pathData = direction === 'bend-down'
        ? "M 10 2 H 150 L 200 58"
        : "M 10 58 H 150 L 200 2";

    const cyStart = direction === 'bend-down' ? "2" : "58";

    return (
        <svg
            viewBox="0 0 200 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-auto ${className}`}
            preserveAspectRatio="none"
        >
            <circle cx="10" cy={cyStart} r="6" fill="#AE1919" />

            <path
                d={pathData}
                stroke="#AE1919"
                strokeWidth="2"
                fill="none"
                vectorEffect="non-scaling-stroke"
            />
        </svg>
    );
}
