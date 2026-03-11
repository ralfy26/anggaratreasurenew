import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <div className="relative min-h-[70vh] sm:min-h-screen md:h-[115vh] w-full mb-6 sm:mb-12">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/assets/Hero 2.png"
                    alt="Hero Background"
                    fill
                    className="object-cover object-[80%_20%] md:object-top"
                    priority
                />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center h-full pt-32 sm:pt-0 px-6 sm:px-8 md:px-16 lg:px-24 pb-12 sm:pb-20">
                <div className="max-w-4xl">
                    <h1 className="text-[#D4AF37] font-script text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight mb-4 sm:mb-6">
                        Prosper Like <br />
                        <span className="ml-8 sm:ml-12 md:ml-16">Emperors</span>
                    </h1>

                    <p className="text-[#D4AF37]/90 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl font-sans font-light">
                        Kaisar sejati tidak menunggu waktu baik. Ia menciptakannya dengan menyelaraskan ritme diri dan ritme alam tanpa renovasi, tanpa stagnasi
                    </p>
                </div>
            </div>

            {/* Roof Decoration */}
            <div className="absolute -bottom-8 sm:-bottom-12 md:-bottom-24 lg:-bottom-32 left-0 w-full z-20 pointer-events-none">
                <Image
                    src="/assets/roof-white.png"
                    alt="Roof Decoration"
                    width={1920}
                    height={300}
                    className="w-full h-auto"
                />
            </div>
        </div>
    );
};

export default Hero;
