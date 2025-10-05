// resources/js/Pages/Admin/Blogs/Edit.jsx
import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import InputError from '@/Components/InputError';

export default function Edit({ blog }) {
    const { data, setData, post, processing, errors, progress } = useForm({
        title: blog.title || '',
        content: blog.content || '',
        image: null,
        seo_title: blog.seo_title || '',
        seo_description: blog.seo_description || '',
        published_at: blog.published_at ? new Date(blog.published_at).toISOString().slice(0, 16) : '',
        _method: 'PUT',
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route('admin.blogs.update', blog.id));
    }

    return (
        <>
            <Head title={`Edit Post: ${blog.title}`} />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Edit Post</h1>
            
            <form onSubmit={handleSubmit} className="mt-6 space-y-6 max-w-4xl">
                            <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                                {/* Title */}
                                <div>
                                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
                                    <input id="title" type="text" value={data.title} onChange={(e) => setData('title', e.target.value)} className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-sm" />
                                    <InputError message={errors.title} className="mt-2" />
                                </div>
            
                                {/* Content (Body) */}
                                <div className="mt-4">
                                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Content</label>
                                    <textarea id="content" value={data.content} onChange={(e) => setData('content', e.target.value)} rows="10" className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-sm" />
                                    <InputError message={errors.content} className="mt-2" />
                                </div>
            
                                {/* Featured Image */}
                                <div className="mt-4">
                                    <label htmlFor="image" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Featured Image</label>
                                    <input id="image" type="file" onChange={(e) => setData('image', e.target.files[0])} className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100" />
                                    {progress && (<progress value={progress.percentage} max="100" className="w-full mt-2">{progress.percentage}%</progress>)}
                                    <InputError message={errors.image} className="mt-2" />
                                </div>
                            </div>
            
                            {/* SEO Section */}
                            <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">SEO Settings</h3>
                                <div className="mt-4">
                                    <label htmlFor="seo_title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">SEO Title (Optional)</label>
                                    <input id="seo_title" type="text" value={data.seo_title} onChange={(e) => setData('seo_title', e.target.value)} className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-sm" />
                                    <InputError message={errors.seo_title} className="mt-2" />
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="seo_description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">SEO Description (Optional)</label>
                                    <textarea id="seo_description" value={data.seo_description} onChange={(e) => setData('seo_description', e.target.value)} rows="3" className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-sm" />
                                    <InputError message={errors.seo_description} className="mt-2" />
                                </div>
                            </div>
            
                            {/* Publish Section */}
                            <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Publish</h3>
                                <div className="mt-4">
                                    <label htmlFor="published_at" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Publish Date (Optional)</label>
                                    <input id="published_at" type="datetime-local" value={data.published_at} onChange={(e) => setData('published_at', e.target.value)} className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-sm" />
                                    <p className="text-xs text-gray-500 mt-1">Leave blank to keep as a draft.</p>
                                    <InputError message={errors.published_at} className="mt-2" />
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-end space-x-4">
                                <Link href={route('admin.blogs.index')} className="text-sm text-gray-600 dark:text-gray-400 hover:underline">Cancel</Link>
                                <button type="submit" disabled={processing} className="px-6 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 disabled:bg-amber-300 transition">
                                    {processing ? 'Saving...' : 'Save Post'}
                                </button>
                            </div>
              </form>
        </>
    );
}

Edit.layout = page => <AdminLayout children={page} />;