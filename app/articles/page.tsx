import OtherArticlesComponent from "@/components/Articles/OtherArticlesComponent";
import TreeOrnament from "@/components/TreeOrnament";
import Image from "next/image";

export default function ArticlesPage() {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <TreeOrnament position="top-125 left-0" width={200} height={200} />
            <main className="grow pt-20">
                <section className="container mx-auto px-4 pb-8">
                    {/* Featured Articles Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-24">
                        {/* Main Featured Article (Top - Spans 2 cols) */}
                        <div className="lg:col-span-2 relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden group cursor-pointer">
                            <Image
                                src="/assets/articles-1.jpg"
                                alt="Menata Perabotan dengan Feng Shui"
                                width={1920}
                                height={1080}
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Large "Articles" Title */}
                            <div className="absolute top-10 left-10 z-10">
                                <h2 className="text-3xl md:text-5xl font-serif text-white tracking-wide">Articles</h2>
                            </div>

                            {/* Glassmorphism Overlay */}
                            <div className="absolute bottom-4 left-4 right-4 border border-white/20 bg-black/10 backdrop-blur-md rounded-2xl p-6">
                                <h3 className="text-white text-xl font-medium mb-2 uppercase tracking-wider">
                                    Menata Perabotan dengan Feng Shui untuk Energi Positif di Rumah
                                </h3>
                                <div className="text-gray-200 text-sm leading-relaxed">
                                    <p className="inline">
                                        Dalam dunia desain interior, pemilihan dan penataan perabotan bukan hanya
                                        tentang estetika, tetapi juga tentang menciptakan keseimbangan dan harmoni
                                        di dalam rumah.
                                    </p>
                                    <span className="text-[#FFD700] font-bold uppercase tracking-widest ml-2 cursor-pointer hover:underline text-xs">
                                        See More
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* LEFT CARD */}
                        <div className="flex flex-col md:block relative group cursor-pointer mt-0">

                            <div className="relative h-[300px] md:h-[500px] lg:h-[600px] w-full rounded-[10px] overflow-hidden">
                                <Image
                                    src="/assets/articles-2.jpg"
                                    alt="Membuka Pintu Keberuntungan"
                                    width={1000}
                                    height={1000}
                                    className="object-cover transition-transform duration-700 rounded-[10px] group-hover:scale-105 mx-auto"
                                />

                                {/* Glass Title (Top Left) */}
                                <div className="absolute top-8 left-8 bg-black/20 backdrop-blur-md border border-white/10 p-5 rounded-2xl max-w-[240px]">
                                    <h3 className="text-white text-base font-medium uppercase tracking-wide leading-snug">
                                        Membuka Pintu Keberuntungan di Periode 9
                                    </h3>
                                </div>
                            </div>

                            {/* 2. Description Box */}
                            <div className="relative md:absolute md:-right-12 md:bottom-0 w-full md:w-[500px] h-auto md:h-[250px] bg-white p-6 md:p-12 shadow-none md:shadow-xl z-20">
                                <p className="text-gray-500 leading-relaxed mb-3">
                                    Dalam dunia desain interior, pemilihan dan penataan perabotan bukan hanya tentang estetika, tetapi juga tentang menciptakan keseimbangan dan harmoni di dalam rumah. <span className="text-[#B22222] font-bold tracking-widest hover:underline">See More</span>
                                </p>
                            </div>
                        </div>

                        {/* RIGHT CARD */}
                        <div className="flex flex-col md:block relative group cursor-pointer mt-8 lg:mt-0">

                            {/* 1. Short Image Container */}
                            <div className="relative h-[300px] md:h-[600px] lg:h-[600px] w-full rounded-[10px] overflow-hidden">
                                <Image
                                    src="/assets/articles-3.jpg"
                                    alt="Mengungkap Potensi Hidup"
                                    width={600}
                                    height={300}
                                    className="object-cover transition-transform duration-700 rounded-[10px] group-hover:scale-105"
                                />

                                {/* 2. Content Box */}
                                <div className="relative md:absolute md:bottom-12 w-full md:w-[500px] h-auto md:h-[300px] md:right-12 bg-white p-6 md:p-12 rounded-none md:rounded-[10px] shadow-none md:shadow-lg">
                                    <h3 className="text-[#333] text-[1rem] font-medium mb-3 uppercase tracking-wide leading-snug">
                                        MENGUNGKAP POTENSI HIDUP MELALUI BAZI: KUNCI HARMONI DAN KESUKSESAN
                                    </h3>
                                    {/* Longer Description */}
                                    <p className="text-gray-500 leading-relaxed mt-8">
                                        Dalam dunia desain interior, pemilihan dan penataan perabotan bukan hanya tentang estetika, tetapi juga tentang menciptakan keseimbangan dan harmoni di dalam rumah.
                                        <span className="text-[#B22222] font-bold tracking-widest hover:underline ml-2">
                                            See More
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Other Articles Section */}
                    <div className="mt-32">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-serif text-[#333]">Other Articles</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Article Card 1 */}
                            <OtherArticlesComponent
                                alt="Anggara Treasures 1st Anniversary"
                                image="/assets/other-articles-1.jpg"
                                description="Anggara Treasures 1st Anniversary : Memancarkan Energi Positif dengan Produk Imperial Feng Shui"
                                link="/articles/anggara-treasures-1st-anniversary"
                            />
                            {/* Article Card 2 */}
                            <OtherArticlesComponent
                                alt="1st Anniversary Celebration"
                                image="/assets/other-articles-2.jpg"
                                description="1st Anniversary Celebration"
                                link="/articles/1st-anniversary-celebration"
                            />
                            {/* Article Card 3 */}
                            <OtherArticlesComponent
                                alt="Keseruan Perayaan 1 Tahun"
                                image="/assets/other-articles-3.jpg"
                                description="Keseruan Perayaan 1 Tahun Anggara Treasures : Sebuah Momen Penuh Syukur dan Harapan"
                                link="/articles/keseruan-perayaan-1-tahun-anggara-treasures"
                            />
                        </div>

                        {/* Pagination Dots */}
                        <div className="flex justify-center gap-3 mt-12">
                            <button className="w-3 h-3 rounded-full bg-[#B22222] transition-all hover:scale-125"></button>
                            <button className="w-3 h-3 rounded-full bg-gray-300 transition-all hover:bg-gray-400"></button>
                            <button className="w-3 h-3 rounded-full bg-gray-300 transition-all hover:bg-gray-400"></button>
                        </div>
                    </div>
                </section>
            </main>
        </div >
    );
}
