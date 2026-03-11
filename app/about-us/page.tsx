import Image from "next/image";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import CloudOrnament from "@/components/CloudOrnament";

export default function AboutUs() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative w-full">
                <div className="w-[80%] mx-auto">
                    <Image
                        src="/assets/about-us.png"
                        alt="Master Rezza"
                        width={2762}
                        height={1232}
                        className="w-full h-auto"
                        priority
                    />
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-8 max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Introduction</h2>
                        <p className="text-gray-500 text-sm md:text-base italic">
                            Anggara Treasures — Imperial Feng Shui & Imperial Bazi<br />Reading in Indonesia
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
                        <div className="flex-1 text-gray-700 text-sm md:text-base leading-relaxed space-y-5 text-justify">
                            <p>
                                Anggara Treasures adalah konsultan Imperial Feng Shui dan Imperial Bazi Reading terkemuka di Indonesia. Didirikan oleh Master Rezza, Master Imperial Feng Shui yang memperoleh keahlian langsung dari pewaris asli Imperial Feng Shui Kaisar Qian Long (乾隆帝), Anggara Treasures hadir untuk membantu individu dan bisnis membentuk kehidupan yang lebih seimbang, beruntung, dan berkelanjutan.
                            </p>
                            <p>
                                Berbeda dari classical feng shui yang cenderung pasif, Imperial Feng Shui berfokus pada pendekatan aktif mengoptimalkan aliran energi untuk meningkatkan Personal Luck, memperluas Wealth Capacity, dan menguatkan Strategic Timing. Berlandaskan harmoni Yin-Yang (陰陽), keseimbangan Lima Elemen (五行), serta pemanfaatan energi alami seperti giok (翡翠), gaharu (沉香), dan cendana (檀香), setiap rekomendasi disusun presisi sesuai peta energi unik klien.
                            </p>
                            <Link href="/services" className="inline-flex items-center gap-2 text-gray-900 font-medium hover:gap-3 transition-all duration-300 mt-2">
                                Our services <span className="text-lg">→</span>
                            </Link>
                        </div>

                        <div className="flex-1 flex justify-center md:justify-end">
                            <Image
                                src="/assets/intro.png"
                                alt="Master Rezza - Introduction"
                                width={1500}
                                height={1200}
                                className="w-full max-w-lg h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Credential Section */}
            <section className="py-16 md:py-24 border-t border-gray-100">
                <div className="container mx-auto px-8 max-w-6xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Credential</h2>
                    <p className="text-gray-500 text-sm md:text-base italic mb-8">
                        Imperial Standard. Precise, Exclusive, Results-Oriented.
                    </p>
                    <div className="text-gray-700 text-sm md:text-base leading-relaxed space-y-5 mb-10 text-justify">
                        <p>
                            Anggara Treasures menghadirkan standar tertinggi dalam dunia Imperial Feng Shui melalui pendekatan yang terstruktur, personal, dan aplikatif. Setiap analisis dilakukan mendalam, disesuaikan dengan kondisi unik individu maupun perusahaan menghasilkan strategi yang tepat sasaran dan berkelanjutan.
                        </p>
                    </div>

                    <p className="text-gray-500 text-sm mb-6">
                        Credential Highlights (bullet list, cocok untuk layout konten seperti contoh)
                    </p>
                    <ul className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
                        <li className="flex items-start gap-3">
                            <span className="text-gray-400 mt-1">•</span>
                            <span><span className="font-semibold">Lineage-Based Expertise:</span> Direct transmission from the original heir of Emperor Qian Long&apos;s Imperial Feng Shui (乾隆帝)</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-gray-400 mt-1">•</span>
                            <span><span className="font-semibold">Personalized Energy Mapping:</span> Fokus pada Personal Luck, Wealth Capacity, dan Strategic Timing yang spesifik per klien</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-gray-400 mt-1">•</span>
                            <span><span className="font-semibold">Imperial Framework:</span> Prinsip Yin-Yang (陰陽) & Five Elements (五行) sebagai fondasi keputusan strategis</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-gray-400 mt-1">•</span>
                            <span><span className="font-semibold">Natural Energy Instruments:</span> Pemanfaatan energi alami seperti giok (翡翠), gaharu (沉香), dan cendana (檀香)</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-gray-400 mt-1">•</span>
                            <span><span className="font-semibold">Consulting Scope:</span> Personal Feng Shui, Home Feng Shui, Office Feng Shui, dan Imperial Bazi Reading</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-gray-400 mt-1">•</span>
                            <span><span className="font-semibold">Client Profile:</span> Leaders, professionals, dan business owners yang mengutamakan keunggulan berkelanjutan</span>
                        </li>
                    </ul>
                </div>
            </section>

            <ContactSection />
        </main>
    );
}
