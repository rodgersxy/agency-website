import React from 'react';
import { Head, Link } from '@inertiajs/react'; // Import Link
import MainLayout from '@/Layouts/MainLayout';
import ProjectCard from '@/Components/ProjectCard';

export default function Work({ projects }) {
    return (
        <>
            {/* 1. SEO-focused Head component */}
            <Head 
                title="Web Design, Web Development & Software Solutions | Projects in Kenya"
                description="Explore the portfolio and work of cyberark technologies, showcasing custom websites, e-commerce stores, and software solutions built for businesses across Kenya."
            />
            
            {/* 2. Reduced top padding */}
            <div className="bg-white dark:bg-gray-900 pt-16 pb-24 sm:pt-24 sm:pb-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/* 3. Rewritten Section Header */}
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-lg font-semibold leading-7 text-amber-600">Our Work</h2>
                        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
                            Success Stories from Kenyan Businesses
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                            We partner with businesses of all sizes to build digital products that drive growth. Here are a few of our favourite projects.
                        </p>
                    </div>

                    {/* Conditional Rendering (remains the same) */}
                    {projects.length > 0 ? (
                        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            {projects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    ) : (
                        <div className="mx-auto mt-16 text-center border-t border-gray-200 dark:border-gray-700 pt-16">
                            <p className="text-gray-600 dark:text-gray-300">We're currently updating our portfolio with new and exciting projects. Please check back soon!</p>
                        </div>
                    )}

                    {/* 4. New Call to Action (CTA) Section */}
                    <div className="mt-24 text-center">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl">
                        Need a new website or a redesign?
                    </h3>
                    <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                        Whether you’re starting from scratch or upgrading your current site, cyberark technologies helps Kenyan businesses build modern, high-performing digital experiences.
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
        </>
    );
}

Work.layout = page => <MainLayout children={page} />;