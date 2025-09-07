// resources/js/Pages/Admin/Messages/Index.jsx
import React, { useState } from 'react';
import { Head, Link, usePage } from '@inertiajs/react'; // Import Link
import AdminLayout from '@/Layouts/AdminLayout';
import { FaTrash } from 'react-icons/fa'; // Import a trash icon

// A reusable component for a single message card
function MessageCard({ message }) {
    const [isOpen, setIsOpen] = useState(false);
    const formattedDate = new Date(message.created_at).toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short',
    });

    return (
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left p-4 focus:outline-none"
            >
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">From: {message.name} &lt;{message.email}&gt;</p>
                        <p className="font-semibold text-lg text-gray-900 dark:text-gray-100">{message.title}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-sm text-gray-500 dark:text-gray-400">{formattedDate}</p>
                    </div>
                </div>
            </button>
            {isOpen && (
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="whitespace-pre-wrap text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-md">
                        {message.message}
                    </p>
                    {/* --- ADD SINGLE DELETE BUTTON HERE --- */}
                    <div className="mt-4 text-right">
                        <Link
                            href={route('admin.messages.destroy', message.id)}
                            method="delete"
                            as="button"
                            className="text-sm text-red-500 hover:text-red-700"
                            // 'onBefore' shows a confirmation dialog. If the user cancels, the request is aborted.
                            onBefore={() => confirm('Are you sure you want to delete this message?')}
                        >
                            Delete this message
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default function Index({ messages }) {
    const { flash } = usePage().props;

    return (
        <>
            <Head title="Inbox" />
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Messages</h1>
                
                {/* --- ADD DELETE ALL BUTTON HERE --- */}
                {messages.length > 0 && (
                     <Link
                        href={route('admin.messages.destroyAll')}
                        method="delete"
                        as="button"
                        className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition disabled:opacity-50"
                        onBefore={() => confirm('Are you sure you want to delete ALL messages? This action cannot be undone.')}
                    >
                        <FaTrash />
                        Delete All
                    </Link>
                )}
            </div>

            {/* Flash Message for success feedback */}
            {flash?.success && (
                <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-md">
                    {flash.success}
                </div>
            )}

            <div className="space-y-4">
                {messages.length > 0 ? (
                    messages.map(message => <MessageCard key={message.id} message={message} />)
                ) : (
                    <div className="text-center bg-white dark:bg-gray-800 rounded-lg p-12">
                         <p className="text-gray-700 dark:text-gray-300">You have no new messages.</p>
                    </div>
                )}
            </div>
        </>
    );
}

Index.layout = page => <AdminLayout children={page} />;