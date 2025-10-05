import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { RxDashboard } from 'react-icons/rx';
import { GrProjects } from 'react-icons/gr';
import { FiMessageSquare } from 'react-icons/fi';
import { FaBlog } from 'react-icons/fa';

// A reusable NavLink component specific to the sidebar's styling
function NavLink({ href, active, children }) {
    const activeClasses = 'bg-amber-900 text-white';
    const inactiveClasses = 'text-gray-300 hover:bg-amber-700 hover:text-white';
    return (
        <Link
            href={href}
            className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                active ? activeClasses : inactiveClasses
            }`}
        >
            {children}
        </Link>
    );
}

export default function AdminSidebar() {
    const { url } = usePage();

    const menuItems = [
        { href: route('admin.dashboard'), label: 'Dashboard', icon: <RxDashboard className="mr-3 flex-shrink-0 h-5 w-5" /> },
        // These routes don't exist yet, but we'll add them later
        { href: route('admin.projects.index'), label: 'Projects', icon: <GrProjects className="mr-3 flex-shrink-0 h-5 w-5" /> },
        { href: route('admin.messages.index'), label: 'Messages', icon: <FiMessageSquare className="mr-3 flex-shrink-0 h-5 w-5" /> },
        { href: route('admin.blogs.index'), label: 'Blogs', icon: <FaBlog className="mr-3 flex-shrink-0 h-5 w-5" /> },
    ];

    return (
        <div className="flex flex-col flex-grow bg-amber-800 pt-5 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
                <Link href={route('home')} className="text-2xl font-bold text-white tracking-wider">
                    TECHLUP
                </Link>
            </div>
            <nav className="mt-8 flex-1 px-3 space-y-2">
                {menuItems.map((item) => (
                    <NavLink key={item.label} href={item.href} active={url.startsWith(item.href.split('?')[0])}>
                        {item.icon}
                        {item.label}
                    </NavLink>
                ))}
            </nav>
        </div>
    );
}