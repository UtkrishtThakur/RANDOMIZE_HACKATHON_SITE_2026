"use client";
import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <m.div
            variants={fadeInUp}
            className="border-b border-white/10 last:border-b-0"
        >
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
            >
                <span className={`text-lg transition-colors font-medium ${isOpen ? 'text-purple-400' : 'text-zinc-200 group-hover:text-white'}`}>
                    {question}
                </span>
                <span className={`ml-6 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <svg className={`w-6 h-6 ${isOpen ? 'text-purple-400' : 'text-zinc-500 group-hover:text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <m.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-zinc-400 leading-relaxed">
                            {answer}
                        </p>
                    </m.div>
                )}
            </AnimatePresence>
        </m.div>
    );
};

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState(null);

    const questions = [
        {
            question: "Who can participate in the hackathon?",
            answer: "We welcome students from all backgrounds! Whether you're a coder, designer, or just passionate about tech, there's a place for you. Participants must complete the registration process to take part."
        },
        {
            question: "Can we start working on our project before the hackathon begins??",
            answer: "No, all projects must be developed during the official 24-hour hackathon period."
        },
        {
            question: "Will food and refreshments be provided?",
            answer: "Food and refreshments will be available on a paid basis. Participants can order from the designated outlets, and the menu will be shared prior to or during the event."
        },
        {
            question: "Is it mandatory to stay overnight?",
            answer: "Yes, since this is a 24-hour hackathon, participants are expected to stay at the venue for atleast a certian time to be informed."
        },
        {
            question: "Do I need to know how to code?",
            answer: "While coding is a big part of it, hackathons are also about ideation, design, and problem-solving. If you're willing to learn, you're welcome to join!"
        },
        {
            question: "What should I bring?",
            answer: "Bring your laptop, charger, toiletries, and a sleeping bag if you plan to crash at the venue. Don't forget your student ID!"
        },
        {
            question: "Can we use open-source libraries or APIs?",
            answer: "Yes, participants are allowed to use open-source tools and APIs, but proper credit must be given."
        },
        {
            question: "How will the projects be judged?",
            answer: "Projects will be evaluated based on innovation, technical complexity, design, impact, and presentation."
        },
        {
            question: "Will mentors be available during the event?",
            answer: "Yes, mentors will be available to guide participants throughout the hackathon."
        },
        {
            question: "What if there is a technical issue during submission?",
            answer: "Participants should immediately contact the organizing team. Assistance will be provided if the issue is valid."
        },
        {
            question: "What if someone breaks the rules?",
            answer: "Any violation of rules may lead to penalties or immediate disqualification, depending on the severity."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30 overflow-x-hidden">
            <Navbar />

            <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
                <m.div
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center"
                >
                    <m.h1
                        variants={fadeInUp}
                        className="text-4xl md:text-6xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 via-fuchsia-400 to-white bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                    >
                        Frequently Asked Questions
                    </m.h1>

                    <m.p
                        variants={fadeInUp}
                        className="text-zinc-400 text-lg md:text-xl text-center max-w-2xl mb-16"
                    >
                        Have a question? We've got answers. If you can't find what you're looking for, feel free to reach out.
                    </m.p>

                    <div className="w-full bg-zinc-900/30 border border-white/5 rounded-2xl p-6 md:p-10 backdrop-blur-sm">
                        {questions.map((q, index) => (
                            <FAQItem
                                key={index}
                                question={q.question}
                                answer={q.answer}
                                isOpen={openIndex === index}
                                onClick={() => toggleFAQ(index)}
                            />
                        ))}
                    </div>

                    {/* Placeholder for future questions */}
                    <m.div
                        variants={fadeInUp}
                        className="mt-12 text-center"
                    >
                        <p className="text-zinc-500 italic">
                            For urgent inquiries, contact your nearest voluteer/organiser.
                        </p>
                    </m.div>

                </m.div>
            </main>

            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-purple-800/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px]" />
            </div>
        </div>
    );
}
