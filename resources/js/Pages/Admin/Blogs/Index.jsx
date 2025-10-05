import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Index({ blogs }) {
    const { flash } = usePage().props;

    return (
        <>
            <Head title="Manage Blogs" />
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Blogs</h1>
                <Link href={route('admin.blogs.create')} className="px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition">
                    Write New Post
                </Link>
            </div>

            {flash?.success && (<div className="mb-4 p-4 bg-green-100 text-green-800 rounded-md">{flash.success}</div>)}
            
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Title</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                            <th scope="col" className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        {blogs.map((blog) => (
                            <tr key={blog.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">{blog.title}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                    {blog.published_at ? (
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Published</span>
                                    ) : (
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Draft</span>
                                    )}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-4">
                                    <Link href={route('admin.blogs.edit', blog.id)} className="text-amber-600 hover:text-amber-900">Edit</Link>
                                    <Link
                                        href={route('admin.blogs.destroy', blog.id)}
                                        method="delete"
                                        as="button"
                                        className="text-red-600 hover:text-red-900"
                                        onBefore={() => confirm('Are you sure you want to delete this post?')}
                                    >
                                        Delete
                                    </Link>
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