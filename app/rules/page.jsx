"use client";
import React from 'react';
import { m } from 'framer-motion';
import Navbar from '../components/Navbar';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function RulesPage() {
    const rules = [
        {
            title: "Eligibility",
            description: "The hackathon is open to all university students. Teams must consist of 2-4 members. Inter-college teams are allowed."
        },
        {
            title: "Original Work",
            description: "All code, design, and assets must be created during the hackathon. Using open-source libraries is permitted, but plagiarism is strictly prohibited."
        },
        {
            title: "Code of Conduct",
            description: "We are committed to providing a harassment-free experience for everyone. Be respectful, inclusive, and professional. Any form of harassment will lead to immediate disqualification."
        },
        {
            title: "Submission Guidelines",
            description: "All projects must be submitted via the official submission portal before the deadline. A GitHub repository link and a demo video are required."
        },
        {
            title: "Intellectual Property",
            description: "You own what you build. The hackathon organizers claim no rights over your projects."
        },
        {
            title: "Judging Criteria",
            description: "Projects will be judged based on innovation, technical complexity, impact, and presentation."
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30 overflow-x-hidden">
            <Navbar />

            <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <m.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="flex flex-col items-center"
                >
                    <m.h1
                        variants={fadeInUp}
                        className="text-4xl md:text-6xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 via-fuchsia-400 to-white bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                    >
                        Rules & Guidelines
                    </m.h1>

                    <m.p
                        variants={fadeInUp}
                        className="text-zinc-400 text-lg md:text-xl text-center max-w-3xl mb-16"
                    >
                        To ensure a fair and enjoyable experience for everyone, please adhere to the following rules.
                    </m.p>

                    <div className="grid md:grid-cols-2 gap-8 w-full">
                        {rules.map((rule, index) => (
                            <m.div
                                key={index}
                                variants={fadeInUp}
                                className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-purple-500/30 hover:bg-zinc-900/80 transition-all duration-300 group"
                            >
                                <div className="flex items-start gap-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/10 text-purple-400 font-bold border border-purple-500/20 group-hover:bg-purple-500/20 group-hover:border-purple-500/50 transition-colors">
                                        {index + 1}
                                    </span>
                                    <div>
                                        <h2 className="text-xl font-bold text-zinc-100 mb-3 group-hover:text-purple-300 transition-colors">
                                            {rule.title}
                                        </h2>
                                        <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                                            {rule.description}
                                        </p>
                                    </div>
                                </div>
                            </m.div>
                        ))}
                    </div>

                    {/* Placeholder for future rules */}
                    <m.div
                        variants={fadeInUp}
                        className="mt-12 p-6 rounded-xl border border-dashed border-zinc-700 bg-transparent text-zinc-500 text-center w-full max-w-2xl"
                    >
                        <p className="italic">More usage guidelines specific to the venue will be added closer to result dates.</p>
                    </m.div>

                </m.div>
            </main>

            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]" />
            </div>
        </div>
    );
}
