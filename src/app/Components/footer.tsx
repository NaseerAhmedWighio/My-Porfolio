"use client";
import { PiFacebookLogoBold } from "react-icons/pi";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiOutlineDiscord, AiOutlineMail } from "react-icons/ai";
import { MdOutlineCall, MdOutlineLocationOn } from "react-icons/md";

export default function Footer() {
    return (
        <main className="flex justify-center">
            <footer className="w-full bg-[#121212] text-white">
                <div id="parent" className="py-12 ml-10 mr-10 justify-center">
                    <div id="columns" className= " grid grid-cols-1 sm:grid-cols-2 md:ml-24 md:mr-24  xl:-ml-0 xl:-mr-0 lg:grid-cols-4 gap-48 place-items-center"> 
                        
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
                            <label htmlFor="name" className="text-white font-bold">
                                Your Email
                            </label>
                            <div className="flex justify-center lg:justify-start gap-5 mt-2">
                                <input
                                    type="text"
                                    id="email"
                                    name="Email"
                                    placeholder="Enter Your Email"
                                    className="w-56 p-3 bg-white text-black font-bold rounded-lg focus:ring focus:ring-orange-600"
                                />
                                <button
                                    type="submit"
                                    className="w-24 text-white font-semibold py-3 bg-orange-600 hover:bg-white hover:text-orange-600 rounded-lg"
                                >
                                    Submit
                                </button>
                            </div>
                            <div className="flex justify-center gap-10 mt-4">
                                <a href="https://www.linkedin.com/company/naseer-studio/" target="_blank">
                                    <TiSocialLinkedinCircular className="w-12 h-12 scale-110 hover:scale-150 fill-orange-600" />
                                </a>
                                <a href="https://discord.com/" target="_blank">
                                    <AiOutlineDiscord className="w-12 h-12 fill-orange-600 hover:scale-150" />
                                </a>
                                <a href="https://www.facebook.com/naseer.ahmed.3993" target="_blank">
                                    <PiFacebookLogoBold className="w-12 h-12 fill-orange-600 hover:scale-150" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-[0.5px] bg-orange-600 mt-6"></div>
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-between items-center text-lg mt-3 space-y-2 sm:space-y-0">
                        <a className="flex items-center gap-2">
                            <h4 className="scale-150 text-orange-600">©</h4>
                            <h4>Copyright Naseer Studio</h4>
                        </a>
                        <a className="flex items-center gap-2">
                            <MdOutlineLocationOn className="scale-150 fill-orange-600" />
                            <h4>Sector-S, Gulshan E Maymaar, Karachi.</h4>
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
