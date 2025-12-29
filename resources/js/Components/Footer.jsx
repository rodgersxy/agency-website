import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { FaFacebook, FaLinkedin, FaInstagramSquare, FaTiktok, FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaTimes } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";

// --- Social Media Links ---
const socialLinks = [
    { name: 'Facebook', href: 'https://web.facebook.com/profile.php?id=61583943175400', icon: FaFacebook },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/rodgers-dev/', icon: FaLinkedin },
    { name: 'Twitter', href: 'https://x.com/rodgerwilly', icon: FaSquareXTwitter },
    { name: 'Instagram', href: 'https://www.instagram.com/mogakaroy/', icon: FaInstagramSquare },
    { name: 'TikTok', href: 'https://www.tiktok.com/@roydevalx?lang=en', icon: FaTiktok },
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

// Floating WhatsApp Widget Component
function FloatingWhatsAppWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        enquiry: ''
    });

    const handleSubmit = () => {
        // Validate form
        if (!formData.name || !formData.email || !formData.enquiry) {
            alert('Please fill in all fields');
            return;
        }
        
        // Create structured WhatsApp message
        const message = `*New Enquiry from Website*%0A%0A` +
                       `*Name:* ${encodeURIComponent(formData.name)}%0A` +
                       `*Email:* ${encodeURIComponent(formData.email)}%0A` +
                       `*Enquiry:* ${encodeURIComponent(formData.enquiry)}`;
        
        // WhatsApp URL with pre-filled message
        const whatsappUrl = `https://wa.me/254726746234?text=${message}`;
        
        // Open WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Reset form and close
        setFormData({ name: '', email: '', enquiry: '' });
        setIsOpen(false);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            {/* Floating WhatsApp Button */}
            <div className="fixed bottom-6 right-6 z-50">
                {/* WhatsApp Form Popup */}
                {isOpen && (
                    <div className="absolute bottom-2 right-0 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl animate-slideUp">
                        {/* Header */}
                        <div className="bg-green-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                    <FaWhatsapp className="h-7 w-7 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Chat with us</h3>
                                    <p className="text-xs text-green-100">We typically reply instantly</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white hover:text-green-200 transition-colors"
                            >
                                <FaTimes className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Form Content */}
                        <div className="p-6 space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Your Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Your Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label htmlFor="enquiry" className="block text-sm font-medium text-gray-700 mb-1">
                                    Your Message *
                                </label>
                                <textarea
                                    id="enquiry"
                                    name="enquiry"
                                    value={formData.enquiry}
                                    onChange={handleChange}
                                    rows={4}
                                    placeholder="Tell us about your project..."
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all resize-none"
                                />
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-lg"
                            >
                                <FaWhatsapp className="h-5 w-5" />
                                <span>Send to WhatsApp</span>
                            </button>

                            <p className="text-xs text-gray-500 text-center">
                                By submitting, you'll be redirected to WhatsApp
                            </p>
                        </div>
                    </div>
                )}

                {/* Main WhatsApp Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="group relative w-16 h-16 bg-green-600 hover:bg-green-700 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center hover:scale-110"
                    style={{
                        animation: 'pulse-slow 2s ease-in-out infinite'
                    }}
                    aria-label="Open WhatsApp Chat"
                >
                    <FaWhatsapp className="h-8 w-8 text-white" />
                    
                    {/* Notification Badge */}
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
                        style={{
                            animation: 'bounce 1s ease-in-out infinite'
                        }}>
                        1
                    </span>

                    {/* Ripple Effect */}
                    <span className="absolute inset-0 rounded-full bg-green-600 opacity-75"
                        style={{
                            animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite'
                        }}></span>
                </button>
            </div>

            {/* Custom CSS for animations */}
            <style>{`
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes pulse-slow {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.8;
                    }
                }

                @keyframes bounce {
                    0%, 100% {
                        transform: translateY(-25%);
                        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
                    }
                    50% {
                        transform: translateY(0);
                        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
                    }
                }

                @keyframes ping {
                    75%, 100% {
                        transform: scale(2);
                        opacity: 0;
                    }
                }

                .animate-slideUp {
                    animation: slideUp 0.3s ease-out;
                }
            `}</style>
        </>
    );
}

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            {/* Floating WhatsApp Widget */}
            <FloatingWhatsAppWidget />

            <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                {/* Main Footer Content */}
                <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        
                        {/* Company Info Section */}
                        <div className="lg:col-span-2">
                            <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-2xl">
                                We build modern websites, mobile apps, and digital solutions that help Kenyan businesses grow online and reach more customers.
                            </p>
                            
                            {/* Contact Info */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <a 
                                    href="mailto:info@cyberark.co.ke"
                                    className="flex items-center text-gray-300 hover:text-amber-400 transition-colors duration-300 group"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-amber-500/20 transition-colors duration-300">
                                        <FaEnvelope className="h-5 w-5 text-amber-500" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-white">Email</p>
                                        <p className="text-gray-300 group-hover:text-amber-400 transition-colors duration-300">info@cyberark.co.ke</p>
                                    </div>
                                </a>
                                
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
                                
                                <div className="flex items-center text-gray-300">
                                    <div className="flex-shrink-0 w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mr-4">
                                        <FaMapMarkerAlt className="h-5 w-5 text-amber-500" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-white">Location</p>
                                        <p className="text-gray-300">Leomar Court, Westlands Rd. Nairobi, Kenya</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Services Section */}
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

                {/* Bottom Section */}
                <div className="border-t border-slate-700 bg-slate-900/50 dark:bg-gray-900/50">
                    <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-8 lg:space-y-0">
                            
                            <div className="text-center lg:text-left">
                                <p className="text-gray-300 text-base font-medium mb-2">
                                    &copy; {currentYear} cyberark technologies Inc. All rights reserved.
                                </p>
                                {/* <p className="text-gray-400 text-sm">
                                    Made with ❤️ 
                                </p> */}
                            </div>

                            {/* Social Media Icons */}
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
                                        <div className="w-14 h-14 bg-slate-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-amber-500/25">
                                            <item.icon 
                                                className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors duration-300"
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
        </>
    );
}