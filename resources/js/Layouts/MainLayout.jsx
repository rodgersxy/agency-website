import React from 'react';
import Navigation from '@/Components/Navigation'; // We will create this next
import Footer from '@/Components/Footer';       // And this one too

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Main Navigation Bar */}
      <Navigation />

      {/* Page Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}