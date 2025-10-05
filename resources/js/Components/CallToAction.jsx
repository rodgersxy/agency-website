// resources/js/Components/CallToAction.jsx
import React from 'react';
import { Link } from '@inertiajs/react';

export default function CallToAction() {
    return (
        <div className="relative isolate overflow-hidden bg-amber-600 px-6 py-16 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to elevate your digital presence?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-amber-100">
                Let's discuss how our expertise in web design, software development, and digital marketing can help your business grow.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                    href={route('contact')}
                    className="rounded-md bg-white px-5 py-2.5 text-base font-semibold text-amber-600 shadow-sm hover:bg-amber-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                    Get a Free Quote
                </Link>
                <Link href={route('services')} className="text-base font-semibold leading-6 text-white">
                    Learn more <span aria-hidden="true">→</span>
                </Link>
            </div>
            
            {/* Decorative background elements */}
            <svg
                viewBox="0 0 1024 1024"
                className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                aria-hidden="true"
            >
                <circle cx={512} cy={512} r={512} fill="url(#8d958450-c69f-4251-94bc-4e091a323369)" fillOpacity="0.7" />
                <defs>
                    <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
                        <stop stopColor="#fbbf24" />
                        <stop offset={1} stopColor="#f59e0b" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
    );
}