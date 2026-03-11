"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
    images: string[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className="flex flex-col gap-6 w-full max-w-xl">
            {/* Main Image */}
            <div className="relative w-full aspect-[3/4] bg-[#3a0000] rounded-lg overflow-hidden shadow-2xl">
                {/* Background Texture/Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none z-10" />

                <div className="relative w-full h-full p-8 flex items-center justify-center">
                    <Image
                        src={selectedImage}
                        alt="Product Main View"
                        fill
                        className="object-contain drop-shadow-2xl z-20"
                        priority
                    />
                </div>

                {/* Zoom/View Icon (Optional based on design, but good for UX) */}
                <div className="absolute top-4 right-4 z-30">
                    <button className="flex items-center gap-2 bg-black/30 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs hover:bg-black/50 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
                        View in room
                    </button>
                </div>

                {/* Pagination Dots (Mobile/Carousel style if needed, but design shows thumbnails below) */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                    {images.map((_, idx) => (
                        <div
                            key={idx}
                            className={cn(
                                "w-2 h-2 rounded-full transition-all",
                                selectedImage === images[idx] ? "bg-red-600 w-4" : "bg-white/50"
                            )}
                        />
                    ))}
                </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
                {images.map((img, idx) => (
                    <button
                        key={idx}
                        onClick={() => setSelectedImage(img)}
                        className={cn(
                            "relative aspect-[3/4] rounded-lg overflow-hidden border-2 transition-all bg-[#3a0000]",
                            selectedImage === img
                                ? "border-red-800 opacity-100 ring-2 ring-red-800/20"
                                : "border-transparent opacity-60 hover:opacity-100"
                        )}
                    >
                        <div className="absolute inset-0 p-2">
                            <Image
                                src={img}
                                alt={`Thumbnail ${idx + 1}`}
                                fill
                                className="object-contain"
                            />
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
