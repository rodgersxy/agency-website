import React from 'react';
import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

// Accept the 'stats' prop
export default function Dashboard({ stats }) {
    return (
        <>
            <Head title="Admin Dashboard" />
            
            {/* Page Header */}
            <div>
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Dashboard</h1>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                    Welcome to the admin panel. Here you can manage your site's content.
                </p>
            </div>
            
            {/* Main Content */}
            <div className="mt-8">
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                    <div className="p-5">
                        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                            Quick Stats
                        </h3>
                        {/* Adjust the grid to have 2 columns now */}
                        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                            {/* Total Projects Card (now dynamic) */}
                            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">Total Projects</p>
                                <p className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-100">
                                    {stats.projects}
                                </p>
                            </div>
                            
                            {/* Blog Posts Card (now dynamic) */}
                            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">Blog Posts</p>
                                <p className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-100">
                                    {stats.blogs}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Dashboard.layout = page => <AdminLayout children={page} />;