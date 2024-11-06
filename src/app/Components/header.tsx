"use client";
import { useState } from 'react';
import { Menu } from "lucide-react";
import Link from "next/link";
import {
    Sheet,
    SheetContent,
} from "@/components/ui/sheet";
// const handleClick = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//         element.scrollIntoView({ behavior: 'smooth' });
//     }
// };

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle the menu
    }
    return (
        <header className='fixed top-0 w-full'>
            <nav className="w-full bg-[#121212]">
                <div className="flex items-center justify-between px-6 py-6 lg:px-10">
                    {/* Logo */}
                    <div>
                        <Link href="/"><h1 className="text-3xl font-bold text-orange-600">NASEER</h1></Link>
                    </div>

                    {/* Hamburger Menu Icon for Small Screens */}
                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className="text-3xl text-orange-600">
                            <Menu />
                        </button>
                    </div>

                    {/* Navigation Links (visible on large screens) */}
                    <div className="hidden lg:flex gap-12 text-right">
                        <Link href="/"><h1 className="text-2xl lg:text-xl text-orange-600 hover:text-white">HOME</h1></Link>
                        <a href='#Services' className="text-2xl lg:text-xl hover:text-orange-600 cursor-pointer">SERVICES</a>
                        <a href='#About' className="text-2xl lg:text-xl hover:text-orange-600 cursor-pointer">ABOUT ME</a>
                        <a href="#Portfolio" className="text-2xl lg:text-xl hover:text-orange-600 cursor-pointer">PORTFOLIO</a>
                        <a href="#Contact" className="text-2xl lg:text-xl hover:text-orange-600 cursor-pointer">CONTACT</a>
                    </div>

                    {/* Buttons (visible on large screens) */}
                    <div className="hidden lg:flex gap-4">
                        <Link href="../Signup/">
                            <button type="button" className="text-center text-xl font-bold py-3 px-6 hover:bg-white hover:text-orange-600 bg-orange-600 rounded-lg">
                                Sign Up
                            </button>
                        </Link>
                        <Link href="../Login/">
                            <button type="button" className="text-center text-xl font-bold py-[7px] px-6 hover:bg-orange-600 hover:text-white border-2 border-orange-600 rounded-lg">
                                Log In
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu with Sheet */}
                <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
                    <SheetContent>
                        <div className="flex flex-col items-right gap-8 text-center py-2">
                            <Link href="/" >
                            {/* // onClick={() => setMenuOpen(false)}> */}
                                <h1 className="text-xl text-orange-600 hover:text-white">Home</h1>
                            </Link>
                            <a href="#Services"><h1 className="text-lg hover:text-orange-600 cursor-pointer">SERVICES</h1></a>
                            <a href="#About"><h1 className="text-lg hover:text-orange-600 cursor-pointer">ABOUT ME</h1></a>
                            <a href="#Portfolio"><h1 className="text-lg hover:text-orange-600 cursor-pointer">PORTFOLIO</h1></a>
                            <a href="#Contact"><h1 className="text-lg hover:text-orange-600 cursor-pointer">CONTACT</h1></a>
                            <Link href="../Signup/" onClick={() => setMenuOpen(false)}>
                                <button type="button" className="text-center text-xl font-bold py-3 px-6 hover:bg-white hover:text-orange-600 bg-orange-600 rounded-lg">
                                    Sign Up
                                </button>
                            </Link>
                            <Link href="../Login/" onClick={() => setMenuOpen(false)}>
                                <button type="button" className="text-center text-xl font-bold py-2 px-[22px] hover:bg-orange-600 hover:text-white border-2 border-orange-600 rounded-lg">
                                    Log In
                                </button>
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>
            </nav>
        </header>
    );
}


