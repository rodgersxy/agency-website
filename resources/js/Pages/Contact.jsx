import React from 'react';
import { Head, useForm, usePage, Link } from '@inertiajs/react'; // Import Link
import MainLayout from '@/Layouts/MainLayout';
import { FaCheckCircle, FaArrowLeft } from 'react-icons/fa'; // Import icons

export default function Contact({ subject }) {
    const { data, setData, post, processing, errors, recentlySuccessful, reset } = useForm({
        name: '',
        email: '',
        title: subject || '',
        message: '',
    });

    const { flash } = usePage().props;

    // Email validation function
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Custom validation state
    const [emailError, setEmailError] = React.useState('');

    // Handle email input change with validation
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
        
        // Validate email before submission
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
            
            {/* --- SUCCESS VIEW WITH BIGGER NOTIFICATION --- */}
            {recentlySuccessful ? (
                <div className="bg-white dark:bg-gray-800 py-24 sm:py-32 min-h-screen flex items-center">
                    <div className="mx-auto max-w-4xl text-center px-6">
                        {/* Bigger success icon */}
                        <FaCheckCircle className="mx-auto h-24 w-24 text-green-400 mb-8" aria-hidden="true" />
                        
                        {/* Bigger heading */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-8">
                            Message Sent!
                        </h1>
                        
                        {/* Success message in a prominent card */}
                        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-8 mb-12">
                            <p className="text-xl md:text-2xl leading-8 text-green-800 dark:text-green-200 font-medium">
                                {flash?.success || "Thank you for your message! We'll get back to you soon."}
                            </p>
                        </div>
                        
                        {/* Bigger call-to-action button */}
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
                // --- DEFAULT FORM VIEW ---
                <div className="isolate bg-white dark:bg-gray-800 px-6 py-24 sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">Get in Touch</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
                            Have a project in mind? We'd love to hear from you.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                           
                            <div className="sm:col-span-2">
                                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">Full Name</label>
                                <div className="mt-2.5">
                                    <input type="text" name="name" id="name" value={data.name} onChange={(e) => setData('name', e.target.value)} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-gray-200 bg-white dark:bg-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6" />
                                    {errors.name && <div className="text-red-600 mt-1">{errors.name}</div>}
                                </div>
                            </div>
                            
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">Email</label>
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
                            
                            <div className="sm:col-span-2">
                                <label htmlFor="title" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">Subject / Title</label>
                                <div className="mt-2.5">
                                    <input type="text" name="title" id="title" value={data.title} onChange={(e) => setData('title', e.target.value)} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-gray-200 bg-white dark:bg-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6" placeholder="e.g., Small Business Website Inquiry" />
                                    {errors.title && <div className="text-red-600 mt-1">{errors.title}</div>}
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">Message</label>
                                <div className="mt-2.5">
                                    <textarea name="message" id="message" rows={4} value={data.message} onChange={(e) => setData('message', e.target.value)} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-gray-200 bg-white dark:bg-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6" />
                                    {errors.message && <div className="text-red-600 mt-1">{errors.message}</div>}
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <button type="submit" disabled={processing} className="block w-full rounded-md bg-amber-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 disabled:opacity-50">
                                {processing ? 'Sending...' : "Let's talk"}
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
}

Contact.layout = page => <MainLayout children={page} />;