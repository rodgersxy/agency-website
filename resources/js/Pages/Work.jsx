import React from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

// You would fetch this data from your Laravel backend in a real application
const projects = [
    {
        title: 'E-commerce Platform',
        category: 'Web Development',
        imageUrl: 'https://via.placeholder.com/600x400.png/fbbf24/1c1917?text=Project+One',
        href: '#',
    },
    {
        title: 'SaaS Analytics Dashboard',
        category: 'Web Application',
        imageUrl: 'https://via.placeholder.com/600x400.png/facc15/1c1917?text=Project+Two',
        href: '#',
    },
    {
        title: 'Mobile Banking App',
        category: 'Mobile Development',
        imageUrl: 'https://via.placeholder.com/600x400.png/f59e0b/1c1917?text=Project+Three',
        href: '#',
    },
    {
        title: 'Cloud Migration Service',
        category: 'DevOps',
        imageUrl: 'https://via.placeholder.com/600x400.png/eab308/1c1917?text=Project+Four',
        href: '#',
    },
];

export default function Work() {
    return (
        <>
            <Head title="Our Work" />
            <div className="bg-gray-50 dark:bg-gray-900 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">Our Portfolio</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                            Check out some of the projects we are proud to have delivered to our clients.
                        </p>
                    </div>
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 dark:border-gray-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {projects.map((project) => (
                            <article key={project.title} className="flex max-w-xl flex-col items-start justify-between group">
                                <div className="relative w-full">
                                    <img src={project.imageUrl} alt="" className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] transition-transform duration-300 group-hover:scale-105" />
                                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-6 text-lg font-semibold leading-6 text-gray-900 dark:text-gray-100 group-hover:text-amber-600">
                                        <Link href={project.href}>
                                            <span className="absolute inset-0" />
                                            {project.title}
                                        </Link>
                                    </h3>
                                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{project.category}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

// Apply the main layout
Work.layout = page => <MainLayout children={page} />;