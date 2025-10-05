import React from 'react';
import { Link } from '@inertiajs/react';
import { FaFacebook, FaLinkedin, FaInstagramSquare, FaTiktok, FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";

// --- Social Media Links ---
const socialLinks = [
    { name: 'Facebook', href: 'https://web.facebook.com/rodger.ny/', icon: FaFacebook },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/rodgers-dev/', icon: FaLinkedin },
    { name: 'Twitter', href: 'https://x.com/rodgerwilly', icon: FaSquareXTwitter },
    { name: 'Instagram', href: 'https://www.instagram.com/mogakaroy/', icon: FaInstagramSquare },
    { name: 'TikTok', href: 'https://www.tiktok.com/@roydevalx?lang=en', icon: FaTiktok },
    { 
        name: 'WhatsApp', 
        href: 'https://wa.me/254726746234?text=Hello%20cyberarktechnologies!%20I%27m%20interested%20in%20your%20services.', 
        icon: FaWhatsapp 
    },
];

// --- Navigation Links ---
const navigation = {
    services: [
        { name: 'Web Development', href: '#' },
        { name: 'Mobile Apps', href: '#' },
        { name: 'UI/UX Design', href: '#' },
        { name: 'SEO Services', href: '#' },
    ],
};

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            {/* Main Footer Content */}
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    
                    {/* Company Info Section - Takes up 2 columns worth of space */}
                    <div className="lg:col-span-2">
                        
                        
                        {/* Company Description */}
                        <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-2xl">
                            We build modern websites, mobile apps, and digital solutions that help Kenyan businesses grow online and reach more customers.
                        </p>
                        
                        {/* Contact Info - Larger and Better Spaced */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Email - Clickable */}
                            <a 
                                href="mailto:mogakaroy@gmail.com"
                                className="flex items-center text-gray-300 hover:text-amber-400 transition-colors duration-300 group"
                            >
                                <div className="flex-shrink-0 w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-amber-500/20 transition-colors duration-300">
                                    <FaEnvelope className="h-5 w-5 text-amber-500" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-white">Email</p>
                                    <p className="text-gray-300 group-hover:text-amber-400 transition-colors duration-300">mogakaroy@gmail.com</p>
                                </div>
                            </a>
                            
                            {/* Phone - Clickable */}
                            <a 
                                href="tel:+254726746234"
                                className="flex items-center text-gray-300 hover:text-amber-400 transition-colors duration-300 group"
                            >
                                <div className="flex-shrink-0 w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-amber-500/20 transition-colors duration-300">
                                    <FaPhone className="h-5 w-5 text-amber-500" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-white">Phone</p>
                                    <p className="text-gray-300 group-hover:text-amber-400 transition-colors duration-300">+254 726 746 234</p>
                                </div>
                            </a>
                            
                            {/* Location - Non-clickable */}
                            <div className="flex items-center text-gray-300">
                                <div className="flex-shrink-0 w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mr-4">
                                    <FaMapMarkerAlt className="h-5 w-5 text-amber-500" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-white">Location</p>
                                    <p className="text-gray-300"> Leomar Court, Westlands Rd. Nairobi, Kenya</p>
                                </div>
                            </div>
                        </div>

                        {/* WhatsApp CTA Button */}
                        <div className="mt-10">
                            <a
                                href="https://wa.me/254726746234?text=Hello%20cyberarktechnologies!%20I%27m%20interested%20in%20your%20services."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-600/25"
                            >
                                <FaWhatsapp className="h-5 w-5 mr-3" />
                                Chat with us on WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Services Section - Clean and Organized */}
                    <div className="lg:col-span-1">
                        <h3 className="text-white font-bold text-2xl mb-8 relative">
                            Our Services
                            <div className="absolute -bottom-3 left-0 w-12 h-1 bg-amber-500 rounded-full"></div>
                        </h3>
                        <ul className="space-y-5">
                            {navigation.services.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="group flex items-center text-gray-300 hover:text-amber-400 text-base transition-all duration-300"
                                    >
                                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                                            {item.name}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Section - Enhanced */}
            <div className="border-t border-slate-700 bg-slate-900/50 dark:bg-gray-900/50">
                <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-8 lg:space-y-0">
                        
                        {/* Copyright - More Prominent */}
                        <div className="text-center lg:text-left">
                            <p className="text-gray-300 text-base font-medium mb-2">
                                &copy; {currentYear} cyberark technologies Inc. All rights reserved.
                            </p>
                            <p className="text-gray-400 text-sm">
                                Made with ❤️ in Kenya
                            </p>
                        </div>

                        {/* Social Media Icons - Larger and More Prominent */}
                        <div className="flex justify-center lg:justify-end space-x-4">
                            {socialLinks.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="group relative overflow-hidden"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={`Follow us on ${item.name}`}
                                >
                                    <div className={`w-14 h-14 ${item.name === 'WhatsApp' ? 'bg-green-600 hover:bg-green-700' : 'bg-slate-800 hover:bg-amber-500'} rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${item.name === 'WhatsApp' ? 'group-hover:shadow-green-600/25' : 'group-hover:shadow-amber-500/25'}`}>
                                        <item.icon 
                                            className={`h-6 w-6 ${item.name === 'WhatsApp' ? 'text-white' : 'text-gray-400 group-hover:text-white'} transition-colors duration-300`}
                                            aria-hidden="true" 
                                        />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}