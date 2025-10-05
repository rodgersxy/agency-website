import React from 'react';
import { Head, useForm, usePage, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { FaCheckCircle, FaArrowLeft } from 'react-icons/fa';

// Animated SVG Components
const FloatingMessage = () => (
    <svg className="absolute top-10 right-10 w-16 h-16 text-amber-400 opacity-20 animate-bounce" style={{ animationDuration: '3s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const FloatingCode = () => (
    <svg className="absolute bottom-20 left-10 w-12 h-12 text-amber-300 opacity-20 animate-pulse" style={{ animationDuration: '2s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);

const ContactIllustration = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        <svg viewBox="0 0 500 500" className="w-full h-full max-w-lg">
            {/* Background circles */}
            <circle cx="250" cy="250" r="200" fill="url(#grad1)" opacity="0.1">
                <animate attributeName="r" values="200;220;200" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="250" cy="250" r="150" fill="url(#grad2)" opacity="0.1">
                <animate attributeName="r" values="150;170;150" dur="3s" repeatCount="indefinite" />
            </circle>
            
            {/* Laptop/Screen */}
            <g className="animate-float">
                <rect x="150" y="180" width="200" height="140" rx="10" fill="#1F2937" stroke="#D97706" strokeWidth="3" />
                <rect x="160" y="190" width="180" height="100" fill="#374151" />
                
                {/* Code lines on screen */}
                <rect x="170" y="200" width="80" height="4" fill="#D97706" opacity="0.8">
                    <animate attributeName="width" values="80;100;80" dur="2s" repeatCount="indefinite" />
                </rect>
                <rect x="170" y="215" width="120" height="4" fill="#F59E0B" opacity="0.6">
                    <animate attributeName="width" values="120;140;120" dur="2.5s" repeatCount="indefinite" />
                </rect>
                <rect x="170" y="230" width="60" height="4" fill="#FBBF24" opacity="0.6">
                    <animate attributeName="width" values="60;80;60" dur="3s" repeatCount="indefinite" />
                </rect>
                <rect x="170" y="245" width="140" height="4" fill="#D97706" opacity="0.7">
                    <animate attributeName="width" values="140;160;140" dur="2.2s" repeatCount="indefinite" />
                </rect>
                <rect x="170" y="260" width="90" height="4" fill="#F59E0B" opacity="0.6">
                    <animate attributeName="width" values="90;110;90" dur="2.8s" repeatCount="indefinite" />
                </rect>
                
                {/* Laptop base */}
                <path d="M 130 320 L 150 320 L 160 340 L 340 340 L 350 320 L 370 320 L 360 360 L 140 360 Z" fill="#1F2937" stroke="#D97706" strokeWidth="2" />
            </g>
            
            {/* Floating email envelopes */}
            <g className="animate-float-delay-1">
                <path d="M 80 120 L 140 120 L 110 145 Z" fill="#D97706" opacity="0.6" />
                <rect x="80" y="120" width="60" height="40" fill="none" stroke="#D97706" strokeWidth="2" />
            </g>
            
            <g className="animate-float-delay-2">
                <path d="M 360 320 L 420 320 L 390 345 Z" fill="#F59E0B" opacity="0.6" />
                <rect x="360" y="320" width="60" height="40" fill="none" stroke="#F59E0B" strokeWidth="2" />
            </g>
            
            {/* Message bubbles */}
            <circle cx="100" cy="280" r="30" fill="#D97706" opacity="0.3">
                <animate attributeName="cy" values="280;270;280" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="400" cy="150" r="25" fill="#F59E0B" opacity="0.3">
                <animate attributeName="cy" values="150;140;150" dur="2.5s" repeatCount="indefinite" />
            </circle>
            
            {/* Connection lines/nodes */}
            <g opacity="0.4">
                <circle cx="120" cy="100" r="8" fill="#D97706">
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="380" cy="100" r="8" fill="#F59E0B">
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="2.3s" repeatCount="indefinite" />
                </circle>
                <circle cx="120" cy="400" r="8" fill="#FBBF24">
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="2.7s" repeatCount="indefinite" />
                </circle>
                <circle cx="380" cy="400" r="8" fill="#D97706">
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="2.1s" repeatCount="indefinite" />
                </circle>
                
                <line x1="120" y1="100" x2="380" y2="100" stroke="#D97706" strokeWidth="1" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" values="0;10;0" dur="2s" repeatCount="indefinite" />
                </line>
                <line x1="120" y1="400" x2="380" y2="400" stroke="#F59E0B" strokeWidth="1" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" values="0;10;0" dur="2s" repeatCount="indefinite" />
                </line>
            </g>
            
            {/* Gradients */}
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#D97706', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#F59E0B', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#F59E0B', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#FBBF24', stopOpacity: 1 }} />
                </linearGradient>
            </defs>
        </svg>
        
        {/* Floating decorative elements */}
        <FloatingMessage />
        <FloatingCode />
    </div>
);

export default function Contact({ subject }) {
    const { data, setData, post, processing, errors, recentlySuccessful, reset } = useForm({
        name: '',
        email: '',
        title: subject || '',
        message: '',
    });

    const { flash } = usePage().props;

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const [emailError, setEmailError] = React.useState('');

    const handleEmailChange = (e) => {
        const emailValue = e.target.value;
        setData('email', emailValue);
        
        if (emailValue && !validateEmail(emailValue)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
        
        if (!validateEmail(data.email)) {
            setEmailError('Please enter a valid email address');
            return;
        }
        
        post(route('contact.store'), {
            onSuccess: () => reset(),
        });
    }

    return (
        <>
            <Head title={recentlySuccessful ? "Message Sent!" : "Contact Us"} />
            
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                @keyframes float-delay-1 {
                    0%, 100% { transform: translate(0px, 0px); }
                    50% { transform: translate(-10px, -15px); }
                }
                @keyframes float-delay-2 {
                    0%, 100% { transform: translate(0px, 0px); }
                    50% { transform: translate(10px, -15px); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                .animate-float-delay-1 {
                    animation: float-delay-1 4s ease-in-out infinite;
                }
                .animate-float-delay-2 {
                    animation: float-delay-2 3.5s ease-in-out infinite;
                }
            `}</style>
            
            {recentlySuccessful ? (
                <div className="bg-white dark:bg-gray-800 py-24 sm:py-32 min-h-screen flex items-center">
                    <div className="mx-auto max-w-4xl text-center px-6">
                        <FaCheckCircle className="mx-auto h-24 w-24 text-green-400 mb-8" aria-hidden="true" />
                        
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-8">
                            Message Sent!
                        </h1>
                        
                        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-8 mb-12">
                            <p className="text-xl md:text-2xl leading-8 text-green-800 dark:text-green-200 font-medium">
                                {flash?.success || "Thank you for your message! We'll get back to you soon."}
                            </p>
                        </div>
                        
                        <div className="mt-10">
                            <Link
                                href={route('home')}
                                className="inline-flex items-center gap-x-3 rounded-xl bg-amber-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 transition-all duration-200 transform hover:scale-105"
                            >
                                <FaArrowLeft className="-ml-0.5 h-6 w-6" aria-hidden="true" />
                                Go back home
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="isolate bg-white dark:bg-gray-800 px-6 py-24 sm:py-32 lg:px-8 min-h-screen">
                    <div className="mx-auto max-w-7xl">
                        {/* Header */}
                        <div className="mx-auto max-w-2xl text-center mb-16">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">Get in Touch</h2>
                            <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
                                Have a project in mind? We'd love to hear from you.
                            </p>
                        </div>

                        {/* Two Column Layout */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            {/* Form Section - Left on desktop, Top on mobile */}
                            <div className="order-1">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
                                            Full Name
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-gray-200 bg-white dark:bg-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                                            />
                                            {errors.name && <div className="text-red-600 mt-1">{errors.name}</div>}
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
                                            Email
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                value={data.email}
                                                onChange={handleEmailChange}
                                                className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-gray-200 bg-white dark:bg-gray-700 shadow-sm ring-1 ring-inset ${
                                                    emailError || errors.email 
                                                        ? 'ring-red-300 dark:ring-red-600 focus:ring-red-600' 
                                                        : 'ring-gray-300 dark:ring-gray-600 focus:ring-amber-600'
                                                } placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
                                                placeholder="your.email@example.com"
                                            />
                                            {(emailError || errors.email) && (
                                                <div className="text-red-600 mt-1">{emailError || errors.email}</div>
                                            )}
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="title" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
                                            Subject / Title
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="text"
                                                name="title"
                                                id="title"
                                                value={data.title}
                                                onChange={(e) => setData('title', e.target.value)}
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-gray-200 bg-white dark:bg-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                                                placeholder="e.g., Small Business Website Inquiry"
                                            />
                                            {errors.title && <div className="text-red-600 mt-1">{errors.title}</div>}
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
                                            Message
                                        </label>
                                        <div className="mt-2.5">
                                            <textarea
                                                name="message"
                                                id="message"
                                                rows={4}
                                                value={data.message}
                                                onChange={(e) => setData('message', e.target.value)}
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-gray-200 bg-white dark:bg-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                                            />
                                            {errors.message && <div className="text-red-600 mt-1">{errors.message}</div>}
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="block w-full rounded-md bg-amber-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 disabled:opacity-50 transition-all duration-200"
                                        >
                                            {processing ? 'Sending...' : "Let's talk"}
                                        </button>
                                    </div>
                                </form>
                            </div>

                            {/* Illustration Section - Right on desktop, Bottom on mobile */}
                            <div className="order-2 relative min-h-[400px] lg:min-h-[600px]">
                                <ContactIllustration />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

Contact.layout = page => <MainLayout children={page} />;