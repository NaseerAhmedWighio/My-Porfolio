"use client"
import { useState } from 'react';
import Link from "next/link";
import { FiMenu } from "react-icons/fi"; // Importing a menu icon from react-icons

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle the menu
    }

    return (
        <header className='relative'>
            <nav className="w-full bg-[#121212]">
                <div className="flex items-center justify-between px-6 py-6 lg:px-10">
                    {/* Logo */}
                    <div>
                        <Link href="/"><h1 className="text-3xl font-bold text-orange-600">NASEER</h1></Link>
                    </div>

                    {/* Hamburger Menu Icon for Small Screens */}
                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className="text-3xl text-orange-600">
                            <FiMenu />
                        </button>
                    </div>

                    {/* Navigation Links (visible on large screens) */}
                    <div className="hidden lg:flex gap-12 text-right text-white">
                        <Link href="/"><h1 className="text-2xl lg:text-xl text-orange-600 hover:text-white">HOME</h1></Link>
                        <h1 className="text-2xl lg:text-xl hover:text-orange-600 cursor-pointer">SERVICES</h1>
                        <h1 className="text-2xl lg:text-xl hover:text-orange-600 cursor-pointer">ABOUT ME</h1>
                        <h1 className="text-2xl lg:text-xl hover:text-orange-600 cursor-pointer">PORTFOLIO</h1>
                        <h1 className="text-2xl lg:text-xl hover:text-orange-600 cursor-pointer">CONTACT</h1>
                    </div>

                    {/* Buttons (visible on large screens) */}
                    <div className="hidden lg:flex gap-4">
                        <Link href="/Signup">
                            <button type="button" className="text-center text-xl text-white font-bold py-3 px-6 hover:bg-white hover:text-orange-600 bg-orange-600 rounded-lg">
                                Sign Up
                            </button>
                        </Link>
                        <Link href="/Login">
                            <button type="button" className="text-center text-xl text-white font-bold py-[7px] px-6 hover:bg-orange-600 hover:text-white border-2 border-orange-600 rounded-lg">
                                Log In
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu (visible when menuOpen is true) */}
                {menuOpen && (
                    <div className="absolute right-0 top-full text-white w-32 lg:hidden flex flex-col items-right mr-7 gap-3 text-right py-2">
                        <Link href="/"><h1 className="text-xl text-orange-600 hover:text-white">Home</h1></Link>
                        <h1 className="text-lg hover:text-orange-600 cursor-pointer">SERVICES</h1>
                        <h1 className="text-lg hover:text-orange-600 cursor-pointer">ABOUT ME</h1>
                        <h1 className="text-lg hover:text-orange-600 cursor-pointer">PORTFOLIO</h1>
                        <h1 className="text-lg hover:text-orange-600 cursor-pointer">CONTACT</h1>

                        <Link href="/Signup">
                            <button type="button" className="text-center text-xl font-bold py-3 px-6 text-white hover:bg-white hover:text-orange-600 bg-orange-600 rounded-lg">
                                Sign Up
                            </button>
                        </Link>
                        <Link href="/Login">
                            <button type="button" className="text-center text-xl font-bold py-2 text-white px-[22px] hover:bg-orange-600 hover:text-white border-2 border-orange-600 rounded-lg">
                                Log In
                            </button>
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    );
}

