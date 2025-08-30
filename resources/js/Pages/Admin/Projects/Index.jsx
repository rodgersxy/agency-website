import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Index({ projects }) {
    // We get the entire props object first
    const { props } = usePage();
    // Then we can safely access flash, which might be undefined.
    const { flash } = props;

    return (
        <>
            <Head title="Manage Projects" />
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Projects</h1>
                <Link
                    href={route('admin.projects.create')}
                    className="px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition"
                >
                    Add New Project
                </Link>
            </div>

            {/* --- THIS IS THE CORRECTED PART --- */}
            {/* The '?.' safely checks if 'flash' exists before trying to access 'success'. */}
            {/* If flash is undefined, the expression short-circuits and does nothing. */}
            {flash?.success && (
                <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-md">
                    {flash.success}
                </div>
            )}
            
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Image</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Title</th>
                            <th scope="col" className="relative px-6 py-3"><span className="sr-only">Edit</span></th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        {projects.map((project) => (
                            <tr key={project.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <img src={project.image_url} alt={project.title} className="h-10 w-16 object-cover rounded" />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">{project.title}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <Link href={route('admin.projects.edit', project.id)} className="text-amber-600 hover:text-amber-900">Edit</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

Index.layout = page => <AdminLayout children={page} />;