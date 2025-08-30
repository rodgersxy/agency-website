import React from 'react';
import { Head } from '@inertiajs/react';

export default function About() {
  return (
    <>
      <Head title="About Us" />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Our Agency</h1>
          <p className="text-gray-600">
            We are a team of passionate developers dedicated to building high-quality software solutions.
          </p>
        </div>
      </div>
    </>
  );
}