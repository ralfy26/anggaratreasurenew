"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
    const pathname = usePathname();
    const isHomePage = pathname === "/";
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMenu = () => setIsMobileMenuOpen(false);

    const navLinks = ["About Us", "Services", "Collection", "Articles", "Previous Clients"];

    if (isHomePage) {
        return (
            <nav className="absolute top-0 left-0 w-full z-50 px-8 py-6 bg-transparent">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
                        <Image
                            src="/assets/Logo AT-2 1.svg"
                            alt="Anggara Treasures Logo"
                            width={180}
                            height={60}
                            className="h-12 md:h-16 w-auto"
                        />
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((item) => (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase().replace(" ", "-")}`}
                                className="text-[#D4AF37] font-medium hover:text-[#FFD700] transition-colors text-lg"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    {/* Right Side Actions (Desktop) */}
                    <div className="hidden md:flex items-center gap-4">
                        {/* Search Bar */}
                        <div className="flex items-center bg-[#4A3728] rounded-full px-4 py-2 w-64 border border-[#6F4E37]/50">
                            <Search className="w-5 h-5 mr-2 text-[#D4AF37]" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="bg-transparent border-none outline-none text-white placeholder-white/80 w-full"
                            />
                        </div>

                        {/* WhatsApp Icon */}
                        <button className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                            >
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-[#D4AF37]" onClick={toggleMenu}>
                        {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md py-6 px-8 flex flex-col gap-6 shadow-xl">
                        {navLinks.map((item) => (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase().replace(" ", "-")}`}
                                className="text-[#D4AF37] font-medium hover:text-[#FFD700] transition-colors text-lg"
                                onClick={closeMenu}
                            >
                                {item}
                            </Link>
                        ))}
                        {/* Mobile Search */}
                        <div className="flex items-center border border-[#6F4E37] rounded-full px-4 py-2 w-full bg-black/20 backdrop-blur-sm">
                            <Search className="w-5 h-5 mr-2 text-[#D4AF37]" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="bg-transparent border-none outline-none text-white placeholder-white/80 w-full"
                            />
                        </div>
                    </div>
                )}
            </nav>
        );
    }

    return (
        <nav className="relative px-8 py-4 bg-white shadow-sm">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
                    <Image
                        src="/assets/Logo AT-2 1.svg"
                        alt="Anggara Treasures Logo"
                        width={180}
                        height={60}
                        className="h-12 w-auto"
                    />
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase().replace(" ", "-")}`}
                            className="text-[#A52A2A] font-medium hover:text-[#800000] transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* Right Side Actions (Desktop) */}
                <div className="hidden md:flex items-center gap-4">
                    {/* Search Bar */}
                    <div className="flex items-center bg-[#A52A2A] rounded-full px-4 py-2 text-white w-64">
                        <Search className="w-5 h-5 mr-2" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-transparent border-none outline-none text-white placeholder-white/80 w-full"
                        />
                    </div>

                    {/* WhatsApp Icon */}
                    <button className="bg-[#A52A2A] text-white p-2 rounded-full hover:bg-[#800000] transition-colors">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-[#A52A2A]" onClick={toggleMenu}>
                    {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-6 px-8 flex flex-col gap-6 z-50">
                    {navLinks.map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase().replace(" ", "-")}`}
                            className="text-[#A52A2A] font-medium hover:text-[#800000] transition-colors text-lg"
                            onClick={closeMenu}
                        >
                            {item}
                        </Link>
                    ))}
                    {/* Mobile Search */}
                    <div className="flex items-center bg-[#A52A2A] rounded-full px-4 py-2 text-white w-full">
                        <Search className="w-5 h-5 mr-2" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-transparent border-none outline-none text-white placeholder-white/80 w-full"
                        />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
