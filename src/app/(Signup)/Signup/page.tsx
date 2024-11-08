// "use client"
// import bg3 from "@/app/Public/bg3.jpg"
// import Link from "next/link"

// const Signup = () => {
//     return (
//         <main>
//             <div className="flex items-center justify-center w-full h-screen" style={{ backgroundImage: `url(${bg3.src})`, backgroundSize: 'cover' }}>
//                 <div className="flex list-items justify-center -space-x-[450px] gap-y-9 h-[600px] w-[550px] absolute scale-60 md:scale-95 lg:scale-100">
//                     <div className="flex items-start justify-center font-lato absolute ">
//                         <div className="bg-slate-300 h-[550px] w-[450px] rounded-xl mb-28">
//                             <div className="list-inside mt-8">
//                                 <h1 className="flex items-start justify-center mt-10 text-2xl font-extrabold text-gray-700">Create a Account</h1>
//                                 <div className="list-inside justify-center ml-28 mt-10 space-y-4">
//                                     <div id="FirstName">
//                                         <label htmlFor="first name" className="flex items-start text-gray-700 font-bold">First Name</label>
//                                         <input
//                                             type="text"
//                                             id="First Name"
//                                             name="First Name"
//                                             placeholder="Enter Your First Name"
//                                             className="w-96 p-3 bg-white text-black font-bold rounded-lg" />
//                                     </div>
//                                     <div id="LastName">
//                                         <label htmlFor="Last name" className="flex items-start text-gray-700 font-bold">Last Name</label>
//                                         <input
//                                             type="text"
//                                             id="Last Name"
//                                             name="last Name"
//                                             placeholder="Enter Your Last Name"
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
//                                     <div id="Number">
//                                         <label htmlFor="Number" className="flex items-start text-gray-700 font-bold">Number</label>
//                                         <input
//                                             type="number"
//                                             id="Number"
//                                             name="Number"
//                                             placeholder="Enter Your Number"
//                                             className="w-96 p-3 bg-white text-black font-bold rounded-lg" />
//                                     </div>
//                                     <div id="Password">
//                                         <label htmlFor="Password" className="flex items-start text-gray-700 font-bold">Password</label>
//                                         <input
//                                             type="Password"
//                                             id="Password"
//                                             name="Password"
//                                             placeholder="Create a New Password"
//                                             className="w-96 p-3 bg-white text-black font-bold rounded-lg" />
//                                     </div>
//                                     <div id="RePassword">
//                                         <label htmlFor="Number" className="flex items-start text-gray-700 font-bold">Password</label>
//                                         <input
//                                             type="Password"
//                                             id="RePassword"
//                                             name="RePassword"
//                                             placeholder="Re enter Your Password"
//                                             className="w-96 p-3 bg-white text-black font-bold rounded-lg" />
//                                     </div>
//                                     <button type="button" className="bg-blue-700 py-4 px-6 font-bold text-xl hover:bg-white hover:text-blue-700 rounded-lg ml-32">Sign Up</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <Link href="../Login/" className="flex items-end justify-center"><button className=" bg-blue-700 py-4 w-[452px] rounded-xl text-2xl font-bold hover:bg-white hover:text-blue-700 absolute left-[50px] top-[560px]">Log In</button></Link>
//                 </div>
//             </div>
//         </main>
//     )
// }

// export default Signup





"use client"
import bg3 from "@/app/Public/bg3.jpg"
import Link from "next/link"

const Signup = () => {
    return (
        <main>
            <div className="flex items-center justify-center w-full min-h-screen" style={{ backgroundImage: `url(${bg3.src})`, backgroundSize: 'cover' }}>
                <div className="flex flex-col items-center justify-center w-full mt-5 max-w-md p-6 bg-slate-300 rounded-xl shadow-lg space-y-6">
                    <h1 className="text-2xl font-extrabold text-gray-700 text-center">Create an Account</h1>
                    <form className="space-y-4 w-full">
                        <div className="flex flex-col">
                            <label htmlFor="FirstName" className="text-gray-700 font-bold">First Name</label>
                            <input
                                type="text"
                                id="FirstName"
                                name="FirstName"
                                placeholder="Enter Your First Name"
                                className="w-full p-3 bg-white text-black font-bold rounded-lg"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="LastName" className="text-gray-700 font-bold">Last Name</label>
                            <input
                                type="text"
                                id="LastName"
                                name="LastName"
                                placeholder="Enter Your Last Name"
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
                            <label htmlFor="Number" className="text-gray-700 font-bold">Number</label>
                            <input
                                type="number"
                                id="Number"
                                name="Number"
                                placeholder="Enter Your Number"
                                className="w-full p-3 bg-white text-black font-bold rounded-lg"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="Password" className="text-gray-700 font-bold">Password</label>
                            <input
                                type="password"
                                id="Password"
                                name="Password"
                                placeholder="Create a New Password"
                                className="w-full p-3 bg-white text-black font-bold rounded-lg"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="RePassword" className="text-gray-700 font-bold">Confirm Password</label>
                            <input
                                type="password"
                                id="RePassword"
                                name="RePassword"
                                placeholder="Re-enter Your Password"
                                className="w-full p-3 bg-white text-black font-bold rounded-lg"
                            />
                        </div>
                        <button
                            type="button"
                            className="w-full bg-blue-700 py-3 font-bold text-2xl text-white hover:bg-white hover:text-blue-700 rounded-lg transition-colors"
                        >
                            Sign Up
                        </button>
                    </form>
                    <div className="h-[0.5px] w-full bg-black opacity-50"></div>
                    <Link href="../Login/">
                        <h2 className="block w-full text-center bg-blue-700 py-3 px-40 text-2xl font-bold text-white hover:bg-white hover:text-blue-700 rounded-lg transition-colors mt-4">
                            Log In
                        </h2>
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default Signup