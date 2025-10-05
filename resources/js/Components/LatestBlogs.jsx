// resources/js/Components/LatestBlogs.jsx
import React from 'react';
import { Link } from '@inertiajs/react';

export default function LatestBlogs({ blogs }) {
    if (!blogs || blogs.length === 0) {
        return null; // Don't render anything if there are no blogs
    }

    return (
        <div className="bg-white dark:bg-slate-800 md:py-16 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">From Our Blog</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
                        Insights on technology, business growth, and the digital landscape in Kenya.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {blogs.map((post) => (
                        <article key={post.id} className="flex flex-col items-start justify-between">
                            <div className="relative w-full group">
                            <Link href={route('blog.show', post.slug)}>
                                <img
                                    src={post.image_url}
                                    alt={post.title}
                                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover transition-transform duration-300 group-hover:scale-105 sm:aspect-[3/2]"
                                />
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                            </Link>
                        </div>

                            <div className="max-w-xl">
                                <div className="mt-8 flex items-center gap-x-4 text-xs">
                                    <time dateTime={post.published_at} className="text-gray-500">
                                        {new Date(post.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                    </time>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-amber-600">
                                        <Link href={route('blog.show', post.slug)}>
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </Link>
                                    </h3>
                                    <p className="mt-5 mb-3 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{post.seo_description || ''}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}