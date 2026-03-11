import CloudOrnament from "@/components/CloudOrnament";
import ProductGallery from "@/components/ProductDetail/ProductGallery";
import ProductInfo from "@/components/ProductDetail/ProductInfo";
import RelatedProducts from "@/components/ProductDetail/RelatedProducts";

export default function CollectionDetailPage({ params }: { params: { slug: string } }) {
    const product = {
        title: "QIAN LONG JADEITE MOUNTAIN REF: 9881",
        subtitle: "IMPERIAL WHITE INKSTONE",
        refCode: "9881",
        description:
            "Imperial White Inkstone Royal Emblem (Dragon & Tiger) merupakan artefak Imperial Feng Shui yang dikurasi sebagai objek koleksi bernilai tinggi. Produk ini merepresentasikan keseimbangan antara kekuatan, perlindungan, dan otoritas dalam satu karya yang elegan dan penuh makna.",
        images: [
            "/assets/imperial-white-inkstone-1.png",
            "/assets/crystal-1.png",
            "/assets/qian-long-1.png",
            "/assets/fine-jadeite-midas.png",
        ],
        galleryImages: [
            "/assets/imperial-white-inkstone-1.png",
            "/assets/imperial-white-inkstone-2.png",
            "/assets/imperial-white-inkstone-1.png",
            "/assets/imperial-white-inkstone-2.png",
        ]
    };

    return (
        <main className="min-h-screen bg-white pt-4 pb-12 relative overflow-hidden">
            {/* Background Ornaments */}
            {/* Right Ornament - Top Right, Flipped */}
            <CloudOrnament position="top-0 right-0" width={250} height={250} flipped />
            {/* Left Ornament - Below Gallery*/}
            <CloudOrnament position="top-[850px] -left-1" width={250} height={250} />
            <div className="container mx-auto px-4 md:px-8 relative z-10">

                {/* Top Section: Gallery & Info */}
                <div className="flex flex-col lg:flex-row gap-12 mb-24">
                    {/* Left: Gallery */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <ProductGallery images={product.galleryImages} />
                    </div>

                    {/* Right: Info */}
                    <div className="w-full lg:w-1/2">
                        <ProductInfo
                            title={product.title}
                            subtitle={product.subtitle}
                            refCode={product.refCode}
                            description={product.description}
                        />
                    </div>
                </div>

                {/* Bottom Section: Related Products */}
                <RelatedProducts />

            </div>
        </main>
    );
}
