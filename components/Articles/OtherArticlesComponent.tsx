"use client"

import Image from "next/image"

export default function OtherArticlesComponent({
    alt,
    image,
    description,
    link,
}: {
    alt?: string;
    image: string;
    description: string;
    link: string;
}) {
    return (
        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
            <Image
                src={image}
                alt={alt || "Article Thumbnail"}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-3 left-3 right-3 bg-white p-6 rounded-xl shadow-md min-h-[160px] flex flex-col justify-center items-center text-center z-10">
                <h3 className="text-[#333] text-xs font-bold uppercase leading-relaxed tracking-wide">
                    {description}
                </h3>
            </div>
        </div>
    )
}