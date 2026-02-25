"use client";
import { useEffect, useState } from 'react';
import { Menu } from "lucide-react";
import Link from "next/link";
import {
    Sheet,
    SheetContent,
} from "@/components/ui/sheet";
import { useHireState } from "./HireContext";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility
    const { setIsOpen } = useHireState();

    const [activeSection, setActiveSection] = useState("/");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["Services", "About", "Portfolio", "Contact"];
            let currentSection = "/"; // Default HOME

            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        currentSection = section;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle the menu
    }

    const closeMenu = () => {
        setMenuOpen(false);
    };


    return (
        <header className='fixed top-0 w-full z-50'>
            <nav className="w-full bg-[#121212]/60 backdrop-blur-md border-white/10">
                <div className="flex items-center justify-between px-7 py-6 md:px-10">
                    {/* Logo */}
                    <div>
                        <Link href="/"><h1 className="text-3xl font-bold text-orange-600">NASEER</h1></Link>
                    </div>

                    {/* Hamburger Menu Icon for Small Screens */}
                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className="text-3xl mr-3 md:mr-0 text-orange-600">
                            <Menu />
                        </button>
                    </div>

                    {/* Navigation Links (visible on large screens) */}
                    <div className="hidden lg:flex gap-12 text-right scale-90 xl:scale-100">
                        <a href="/" className={`text-2xl lg:text-xl whitespace-nowrap ${activeSection === "/" ? "text-orange-600" : "text-white"
                            } hover:text-orange-600 cursor-pointer whitespace-nowrap`}>HOME</a>
                        <a href='#Services' className={`text-2xl lg:text-xl whitespace-nowrap ${activeSection === "Services" ? "text-orange-600" : "text-white"
                            } hover:text-orange-600 cursor-pointer whitespace-nowrap`}>SERVICES</a>
                        <a href='#About' className={`text-2xl lg:text-xl whitespace-nowrap ${activeSection === "About" ? "text-orange-600" : "text-white"
                            } hover:text-orange-600 cursor-pointer whitespace-nowrap`}>ABOUT ME</a>
                        <a href="#Portfolio" className={`text-2xl lg:text-xl whitespace-nowrap ${activeSection === "Portfolio" ? "text-orange-600" : "text-white"
                            } hover:text-orange-600 cursor-pointer whitespace-nowrap`}>PORTFOLIO</a>
                        <a href="#Contact" className={`text-2xl lg:text-xl whitespace-nowrap ${activeSection === "Contact" ? "text-orange-600" : "text-white"
                            } hover:text-orange-600 cursor-pointer whitespace-nowrap `}>CONTACT</a>
                    </div>

                    {/* Buttons (visible on large screens) */}
                    <div className="hidden lg:flex gap-4">
                        <button
                            onClick={() => setIsOpen(true)}
                            type="button"
                            className="text-xl font-bold py-3 px-6 sm:px-14 hover:bg-white text-white whitespace-nowrap hover:text-orange-600 bg-orange-600 rounded-lg"
                        >
                            Hire me
                        </button>
                    </div>
                </div>

                {/* Mobile Menu with Sheet */}
                <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
                    <SheetContent className="lg:hidden">
                        <div className="flex flex-col items-right gap-8 text-center py-2">
                            <Link href="/" >
                                <h1 onClick={closeMenu} className="text-lg text-white cursor-pointer">HOME</h1>
                            </Link>
                            <a href="#Services" onClick={closeMenu}><h1 className="text-lg text-white cursor-pointer">SERVICES</h1></a>
                            <a href="#About" onClick={closeMenu}><h1 className="text-lg text-white cursor-pointer">ABOUT ME</h1></a>
                            <a href="#Portfolio" onClick={closeMenu}><h1 className="text-lg text-white cursor-pointer">PORTFOLIO</h1></a>
                            <a href="#Contact" onClick={closeMenu}><h1 className="text-lg text-white cursor-pointer">CONTACT</h1></a>
                            <button
                                onClick={() => {
                                    setIsOpen(true);
                                    closeMenu();
                                }}
                                type="button"
                                className="text-xl font-bold py-3 px-6 sm:px-14 hover:bg-white text-white hover:text-orange-600 bg-orange-600 rounded-lg"
                            >
                                Hire me
                            </button>
                        </div>
                    </SheetContent>
                </Sheet>
            </nav>
        </header>
    );
}


