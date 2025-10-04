// resources/js/Components/WhyChooseUs.jsx
import React from 'react';
import { Link } from '@inertiajs/react';
import { IoShieldCheckmark } from "react-icons/io5";


const benefits = [
    {
        name: 'Results-Driven Approach',
        description: 'We build more than just beautiful websites; we build marketing tools. Our focus is on creating online platforms that attract customers and generate real revenue for your business.',
    },
    {
        name: 'Tailored for Kenyan SMEs',
        description: 'We live and breathe the Kenyan market. From seamless M-Pesa integration to understanding local customer behaviour, we build solutions that are perfectly aligned with your business needs.',
    },
    {
        name: 'Affordable & Scalable Packages',
        description: 'Get started with a professional website without breaking the bank. Our packages are designed to provide maximum value, with clear pricing and the flexibility to add more features as you grow.',
    },
    {
        name: 'Reliable Local Support',
        description: 'No more waiting for days for a reply. Our Nairobi-based team is available to provide fast, friendly, and effective support whenever you need it. We\'re just a call or email away.',
    },
];

export default function WhyChooseUs() {
    return (
        <div className="overflow-hidden bg-white dark:bg-slate-800 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* The main two-column grid */}
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    
                    {/* Left Column: Text Content (unchanged) */}
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-amber-600">Why Partner With Us</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                                A Digital Agency That Understands Kenya
                            </p>
                            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                                Choosing the right web design partner is crucial. We combine global technology standards with deep local market knowledge to give your business a competitive edge.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 dark:text-gray-300 lg:max-w-none">
                                {benefits.map((benefit) => (
                                    <div key={benefit.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900 dark:text-white">
                                            <IoShieldCheckmark className="absolute left-1 top-1 h-5 w-5 text-amber-600" aria-hidden="true" />
                                            {benefit.name}
                                        </dt>
                                        {' '}
                                        <dd className="inline">{benefit.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    
                    {/* --- RIGHT COLUMN: IMAGE AND NEW CTA --- */}
                    {/* This is now a flex container to stack the image and CTA vertically */}
                    <div className="flex flex-col items-start">
                        <img
                            src="/images/office.jpg"
                            alt="The UJUZIWEB office in Nairobi"
                            className="w-[30rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[40rem] md:-ml-4 lg:-ml-0"
                            width={2432}
                            height={1442}
                        />

                        {/* Your CTA code, now integrated and re-styled */}
                        <div className="mt-12 text-left"> {/* Changed from mt-24 and text-center */}
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl">
                                Have a project in mind?
                            </h3>
                            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                                Let's turn your idea into the next success story.
                            </p>
                            <div className="mt-8">
                                <Link
                                    href={route('contact')}
                                    className="inline-block rounded-md bg-amber-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                                >
                                    Get a Free Quote
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}