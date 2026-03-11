import Image from "next/image";

const logos = [
    { src: "/assets/de-de-pau.svg", alt: "Cle de Peau Beaute", width: 160, height: 80 },
    { src: "/assets/bca-prioritas.png", alt: "BCA Prioritas", width: 192, height: 96 },
    { src: "/assets/savyavasa.svg", alt: "Savyavasa", width: 160, height: 80 },
    { src: "/assets/tiffany-co-logo-black-and-white.png", alt: "Tiffany and Co", width: 160, height: 80 },
];

const TrustedBySection = () => {
    return (
        <section className="bg-white py-20 overflow-hidden relative">
            <div className="container mx-auto px-8 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/3 relative min-h-[180px] flex items-center overflow-visible shrink-0">
                    <h2 className="text-5xl md:text-7xl font-thin text-black z-10 relative leading-tight">
                        Trusted<br />By
                    </h2>
                </div>

                <div className="w-full md:w-2/3 overflow-hidden mt-12 md:mt-0">
                    <div className="flex items-center animate-marquee-left w-max">
                        {[...logos, ...logos].map((logo, i) => (
                            <div
                                key={i}
                                className="relative shrink-0 mx-10 grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
                                style={{ width: logo.width, height: logo.height }}
                            >
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBySection;
