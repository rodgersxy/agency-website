// resources/js/Components/ShareButtons.jsx
import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";

export default function ShareButtons({ url, title }) {
    // We encode the URL and title to ensure they are safe to pass as URL parameters
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    const socialLinks = [
        {
            name: 'Facebook',
            href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            icon: FaFacebook,
            color: 'text-blue-600 hover:text-blue-700',
        },
        {
            name: 'Twitter',
            href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
            icon: FaSquareXTwitter,
            color: 'text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white',
        },
        {
            name: 'LinkedIn',
            href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
            icon: FaLinkedin,
            color: 'text-blue-700 hover:text-blue-800',
        },
    ];

    return (
        <div className="flex items-center gap-x-6">
            <p className="font-semibold text-gray-900 dark:text-white">Share this post:</p>
            <div className="flex gap-x-4">
                {socialLinks.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`transition-transform hover:scale-110 ${item.color}`}
                    >
                        <span className="sr-only">{item.name}</span>
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                    </a>
                ))}
            </div>
        </div>
    );
}