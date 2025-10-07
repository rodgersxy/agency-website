import React from 'react';
import { Link } from '@inertiajs/react';
import { FaCheckCircle } from 'react-icons/fa';

const packages = [
    
    {
        name: 'Personal Website',
        price: 'Starting at KES 15,000',
        description: 'Perfect for freelancers, artists, and individuals looking to build a personal brand online.',
        features: [
            'Custom Domain & Hosting Setup',
            'Business email setup',
            'Mobile-Responsive Design',
            'Contact Form Integration',
            'SEO Optimization',
            'Up to 5 Pages',
            'Social Media Links',
        ],
        popular: false,
    },
    {
        name: 'Small Business Package',
        price: 'Starting at KES 35,000',
        description: 'The complete solution for SMEs to establish a strong, professional online presence.',
        features: [
            'Everything in Personal, plus:',
            'Up to 15 Business Pages',
            'Content Management System (CMS)',
            'M-Pesa Integration Ready',
            'Google Analytics Setup',
            '1 Month of Technical Support',
            '1 Year Free Domain & Hosting',
        ],
        popular: true,
    },
    {
        name: 'E-Commerce Website',
        price: 'Starting at KES 60,000',
        description: 'A powerful online store built to sell your products and services across Kenya.',
        features: [
            'Everything in Small Business, plus:',
            'Full Product Catalog System',
            'Secure M-Pesa & Card Payments',
            'Inventory Management',
            'Customer Accounts & Order Tracking',
            'Advanced SEO for Products',
        ],
        popular: false,
    },
    {
        name: 'Enterprise Package',
        price: 'Let\'s Talk',
        description: 'Custom, scalable solutions for large businesses with specific requirements.',
        features: [
            'Custom Feature Development',
            'API Integrations',
            'Dedicated Project Manager',
            'Advanced Security Features',
            'Ongoing Maintenance & Support',
            'Scalable Cloud Infrastructure',
        ],
        popular: false,
    },
];

export default function PricingSection() {
    return (
        <div className="bg-white dark:bg-slate-800 md:py-2 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Header */}
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-amber-600">Pricing</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                        A Plan for Every Business in Kenya
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600 dark:text-gray-300">
                    Choose the perfect package to get your business online. All prices are one-time costs unless stated otherwise.
                </p>

                {/* Pricing Cards Grid */}
                <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    {packages.map((pkg) => (
                        <div
                            key={pkg.name}
                            className={`relative flex flex-col rounded-3xl p-8 shadow-xl ring-1 ring-gray-900/10 ${
                                pkg.popular ? 'bg-gray-900 dark:bg-slate-900 ring-2 ring-amber-500' : 'bg-white dark:bg-slate-800'
                            }`}
                        >
                            {/* ... (rest of the card content is unchanged) */}
                            <h3 className={`text-2xl font-semibold leading-8 ${pkg.popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>{pkg.name}</h3>
                            <p className={`mt-4 text-sm leading-6 ${pkg.popular ? 'text-gray-300' : 'text-gray-600 dark:text-gray-300'}`}>{pkg.description}</p>
                            <p className="mt-6 flex items-baseline gap-x-1"><span className={`text-4xl font-bold tracking-tight ${pkg.popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>{pkg.price}</span></p>
                            <ul role="list" className={`mt-8 space-y-3 text-sm leading-6 ${pkg.popular ? 'text-gray-300' : 'text-gray-600 dark:text-gray-300'}`}>
                                {pkg.features.map((feature) => (<li key={feature} className="flex gap-x-3"><FaCheckCircle className="h-6 w-5 flex-none text-amber-500" aria-hidden="true" />{feature}</li>))}
                            </ul>

                            
                            <Link
                                // Pass the package name as a 'subject' query parameter
                                href={route('contact', { subject: `${pkg.name} Inquiry` })}
                                className={`mt-auto block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors ${
                                    pkg.popular
                                        ? 'bg-amber-500 text-white hover:bg-amber-400 focus-visible:outline-amber-500'
                                        : 'bg-white dark:bg-slate-700 text-amber-600 dark:text-amber-400 ring-1 ring-inset ring-amber-200 dark:ring-amber-800 hover:ring-amber-300'
                                }`}
                            >
                                Choose Plan
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}