import Image from "next/image";

const MasterRezzaSection = () => {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-8">
                <div className="flex flex-col md:block relative md:rounded-3xl md:overflow-hidden">
                    {/* Image Container */}
                    <div className="relative w-full aspect-video md:aspect-2/1 rounded-3xl overflow-hidden">
                        <Image
                            src="/assets/master-rezza.png"
                            alt="Master Rezza"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="mt-6 md:mt-0 md:absolute md:inset-0 flex flex-col justify-center md:p-16 md:top-30 md:-left-5">
                        <div className="max-w-full md:max-w-sm text-gray-800 md:text-white space-y-6 bg-white md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none shadow-lg md:shadow-none">
                            <div className="space-y-4 text-sm md:text-xs font-light leading-relaxed opacity-90">
                                <p>
                                    Anggara Treasures adalah konsultan Imperial Feng Shui dan Imperial Bazi Reading terkemuka di Indonesia, dipimpin oleh Master Rezza—ahli yang mewarisi langsung ilmu Imperial Feng Shui Kaisar Qian Long (乾隆帝).
                                </p>
                                <p>
                                    Berbeda dari classical feng shui yang pasif, Imperial Feng Shui berfokus pada pembentukan dan penguatan nasib melalui harmoni Yin-Yang (阴阳), keseimbangan Lima Elemen (五行), serta energi giok (翡翠), gaharu (沉香), & cendana (檀香).
                                </p>
                                <p>
                                    Metode ini mengoptimalkan energi kehidupan untuk menghadirkan keberuntungan, kesuksesan, dan keseimbangan yang berkelanjutan.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MasterRezzaSection;
