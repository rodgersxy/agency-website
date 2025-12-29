import React from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { FaRocket, FaMobileAlt, FaGlobe, FaShoppingCart, FaArrowRight } from 'react-icons/fa';
import PricingSection from '@/Components/PricingSection';
import WhyChooseUs from '@/Components/WhyChooseUs';
import LatestBlogs from '@/Components/LatestBlogs';

// UPDATED: Content covers Web & Mobile Apps, but styling matches your Orange theme
const features = [
    { 
        icon: <FaGlobe className="text-blue-500 h-6 w-6" />, 
        title: 'Web Applications & SaaS', 
        text: 'Scalable, cloud-based software solutions designed to run your business online.' 
    },
    { 
        icon: <FaMobileAlt className="text-purple-500 h-6 w-6" />, 
        title: 'Mobile App Development', 
        text: 'High-quality Android & iOS apps that engage users and extend your reach.' 
    },
    { 
        icon: <FaRocket className="text-red-500 h-6 w-6" />, 
        title: 'MVP for Startups', 
        text: 'Validate your business idea fast with a cost-effective Minimum Viable Product.' 
    },
    { 
        icon: <FaShoppingCart className="text-orange-500 h-6 w-6" />, 
        title: 'E-Commerce Systems', 
        text: 'Secure online stores with integrated M-Pesa & card payment gateways.' 
    },
];

export default function Home({ latestBlogs }) {
  return (
    <>
      <Head 
        title="Cyberark Technologies | Web Apps, Mobile Apps & SaaS Development Kenya" 
        description="Cyberark Technologies builds custom Web Applications, Mobile Apps, SaaS platforms, and MVPs for startups and businesses in Kenya." 
      />
      
      {/* HERO SECTION */}
      <div className="relative overflow-hidden bg-white dark:bg-slate-900">
        
        {/* Background Decorative Elements - KEPT ORANGE */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 transform">
            <div className="h-[400px] w-[800px] bg-orange-500/20 blur-[100px] rounded-full opacity-50 dark:opacity-20 pointer-events-none"></div>
        </div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

        <div className="relative container mx-auto max-w-7xl px-4 py-20 text-center sm:py-32 lg:py-40">
          
          {/* Trust Badge - KEPT ORANGE */}
          <div className="mb-8 flex justify-center">
            <span className="relative rounded-full bg-orange-50 px-4 py-1.5 text-sm leading-6 text-orange-600 ring-1 ring-inset ring-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:ring-orange-800">
              Web • Mobile • Software • Strategy
            </span>
          </div>

          {/* Main Headline - KEPT ORANGE GRADIENT */}
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl md:text-7xl mb-8">
            <span className="block">We Build Scalable</span>
            <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              Web & Mobile Applications
            </span>
          </h1>

          {/* Sub-headline - UPDATED TEXT, ORANGE HIGHLIGHTS */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            From idea to deployment, we engineer powerful 
            <span className="text-orange-600 dark:text-orange-400 font-semibold"> Custom Web Apps</span>, 
            <span className="text-orange-600 dark:text-orange-400 font-semibold"> Mobile Apps (iOS/Android)</span>, and 
            <span className="text-orange-600 dark:text-orange-400 font-semibold"> SaaS Platforms </span> 
            that help Kenyan businesses and startups dominate their market.
          </p>

          {/* Call-to-Action Buttons - KEPT ORANGE */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              href={route('contact')}
              className="w-full sm:w-auto group inline-flex items-center justify-center rounded-full bg-orange-600 px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-orange-500/30 transition-all hover:bg-orange-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Start Your Project
              <FaArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link
              href={route('work')}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 transition-all hover:bg-slate-50 hover:text-orange-600 dark:bg-slate-800 dark:text-slate-200 dark:ring-slate-700 dark:hover:bg-slate-700"
            >
              View Portfolio
            </Link>
          </div>

          {/* Features Grid (4 Columns) - KEPT CLEAN STYLE */}
          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mx-auto max-w-7xl">
             {features.map((feature, index) => (
               <div key={index} className="flex flex-col items-center p-6 rounded-2xl bg-white/60 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-100 dark:border-slate-700 shadow-sm transition hover:shadow-md hover:-translate-y-1">
                 <div className="mb-4 p-3 bg-slate-50 dark:bg-slate-700 rounded-full ring-1 ring-slate-100 dark:ring-slate-600">
                    {feature.icon}
                 </div>
                 <h3 className="font-bold text-lg text-slate-900 dark:text-white">{feature.title}</h3>
                 <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">{feature.text}</p>
               </div>
             ))}
          </div>

        </div>
      </div>
      
       <PricingSection />
       <WhyChooseUs />
       <LatestBlogs blogs={latestBlogs} />
       
    </>
  );
}

Home.layout = page => <MainLayout children={page} />;