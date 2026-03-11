import Image from "next/image";
import Link from "next/link";

const CollectionCarousel = ({
    title,
    label,
    images,
    link
}: {
    title: string;
    label: string;
    images: { src: string; alt: string }[];
    link: string;
}) => {
    return (
        <div className="flex flex-col items-center">
            {/* Top Label */}
            <h4 className="text-sm md:text-base font-medium text-gray-800 mb-8 tracking-wide uppercase text-center">
                {label}
            </h4>

            {/* Carousel Images */}
            <div className="relative w-full h-64 md:h-80 flex items-center justify-center mb-8">
                {/* Left Image */}
                <div className="absolute left-0 md:left-10 w-32 md:w-40 h-32 md:h-40 z-10 opacity-80 blur-xs">
                    <Image
                        src={images[1].src}
                        alt={images[1].alt}
                        fill
                        className="object-contain"
                    />
                </div>

                {/* Right Image */}
                <div className="absolute right-0 md:right-10 w-32 md:w-40 h-32 md:h-40 z-10 opacity-80 blur-xs">
                    <Image
                        src={images[2].src}
                        alt={images[2].alt}
                        fill
                        className="object-contain"
                    />
                </div>

                {/* Center Image (Main) */}
                <div className="relative w-48 md:w-64 h-48 md:h-64 z-20 transform scale-110 drop-shadow-2xl">
                    <Image
                        src={images[0].src}
                        alt={images[0].alt}
                        fill
                        className="object-contain"
                    />
                    {/* Shadow effect below main image */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-black/20 blur-xl rounded-full"></div>
                </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-[#AE1919]"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            </div>

            {/* Collection Title */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                {title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-center text-xs md:text-sm max-w-xs mb-8 leading-relaxed">
                Lingkungan yang nyaman dan harmonis dapat meningkatkan kekayaan, kesehatan, dan hubungan kita.
                Feng Shui yang optimal dapat membantu kita mencapai kesuksesan dalam karier
            </p>

            {/* Button */}
            <Link href={link} className="bg-[#800000] text-white px-8 py-3 rounded-md hover:bg-[#600000] transition-colors shadow-md text-sm font-medium">
                Browse Collection
            </Link>
        </div>
    );
};

const TreasuresSection = () => {
    const homeImages = [
        { src: "/assets/red-phoenix-mountain-1.png", alt: "Red Phoenix Mountain" },
        { src: "/assets/qian-long-1.png", alt: "Qian Long" },
        { src: "/assets/imperial-white-inkstone-1.png", alt: "Imperial White Inkstone" }
    ];

    const personalImages = [
        { src: "/assets/persomal-collection-1.png", alt: "Personal Collection 1" },
        { src: "/assets/personal-collection-2.png", alt: "Personal Collection 2" },
        { src: "/assets/personal-collection-3.png", alt: "Personal Collection 3" }
    ];

    return (
        <section className="bg-white py-20 overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <h2 className="text-3xl md:text-5xl font-bold text-center text-black mb-20">
                    Treasures of Anggara
                </h2>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0">
                    {/* Left: Home Collection */}
                    <div className="w-full lg:w-5/12">
                        <CollectionCarousel
                            title="Home Collection"
                            label="RED PHOENIX MOUNTAIN – 013"
                            images={homeImages}
                            link="/collections/home"
                        />
                    </div>

                    {/* Center: Divider */}
                    <div className="hidden lg:flex w-full lg:w-2/12 justify-center py-8 lg:py-0">
                        <h2 className="text-4xl md:text-6xl font-bold text-[#FDFDFD] drop-shadow-lg tracking-[0.5em] select-none" style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                            安加拉的寶藏
                        </h2>
                    </div>

                    {/* Right: Personal Collection */}
                    <div className="w-full lg:w-5/12">
                        <CollectionCarousel
                            title="Personal Collection"
                            label="BLISS OF HARVEST (REF: BOH6001)"
                            images={personalImages}
                            link="/collections/personal"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TreasuresSection;
