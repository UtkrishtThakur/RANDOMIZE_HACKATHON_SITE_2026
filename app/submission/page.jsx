"use client";
import React from 'react';
import { m } from 'framer-motion';
import Navbar from '../components/Navbar';
import Link from 'next/link';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function SubmissionPage() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30 overflow-x-hidden">
            <Navbar />

            <main className="min-h-screen flex flex-col items-center justify-center relative px-6 py-20">
                {/* Background Decor */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />
                    <m.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-10 -right-20 w-[400px] h-[400px] border border-white/5 rounded-full border-dashed -z-10"
                    />
                    <m.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className="absolute top-20 -left-20 w-[600px] h-[600px] border border-white/5 rounded-full border-dashed -z-10"
                    />
                </div>

                <m.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="w-full max-w-5xl z-10"
                >
                    {/* Status Indicator */}
                    <m.div variants={fadeInUp} className="flex justify-center mb-8">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-md">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <span className="text-sm font-semibold text-green-400 tracking-wide uppercase">Submissions Open</span>
                        </div>
                    </m.div>

                    <m.h1
                        variants={fadeInUp}
                        className="text-5xl md:text-7xl font-bold text-center bg-gradient-to-b from-white via-white to-zinc-500 bg-clip-text text-transparent mb-6 tracking-tight"
                    >
                        Ready to Ship?
                    </m.h1>

                    <m.p
                        variants={fadeInUp}
                        className="text-zinc-400 text-lg md:text-xl text-center max-w-2xl mx-auto mb-16 leading-relaxed"
                    >
                        The clock is ticking. Wrap up your code, polish your pitch, and submit your masterpiece before the deadline.
                    </m.p>

                    {/* Submission Checklist */}
                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        {[
                            { title: "GitHub Repo", icon: "code", desc: "Public repository with a clear README." },
                            { title: "Project PPT", icon: "slides", desc: "Brief presentation covering the problem & solution." },
                            { title: "Demo Video", icon: "video", desc: "2-minute walkthrough of your project in action." }
                        ].map((item, i) => (
                            <m.div
                                key={i}
                                variants={fadeInUp}
                                whileHover={{ y: -5 }}
                                className="p-6 rounded-2xl bg-zinc-900/50 border border-white/10 hover:border-purple-500/40 transition-all text-center group"
                            >
                                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors text-xl">
                                    {item.icon === "code" && "💻"}
                                    {item.icon === "slides" && "📊"}
                                    {item.icon === "video" && "🎥"}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-zinc-400">{item.desc}</p>
                            </m.div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <m.div variants={fadeInUp} className="flex flex-col items-center gap-6">
                        <Link href="#" target="_blank" className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                            <button className="relative px-12 py-4 bg-white rounded-full leading-none flex items-center divide-x divide-slate-600">
                                <span className="flex items-center space-x-5">
                                    <span className="pr-6 text-black font-bold text-xl uppercase tracking-wider">Submit Project</span>
                                </span>
                                <span className="pl-6 text-purple-600 rotate-45 group-hover:rotate-0 transition duration-200">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                            </button>
                        </Link>

                        <p className="text-zinc-600 text-sm">
                            Link leads to a Google Form. Please double-check your links!
                        </p>
                    </m.div>

                </m.div>
            </main>
        </div>
    );
}
