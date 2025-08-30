import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { HiMenuAlt2 } from 'react-icons/hi';

export default function AdminHeader({ setSidebarOpen }) {
    const { auth } = usePage().props;

    return (
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white dark:bg-gray-800 shadow">
            <button
                type="button"
                className="px-4 border-r border-gray-200 dark:border-gray-700 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500 md:hidden"
                onClick={() => setSidebarOpen(true)}
            >
                <span className="sr-only">Open sidebar</span>
                <HiMenuAlt2 className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex-1 px-4 flex justify-between">
                <div className="flex-1 flex">
                    {/* Search bar could go here in the future */}
                </div>
                <div className="ml-4 flex items-center md:ml-6">
                    <span className="text-sm text-gray-700 dark:text-gray-300 mr-4">
                        Welcome, {auth.user.name}
                    </span>
                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-amber-600"
                    >
                        Log Out
                    </Link>
                </div>
            </div>
        </div>
    );
}