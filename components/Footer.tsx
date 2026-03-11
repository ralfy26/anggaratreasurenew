import Link from "next/link";
import Image from "next/image";
import { Instagram, Youtube } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="container mx-auto px-8">
                {/* Footer Navigation */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 text-lg font-medium pt-8">
                    {["About Us", "Services", "Collection", "Invite Me", "Articles", "Previous Clients"].map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase().replace(" ", "-")}`}
                            className="text-gray-800 hover:text-black transition-colors underline"
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Bottom Red Section (Roof Design Placeholder) */}
            <div className="relative mt-10 w-full">
                <div className="relative w-full">
                    <Image
                        src="/assets/red-roof.png"
                        alt="Footer Background"
                        width={720}
                        height={500}
                        className="w-full h-auto object-cover"
                        priority
                        quality={75}
                    />

                    <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 text-white">
                        <div className="flex items-center gap-2 mb-4 text-[#FFFFFF]">
                            <Instagram className="w-6 h-6" />
                            <Link href="https://www.instagram.com/anggaratreasures" className="font-medium" target="_blank">Follow Anggara Treasures</Link>
                        </div>

                        <p className="text-center text-sm opacity-80 px-4">
                            © Copyright Professional Imperial Feng Shui and Imperial Bazi Reading Expert. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
