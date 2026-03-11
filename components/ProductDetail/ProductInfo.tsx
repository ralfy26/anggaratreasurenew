"use client";

import React, { useState } from "react";
import { Clock, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductInfoProps {
    title: string;
    subtitle: string;
    refCode: string;
    description: string;
}

export default function ProductInfo({
    title,
    subtitle,
    refCode,
    description,
}: ProductInfoProps) {
    const [activeTab, setActiveTab] = useState("overview");

    const tabs = [
        { id: "overview", label: "Product Overview" },
        { id: "value", label: "Functional & Symbolic Value" },
        { id: "craft", label: "Heritage & Craft" },
    ];

    return (
        <div className="flex flex-col h-full">
            {/* Breadcrumb / Category */}
            <div className="text-gray-500 text-sm mb-2">Home Collection</div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-serif text-gray-900 mb-2 uppercase">
                {title}
            </h1>

            {/* Subtitle */}
            <h2 className="text-sm tracking-[0.1em] text-gray-500 mb-8 uppercase">
                {subtitle}
            </h2>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 pb-1">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                            "px-6 py-2 text-xs md:text-sm transition-all rounded-t-lg",
                            activeTab === tab.id
                                ? "bg-[#9e1c28] text-white shadow-md"
                                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                        )}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="mb-10 min-h-[150px]">
                <div className="prose prose-sm max-w-none text-gray-600 font-light leading-relaxed">
                    {activeTab === "overview" && (
                        <>
                            <p className="mb-4">{description}</p>
                            <p>
                                Dirancang bukan sebagai elemen dekoratif semata, artefak ini hadir untuk kolektor, profesional, dan penikmat Feng Shui yang menghargai keaslian, simbolisme, serta kualitas pengerjaan tingkat tinggi.
                            </p>
                        </>
                    )}
                    {activeTab === "value" && (
                        <p>
                            Symbolizing strength and authority, this piece is crafted to bring balance and prosperity. The intricate details reflect the deep cultural significance of the imperial court.
                        </p>
                    )}
                    {activeTab === "craft" && (
                        <p>
                            Hand-carved by master artisans using traditional techniques passed down through generations. Each stroke of the chisel is a testament to the dedication and skill required to create such a masterpiece.
                        </p>
                    )}
                </div>
            </div>

            {/* Quote / Tagline */}
            <div className="text-[#9e1c28] text-sm italic mb-6 font-serif">
                A Curated Piece by Anggara Treasures
            </div>

            {/* Action Button */}
            <button className="w-full bg-[#9e1c28] text-white py-4 uppercase tracking-widest text-sm hover:bg-[#7d1620] transition-colors rounded shadow-lg mb-6">
                Inquire About This Piece
            </button>

            {/* Availability Info */}
            <div className="flex flex-col gap-2 text-xs text-gray-600">
                <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#9e1c28]" />
                    <span>Monday – Friday</span>
                </div>
                <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#9e1c28]" />
                    <span>09.00 – 16.00</span>
                </div>
                <div className="mt-2 italic text-gray-400">
                    Konsultasi Imperial Feng Shui | Rekomendasi Kristal Terpilih
                </div>
            </div>
        </div>
    );
}
