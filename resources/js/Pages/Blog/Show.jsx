// resources/js/Pages/Blog/Show.jsx
import React, { useEffect, useState } from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import ShareButtons from '@/Components/ShareButtons';
import CallToAction from '@/Components/CallToAction';

export default function Show({ blog }) {
    const [currentUrl, setCurrentUrl] = useState('');

    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, []);

    const formattedDate = new Date(blog.published_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <>
            <Head title={blog.seo_title || blog.title} description={blog.seo_description} />
            <div className="bg-white dark:bg-slate-800 pt-24 pb-16 sm:pt-32 sm:pb-24">
                <div className="mx-auto max-w-3xl px-6 lg:px-8">
                    <div className="text-base leading-7 text-gray-700 dark:text-gray-300">
                        
                        <div className="mb-8">
                            <p className="text-base font-semibold leading-7 text-amber-600">
                                Published on {formattedDate}
                            </p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                                {blog.title}
                            </h1>
                        </div>

                        <img src={blog.image_url} alt={blog.title} className="mb-12 w-full rounded-xl shadow-lg" />
                        
                      
                        <div
                            className="prose prose-lg dark:prose-invert max-w-none"
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        />

                        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                            {currentUrl && <ShareButtons url={currentUrl} title={blog.title} />}
                        </div>
                    </div>
                </div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
                    <CallToAction />
                </div>
            </div>
        </>
    );
}
Show.layout = page => <MainLayout children={page} />;