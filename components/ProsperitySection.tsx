import Image from "next/image";

const ProsperitySection = () => {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[400px] md:h-[600px] w-full">
                        <div className="absolute top-0 left-0 w-[60%] h-[70%] z-10 rounded-2xl overflow-hidden">
                            <Image
                                src="/assets/service-2.jpeg"
                                alt="Prosperity Image 1"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="absolute top-10 right-0 w-[50%] h-[45%] z-20 rounded-2xl overflow-hidden">
                            <Image
                                src="/assets/home-2.png"
                                alt="Prosperity Image 2"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="absolute bottom-0 right-10 w-[60%] h-[45%] z-30 rounded-2xl overflow-hidden">
                            <Image
                                src="/assets/service-4.jpeg"
                                alt="Prosperity Image 3"
                                fill
                                className="object-cover rounded-2xl"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-2 text-black">
                            Prospering Every Generation
                        </h2>
                        <h3 className="text-xl text-gray-500 uppercase tracking-widest mb-8">
                            THROUGH IMPERIAL FENG SHUI
                        </h3>

                        <p className="text-gray-700 text-lg leading-relaxed mb-8">
                            Imperial Feng Shui membantu Anda meningkatkan keberuntungan karier, bisnis, investasi, dan kehidupan
                            melalui penyeimbangan energi, lima elemen, serta strategi penataan yang dapat mengarahkan nasib
                        </p>

                        <h4 className="text-2xl font-bold mb-4 text-black">
                            Apa Itu Imperial Feng Shui?
                        </h4>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Metode feng shui aktif yang mampu mengubah arah hidup seseorang melalui penataan energi, tanpa perlu
                            renovasi besar. Imperial Feng Shui berfokus pada hasil nyata — rezeki, kesehatan, hubungan, dan kesuksesan —
                            melalui harmoni Yin-Yang dan elemen pendukung.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProsperitySection;
