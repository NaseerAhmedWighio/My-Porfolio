// "use client";

// import * as React from "react";
// import { useEffect, useState, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { ArrowLeft, ArrowRight } from "lucide-react";

// // import { Card, CardContent } from "@/components/ui/card";
// // import {
// //   Carousel,
// //   CarouselContent,
// //   CarouselItem,
// //   CarouselNext,
// //   CarouselPrevious,
// // } from "@/components/ui/carousel";

// import { client } from "@/sanity/lib/client";

// interface Project {
//   _id?: string;
//   title: string;
//   slug: string;
//   link: string;
//   category: string;
//   imageUrl: string;
//   description?: string;
// }

// const query = `*[_type == "project"]{
//   _id,
//   title,
//   "slug": slug.current,
//   link,
//   category,
//   "imageUrl": image.asset->url,
//   description
// }`;

// export default function Portfolio() {

//   const [projects, setProjects] = useState<Project[]>([]);
//   const swiperRef = useRef<any>(null);
//   const [swiperInstance, setSwiperInstance] = useState<any>(null);
  

//   useEffect(() => {
//     const autoPlayInterval = setInterval(() => {
//       if (swiperRef.current && swiperRef.current.swiper) {
//         swiperRef.current.swiper.slideNext();
//       }
//     }, 5000); 

//     return () => clearInterval(autoPlayInterval);
//   }, [])

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const data = await client.fetch(query);
//         setProjects(data);
//       } catch (error) {
//         console.error("Error fetching projects:", error);
//       }
//     };
//     fetchProjects();
//   }, []);


//   useEffect(() => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       setSwiperInstance(swiperRef.current.swiper);
//     }
//   }, [projects]);

//   return (
//     <section id="Portfolio">
//       <div className="w-full h-auto bg-[#121212] px-10 py-12">
//         <div className="space-y-6 text-center">
//           <h1 className="text-3xl font-semibold text-white">Portfolio</h1>
//           <div className="flex flex-wrap justify-center gap-4 mt-2 overflow-x-auto">
//             {["All", "Website Design", "App Mobile", "App Desktop", "Branding"].map((category) => (
//               <button
//                 key={category}
//                 className="px-6 py-3 bg-[#1b1b1b] text-white hover:bg-orange-600 rounded-lg"
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="relative w-full max-w-8xl pt-5"> 
//           <div className="flex justify-between items-center w-full absolute top-1/2 -translate-y-1/2 z-10">
//             <button
//               className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition"
//               onClick={() => swiperInstance?.slidePrev()} // ✅ Working button
//             >
//               <ArrowLeft className="h-6 w-6 text-gray-700" />
//             </button>
//             <button
//               className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition"
//               onClick={() => swiperInstance?.slideNext()} // ✅ Working button
//             >
//               <ArrowRight className="h-6 w-6 text-gray-700" />
//             </button>
//           </div>

//       {/* Swiper Carousel */}
//       <Swiper
//         ref={swiperRef}
//         modules={[Navigation]}
//         spaceBetween={20}
//         loop
//         centeredSlides
//         slidesPerView="auto"
//         navigation={{
//           prevEl: ".custom-prev",
//           nextEl: ".custom-next",
//         }}
//         className="w-full"
//         onSwiper={(swiper) => {
//           swiper.on("slideChange", () => {
//             swiper.slides.forEach((slide, index) => {
//               if (index === swiper.activeIndex) {
//                 slide.style.transform = "scale(1)";
//                 slide.style.opacity = "1";
//                 slide.style.width = "70%"; // Active card will be bigger
//               } else {
//                 slide.style.transform = "scale(0.75)";
//                 slide.style.opacity = "0.3";
//                 slide.style.width = "40%"; // Side cards will be smaller
//               }
//             });
//           });
//         }}
//       >
//         {projects.map((project) => (
//           <SwiperSlide key={project.slug} className="!w-[65vw] md:!w-[50vw] lg:!w-[40vw] flex justify-center">
//             <div className="rounded-lg shadow-lg w-full max-w-[600px] transition-transform mx-auto">
//               <a href={project.link} target="_blank" rel="noopener noreferrer">
//                 <div className="w-full">
//                   <img
//                     src={project.imageUrl}
//                     alt={project.title}
//                     className="w-full h-[100px] md:h-[200px] lg:h-[300px] object-cover rounded-t-lg"
//                   />
//                 </div>
//                 <div className="flex justify-between bg-[#1b1b1b] rounded-b-lg text-white p-4">
//                   <h2 className="text-base md:text-lg font-semibold">{project.title}</h2>
//                   <p className="text-xs md:text-sm opacity-80">{project.category}</p>
//                 </div>
//               </a>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//       </div>
//     </section>
//   );
// }

































// import * as React from "react";
// import { useEffect, useState, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/autoplay";
// import { ArrowLeft, ArrowRight } from "lucide-react";

// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// import { client } from "@/sanity/lib/client";

// interface Project {
//   _id?: string;
//   title: string;
//   slug: string;
//   link: string;
//   category: string;
//   imageUrl: string;
//   description?: string;
// }

// const query = `*[_type == "project"]{
//   _id,
//   title,
//   "slug": slug.current,
//   link,
//   category,
//   "imageUrl": image.asset->url,
//   description
// }`;

// export default function Portfolio() {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const swiperRef = useRef<any>(null);
//   const [swiperInstance, setSwiperInstance] = useState<any>(null);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const data = await client.fetch(query);
//         setProjects(data);
//       } catch (error) {
//         console.error("Error fetching projects:", error);
//       }
//     };
//     fetchProjects();
//   }, []);

//   useEffect(() => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       setSwiperInstance(swiperRef.current.swiper);
//     }
//   }, [projects]);

//   return (
//     <section id="Portfolio">
//       <div className="w-full h-auto bg-[#121212] px-10 py-12">
//         <div className="space-y-6 text-center">
//           <h1 className="text-3xl font-semibold text-white">Portfolio</h1>
//           <div className="flex flex-wrap justify-center gap-4 mt-2 overflow-x-auto">
//             {["All", "Website Design", "App Mobile", "App Desktop", "Branding"].map((category) => (
//               <button
//                 key={category}
//                 className="px-6 py-3 bg-[#1b1b1b] text-white hover:bg-orange-600 rounded-lg"
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="relative w-full max-w-8xl pt-5">
//           <div className="flex justify-between items-center w-full px-8 absolute top-1/2 -translate-y-1/2 z-10">
//             <button
//               className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition"
//               onClick={() => swiperInstance?.slidePrev()}
//             >
//               <ArrowLeft className="h-6 w-6 text-gray-700" />
//             </button>
//             <button
//               className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition"
//               onClick={() => swiperInstance?.slideNext()}
//             >
//               <ArrowRight className="h-6 w-6 text-gray-700" />
//             </button>
//           </div>

//           <Swiper
//             ref={swiperRef}
//             modules={[Navigation, Autoplay]}
//             spaceBetween={20}
//             loop
//             centeredSlides
//             slidesPerView="auto"
//             autoplay={{
//               delay: 5000,
//               disableOnInteraction: false,
//             }}
//             navigation={{
//               prevEl: ".custom-prev",
//               nextEl: ".custom-next",
//             }}
//             className="w-full"
//             onSwiper={(swiper) => {
//               swiper.on("slideChange", () => {
//                 swiper.slides.forEach((slide, index) => {
//                   if (index === swiper.activeIndex) {
//                     slide.style.transform = "scale(1)";
//                     slide.style.opacity = "1";
//                     slide.style.width = "70%";
//                   } else {
//                     slide.style.transform = "scale(0.75)";
//                     slide.style.opacity = "0.3";
//                     slide.style.width = "40%";
//                   }
//                 });
//               });
//             }}
//           >
//             {projects.map((project) => (
//               <SwiperSlide key={project.slug} className="!w-[65vw] md:!w-[50vw] lg:!w-[40vw] flex justify-center">
//                 <div className="rounded-lg shadow-lg w-full max-w-[600px] transition-transform mx-auto">
//                   <a href={project.link} target="_blank" rel="noopener noreferrer">
//                     <div className="w-full">
//                       <img
//                         src={project.imageUrl}
//                         alt={project.title}
//                         className="w-full h-[100px] md:h-[300px] object-cover rounded-t-lg"
//                       />
//                     </div>
//                     <div className="flex justify-between bg-[#1b1b1b] rounded-b-lg text-white p-4">
//                       <h2 className="text-base md:text-lg font-semibold">{project.title}</h2>
//                       <p className="text-xs md:text-sm opacity-80">{project.category}</p>
//                     </div>
//                   </a>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// }

































import * as React from "react";
import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { client } from "@/sanity/lib/client";

interface Project {
  _id?: string;
  title: string;
  slug: string;
  link: string;
  category: string;
  imageUrl: string;
  description?: string;
}

const query = `*[_type == "project"]{
  _id,
  title,
  "slug": slug.current,
  link,
  category,
  "imageUrl": image.asset->url,
  description
}`;

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);
  const swiperRef = useRef<any>(null);
  const prevButtonRef = useRef<HTMLButtonElement | null>(null);
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await client.fetch(query);
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    if (swiperRef.current?.swiper) {
      const swiper = swiperRef.current.swiper;
      swiper.autoplay.start(); // ✅ Manually start autoplay
      swiper.slideTo(0, 0); // ✅ Ensure first slide is active

      // ✅ Attach navigation buttons
      if (prevButtonRef.current && nextButtonRef.current) {
        swiper.params.navigation.prevEl = prevButtonRef.current;
        swiper.params.navigation.nextEl = nextButtonRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }
    }
  }, [projects]);

  return (
    <section id="Portfolio">
      <div className="w-full h-auto bg-[#121212] px-10 py-12">
        <div className="space-y-6 text-center">
          <h1 className="text-3xl font-semibold text-white">Portfolio</h1>
          <div className="flex flex-wrap justify-center gap-4 mt-2 overflow-x-auto">
            {["All", "Website Design", "App Mobile", "App Desktop", "Branding"].map((category) => (
              <button key={category} className="px-6 py-3 bg-[#1b1b1b] text-white hover:bg-orange-600 rounded-lg">
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="relative w-full max-w-8xl pt-5">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center w-full px-8 absolute top-1/2 -translate-y-1/2 z-10">
            <button
              ref={prevButtonRef}
              className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition"
            >
              <ArrowLeft className="h-6 w-6 text-gray-700" />
            </button>
            <button
              ref={nextButtonRef}
              className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition"
            >
              <ArrowRight className="h-6 w-6 text-gray-700" />
            </button>
          </div>

          {/* Swiper Carousel */}
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            loop
            centeredSlides
            slidesPerView="auto"
            autoplay={{
              delay: 4000,
              disableOnInteraction: false, // ✅ Ensure autoplay continues after user interaction
            }}
            className="w-full"
            onSwiper={(swiper) => {
              swiper.on("slideChange", () => {
                swiper.slides.forEach((slide, index) => {
                  if (index === swiper.activeIndex) {
                    slide.style.transform = "scale(1)";
                    slide.style.opacity = "1";
                    slide.style.width = "70%";
                  } else {
                    slide.style.transform = "scale(0.75)";
                    slide.style.opacity = "0.3";
                    slide.style.width = "40%";
                  }
                });
              });
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.slug} className="!w-[65vw] md:!w-[50vw] lg:!w-[40vw] flex justify-center hover:scale-105">
                <div className="rounded-lg shadow-lg w-full max-w-[600px] transition-transform mx-auto">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <div className="w-full">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-[100px] md:h-[200px] lg:h-[300px] object-cover rounded-t-lg"
                      />
                    </div>
                    <div className="flex justify-between bg-[#1b1b1b] rounded-b-lg text-white p-4">
                      <h2 className="text-base md:text-lg font-semibold">{project.title}</h2>
                      <p className="text-xs md:text-sm opacity-80">{project.category}</p>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
