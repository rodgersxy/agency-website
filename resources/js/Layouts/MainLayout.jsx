import React from 'react';
import Navigation from '@/Components/Navigation'; 
import Testimonials from '@/Components/Testimonials';
import Footer from '@/Components/Footer';       

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Main Navigation Bar */}
      <Navigation />

      {/* Page Content */}
      <main>
        {children}
      </main>
      <Testimonials />

      {/* Footer */}
      <Footer />
    </div>
  );
}