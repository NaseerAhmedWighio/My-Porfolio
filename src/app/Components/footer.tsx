"use client";
import { useState, FormEvent } from "react";
import { PiFacebookLogoBold } from "react-icons/pi";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiOutlineDiscord, AiOutlineMail } from "react-icons/ai";
import { MdOutlineCall, MdOutlineLocationOn } from "react-icons/md";
import { IoTriangleOutline } from "react-icons/io5"

export default function Footer() {
    const [newsletterEmail, setNewsletterEmail] = useState("");
    const [newsletterError, setNewsletterError] = useState("");
    const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false);

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleNewsletterSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!newsletterEmail.trim()) {
            setNewsletterError("Email is required");
            return;
        }
        
        if (!validateEmail(newsletterEmail)) {
            setNewsletterError("Please enter a valid email address");
            return;
        }

        setNewsletterError("");
        setIsNewsletterSubmitting(true);

        const form = e.currentTarget;
        const formDataObj = new FormData(form);
        
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataObj
            });

            if (response.ok) {
                setNewsletterEmail("");
                alert("Successfully subscribed to newsletter!");
            } else {
                alert("Failed to subscribe. Please try again.");
            }
        } catch {
            alert("An error occurred. Please try again.");
        } finally {
            setIsNewsletterSubmitting(false);
        }
    };

    return (
        <main className="flex justify-center">
            <footer className="w-full bg-[#121212] text-white">
                <div id="parent" className="py-12 mx-10 justify-center">
                    <div id="columns" className="grid grid-cols-1 sm:grid-cols-2 md:mx-28 lg:mx-28 xl:mx-10 lg:grid-cols-4 gap-10 md:gap-20 lg:gap-48 place-items-center">

                        {/* Column 1 */}
                        <div className="space-y-4 text-center lg:text-left min-w-[250px] max-w-[300px]">
                            <h2 className="text-xl text-orange-600 cursor-pointer">My Portfolio</h2>
                            <p>
                                OurStudio is a digital agency <br />
                                UI / UX Design and Website <br />
                                Yousuf Sahib Khan Goth, <br />
                                Gulshan E Maymaar, Karachi
                            </p>
                            <p>Copyrights Naseer Studio</p>
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-2 text-center lg:text-left min-w-[250px] max-w-[300px]">
                            <h2 className="text-xl text-orange-600 cursor-pointer">Services</h2>
                            <p>Illustration</p>
                            <p>Mobile Design</p>
                            <p>Motion Graphics</p>
                            <p>Web Design</p>
                            <p>Development</p>
                            <p>SEO</p>
                        </div>

                        {/* Column 3 */}
                        <div className="space-y-2 text-center lg:text-left min-w-[250px] max-w-[300px]">
                            <h2 className="text-xl text-orange-600 cursor-pointer">Company</h2>
                            <p>Service</p>
                            <p>Feature</p>
                            <p>Our Team</p>
                            <p>Portfolio</p>
                            <p>Blog</p>
                            <p>Contact Us</p>
                        </div>

                        {/* Column 4 */}
                        <div className="text-center lg:text-left min-w-[250px] max-w-[300px]">
                            <h2 className="text-xl text-orange-600 cursor-pointer">Join a Newsletter</h2>
                            <label htmlFor="email" className="text-white font-bold">
                                Your Email
                            </label>
                            <form onSubmit={handleNewsletterSubmit} className="mt-2">
                                <input type="hidden" name="access_key" value="1b097782-f44e-4bf2-b4c5-d733b8b6284a" />
                                <div className="flex justify-center lg:justify-start gap-3">
                                    <div className="relative">
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Enter Your Email"
                                            value={newsletterEmail}
                                            onChange={(e) => setNewsletterEmail(e.target.value)}
                                            className={`w-48 h-11 p-3 text-[14px] bg-white text-black font-bold rounded-lg focus:ring focus:ring-orange-600 ${newsletterError ? 'ring-2 ring-red-500' : ''}`}
                                        />
                                        {newsletterError && (
                                            <p className="absolute -bottom-5 left-0 text-red-500 text-xs whitespace-nowrap">
                                                {newsletterError}
                                            </p>
                                        )}
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isNewsletterSubmitting}
                                        className="w-16 h-11 text-[14px] text-white font-semibold py-3 bg-orange-600 hover:bg-white hover:text-orange-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isNewsletterSubmitting ? "..." : "Submit"}
                                    </button>
                                </div>
                            </form>
                            <div className="flex justify-center gap-6 mt-4">
                                <a href="https://www.linkedin.com/in/naseerahmedwighio/" target="_blank">
                                    <TiSocialLinkedinCircular className="w-12 h-12 scale-110 hover:scale-125 fill-orange-600" />
                                </a>
                                <a href="https://discord.com/" target="_blank">
                                    <AiOutlineDiscord className="w-12 h-12 fill-orange-600 hover:scale-125" />
                                </a>
                                <a href="https://www.facebook.com/naseer.ahmed.3993" target="_blank">
                                    <PiFacebookLogoBold className="w-12 h-12 fill-orange-600 hover:scale-125" />
                                </a>
                                <a href="https://vercel.com/naseerahmedwighios-projects">
                                    <IoTriangleOutline
                                        title="Instagram"
                                        className="w-12 h-12 text-orange-600 hover:scale-125"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-[0.5px] bg-orange-600 mt-6" />
                    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center text-base md:text-lg mt-3 space-y-2 md:space-y-0">

                            <div className="flex flex-col lg:hidden items-center md:items-start space-y-2">
                                <a className="flex items-center md:items-start gap-2">
                                    <h4 className="scale-150 md:px-[5px] text-orange-600">©</h4>
                                    <h4>Copyright Naseer Studio</h4>
                                </a>

                                <a className="flex items-center gap-2">
                                    <MdOutlineLocationOn className="h-9 w-8 md:h-7 md:w-7 fill-orange-600" />
                                    <h4 className="text-center">Sector-S, Gulshan E Maymaar, Karachi.</h4>
                                </a>
                            </div>
                            <div className="flex flex-col lg:hidden items-center md:items-end space-y-2">
                                <a className="flex items-center gap-2">
                                    <AiOutlineMail className="scale-150 fill-orange-600" />
                                    <h4>naseerahmedwighio@gmail.com</h4>
                                </a>

                                <a className="flex items-center gap-2">
                                    <MdOutlineCall className="scale-150 fill-orange-600" />
                                    <h4>+923 113867522</h4>
                                </a>
                            </div>
                    </div>



                    <div className="hidden lg:flex justify-between items-center md:text-base xl:text-lg mt-3 space-y-2 md:space-y-0">

                                <a className="flex items-center md:items-start gap-2">
                                    <h4 className="scale-150 md:px-[5px] text-orange-600">©</h4>
                                    <h4>Copyright Naseer Studio</h4>
                                </a>

                                <a className="flex items-center gap-2">
                                    <MdOutlineLocationOn className="h-9 w-8 md:h-7 md:w-7 fill-orange-600" />
                                    <h4 className="text-center">Sector-S, Gulshan E Maymaar, Karachi.</h4>
                                </a>

                                <a className="flex items-center gap-2">
                                    <AiOutlineMail className="scale-150 fill-orange-600" />
                                    <h4>naseerahmedwighio@gmail.com</h4>
                                </a>

                                <a className="flex items-center gap-2">
                                    <MdOutlineCall className="scale-150 fill-orange-600" />
                                    <h4>+923 113867522</h4>
                                </a>
                    </div>
                </div>
            </footer>
        </main>
    );
}
