// resources/js/Pages/Admin/Blogs/Create.jsx
import React, { useEffect, useRef } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import InputError from '@/Components/InputError';
import 'trix/dist/trix.css';
import 'trix';

export default function Create() {
    const trixRef = useRef(null);
    const { data, setData, post, processing, errors, progress } = useForm({
        title: '',
        content: '',
        image: null,
        seo_title: '',
        seo_description: '',
        published_at: '',
    });

    useEffect(() => {
        const trixEditor = trixRef.current;
        
        if (trixEditor) {
            // Set initial content
            trixEditor.editor.loadHTML(data.content);
            
            // Listen for changes
            const handleTrixChange = (event) => {
                setData('content', event.target.innerHTML);
            };
            
            trixEditor.addEventListener('trix-change', handleTrixChange);
            
            // Cleanup
            return () => {
                trixEditor.removeEventListener('trix-change', handleTrixChange);
            };
        }
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        post(route('admin.blogs.store'));
    }

    return (
        <>
            <Head title="Write a New Post" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Write a New Post</h1>
            
            <form onSubmit={handleSubmit} className="mt-6 space-y-6 max-w-4xl">
                <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                    {/* Title */}
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Title
                        </label>
                        <input 
                            id="title" 
                            type="text" 
                            value={data.title} 
                            onChange={(e) => setData('title', e.target.value)} 
                            className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded-md shadow-sm focus:border-amber-500 focus:ring-amber-500" 
                            placeholder="Enter your blog post title"
                        />
                        <InputError message={errors.title} className="mt-2" />
                    </div>

                    {/* Content (Body) with Trix Editor */}
                    <div className="mt-6">
                        <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Content
                        </label>
                        <input 
                            id="content" 
                            type="hidden" 
                            name="content" 
                            value={data.content}
                        />
                        <trix-editor 
                            ref={trixRef}
                            input="content"
                            className="trix-content prose max-w-none border border-gray-300 dark:border-gray-600 rounded-md min-h-[400px]"
                        />
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                            Use the toolbar above to format your content with headings, bold, italic, lists, links, and more.
                        </p>
                        <InputError message={errors.content} className="mt-2" />
                    </div>

                    {/* Featured Image */}
                    <div className="mt-6">
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Featured Image
                        </label>
                        <input 
                            id="image" 
                            type="file" 
                            accept="image/*"
                            onChange={(e) => setData('image', e.target.files[0])} 
                            className="mt-1 block w-full text-sm text-gray-500 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100 dark:file:bg-amber-900 dark:file:text-amber-100" 
                        />
                        {progress && (
                            <div className="mt-2">
                                <progress value={progress.percentage} max="100" className="w-full h-2 rounded-full">
                                    {progress.percentage}%
                                </progress>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                    {progress.percentage}% uploaded
                                </p>
                            </div>
                        )}
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            Recommended size: 1200x630px (JPG or PNG)
                        </p>
                        <InputError message={errors.image} className="mt-2" />
                    </div>
                </div>

                {/* SEO Section */}
                <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                        SEO Settings
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="seo_title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                SEO Title <span className="text-gray-500">(Optional)</span>
                            </label>
                            <input 
                                id="seo_title" 
                                type="text" 
                                value={data.seo_title} 
                                onChange={(e) => setData('seo_title', e.target.value)} 
                                className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded-md shadow-sm focus:border-amber-500 focus:ring-amber-500" 
                                placeholder="Leave blank to use post title"
                                maxLength="60"
                            />
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                {data.seo_title.length}/60 characters
                            </p>
                            <InputError message={errors.seo_title} className="mt-2" />
                        </div>
                        <div>
                            <label htmlFor="seo_description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                SEO Description <span className="text-gray-500">(Optional)</span>
                            </label>
                            <textarea 
                                id="seo_description" 
                                value={data.seo_description} 
                                onChange={(e) => setData('seo_description', e.target.value)} 
                                rows="3" 
                                className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded-md shadow-sm focus:border-amber-500 focus:ring-amber-500" 
                                placeholder="Brief description for search engines"
                                maxLength="160"
                            />
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                {data.seo_description.length}/160 characters
                            </p>
                            <InputError message={errors.seo_description} className="mt-2" />
                        </div>
                    </div>
                </div>

                {/* Publish Section */}
                <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                        Publish
                    </h3>
                    <div>
                        <label htmlFor="published_at" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Publish Date <span className="text-gray-500">(Optional)</span>
                        </label>
                        <input 
                            id="published_at" 
                            type="datetime-local" 
                            value={data.published_at} 
                            onChange={(e) => setData('published_at', e.target.value)} 
                            className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded-md shadow-sm focus:border-amber-500 focus:ring-amber-500" 
                        />
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            Leave blank to keep as a draft. Set a future date to schedule publication.
                        </p>
                        <InputError message={errors.published_at} className="mt-2" />
                    </div>
                </div>
                
                <div className="flex items-center justify-between">
                    <Link 
                        href={route('admin.blogs.index')} 
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition"
                    >
                        ← Back to Posts
                    </Link>
                    <button 
                        type="submit" 
                        disabled={processing} 
                        className="px-6 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 disabled:bg-amber-400 disabled:cursor-not-allowed transition shadow-sm hover:shadow-md"
                    >
                        {processing ? 'Saving...' : 'Save Post'}
                    </button>
                </div>
            </form>
        </>
    );
}

Create.layout = page => <AdminLayout children={page} />;