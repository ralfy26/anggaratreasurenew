"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

const products = [
    {
        id: 1,
        name: "ASCENDING TIGER",
        ref: "(REF:5383)",
        image: "/assets/crystal-1.png",
        link: "/collection/ascending-tiger",
    },
    {
        id: 2,
        name: "RED PHOENIX",
        ref: "MOUNTAIN – 013",
        image: "/assets/red-phoenix-mountain-1.png",
        link: "/collection/red-phoenix",
    },
    {
        id: 3,
        name: "QIAN LONG JADEITE",
        ref: "MOUNTAIN REF: 9881",
        image: "/assets/qian-long-1.png",
        link: "/collection/qian-long",
    },
    {
        id: 4,
        name: "FINE JADEITE MIDAS",
        ref: "TOUCH",
        image: "/assets/fine-jadeite-midas.png",
        link: "/collection/fine-jadeite",
    },
];

export default function RelatedProducts() {
    return (
        <div className="w-full py-16">
            <div className="flex items-center gap-4 mb-12">
                <div className="h-px bg-red-800/30 flex-grow" />
                <h2 className="text-2xl md:text-3xl font-serif text-black">
                    People Also Viewed
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                    <div key={product.id} className="group relative flex flex-col">
                        {/* Image Container */}
                        <div className="relative w-full aspect-square mb-4 flex items-center justify-center p-4">
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={200}
                                height={200}
                                className="object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        {/* Info Card */}
                        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex justify-between items-center group-hover:shadow-md transition-shadow">
                            <div className="flex flex-col">
                                <span className="text-[#9e1c28] font-bold text-xs uppercase tracking-wide">
                                    {product.name}
                                </span>
                                <span className="text-[#9e1c28] font-bold text-xs uppercase tracking-wide">
                                    {product.ref}
                                </span>
                            </div>

                            <Link
                                href={product.link}
                                className="w-8 h-8 rounded-full bg-[#c25e00] flex items-center justify-center text-white hover:bg-[#a04d00] transition-colors"
                            >
                                <Search className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
