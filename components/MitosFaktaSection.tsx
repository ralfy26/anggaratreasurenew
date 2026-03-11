import Image from "next/image";

const MitosFaktaSection = () => {
    const items = [
        {
            myth: "Feng Shui itu Takhayul",
            fact: "Feng Shui bukan takhayul; ini ilmu energi lingkungan yang tidak bertentangan dengan agama."
        },
        {
            myth: "Hanya untuk Orang Kaya",
            fact: "Imperial Feng Shui dapat diterapkan oleh siapa saja tanpa biaya renovasi besar."
        },
        {
            myth: "Selalu Butuh Renovasi Besar",
            fact: "Hanya Classical Feng Shui yang membutuhkan renovasi. Imperial Feng Shui fokus pada penataan energi dan ruang tanpa bongkar bangunan."
        },
        {
            myth: "Hanya untuk Budaya Timur",
            fact: "Prinsip Feng Shui bersifat universal dan dapat diterapkan oleh siapa pun."
        }
    ];

    const PairedConnector = () => (
        <svg
            viewBox="0 0 160 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            preserveAspectRatio="none"
            style={{ overflow: 'visible' }}
        >
            <circle cx="8" cy="20" r="5" fill="#AE1919" />
            <path d="M 8 20 H 100 L 160 100" stroke="#AE1919" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" />
            <circle cx="40" cy="180" r="5" fill="#AE1919" />
            <path d="M 40 180 H 100 L 160 100" stroke="#AE1919" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" />
        </svg>
    );

    return (
        <section className="relative bg-white py-20 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                {/* Title */}
                <div className="text-left mb-10 md:mb-16 md:pl-16">
                    <h2 className="text-5xl md:text-8xl font-sigokae text-[#AE1919] tracking-wide drop-shadow-sm">
                        Mitos & Fakta
                    </h2>
                </div>

                {/* --- MOBILE LAYOUT --- */}
                <div className="flex flex-col gap-10 md:hidden">
                    {items.map((item, index) => (
                        <div key={index} className="flex flex-col gap-4 text-center">
                            <h3 className="text-[#AE1919] font-bold text-xl">
                                {item.myth}
                            </h3>
                            <div className="w-full flex justify-center">
                                <div className="w-1 h-8 bg-[#AE1919]/20 rounded-full"></div>
                            </div>
                            <p className="text-black text-lg leading-relaxed">
                                {item.fact}
                            </p>
                        </div>
                    ))}
                    <div className="relative w-40 h-40 mx-auto mt-4 opacity-50">
                        <Image
                            src="/assets/chakra-ornament.svg"
                            alt="Chakra Ornament"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* --- DESKTOP LAYOUT --- */}
                <div className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-0 items-center max-w-7xl mx-auto">

                    <div className="flex flex-col gap-16 z-10">

                        <div className="flex items-center justify-end">
                            <div className="flex flex-col gap-16 text-right shrink-0">
                                <h3 className="font-bold text-[#AE1919] text-2xl leading-tight pr-4">
                                    Feng Shui itu<br />Takhayul
                                </h3>
                                <h3 className="font-bold text-[#AE1919] text-2xl leading-tight pl-8 pr-4">
                                    Hanya untuk<br />Orang Kaya
                                </h3>
                            </div>
                            <div className="w-[160px] h-[200px] shrink-0" style={{ overflow: 'visible' }}>
                                <PairedConnector />
                            </div>
                        </div>
                        <div className="flex items-center justify-end">
                            <div className="flex flex-col gap-16 text-right shrink-0">
                                <h3 className="font-bold text-[#AE1919] text-2xl leading-tight pl-8 pr-4">
                                    Selalu Butuh<br />Renovasi Besar
                                </h3>
                                <h3 className="font-bold text-[#AE1919] text-2xl leading-tight pr-4">
                                    Hanya untuk<br />Budaya Timur
                                </h3>
                            </div>
                            <div className="w-[160px] h-[200px] shrink-0" style={{ overflow: 'visible' }}>
                                <PairedConnector />
                            </div>
                        </div>

                    </div>

                    <div className="relative flex justify-center items-center w-[400px] h-[700px] z-0" style={{ overflow: 'visible' }}>
                        <Image
                            src="/assets/chakra-ornament 2.svg"
                            alt="Chakra Ornament"
                            width={700}
                            height={700}
                            className="object-contain"
                        />
                    </div>

                    <div className="flex flex-col gap-16 z-10 pl-8">
                        <div className="flex flex-col gap-16">
                            <p className="text-black text-lg leading-relaxed max-w-sm">
                                {items[0].fact}
                            </p>
                            <p className="text-black text-lg leading-relaxed max-w-sm">
                                {items[1].fact}
                            </p>
                        </div>
                        <div className="flex flex-col gap-16">
                            <p className="text-black text-lg leading-relaxed max-w-sm">
                                {items[2].fact}
                            </p>
                            <p className="text-black text-lg leading-relaxed max-w-sm">
                                {items[3].fact}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MitosFaktaSection;
