"use client";

import Image from "next/image";
import ContactSection from "@/components/ContactSection";

export default function ServicesPage() {
    return (
        <main className="bg-white text-black">
            {/* Hero Section */}
            <section className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-5xl font-serif mb-4">Our Services</h1>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    Imperial Feng Shui & Bazi Services to Optimize Your Personal, Home, and Business Luck.
                </p>
                <p className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-800">
                    Anggara Treasures menyediakan layanan konsultasi Imperial Feng Shui dan
                    Imperial Bazi yang dirancang untuk membantu individu maupun bisnis
                    menyelaraskan kehidupan, hunian, dan lingkungan kerja demi tercapainya
                    keseimbangan, kejelasan arah, serta kesuksesan yang berkelanjutan.
                    Setiap layanan bersifat personal, praktis, dan berlandaskan garis keturunan asli
                    Imperial Feng Shui.
                </p>
            </section>

            {/* Personal Feng Shui & Bazi Reading Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="w-full lg:w-1/2">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-[#A52A2A] font-bold">Personal</span>
                            <span className="text-gray-400">Home</span>
                            <span className="text-gray-400">Office & Business</span>
                            <div className="h-px bg-gray-300 grow ml-4"></div>
                        </div>

                        <h2 className="text-3xl font-bold mb-6">Personal Feng Shui & Bazi Reading</h2>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Panduan untuk Kehidupan, Karier, dan Keberuntungan Finansial
                            Layanan ini berfokus pada analisis personal berdasarkan Imperial Bazi
                            untuk memahami peta kehidupan, siklus keberuntungan, serta kapasitas rezeki setiap individu.
                        </p>

                        <ul className="space-y-2 text-[#A52A2A] mb-8">
                            <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 bg-[#A52A2A] rounded-full shrink-0"></span>
                                <span>Analisis keberuntungan pribadi dan siklus kehidupan</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 bg-[#A52A2A] rounded-full shrink-0"></span>
                                <span>Insight arah karier, keuangan, dan pengembangan diri</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 bg-[#A52A2A] rounded-full shrink-0"></span>
                                <span>Identifikasi potensi, kekuatan, dan tantangan pribadi</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 bg-[#A52A2A] rounded-full shrink-0"></span>
                                <span>Rekomendasi praktis yang disesuaikan dengan kondisi individu</span>
                            </li>
                        </ul>

                        <button className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider hover:gap-4 transition-all">
                            next services <span className="text-xl">→</span>
                        </button>
                    </div>

                    {/* Images Collage */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative h-64 w-full rounded-tr-[3rem] rounded-bl-[3rem] overflow-hidden transform translate-y-8">
                                <Image
                                    src="/assets/service-1.png"
                                    alt="Terracotta Warrior"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="relative h-64 w-full rounded-tl-3xl rounded-br-3xl [clip-path:polygon(0%_0%,75%_0%,100%_25%,100%_100%,25%_100%,0%_75%)] overflow-hidden shadow-lg  transform translate-y-8">
                                <Image
                                    src="/assets/service-2.jpeg"
                                    alt="Business Consultation"
                                    fill
                                    className="object-fill"
                                />
                            </div>

                            <div className="relative h-64 w-full rounded-tl-3xl rounded-br-3xl [clip-path:polygon(0%_0%,75%_0%,100%_25%,100%_100%,25%_100%,0%_75%)] overflow-hidden shadow-lg transform translate-y-8">
                                <Image
                                    src="/assets/service-3.jpeg"
                                    alt="Interior Design"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="relative h-64 w-full rounded-tr-3xl rounded-bl-3xl [clip-path:polygon(25%_0%,100%_0%,100%_75%,75%_100%,0%_100%,0%_25%)] overflow-hidden shadow-lg  transform translate-y-8">
                                <Image
                                    src="/assets/service-4.jpeg"
                                    alt="Castle Sketch"
                                    fill
                                    className="object-fill"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Session Offering - Waiting List Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-4">session offering</h2>
                    <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 italic">
                        Berbasis garis keturunan asli Imperial Feng Shui, Pendekatan personal, bukan solusi massal,
                        Rekomendasi yang praktis dan aplikatif, Fokus pada keseimbangan, kejelasan, dan keberlanjutan
                    </p>

                    <div className="relative bg-[#3D0C0C] rounded-2xl overflow-hidden min-h-[450px] flex flex-col items-center justify-center">
                        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                            <div className="relative w-full h-full opacity-40">
                                <Image
                                    src="/assets/red-castle.png"
                                    alt="Background Pattern"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-16">
                            <h3 className="text-white text-2xl md:text-3xl font-medium mb-12 tracking-wide">
                                Soon to Be Revealed
                            </h3>

                            <div className="flex flex-col items-center gap-3">
                                <p className="text-white text-lg md:text-xl font-medium tracking-wide">
                                    Waiting List : <span className="font-bold">23</span>
                                </p>
                                <button className="text-[#D4AF37] text-sm md:text-base font-semibold underline underline-offset-4 decoration-[#D4AF37] hover:text-[#E5C048] transition-colors">
                                    Join Waiting List ?
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ContactSection />
        </main>
    );
}
