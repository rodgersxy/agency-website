import React from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { FaCode, FaMobileAlt, FaCloudUploadAlt, FaBullhorn, FaCreditCard } from 'react-icons/fa'; // Added more specific icons

// --- Updated services data with SEO-focused and Kenyan market-specific content ---
const services = [
    {
        icon: <FaCode />,
        title: 'Custom Web Design & Development',
        description: 'Get a professional, mobile-friendly website that represents your brand in Kenya. We build everything from simple business sites to complex web applications using modern, secure technology.',
    },
    {
        icon: <FaMobileAlt />,
        title: 'Mobile App Development',
        description: 'Reach your customers on the go with high-performance iOS and Android apps. We focus on creating intuitive user experiences that drive engagement and loyalty.',
    },
    {
        icon: <FaCreditCard />,
        title: 'E-Commerce & M-Pesa Integration',
        description: 'Start selling online with a powerful e-commerce store. We specialize in seamless M-Pesa and card payment integrations, making it easy for your Kenyan customers to buy from you.',
    },
    {
        icon: <FaBullhorn />,
        title: 'Digital Marketing & SEO in Kenya',
        description: `Having a great website is just the start. We help you get noticed with SEO strategies tailored for the Kenyan market, ensuring you rank high on Google for the terms that matter to your business.`,
    },
    {
        icon: <FaCloudUploadAlt />,
        title: 'Cloud & DevOps Solutions',
        description: 'Leverage the power of the cloud for scalability and reliability. We provide expert solutions for infrastructure, automated deployments, and secure hosting for your applications.',
    },
];

export default function Services() {
    return (
        <>
            {/* SEO-focused Head component */}
            <Head 
                title="Professional Web Design & Digital Marketing Services in Kenya" 
                description="UJUZIWEB offers custom web design, e-commerce with M-Pesa integration, mobile app development, and SEO services for businesses in Kenya."
            />
            
            {/* 1. Reduced top padding from py-24 to pt-16 */}
            <div className="bg-white dark:bg-gray-800 pt-16 pb-24 sm:pt-24 sm:pb-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/* 2. New, more engaging two-part header layout */}
                    <div className="mx-auto max-w-2xl lg:max-w-none">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-lg font-semibold leading-7 text-amber-600">Our Services</h2>
                            {/* 3. Increased title size and SEO-focused text */}
                            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
                                Expert Web Solutions for Kenyan Businesses
                            </p>
                            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                                From Nairobi to Mombasa, we help businesses succeed online with cutting-edge technology and tailored strategies.
                            </p>
                        </div>
                        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                                {services.map((service) => (
                                    <div key={service.title} className="flex flex-col">
                                        <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500">
                                                {React.cloneElement(service.icon, { className: "h-6 w-6 text-white" })}
                                            </div>
                                            {service.title}
                                        </dt>
                                        <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                                            <p className="flex-auto">{service.description}</p>
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    
                </div>
                <div className="mt-24 text-center">
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
        </>
    );
}

// Apply the main layout
Services.layout = page => <MainLayout children={page} />;