"use client";

import Image from "next/image";

interface CloudOrnamentProps {
    position?: string;
    width: number;
    height: number;
    flipped?: boolean;
    className?: string;
}

export default function CloudOrnament({ position, width, height, flipped, className }: CloudOrnamentProps) {
    return (
        <div className={`absolute ${position} w-[${width}px] h-[${height}px] pointer-events-none z-0 opacity-80 ${className}`}>
            <Image
                src="/assets/cloud-ornament.svg"
                width={width}
                height={height}
                alt="Cloud Ornament"
                className={`w-full h-full object-contain ${flipped ? "-scale-x-100" : ""}`}
            />
        </div>
    );
}