"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface CollectionSectionProps {
    title: string;
    subtitle: string;
    refCode?: string;
    description: string;
    images: string[];
    lifestyleImage: string;
    orientation?: "left" | "right";
    buttonText?: string;
    buttonLink?: string;
}

export default function CollectionSection({
    title,
    subtitle,
    refCode,
    description,
    images,
    lifestyleImage,
    orientation = "left",
    buttonText = "View Product",
    buttonLink = "#",
}: CollectionSectionProps) {
    const carouselImages = images.length === 3 ? images : [...images, ...images].slice(0, 3);

    const [activeIndex, setActiveIndex] = useState(1);

    const handleImageClick = (index: number) => {
        setActiveIndex(index);
    };

    const getOrderClass = (index: number) => {
        if (index === activeIndex) return "order-2 z-20 scale-100 opacity-100";
        if (index < activeIndex) return "order-1 z-10 scale-75 opacity-70 blur-[2px] cursor-pointer hover:opacity-100 transition-all duration-500";
        return "order-3 z-10 scale-75 opacity-70 blur-[2px] cursor-pointer hover:opacity-100 transition-all duration-500";
    };

    const isLeft = orientation === "left";

    return (
        <section className="w-full min-h-screen flex flex-col md:flex-row overflow-hidden bg-white">
            {/* Product Column */}
            <div
                className={`w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-16 relative ${isLeft ? "md:order-1" : "md:order-2"
                    }`}
            >
                {/* Title */}
                <h2 className="text-sm tracking-[0.2em] text-gray-500 mb-12 uppercase font-serif">
                    {title}
                </h2>

                {/* Carousel */}
                <div className="relative w-full max-w-2xl h-[300px] md:h-[400px] flex items-center justify-center mb-8">
                    {carouselImages.map((src, index) => {
                        let zIndex = 10;
                        let scale = 0.8;
                        let opacity = 0.6;
                        let blur = "blur-[2px]";
                        let translateX = "0%";

                        if (index === activeIndex) {
                            zIndex = 30;
                            scale = 1.2;
                            opacity = 1;
                            blur = "blur-0";
                            translateX = "0%";
                        } else if (
                            (index === activeIndex - 1) ||
                            (activeIndex === 0 && index === 2)
                        ) {
                            zIndex = 20;
                            translateX = "-60%";
                        } else {
                            zIndex = 20;
                            translateX = "60%";
                        }

                        return (
                            <div
                                key={index}
                                className={`absolute transition-all duration-700 ease-in-out cursor-pointer`}
                                style={{
                                    zIndex: zIndex,
                                    transform: `translateX(${translateX}) scale(${scale})`,
                                    opacity: opacity,
                                    filter: index !== activeIndex ? "blur(2px)" : "none",
                                }}
                                onClick={() => handleImageClick(index)}
                            >
                                <div className="relative w-40 h-40 md:w-64 md:h-64">
                                    <Image
                                        src={src}
                                        alt={`Product ${index + 1}`}
                                        fill
                                        className="object-contain drop-shadow-2xl"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Dots/Indicators */}
                <div className="flex gap-2 mb-6">
                    {carouselImages.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? "bg-red-800 w-4" : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>

                {/* Product Info */}
                <div className="text-center max-w-md z-30">
                    <h3 className="text-xl md:text-2xl font-serif text-gray-900 mb-2 uppercase tracking-wide">
                        {subtitle} {refCode && <span className="text-gray-500 text-lg ml-2">[{refCode}]</span>}
                    </h3>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-8 font-light">
                        {description}
                    </p>
                    <Link
                        href={buttonLink}
                        className="inline-block bg-[#9e1c28] text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-[#7d1620] transition-colors"
                    >
                        {buttonText}
                    </Link>
                </div>
            </div>

            {/* Lifestyle Column */}
            <div
                className={`w-full md:w-1/2 relative h-[50vh] md:h-auto ${isLeft ? "md:order-2" : "md:order-1"
                    }`}
            >
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src={lifestyleImage}
                        alt="Lifestyle Preview"
                        fill
                        className={`object-cover transition-transform duration-700 ${isLeft ? "origin-right" : "origin-left"} scale-100 md:scale-90`}
                        priority
                    />
                    {/* Gradient Overlays for Fade Effect */}
                    {/* Top and Bottom - Deeper fade */}
                    <div className="hidden md:block absolute inset-0 bg-[linear-gradient(to_bottom,#ffffff_0%,#ffffff_5%,transparent_30%,transparent_50%,#ffffff_95%,#ffffff_100%)] pointer-events-none z-10" />
                    <div
                        className="hidden md:block absolute inset-0 pointer-events-none z-10"
                        style={{
                            background: isLeft
                                ? "linear-gradient(to right, #ffffff 0%, #ffffff 15%, transparent 30%, transparent 100%)" // Lifestyle on Right -> Fade Left only
                                : "linear-gradient(to right, transparent 0%, transparent 70%, #ffffff 85%, #ffffff 100%)" // Lifestyle on Left -> Fade Right only
                        }}
                    />

                    {/* Text Overlay */}
                    <div className="hidden md:block absolute bottom-10 left-10 text-white/80 font-serif italic text-2xl z-20 drop-shadow-md">
                        Preview Product
                    </div>
                </div>
            </div>
        </section>
    );
}
