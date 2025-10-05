import React from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { FaRocket, FaCheckCircle, FaClock, FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import PricingSection from '@/Components/PricingSection';
import WhyChooseUs from '@/Components/WhyChooseUs';
import LatestBlogs from '@/Components/LatestBlogs';

// Best Practice: Keep feature data separate for easy updates.
const features = [
    { icon: <FaShieldAlt className="text-orange-500" />, text: 'Payment Integration' },
    { icon: <FaRocket className="text-purple-500" />, text: 'Modern, Responsive Design' },
    { icon: <FaCheckCircle className="text-green-500" />, text: 'SEO Optimization' },
    { icon: <FaClock className="text-blue-500" />, text: 'Fast Loading Speed' },
    
];

export default function Home({ latestBlogs }) {
  return (
    <>
      <Head title="cyberark technologies Web Design, Web Development & Software Solutions" description="cyberark technologies is a Kenyan web and software development agency helping SMEs build modern websites, e-commerce stores, and digital systems that grow their business online." />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-slate-800">
        <div className="container mx-auto max-w-5xl px-4 py-20 text-center sm:py-32">
          
          {/* Main Headline */}
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-7xl">
            <span className="block">We Build Websites &</span>
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Software That Grow With You
            </span>
          </h1>

         {/* Sub-headline */}
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-600 dark:text-slate-300">
            We don’t just build 
            <span className="font-semibold text-amber-600 text-2xl"> websites</span>, 
            <span className="font-semibold text-amber-600 text-2xl"> e-commerce</span>, and 
            <span className="font-semibold text-amber-600 text-2xl"> custom software</span> — 
            we create powerful online platforms that drive results. From sleek, user-friendly designs to strategies that attract and convert, we help businesses grow their digital presence with impact.
        </p>

          {/* Feature Bubbles */}
          <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 rounded-full bg-white dark:bg-slate-700 px-5 py-2 shadow-sm">
                {feature.icon}
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Call-to-Action Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href={route('contact')}
              className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
            >
              Get Started
              <FaArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={route('work')}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-8 py-3.5 text-base font-semibold text-slate-700 dark:text-slate-200 shadow-sm transition hover:scale-105 hover:bg-slate-50 dark:hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
            >
              View Our Work
            </Link>
          </div>

        </div>
      </div>
      
       <PricingSection />
       <WhyChooseUs />
       <LatestBlogs blogs={latestBlogs} />
       
      
    </>
  );
}

// Apply the persistent layout
Home.layout = page => <MainLayout children={page} />;