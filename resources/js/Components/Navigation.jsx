import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

function NavLink({ href, children }) {
    const isActive = route().current(href);
    const activeClasses = 'bg-amber-100 text-amber-700 font-semibold';
    const inactiveClasses = 'text-gray-600 dark:text-gray-300 hover:bg-amber-50 hover:text-amber-600 dark:hover:bg-gray-700';

    return (
        <Link
            href={route(href)}
            className={`inline-flex items-center px-4 py-2 rounded-lg text-lg font-medium transition-colors duration-200 ease-in-out ${
                isActive ? activeClasses : inactiveClasses
            }`}
        >
            {children}
        </Link>
    );
}

export default function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: 'home', text: 'Home' },
        { href: 'services', text: 'Services' },
        { href: 'work', text: 'Our Work' },
        { href: 'blog.index', text: 'Blog' },
        { href: 'contact', text: 'Contact' },
    ];

    return (
        <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-28">
                    <div className="flex-shrink-0 text-center">
    {/* The Link now wraps the image and is a flex container to center it */}
    <Link 
        href={route('home')} 
        className="flex justify-center mb-2" // Added margin-bottom for spacing
    >
        
        <img 
            src="/images/cyberarklogo-m.png" // Path to your logo in the 'public' folder
            alt="cyberark technologies Logo"     // IMPORTANT: Always add an alt tag for accessibility
            className="h-24 w-auto" // Control the logo size here. 'h-12' is 48px. Adjust as needed.
        />
    </Link>
    {/* <p className="text-sm text-gray-600 tracking-wide">
        Building Websites & Software that Grow Businesses
    </p> */}
</div>

                    <div className="hidden md:flex md:items-center md:space-x-2">
                        {navLinks.map((link) => (
                            <NavLink key={link.href} href={link.href}>
                                {link.text}
                            </NavLink>
                        ))}
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-amber-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            {mobileMenuOpen ? (
                                <HiX className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <HiMenuAlt3 className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                    mobileMenuOpen ? 'max-h-96' : 'max-h-0'
                }`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navLinks.map((link) => (
                         <Link
                            key={link.href}
                            href={route(link.href)}
                            // THIS IS THE LINE WE ADDED
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block px-3 py-2 rounded-md text-base font-medium ${
                                route().current(link.href)
                                ? 'bg-amber-100 text-amber-700 font-semibold'
                                : 'text-gray-600 dark:text-gray-300 hover:bg-amber-50 hover:text-amber-600'
                            }`}
                         >
                            {link.text}
                         </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}