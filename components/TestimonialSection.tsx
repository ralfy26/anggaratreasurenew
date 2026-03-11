import Image from "next/image";

const TestimonialSection = () => {
    const testimonials = [
        {
            text: "Terima kasih coach, sejak tau dan menjalankan ilmu yg diajarkan CR hidup saya mengalami perubahan besar ke arah yg semakin lebih baik. Kehidupan rumah tangga saya lebih harmonis semua yg saya impikan bisa tercapai, kendaraan, rumah baru, buka cabang usaha dan yg paling bikin saya kagum sejak saya pake kristal dan ngatur posisi barang sesuai feng shui dari 2 bulan yg lalu income saya langsung naik padahal awalnya sih ragu karena cuma pake kristal aja (tanpa melakukan apapun) kegiatan seperti biasa tp income saya bisa naik dan mencapai yg saya inginkan amazing. amazing, ternyata inilah cara bagi saya utk menyelaraskan diri & rezeki dgn alam terbukti target income saya udah tercapai.",
            author: "Aspiani Kukar"
        },
        {
            text: "Alhamdulillah, Terimakasih Alloh, setelah, saya bertemu dengan Coach Rezza, sejak tahun 2018, kehidupan saya berubah 180 derajat, dan semakin membaik, baik itu dalam hal emosi, hubungan keluarga, dan tentunya rezeki, dan sejak diberi info mengenai Imperial Fengshui, dan saya membeli Jade yang diarahkan oleh Coach Rezza, Alhamdulillah pendapatan saya meningkat 20-25?ri bulan bulan sebelumnya, dan Niscaya akan meningkat lagi di bulan bulan berikutnya, Aamiin.”",
            author: "Kurnia Firdaus"
        }
    ];

    return (
        <section className="bg-white py-20 overflow-hidden">
            <div className="container mx-auto px-8">
                <h2 className="text-4xl md:text-6xl font-thin text-gray-800 mb-16 tracking-wide">
                    Testimonial
                </h2>

                <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="relative w-full md:w-[600px] min-h-[400px] md:h-[400px] shrink-0 drop-shadow-lg rounded-2xl overflow-hidden bg-white">
                            <Image
                                src="/assets/testimonial-card.png"
                                alt="Testimonial Background"
                                fill
                                className="object-cover"
                            />

                            <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-16 text-gray-700">
                                <p className="text-xs md:text-sm leading-relaxed mb-6 font-medium text-justify">
                                    &quot;{testimonial.text}&quot;
                                </p>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-px bg-black"></div>
                                    <p className="font-bold text-sm text-black">
                                        {testimonial.author}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center gap-3 mt-12">
                    <div className="w-3 h-3 rounded-full bg-[#AE1919]"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
