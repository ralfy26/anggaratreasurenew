import Link from "next/link";
import Image from "next/image";
import { Instagram, MapPin, Youtube } from "lucide-react";

const ContactSection = () => {
    return (
        <section className="bg-white pt-10">
            {/* Map Section */}
            <div className="w-[80%] h-64 bg-gray-200 rounded-xl overflow-hidden mb-12 relative mx-auto">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3229879730793!2d106.81929629999999!3d-6.2210719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f32a7605d4b7%3A0x604518fcb1bcdca!2sAnggara%20Treasures!5e0!3m2!1sid!2sid!4v1770968641610!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    className="opacity-80"
                ></iframe>
            </div>
            <div className="container mx-auto px-8 pb-10 text-black">
                <div className="flex flex-col md:flex-row justify-between items-start gap-10">
                    {/* Left Side */}
                    <div className="flex-1">
                        <h2 className="text-5xl font-bold mb-6">Let&apos;s Talk</h2>

                        <div className="space-y-2 mb-8">
                            <Link href="/contact" className="block text-lg font-medium underline">Contact & Booking</Link>
                            <Link href="/faq" className="block text-lg font-medium underline">FAQ?</Link>
                        </div>

                        {/* Logo */}
                        <div className="mt-8">
                            <Image
                                src="/assets/Logo AT-2 1.svg"
                                alt="Anggara Treasures Logo"
                                width={200}
                                height={80}
                                className="h-auto w-48"
                            />
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex-1 md:text-right">
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-bold text-lg">Whatsapp</h3>
                                <p className="text-gray-600">+62-819-319-77-808</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">E-mail</h3>
                                <p className="text-gray-600">admin@anggaratreasures.com</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">E-mail</h3>
                                <p className="text-gray-600">anggaratreasures@gmail.com</p>
                            </div>

                            <div className="pt-4 flex md:justify-end items-center gap-2 text-[#AE1919]">
                                <Instagram className="w-6 h-6" />
                                <Link href="https://www.instagram.com/anggaratreasures" className="underline text-lg" target="_blank">Follow Anggara Treasures</Link>
                            </div>
                            <div className="pt-4 flex md:justify-end items-center gap-2 text-[#AE1919]">
                                <Youtube className="w-6 h-6" />
                                <Link href="https://www.youtube.com/@AnggaraTreasures" className="underline text-lg" target="_blank">Watch Anggara Treasures</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
