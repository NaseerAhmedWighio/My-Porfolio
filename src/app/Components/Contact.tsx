"use client";
import { useState, FormEvent } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        timeline: "",
        projectDetails: ""
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = (): boolean => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!validateEmail(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^\d+$/.test(formData.phone)) {
            newErrors.phone = "Phone number must contain only digits";
        }

        if (!formData.service.trim()) {
            newErrors.service = "Service of interest is required";
        }

        if (!formData.timeline.trim()) {
            newErrors.timeline = "Timeline is required";
        }

        if (!formData.projectDetails.trim()) {
            newErrors.projectDetails = "Project details are required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        const form = e.currentTarget;
        const formDataObj = new FormData(form);
        
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataObj
            });

            if (response.ok) {
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    service: "",
                    timeline: "",
                    projectDetails: ""
                });
                setErrors({});
                alert("Message sent successfully!");
            } else {
                alert("Failed to send message. Please try again.");
            }
        } catch {
            alert("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="Contact">
            <div className="w-full h-auto bg-[#121212] px-4 py-10">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h1 className="text-3xl font-semibold text-white">Contact me</h1>
                    <p className="font-thin opacity-50 text-white mx-2">
                        Cultivating Connections: Reach Out and Connect with Me
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="mt-16 space-y-8 max-w-7xl mx-auto">
                    <input type="hidden" name="access_key" value="1b097782-f44e-4bf2-b4c5-d733b8b6284a" />
                    <input type="hidden" name="from_name" value="Review" />

                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="w-full sm:w-[48%]">
                            <input
                                className={`w-full px-4 py-3 bg-[#1b1b1b] rounded-lg text-white focus:outline-none focus:ring-2 ${errors.name ? 'ring-red-500' : 'focus:ring-orange-600'}`}
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>
                        <div className="w-full sm:w-[48%]">
                            <input
                                className={`w-full px-4 py-3 bg-[#1b1b1b] rounded-lg text-white focus:outline-none focus:ring-2 ${errors.email ? 'ring-red-500' : 'focus:ring-orange-600'}`}
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="w-full sm:w-[48%]">
                            <input
                                className={`w-full px-4 py-3 bg-[#1b1b1b] rounded-lg text-white focus:outline-none focus:ring-2 ${errors.phone ? 'ring-red-500' : 'focus:ring-orange-600'}`}
                                type="text"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                        </div>
                        <div className="w-full sm:w-[48%]">
                            <input
                                className={`w-full px-4 py-3 bg-[#1b1b1b] rounded-lg text-white focus:outline-none focus:ring-2 ${errors.service ? 'ring-red-500' : 'focus:ring-orange-600'}`}
                                type="text"
                                name="service interest"
                                placeholder="Service Of Interest"
                                value={formData.service}
                                onChange={handleChange}
                            />
                            {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="flex justify-center w-full sm:w-[48%]">
                            <div className="w-full">
                                <input
                                    className={`w-full px-4 py-3 h-12 bg-[#1b1b1b] rounded-lg text-white focus:outline-none focus:ring-2 ${errors.timeline ? 'ring-red-500' : 'focus:ring-orange-600'}`}
                                    type="text"
                                    name="timeline"
                                    placeholder="Timeline"
                                    value={formData.timeline}
                                    onChange={handleChange}
                                />
                                {errors.timeline && <p className="text-red-500 text-sm mt-1">{errors.timeline}</p>}
                            </div>
                        </div>
                        <div className="flex justify-center w-full sm:w-[48%]">
                            <div className="w-full">
                                <textarea
                                    className={`w-full px-4 py-3 bg-[#1b1b1b] rounded-lg text-white h-40 resize-none focus:outline-none focus:ring-2 ${errors.projectDetails ? 'ring-red-500' : 'focus:ring-orange-600'}`}
                                    name="project details"
                                    placeholder="Project details..."
                                    value={formData.projectDetails}
                                    onChange={handleChange}
                                ></textarea>
                                {errors.projectDetails && <p className="text-red-500 text-sm mt-1">{errors.projectDetails}</p>}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mt-8">
                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="px-10 py-2 border-2 border-white hover:bg-white hover:text-black text-lg text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? "Sending..." : "Send"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}