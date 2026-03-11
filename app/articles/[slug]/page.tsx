import OtherArticlesComponent from "@/components/Articles/OtherArticlesComponent";
import TreeOrnament from "@/components/TreeOrnament";
import Image from "next/image";
import Link from "next/link";

export default function ArticleDetailPage() {
    return (
        <div className="flex min-h-screen flex-col bg-white overflow-hidden relative">
            <TreeOrnament position="bottom-[200px] -left-20" width={500} height={500} className="opacity-30" />

            <main className="grow">
                {/* Hero Section */}
                <div className="relative w-full h-[500px] lg:h-[600px] rounded-[20px]">
                    <div className="w-[80%] h-full mx-auto">
                        <Image
                            src="/assets/article-details.jpg"
                            alt="Article Hero"
                            width={1920}
                            height={1080}
                            className="object-contain rounded-[20px]"
                            priority
                        />
                    </div>
                    {/* "Articles" Title Overlay */}
                    <div className="absolute top-16 left-12 lg:left-48 z-10">
                        <h1 className="text-2xl lg:text-3xl font-serif text-white tracking-wide drop-shadow-md">
                            Articles
                        </h1>
                    </div>
                </div>

                {/* Content Container - Overlapping Hero */}
                <div className="relative z-20 container mx-auto px-4 lg:px-20 -mt-40 lg:-mt-56 mb-20">
                    <div className="bg-linear-to-b from-white via-white[50] to-white/0 rounded-[30px] shadow-xl p-8 lg:p-16 max-w-5xl mx-auto">
                        {/* Article Title */}
                        <h2 className="text-2xl lg:text-4xl font-medium text-[#B22222] uppercase tracking-wider mb-8 leading-snug">
                            MENATA PERABOTAN DENGAN FENG
                            <br />
                            SHUI UNTUK ENERGI POSITIF DI
                            <br />
                            RUMAH
                        </h2>

                        {/* Article Content */}
                        <div className="space-y-8 text-[#333] leading-relaxed">
                            {/* Section 1 */}
                            <div>
                                <h3 className="font-bold text-lg mb-2">Perayaan yang Hangat dan Berkesan</h3>
                                <p className="text-gray-600">
                                    Acara ini dihadiri oleh klien setia, tim Anggara Treasures, serta Master Rezza selaku
                                    pendiri. Suasana penuh keceriaan terasa sejak awal acara, dengan dekorasi yang
                                    elegan dan nuansa yang mencerminkan energi positif. Para tamu berbagi
                                    pengalaman mereka tentang bagaimana Imperial Feng Shui telah membawa
                                    perubahan dalam hidup dan bisnis mereka.
                                </p>
                            </div>

                            {/* Section 2 */}
                            <div>
                                <h3 className="font-bold text-lg mb-2">Testimoni Klien: Perubahan Nyata dalam Hidup</h3>
                                <p className="text-gray-600">
                                    Beberapa klien yang hadir berbagi kisah inspiratif mereka. Seorang pengusaha
                                    bercerita bagaimana setelah konsultasi privat dan menerapkan prinsip Feng Shui,
                                    omzet bisnisnya meningkat pesat. Klien lain mengungkapkan bahwa setelah
                                    mengenal Imperial Bazi Reading, ia lebih memahami potensi dirinya dan mampu
                                    mengambil keputusan yang lebih baik dalam hidup.
                                </p>
                            </div>

                            {/* Section 3 */}
                            <div>
                                <h3 className="font-bold text-lg mb-2">Momen Kebersamaan yang Penuh Makna</h3>
                                <p className="text-gray-600">
                                    Selain sesi berbagi pengalaman, acara juga dimeriahkan dengan pemotongan
                                    tumpeng sebagai simbol rasa syukur. Foto-foto kebersamaan antara tim, klien,
                                    dan Master Rezza menjadi kenangan indah dari perjalanan setahun ini. Setiap
                                    momen dipenuhi dengan energi positif dan semangat untuk terus berkembang.
                                </p>
                            </div>

                            {/* Section 4 */}
                            <div>
                                <h3 className="font-bold text-lg mb-2">Harapan untuk Masa Depan</h3>
                                <p className="text-gray-600">
                                    Dalam sambutannya, Master Rezza menyampaikan rasa terima kasih kepada
                                    seluruh tim dan klien yang telah mendukung Anggara Treasures. “Kami
                                    berkomitmen untuk terus memberikan bimbingan terbaik dalam Imperial Feng
                                    Shui dan membantu lebih banyak orang mencapai kehidupan yang lebih
                                    harmonis dan sukses,” ujarnya.
                                </p>
                            </div>

                            {/* Section 5 */}
                            <div>
                                <h3 className="font-bold text-lg mb-2">Awal dari Perjalanan yang Lebih Besar</h3>
                                <p className="text-gray-600">
                                    Perayaan ini bukan hanya sekadar peringatan satu tahun, tetapi juga awal dari
                                    perjalanan yang lebih besar. Dengan semangat yang semakin kuat, Anggara
                                    Treasures siap untuk terus berkembang dan memberikan manfaat bagi lebih
                                    banyak orang di masa mendatang. Semoga tahun-tahun berikutnya semakin
                                    membawa kesuksesan dan kebahagiaan bagi semua.
                                </p>
                            </div>
                        </div>

                        {/* Next Articles Link */}
                        <div className="flex justify-end items-center mt-12 group cursor-pointer">
                            <span className="text-sm font-medium text-gray-800 mr-2 group-hover:text-[#B22222] transition-colors">
                                next articles
                            </span>
                            <span className="text-xl text-gray-400 group-hover:translate-x-1 transition-transform">
                                &rarr;
                            </span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
