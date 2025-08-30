import React from 'react';
import { Link } from '@inertiajs/react';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";

// --- Social Media Links ---
// Keeping this data in an array makes the component cleaner and easier to update.
const socialLinks = [
    { name: 'Facebook', href: '#', icon: FaFacebook },
    { name: 'LinkedIn', href: '#', icon: FaLinkedin },
    { name: 'GitHub', href: '#', icon: FaGithub },
    { name: 'Twitter', href: '#', icon: FaSquareXTwitter },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-gray-900 border-t border-slate-700 dark:border-gray-700 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 md:order-2">
          {socialLinks.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-amber-500 transition-colors duration-300">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-400">
            &copy; {currentYear} UJUZIWEB Inc. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}