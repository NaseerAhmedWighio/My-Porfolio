// "use client"
// import Link from "next/link"
// // import Image from "next/image"
// import bg3 from "@/app/Public/bg3.jpg"

// export default function Login() {
//     return (
//         <main>
//             <div className="flex items-center justify-center w-full h-screen" style={{ backgroundImage: `url(${bg3.src})`, backgroundSize: 'cover' }}>
//                 <div className="flex list-items justify-center -space-x-[450px] gap-y-9 h-[600px] w-[550px] absolute">
//                     <div className="flex items-start justify-center absolute">
//                         <div className="bg-slate-300 h-[550px] w-[450px] rounded-xl mb-28">
//                             <div className="list-inside mt-8">
//                                 <h1 className="flex items-start justify-center mt-10 text-2xl font-extrabold text-gray-700">Log In Your Account</h1>
//                                 <div className="list-inside justify-center ml-28 mt-10 space-y-4">
//                                     <div id="FullName">
//                                         <label htmlFor="full name" className="flex items-start text-gray-700 font-bold">Full Name</label>
//                                         <input
//                                             type="text"
//                                             id="Full Name"
//                                             name="Full Name"
//                                             placeholder="Enter Your Full Name"
//                                             className="w-96 p-3 bg-white text-black font-bold rounded-lg" />
//                                     </div>
//                                     <div id="Email">
//                                         <label htmlFor="Email" className="flex items-start text-gray-700 font-bold">Email</label>
//                                         <input
//                                             type="text"
//                                             id="Email"
//                                             name="Email"
//                                             placeholder="Enter Your Email"
//                                             className="w-96 p-3 bg-white text-black font-bold rounded-lg" />
//                                     </div>
//                                     <div id="Password">
//                                         <label htmlFor="Password" className="flex items-start text-gray-700 font-bold">Password</label>
//                                         <input
//                                             type="Password"
//                                             id="Password"
//                                             name="Password"
//                                             placeholder="Enter Your Password"
//                                             className="w-96 p-3 bg-white text-black font-bold rounded-lg" />
//                                     </div>
//                                     <button type="button" className="bg-blue-700 py-4 px-6 font-bold text-xl hover:bg-white hover:text-blue-700 rounded-lg ml-36" >Log In</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <Link href="../Signup/" className="flex items-end justify-center"><button className=" bg-blue-700 py-4 px-64 hover:bg-white hover:text-blue-700 rounded-xl text-2xl font-bold absolute left-[50px] top-[560px]">Sign Up</button></Link>
//                 </div>
//             </div>
//         </main>
//     )
// }




"use client"
import Link from "next/link"
// import Image from "next/image"
import bg3 from "@/app/Public/bg3.jpg"

export default function Login() {
    return (
        <main>
            <div className="flex items-center justify-center w-full min-h-screen" style={{ backgroundImage: `url(${bg3.src})`, backgroundSize: 'cover' }}>
                <div className="flex flex-col items-center justify-center space-y-6 h-auto w-full px-36 max-w-md p-6 bg-slate-300 rounded-xl shadow-lg">
                    <h1 className="text-2xl font-extrabold text-gray-700 text-center mt-5">Log In Your Account</h1>
                    <form className="space-y-5 w-full">
                        <div className="flex flex-col">
                            <label htmlFor="FullName" className="text-gray-700 font-bold">Full Name</label>
                            <input
                                type="text"
                                id="FullName"
                                name="FullName"
                                placeholder="Enter Your Full Name"
                                className="w-full p-3 bg-white text-black font-bold rounded-lg"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="Email" className="text-gray-700 font-bold">Email</label>
                            <input
                                type="email"
                                id="Email"
                                name="Email"
                                placeholder="Enter Your Email"
                                className="w-full p-3 bg-white text-black font-bold rounded-lg"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="Password" className="text-gray-700 font-bold">Password</label>
                            <input
                                type="password"
                                id="Password"
                                name="Password"
                                placeholder="Enter Your Password"
                                className="w-full p-3 bg-white text-black font-bold rounded-lg"
                            />
                        </div>
                        <button
                            type="button"
                            className="w-full bg-blue-700 py-3 font-bold text-2xl text-white hover:bg-white hover:text-blue-700 rounded-lg transition-colors"
                        >
                            Log In
                        </button>
                    </form>
                    <div className="h-[0.5px] w-full bg-black opacity-50"></div>
                    <Link href="../Signup/">
                        <h2 className="block w-full text-center bg-blue-700 py-3 px-[115px] mb-5 mt-10 text-2xl font-bold text-white hover:bg-white hover:text-blue-700 rounded-lg transition-colors">
                            Sign Up
                        </h2>
                    </Link>
                    
                </div>
            </div>
        </main>
    )
}