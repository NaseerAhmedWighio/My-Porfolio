
import Image from "next/image";
import user from "../Public/user.svg";
import React from 'react';

export default function Services() {


    const servicesData = [
        {
            id: 1,
            name: 'Web Development',
            image: user,
            description: 'I am working on Front-end and Back-end developements to be a succesfull Full-stack Developer ',
        },
        {
            id: 2,
            name: 'Mobile App Development',
            image: user,
            description: 'I am waiting for go in next quarter to learn Python as soon as possible',
        },
        {
            id: 3,
            name: 'Graphics Designing',
            image: user,
            description: 'All courses of Grphics Designing like Adobe Photoshop, Adobe Illustrator, Figma and Canva.',
        },
        {
            id: 4,
            name: 'UI Designing',
            image: user,
            description: 'UI means User Interface which show to user it works for Front-End it can make with HTML, CSS, TailwindCSS, TypeScript, JavaScript and C#.',
        },
        {
            id: 5,
            name: 'UX Designing',
            image: user,
            description: 'UX means User Experience which work for Back-End with the help of Python, PHP and more.',
        },
        {
            id: 6,
            name: 'SEO',
            image: user,
            description: 'SEO means Serch Engin Optimization it is very helpful for your website to grow in search at top rank',
        },
        // Add more services here
    ];

    return (
        <section id="Services">
            <div className="w-full h-auto bg-[#121212]">
                <div className="space-y-4 text-center">
                    <h1 className="text-3xl font-semibold text-white">Services</h1>
                    <p className="font-thin opacity-50 text-white">
                        We providing more services like Web Development, Graphics Designing, UI and UX Designing, Mobile Application and SEO.
                    </p>
                </div>
                {/* ... other sections ... */}
                <div className="grid gap-y-16 gap-x-8 mx-auto py-14 px-10 mt-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
                    {servicesData.map((service) => (
                        <div key={service.id} className="w-[90%] max-w-[440px] h-96 bg-[#1b1b1b] text-center rounded-xl flex flex-col justify-center items-center">
                            <div className="space-y- text-center">
                                <div className="flex justify-center">
                                    <Image src={service.image} className="h-16 w-16" alt="logo" />
                                </div>
                                <h2 className="text-[#FD6F00] py-10 font-semibold text-2xl">{service.name}</h2>
                            </div>
                            <div className="opacity-50 px-4 text-center">
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}