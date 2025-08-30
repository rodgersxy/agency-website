// resources/js/Pages/Admin/Projects/Edit.jsx
import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import InputError from '@/Components/InputError';

export default function Edit({ project }) { // Receive the project prop
    // Initialize the form with the project's existing data
    const { data, setData, post, processing, errors, progress } = useForm({
        title: project.title || '',
        image: null, // Image is null by default, only set if user uploads a new one
        description: project.description || '',
        link: project.link || '',
        technologies: project.technologies || '',
        _method: 'PUT', // Add this to spoof the PUT method
    });

    function handleSubmit(e) {
        e.preventDefault();
        // Use POST because HTML forms don't support PUT with multipart/form-data.
        // Laravel will read the '_method' field and treat it as a PUT request.
        post(route('admin.projects.update', project.id));
    }

    return (
        <>
            <Head title="Edit Project" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Edit Project: {project.title}</h1>
            
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 max-w-2xl">
                <form onSubmit={handleSubmit}>
                    {/* Title */}
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
                        <input id="title" type="text" value={data.title} onChange={(e) => setData('title', e.target.value)} className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-sm" />
                        <InputError message={errors.title} className="mt-2" />
                    </div>

                    {/* Image */}
                    <div className="mb-4">
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Project Image (Optional)</label>
                        {project.image_url && <img src={project.image_url} alt="Current project image" className="mt-2 w-48 h-auto rounded-md" />}
                        <input id="image" type="file" onChange={(e) => setData('image', e.target.files[0])} className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100" />
                        {progress && (<progress value={progress.percentage} max="100" className="w-full mt-2">{progress.percentage}%</progress>)}
                        <InputError message={errors.image} className="mt-2" />
                        <p className="text-xs text-gray-500 mt-1">Leave blank to keep the current image.</p>
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Short Description</label>
                        <textarea id="description" value={data.description} onChange={(e) => setData('description', e.target.value)} rows="4" className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-sm" />
                        <InputError message={errors.description} className="mt-2" />
                    </div>
                    
                    {/* Link */}
                    <div className="mb-4">
                        <label htmlFor="link" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Project Link</label>
                        <input id="link" type="url" value={data.link} onChange={(e) => setData('link', e.target.value)} className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-sm" />
                        <InputError message={errors.link} className="mt-2" />
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                        <label htmlFor="technologies" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Technologies Used</label>
                        <input id="technologies" type="text" value={data.technologies} onChange={(e) => setData('technologies', e.target.value)} className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md shadow-sm" />
                        <InputError message={errors.technologies} className="mt-2" />
                    </div>

                    <div className="flex items-center justify-end space-x-4 mt-6">
                        <Link href={route('admin.projects.index')} className="text-sm text-gray-600 dark:text-gray-400 hover:underline">Cancel</Link>
                        <button type="submit" disabled={processing} className="px-6 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 disabled:bg-amber-300 transition">
                            {processing ? 'Updating...' : 'Update Project'}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

Edit.layout = page => <AdminLayout children={page} />;