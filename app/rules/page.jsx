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
            title: "Team Formation",
            description: "Each team must consist of the specified number of members (as registered by team leader). No changes in team members are allowed after the hackathon begins."
        },
        {
            title: "Original Work",
            description: "All projects must be developed during the hackathon duration. Pre-built projects are not allowed, though participants can use open-source libraries and frameworks."
        },
        {
            title: "Code of Conduct",
            description: "Participants must maintain respectful and professional behavior. Any form of misconduct, plagiarism, or unfair practices will lead to immediate disqualification."
        },
        {
            title: "Submission Guidelines",
            description: "All projects must be submitted via the official submission portal before the deadline. All submissions must be made before the deadline—late entries will not be accepted. A PPT and GitHub repository link are mandatorily required."
        },
        {
            title: "Mentorship & Support",
            description: "Mentors will be available during the event for guidance. However, external help outside the allowed resources is strictly prohibited."
        },
        {
            title: "Overnight Stay",
            description: "Participants are allowed to stay overnight in the designated areas. Safety and security guidelines provided by the organizers must be followed at all times. No team is allowed to go back before the certian timings."
        },
        {
            title: "Property Responsibility",
            description: "Participants are responsible for any damage caused to college property, equipment, or venue facilities. Any intentional damage or misuse will result in strict action and possible disqualification."
        },
        {
            title: "Personal Equipment",
            description: "Participants must bring their own required hardware (laptops, chargers, etc.). The organizers are not responsible for loss, theft, or damage of personal belongings."
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
