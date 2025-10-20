// resources/js/Components/Faq.jsx
import React, { useState } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { FaCircleArrowUp } from "react-icons/fa6";
import { 
    FaPalette, 
    FaShoppingCart, 
    FaMobileAlt, 
    FaRobot, 
    FaSearchengin, 
    FaServer,
    FaCheckCircle,
    FaGlobe,
    FaIndustry,
    FaRocket,
    FaEnvelope
} from "react-icons/fa";

const faqs = [
    {
        question: 'What services does Cyberark Technologies offer?',
        answer: `Cyberark Technologies is a full-service web design, software development, and digital solutions agency in Kenya. We specialize in:`,
        items: [
            { text: 'Custom Website Design & Development', icon: FaPalette },
            { text: 'E-Commerce Websites & Portals', icon: FaShoppingCart },
            { text: 'Mobile App Development (Android, iOS)', icon: FaMobileAlt },
            { text: 'Custom Software & Automation Solutions', icon: FaRobot },
            { text: 'SEO & Digital Marketing', icon: FaSearchengin },
            { text: 'Web Hosting & Maintenance', icon: FaServer }
        ]
    },
    {
        question: 'Why choose Cyberark over other web design companies in Kenya?',
        answer: `At Cyberark Technologies, we blend technical excellence, AI-driven innovation, business intelligence, and deep local market understanding to create solutions that go beyond traditional web design.

Unlike many generic agencies, we focus on long-term digital growth — not just beautiful websites. Every solution we build is SEO-optimized, mobile-responsive, secure, and powered by smart analytics to help you make data-informed decisions.

We provide end-to-end digital solutions — from design, development, and automation to SEO, content strategy, maintenance, and marketing intelligence — giving you a complete, AI-enhanced digital ecosystem that drives visibility, engagement, and measurable business results.`,
    },
    {
        question: 'Can you redesign or improve my existing website?',
        answer: `Definitely. If your current website looks outdated, loads slowly, or doesn't convert visitors, our team can revamp it for modern design, performance, and SEO. We conduct a full website audit, recommend improvements, and rebuild your online presence to meet current business goals and trends.`,
    },
    {
        question: 'What industries do you specialize in?',
        answer: `We have experience working with businesses across multiple sectors, including:`,
        items: [
            { text: 'Hospitality & Travel', icon: FaGlobe },
            { text: 'Real Estate', icon: FaIndustry },
            { text: 'Law Firm & Legal', icon: FaCheckCircle },
            { text: 'Education & E-Learning', icon: FaRocket },
            { text: 'NGOs & Public Sector', icon: FaCheckCircle },
            { text: 'E-Commerce & Retail', icon: FaShoppingCart },
            { text: 'Financial Services & SACCOs', icon: FaCheckCircle }
        ]
    },
    {
        question: 'Do you work with clients outside Kenya?',
        answer: `Yes. While based in Kenya, we serve clients across Africa, Europe, and the Middle East. Our communication and project management tools allow seamless collaboration regardless of location.`,
    },
    {
        question: 'Are your websites SEO-friendly?',
        answer: `Yes. Every website we build is fully optimized for search engines. We implement SEO best practices such as:`,
        items: [
            { text: 'Optimized meta tags and structure', icon: FaCheckCircle },
            { text: 'Fast page load speeds', icon: FaCheckCircle },
            { text: 'Keyword-rich content strategy', icon: FaCheckCircle },
            { text: 'Mobile-first responsive design', icon: FaCheckCircle }
        ],
        outro: 'Our goal is to help your website rank higher on Google and attract organic traffic that converts.'
    },
    {
        question: 'Can you help me with domain registration and hosting?',
        answer: `Yes. We offer domain registration, SSL certification, and premium web hosting in partnership with reliable local and international providers. Our hosting ensures 99.9% uptime, speed, and security — essential for SEO and user experience.`,
    },
    {
        question: 'How can I get started with Cyberark Technologies?',
        answer: `It's simple! Reach out via our contact page to get a free, no-obligation quote. You can also email us directly at`,
        email: 'info@cyberark.co.ke'
    },
];

const half = Math.ceil(faqs.length / 2);
const firstColumnFaqs = faqs.slice(0, half);
const secondColumnFaqs = faqs.slice(half);

function FaqItem({ faq, open, toggle }) {
    return (
        <div className="rounded-lg bg-gray-50 dark:bg-gray-900/50 p-6 hover:shadow-md transition-shadow duration-200">
            <dt>
                <button onClick={toggle} className="flex w-full items-start justify-between text-left text-gray-900 dark:text-white">
                    <span className="text-base font-semibold leading-7">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center flex-shrink-0">
                        <FaCircleArrowUp
                            className={`${open ? 'rotate-180 text-amber-600' : 'text-gray-400'} h-6 w-6 transform transition-all duration-200`}
                        />
                    </span>
                </button>
            </dt>
            <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform -translate-y-2 opacity-0"
                enterTo="transform translate-y-0 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform translate-y-0 opacity-100"
                leaveTo="transform -translate-y-2 opacity-0"
            >
                <dd className="mt-4 pr-12">
                    <p className="text-base leading-7 text-gray-600 dark:text-gray-300 whitespace-pre-line">
                        {faq.answer}
                    </p>
                    
                    {/* Render items with icons if they exist */}
                    {faq.items && (
                        <ul className="mt-4 space-y-3">
                            {faq.items.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                        <Icon className="w-5 h-5 text-amber-600 dark:text-amber-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-base leading-7">{item.text}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                    
                    {/* Render outro text if exists */}
                    {faq.outro && (
                        <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                            {faq.outro}
                        </p>
                    )}
                    
                    {/* Render email if exists */}
                    {faq.email && (
                        <a 
                            href={`mailto:${faq.email}`}
                            className="inline-flex items-center gap-2 mt-2 text-amber-600 dark:text-amber-500 font-semibold hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
                        >
                            <FaEnvelope className="w-4 h-4" />
                            {faq.email}
                        </a>
                    )}
                </dd>
            </Transition>
        </div>
    );
}

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-white dark:bg-slate-800">
            <div className="mx-auto max-w-7xl px-6 md:py-8 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                        Everything you need to know before starting your project with cyberark technologies, the leading web design agency in Kenya.
                    </p>
                </div>
                <div className="mt-16 mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-2">
                        {/* First Column */}
                        <div className="space-y-2">
                            {firstColumnFaqs.map((faq, index) => (
                                <FaqItem
                                    key={faq.question}
                                    faq={faq}
                                    open={openIndex === index}
                                    toggle={() => handleToggle(index)}
                                />
                            ))}
                        </div>
                        {/* Second Column */}
                        <div className="space-y-2">
                            {secondColumnFaqs.map((faq, index) => {
                                const overallIndex = index + firstColumnFaqs.length;
                                return (
                                    <FaqItem
                                        key={faq.question}
                                        faq={faq}
                                        open={openIndex === overallIndex}
                                        toggle={() => handleToggle(overallIndex)}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}