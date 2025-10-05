import React from 'react';
import { FaStar } from 'react-icons/fa';

// A helper function to render the star rating
const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(
            <FaStar key={i} className={i < rating ? 'text-amber-400' : 'text-gray-300'} />
        );
    }
    return <div className="flex">{stars}</div>;
};

export default function TestimonialCard({ name, rating, comment, source }) {
    return (
        <div className="flex flex-col rounded-2xl bg-white dark:bg-slate-800 shadow-lg p-8">
            <div className="flex items-center gap-x-4">
                {/* You could add a user avatar here if available */}
                <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{name}</div>
                    <div className="text-gray-600 dark:text-gray-400">From {source}</div>
                </div>
            </div>
            <div className="mt-4 flex items-center gap-x-1">
                <StarRating rating={rating} />
            </div>
            <blockquote className="mt-6 text-gray-700 dark:text-gray-300">
                <p>{`“${comment}”`}</p>
            </blockquote>
        </div>
    );
}