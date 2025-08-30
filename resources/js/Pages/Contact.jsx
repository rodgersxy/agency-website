import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

// 1. Accept the new 'subject' prop
export default function Contact({ subject }) {
    
    // 2. Use the 'subject' prop to set the initial state of the 'title' field
    const { data, setData, post, processing, errors, recentlySuccessful } = useForm({
        name: '',
        email: '',
        title: subject || '', // Use the prop, fallback to empty string
        message: '',
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route('contact.store'));
    }

    return (
        <>
            <Head title="Contact Us" />
            <div className="isolate bg-white dark:bg-gray-800 px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">Get in Touch</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
                        Have a project in mind? We'd love to hear from you.
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        {/* Name Field */}
                        <div className="sm:col-span-2">
                            <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">Full Name</label>
                            <div className="mt-2.5">
                                <input type="text" name="name" id="name" value={data.name} onChange={(e) => setData('name', e.target.value)} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-gray-200 bg-white dark:bg-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6" />
                                {errors.name && <div className="text-red-600 mt-1">{errors.name}</div>}
                            </div>
                        </div>

                        {/* Email Field */}
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">Email</label>
                            <div className="mt-2.5">
                                <input type="email" name="email" id="email" value={data.email} onChange={(e) => setData('email', e.target.value)} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-gray-200 bg-white dark:bg-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6" />
                                {errors.email && <div className="text-red-600 mt-1">{errors.email}</div>}
                            </div>
                        </div>

                        {/* Subject / Title Field */}
                        <div className="sm:col-span-2">
                            <label htmlFor="title" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">Subject / Title</label>
                            <div className="mt-2.5">
                                <input type="text" name="title" id="title" value={data.title} onChange={(e) => setData('title', e.target.value)} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-gray-200 bg-white dark:bg-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6" placeholder="e.g., Small Business Website Inquiry" />
                                {errors.title && <div className="text-red-600 mt-1">{errors.title}</div>}
                            </div>
                        </div>

                        {/* Message Field */}
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
                    {recentlySuccessful && (<div className="mt-4 text-center text-green-600">Your message has been sent successfully! We'll get back to you soon.</div>)}
                </form>
            </div>
        </>
    );
}

// Apply the main layout
Contact.layout = page => <MainLayout children={page} />;