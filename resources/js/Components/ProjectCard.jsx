// resources/js/Components/ProjectCard.jsx
import React, { useState } from 'react'; // <-- THIS IS THE CORRECTED LINE
import { FaArrowRight } from 'react-icons/fa';

export default function ProjectCard({ project }) {
    // State to track if the description is expanded for this specific card
    const [isExpanded, setIsExpanded] = useState(false);

    // A helper to determine if the description is long enough to need a "Read more" button
    const isLongDescription = project.description.length > 120; // You can adjust this character limit

    return (
        <article
            key={project.id}
            className="group flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        >
            <h3 className="px-6 pt-6 text-xl font-bold leading-6 text-orange-500 dark:text-gray-100">
                {project.title}
            </h3>
            
            <div className="relative mt-4 h-56 w-full">
                <img
                    src={project.image_url}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            <div className="flex flex-1 flex-col justify-between p-6">
                <div className="flex-1">
                    {/* The description now has conditional classes */}
                    <p className={`mt-2 text-base leading-7 text-gray-600 dark:text-gray-300 transition-all duration-300 ${isExpanded ? '' : 'line-clamp-3'}`}>
                        {project.description}
                    </p>

                    {/* Conditionally render the "Read more/less" button */}
                    {isLongDescription && (
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="mt-2 text-sm font-semibold text-amber-600 hover:text-amber-700"
                        >
                            {isExpanded ? 'Read less' : 'Read more'}
                        </button>
                    )}

                    <div className="mt-6 flex flex-wrap gap-2">
                        {project.technologies.split(',').map((tech) => (
                            <span
                                key={tech.trim()}
                                className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800"
                            >
                                {tech.trim()}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-8">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-x-2 text-base font-semibold text-amber-600 transition-all duration-300 group-hover:gap-x-3"
                    >
                        View Project
                        <FaArrowRight aria-hidden="true" />
                    </a>
                </div>
            </div>
        </article>
    );
}