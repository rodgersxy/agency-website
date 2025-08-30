import React from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { FaCode, FaMobileAlt, FaCloud } from 'react-icons/fa'; // Example icons

const services = [
    {
        icon: <FaCode className="h-12 w-12 text-amber-500" />,
        title: 'Web Application Development',
        description: 'We build fast, scalable, and secure web applications tailored to your business needs using modern technologies.',
    },
    {
        icon: <FaMobileAlt className="h-12 w-12 text-amber-500" />,
        title: 'Mobile App Development',
        description: 'From iOS to Android, we create intuitive and high-performing mobile experiences that delight your users and drive engagement.',
    },
    {
        icon: <FaCloud className="h-12 w-12 text-amber-500" />,
        title: 'Cloud & DevOps Solutions',
        description: 'Leverage the power of the cloud. We provide expert solutions for infrastructure, deployment pipelines, and scalability.',
    },
];

export default function Services() {
    return (
        <>
            <Head title="Our Services" />
            <div className="bg-white dark:bg-gray-800 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base font-semibold leading-7 text-amber-600">What We Do</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
                            Everything you need to launch and grow
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                            We specialize in transforming ideas into reality through our expert development and consulting services.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            {services.map((service) => (
                                <div key={service.title} className="relative pl-16">
                                    <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
                                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500">
                                            {React.cloneElement(service.icon, { className: "h-6 w-6 text-white" })}
                                        </div>
                                        {service.title}
                                    </dt>
                                    <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">{service.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </>
    );
}

// Apply the main layout
Services.layout = page => <MainLayout children={page} />;