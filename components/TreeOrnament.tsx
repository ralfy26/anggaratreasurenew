"use client";

import Image from "next/image";

interface TreeOrnamentProps {
    position?: string;
    width: number;
    height: number;
    flipped?: boolean;
    className?: string;
}

export default function TreeOrnament({ position, width, height, flipped, className }: TreeOrnamentProps) {
    return (
        <div className={`absolute ${position} w-[${width}px] h-[${height}px] pointer-events-none z-0 opacity-80 ${className}`}>
            <Image
                src="/assets/tree-ornament.svg"
                width={width}
                height={height}
                alt="Tree Ornament"
                className={`w-full h-full object-contain ${flipped ? "-scale-x-100" : ""}`}
            />
        </div>
    );
}