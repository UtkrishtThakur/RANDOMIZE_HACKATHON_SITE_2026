"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// --- INSTRUCTIONS ---
// To add or remove problem statements, simply copy or delete the <ProblemCard /> blocks below.
// Edit the 'title', 'domain', and 'description' props to change the content.
// --------------------

// Reusable Card Component
// You don't need to edit this part unless you want to change the design of ALL cards.
function ProblemCard({ title, domain, difficulty, description }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(168, 85, 247, 0.2)" }}
            transition={{ duration: 0.4 }}
            className="group relative p-6 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-purple-500/30 transition-colors hover:bg-zinc-800/50 flex flex-col h-fit"
        >
            {/* Domain Tag & Difficulty */}
            <div className="mb-4 flex items-center justify-between">
                <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase 
          ${domain === "AI"
                            ? "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                            : domain === "Blockchain"
                                ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                                : domain === "Fintech"
                                    ? "bg-green-500/10 text-green-400 border border-green-500/20"
                                    : "bg-zinc-500/10 text-zinc-400 border border-zinc-500/20"
                        }`}
                >
                    {domain}
                </span>
                <span className="text-xs text-zinc-500 font-mono">{difficulty}</span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-zinc-100 mb-3 group-hover:text-purple-300 transition-colors">
                {title}
            </h3>

            {/* Expandable Description */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="text-sm text-zinc-400 leading-relaxed mb-6 pt-2 border-t border-white/5">
                            {description}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* View Details Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-sm font-medium text-white transition-colors mt-auto"
            >
                {isOpen ? "Hide Details" : "View Details"}
            </button>
        </motion.div>
    );
}

export default function ProblemStatements() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30 relative">
            {/* Fixed Background Logo */}
            <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
                <div className="relative w-[500px] h-[500px] md:w-[800px] md:h-[800px] opacity-20 blur-xl">
                    <Image
                        src="/logo.png"
                        alt="Background Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>

            <div className="relative z-10">
                <Navbar />

                <main className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
                    {/* Page Header */}
                    <div className="mb-16 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
                            Problem Statements
                        </h1>
                        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                            Choose your challenge. Build the impossible.
                            <br />
                            Select a problem statement below to get started.
                        </p>
                    </div>

                    {/* Coming Soon / Locked UI */}
                    <div className="flex flex-col items-center justify-center min-h-[60vh] relative z-20">
                        <div className="p-10 rounded-3xl bg-black/40 backdrop-blur-md border border-white/10 text-center relative overflow-hidden group max-w-2xl mx-auto">

                            {/* Scanning Line Animation */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-green-500/50 shadow-[0_0_15px_rgba(34,197,94,0.8)] animate-[scan_4s_linear_infinite]" />

                            <div className="mb-8 relative inline-flex justify-center items-center w-24 h-24 rounded-full bg-white/5 border border-white/10">
                                <span className="text-5xl">⚠</span>
                                <div className="absolute inset-0 rounded-full border border-white/20 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-orbitron)] tracking-widest text-white mb-6">
                                TOP SECRET
                            </h2>

                            <div className="flex gap-2 justify-center mb-8">
                                <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
                                <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse delay-75"></div>
                                <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse delay-150"></div>
                            </div>

                            <p className="text-xl text-zinc-300 font-mono leading-relaxed">
                                Mission protocols are currently encrypted.
                                <br />
                                Decryption in progress...
                            </p>

                            <div className="mt-8 py-2 px-6 rounded border border-green-500/30 bg-green-500/10 inline-block">
                                <p className="text-xs text-green-400 font-mono uppercase tracking-widest">
                                    Check back later
                                </p>
                            </div>
                        </div>
                    </div>


                    {/* Problem Statements Grid (COMMENTED OUT) */}
                    {/* 
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* PROBLEM 1 *\}
                    <ProblemCard
                        title="AI for Social Good" /* EDIT TITLE HERE *\}
                        domain="AI" /* EDIT DOMAIN HERE *\}
                        difficulty="Beginner" /* EDIT DIFFICULTY HERE *\}
                        description="Build an AI model to detect disaster-prone areas and suggest evacuation routes." /* EDIT DESCRIPTION HERE *\}
                    />
                    
                    ... (ALL OTHER CARDS WOULD BE HERE - OMITTED FOR BREVITY BUT KEPT IN SOURCE) ...

                </div>
                */}
                </main>
            </div>
        </div>
    );
}
