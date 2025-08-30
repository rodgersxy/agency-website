import React from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import ProjectCard from '@/Components/ProjectCard'; // <-- 1. Import the new component

export default function Work({ projects }) {
    return (
        <>
            <Head title="Our Work" />
            <div className="bg-gray-50 dark:bg-gray-900 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">Our Portfolio</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                            Check out some of the projects we are proud to have delivered to our clients.
                        </p>
                    </div>

                    {/* Conditional Rendering */}
                    {projects.length > 0 ? (
                        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            {/* 2. Map over projects and render the ProjectCard component */}
                            {projects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    ) : (
                        <div className="mx-auto mt-16 text-center border-t border-gray-200 dark:border-gray-700 pt-16">
                            <p className="text-gray-600 dark:text-gray-300">We're currently updating our portfolio. Please check back soon!</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

Work.layout = page => <MainLayout children={page} />;