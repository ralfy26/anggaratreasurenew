import Image from "next/image";
import Link from "next/link";
import CloudOrnament from "./CloudOrnament";

const AboutSection = () => {
    return (
        <section className="relative bg-white py-20 overflow-hidden">
            <CloudOrnament
                width={200}
                height={200}
                className="top-20 left-10 w-32 h-32 md:w-[400px] md:h-[400px] sm:h-[100px] sm:w-[100px] md:left-20 md:top-20 -translate-x-1/4 -translate-y-1/4"
            />
            <CloudOrnament
                width={200}
                height={200}
                flipped
                className="top-20 right-10 w-32 h-32 md:w-[400px] md:h-[400px] sm:h-[100px] sm:w-[100px] md:right-20 md:top-20 translate-x-1/4 -translate-y-1/4"
            />

            <div className="container mx-auto px-8 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col items-center justify-center mb-12 text-center">
                    <div className="relative w-full max-w-2xl h-40 mb-4">
                        <Image
                            src="/assets/welcome.svg"
                            alt="Welcome To Anggara Treasures"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                <div className="relative max-w-4xl mx-auto p-12 md:p-16 text-center">
                    <div className="absolute top-0 left-0 w-16 h-16 md:w-24 md:h-24">
                        <Image src="/assets/corner.svg" alt="Corner Decoration" fill className="object-contain" />
                    </div>
                    <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 rotate-90">
                        <Image src="/assets/corner.svg" alt="Corner Decoration" fill className="object-contain" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-16 h-16 md:w-24 md:h-24 rotate-180">
                        <Image src="/assets/corner.svg" alt="Corner Decoration" fill className="object-contain" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 md:w-24 md:h-24 -rotate-90">
                        <Image src="/assets/corner.svg" alt="Corner Decoration" fill className="object-contain" />
                    </div>

                    <div className="space-y-6 text-gray-800 leading-relaxed font-medium">
                        <p>
                            Tahun Kuda Api 2026 membawa energi pergerakan, keberanian, dan akselerasi menuju pencapaian yang lebih tinggi. Anggara Treasures membantu Anda menyelaraskan peluang dalam karier, bisnis, investasi, dan kehidupan melalui pendekatan Imperial Feng Shui dan Imperial Bazi Reading.
                            Dipimpin oleh Master Rezza—ahli yang mewarisi langsung ilmu Imperial Feng Shui Kaisar Qian Long—kami menghadirkan metode feng shui aktif yang dirancang untuk membentuk dan mengarahkan nasib secara sadar. Melalui harmoni Yin–Yang, keseimbangan Lima Elemen, serta pemanfaatan giok, gaharu, dan cendana, Anggara Treasures membantu mengoptimalkan energi kehidupan agar selaras, kuat, dan berkelanjutan.
                        </p>
                    </div>

                    <div className="flex justify-center gap-6 mt-10">
                        <Link href="/services" className="bg-[#800000] text-white px-8 py-3 rounded-md hover:bg-[#600000] transition-colors shadow-md">
                            Our Services
                        </Link>
                        <Link href="/articles" className="bg-[#800000] text-white px-8 py-3 rounded-md hover:bg-[#600000] transition-colors shadow-md">
                            Our Articles
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
