
export default function Portfolio() {
    return (
        <section id="Portfolio">
            <div className="w-full h-auto bg-[#121212] px-4 py-20">
                <div className="space-y-6 text-center">
                    <h1 className="text-3xl font-semibold text-white">Portfolio</h1>
                    <div className="flex flex-nowrap justify-center gap-4 overflow-x-auto">
                        <button className="px-6 py-3 bg-[#1b1b1b] hover:bg-orange-600 rounded-lg">All</button>
                        <button className="px-6 py-3 bg-[#1b1b1b] hover:bg-orange-600 rounded-lg">Website Design</button>
                        <button className="px-6 py-3 bg-[#1b1b1b] hover:bg-orange-600 rounded-lg">App Mobile Design</button>
                        <button className="px-6 py-3 bg-[#1b1b1b] hover:bg-orange-600 rounded-lg">App Desktop</button>
                        <button className="px-6 py-3 bg-[#1b1b1b] hover:bg-orange-600 rounded-lg">Braiding</button>
                    </div>

                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-28 mt-24 mx-auto max-w-7xl place-items-center">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="w-full max-w-sm h-[400px] bg-[#181717] rounded-t-3xl rounded-b-lg">
                            <div className="w-full h-14 bg-[#1b1b1b] rounded-b-lg flex items-center justify-between px-4 py-9 mt-[350px]">
                                <h6 className="text-white text-opacity-70">Name Project</h6>
                                <h6 className="text-white text-opacity-70">Categories</h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
