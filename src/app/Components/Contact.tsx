export default function Contact() {
    return (
        <section id="Contact">
            <div className="w-full h-auto bg-[#121212] px-4 py-10">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h1 className="text-3xl font-semibold text-white">Contact me</h1>
                    <p className="font-thin opacity-50 text-white mx-2">
                        Cultivating Connections: Reach Out and Connect with Me
                    </p>
                </div>
                <form action="https://api.web3forms.com/submit" method="POST">
                    <input type="hidden" name="access_key" value="1b097782-f44e-4bf2-b4c5-d733b8b6284a" />

                    <div className="mt-16 space-y-8 max-w-7xl mx-auto">
                        <div className="flex flex-wrap justify-center gap-6">
                            <input
                                className="w-full sm:w-[48%] px-4 py-3 bg-[#1b1b1b] rounded-lg text-white"
                                type="text"
                                name="name"
                                placeholder="Name"
                                required
                            />
                            <input
                                className="w-full sm:w-[48%] px-4 py-3 bg-[#1b1b1b] rounded-lg text-white"
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                            />
                        </div>

                        <div className="flex flex-wrap justify-center gap-6">
                            <input
                                className="w-full sm:w-[48%] px-4 py-3 bg-[#1b1b1b] rounded-lg text-white"
                                type="number"
                                name="phone"
                                placeholder="Phone Number"
                            />
                            <input
                                className="w-full sm:w-[48%] px-4 py-3 bg-[#1b1b1b] rounded-lg text-white"
                                type="text"
                                name="service interest"
                                placeholder="Service Of Interest"
                            />
                        </div>

                        <div className="flex flex-wrap justify-center gap-6">
                            <div className="flex justify-center w-full sm:w-[48%]">
                                <input
                                    className="w-full px-4 py-3 h-12 bg-[#1b1b1b] rounded-lg text-white"
                                    type="text"
                                    name="timeline"
                                    placeholder="Timeline"
                                    // style="height: 40px;"
                                />
                            </div>
                            <div className="flex justify-center w-full sm:w-[48%]">
                                <textarea
                                    className="w-full px-4 py-3 bg-[#1b1b1b] rounded-lg text-white h-40 resize-none"
                                    name="project details"
                                    placeholder="Project details..."
                                ></textarea>
                            </div>
                            <input type="hidden" name="from_name" value="Review"></input>
                        </div>
                    </div>
                    <div className="flex justify-center mt-8">
                    <button type="submit" className="px-10 py-2 border-2 border-white hover:bg-white hover:text-black text-lg text-white rounded-lg">
                        Send
                    </button>
                    </div>
                </form>
            </div>
        </section>
    );
}