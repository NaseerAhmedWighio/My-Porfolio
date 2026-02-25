// import { client } from "@/sanity/lib/client";
// import { useEffect, useState } from "react";

// export default function GigPackages() {
//   const [gig, setGig] = useState(null);

//   useEffect(() => {
//     const fetchGig = async () => {
//       const data = await client.fetch(`*[_type == "gig"][0]`);
//       setGig(data);
//     };
//     fetchGig();
//   }, []);

//   if (!gig) return <div>Loading...</div>;

//   const { packages } = gig;
//   const tiers = ["basic", "standard", "premium"];

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">
//       <h2 className="text-3xl font-bold text-center mb-10">{gig.title}</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {tiers.map((tier) => {
//           const pkg = packages[tier];
//           const isMiddle = tier === "standard";
//           return (
//             <div
//               key={tier}
//               className={`rounded-2xl p-6 border shadow-lg text-center ${
//                 isMiddle
//                   ? "scale-105 bg-gray-100 border-green-500"
//                   : "bg-white"
//               }`}
//             >
//               <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
//               <p className="text-gray-600 mb-4">{pkg.description}</p>
//               <div className="text-4xl font-bold mb-2">${pkg.price}</div>
//               <p className="text-sm text-gray-500 mb-1">
//                 Delivery: {pkg.deliveryTime}
//               </p>
//               <p className="text-sm text-gray-500 mb-4">
//                 Revisions: {pkg.revisions}
//               </p>
//               <a
//                 href={gig.fiverrUrl}
//                 target="_blank"
//                 className="inline-block mt-4 bg-green-500 text-white px-5 py-2 rounded-full hover:bg-green-600 transition"
//               >
//                 Order on Fiverr
//               </a>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }














"use client"
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { Check, X } from "lucide-react";

// 🟢 Type definitions
interface Feature {
    label: string;
    enabled: boolean;
}

interface GigPackage {
    name: string;
    description: string;
    price: number;
    deliveryTime: string;
    revisions: number;
    features: Feature[];
}

interface Gig {
    title: string;
    fiverrUrl: string;
    packages: {
        basic: GigPackage;
        standard: GigPackage;
        premium: GigPackage;
    };
}

export default function GigPackages() {
    const [gig, setGig] = useState<Gig | null>(null);

    useEffect(() => {
        const fetchGig = async () => {
            const query = `
  *[_type == "gig"][0]{
    title,
    fiverrUrl,
    packages {
      basic {
        name,
        description,
        price,
        deliveryTime,
        revisions,
        features[]{label, enabled}
      },
      standard {
        name,
        description,
        price,
        deliveryTime,
        revisions,
        features[]{label, enabled}
      },
      premium {
        name,
        description,
        price,
        deliveryTime,
        revisions,
        features[]{label, enabled}
      }
    }
  }
`;
            const data: Gig = await client.fetch(query);
            setGig(data);
        };
        fetchGig();
    }, []);

    if (!gig) return <div className="flex justify-center items-center bg-[#121212]">Loading...</div>;

    const { packages } = gig;
    const tiers: ("basic" | "premium" | "standard")[] = ["basic", "premium", "standard"];

    const tierStyles = {
        basic: {
            headerColor: "bg-blue-600",
            buttonColor: "bg-blue-600",
            textColor: "text-blue-600",
        },
        premium: {
            headerColor: "bg-orange-600",
            buttonColor: "bg-orange-600",
            textColor: "text-orange-600",
        },
        standard: {
            headerColor: "bg-slate-700",
            buttonColor: "bg-slate-700",
            textColor: "text-slate-700",
            scale: "scale-105 z-10",
        },
    };

    return (
        <div className="max-w-full mx-auto px-4 py-10 bg-[#121212]">
            <h2 className="text-3xl font-bold text-center mb-10">{gig.title}</h2>
            <div className="flex flex-col md:flex-row justify-center md:items-stretch items-center gap-6 md:scale-75 lg:scale-100">

                {tiers.map((tier) => {
                    const pkg = packages[tier];
                    const style = tierStyles[tier];
                    const features = pkg.features;
                    return (
                        <div
                            key={tier}
                            className={`flex flex-col justify-between items-center rounded-2xl shadow-xl pb-5 bg-gradient-to-t from-[#c39551f1] to-[#e4e8fc] transition-all duration-300 hover:scale-110 ${
                                tier === "premium" ? "md:scale-105 md:w-80 z-10" : "w-72"
                              }`}
                        >
                        
                            <div
                                className={`w-full text-center py-5 text-white text-lg font-semibold rounded-t-xl ${style.headerColor}`}
                            >
                                {pkg.name}
                            </div>
                            <div className="text-center">
                            <div className={`text-4xl font-bold mt-4 ${style.textColor}`}>${pkg.price}</div>
                            <p className="text-gray-600 mt-2">{`Duration ${pkg.deliveryTime}`}</p>
                            </div>
                            <ul className="w-full space-y-3 my-6">
                                {features.map((feat, i) => (
                                    <li
                                        key={i}
                                        className={`flex items-center justify-start space-x-2 px-12 whitespace-nowrap ${feat.enabled ? "text-green-600" : "text-red-500"
                                            }`}
                                    >
                                        {feat.enabled ? <Check size={18} /> : <X size={18} />}
                                        <span className="text-sm text-gray-700">{feat.label}</span>
                                    </li>
                                ))}
                            </ul>
                            <a
                                href={gig.fiverrUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${style.buttonColor} text-white px-6 py-2 rounded-full hover:opacity-90 transition`}
                            >
                                Select
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
