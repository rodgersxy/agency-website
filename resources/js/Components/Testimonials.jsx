import React from 'react';
import TestimonialCard from '@/Components/TestimonialCard';

// --- Your Testimonial Data ---
// You can replace this with real data from your Google Business Profile.
const testimonials = [
    {
        name: 'Winrose',
        rating: 5,
        comment: "Cyberark Technologies delivered a fantastic website for my business in Nairobi. Their team understood the local market and integrated M-Pesa flawlessly. Highly recommended for any Kenyan SME!",
        source: 'Google Business',
    },
    {
        name: 'Andrew Ongeri',
        rating: 5,
        comment: "The best web design agency in Kenya, hands down. They listened to our needs and created a realestate platform that has increased our sales and boosted our online presence. The support has been excellent.",
        source: 'Google Business',
    },
    {
        name: 'Jonah',
        rating: 4,
        comment: "As an NGO expanding into Kenya, we needed a team that understood the culture and local community. cyberark technologies provided a great solution with a professional touch and reliable communication.",
        source: 'Google Business',
    },
];


export default function Testimonials() {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-amber-600">Testimonials</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        What Our Clients in Kenya Say
                    </p>
                </div>
                <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard 
                                key={index}
                                name={testimonial.name}
                                rating={testimonial.rating}
                                comment={testimonial.comment}
                                source={testimonial.source}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}