"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group relative z-50" onClick={() => setIsOpen(false)}>
                    <div className="relative w-8 h-8 md:w-10 md:h-10">
                        <Image
                            src="/logo.png"
                            alt="Randomize Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <span className="font-[family-name:var(--font-orbitron)] text-xl md:text-2xl font-bold tracking-widest bg-gradient-to-r from-purple-500 via-fuchsia-400 to-white bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.8)] transition-all duration-300">
                        RANDOMIZE
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
                    <Link href="/problem-statement" className="hover:text-white transition-colors">
                        Problems
                    </Link>
                    <Link href="/submission" className="hover:text-white transition-colors">
                        Submissions
                    </Link>
                    <Link href="/leaderboard" className="hover:text-white transition-colors">
                        Leaderboard
                    </Link>
                    <Link href="/rules" className="hover:text-white transition-colors">
                        RULES & FAQ
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    {/* Timer / Action Button */}
                    <button className="hidden sm:block px-5 py-2 rounded-full bg-white text-black text-xs md:text-sm font-semibold hover:bg-zinc-200 transition-colors">
                        Timer placeholder
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2 relative z-50"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <m.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-6 text-center">
                            <Link
                                href="/problem-statement"
                                className="text-lg font-medium text-zinc-300 hover:text-white transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Problems
                            </Link>
                            <Link
                                href="/submission"
                                className="text-lg font-medium text-zinc-300 hover:text-white transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Submissions
                            </Link>
                            <Link
                                href="/leaderboard"
                                className="text-lg font-medium text-zinc-300 hover:text-white transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Leaderboard
                            </Link>
                            <Link
                                href="/rules"
                                className="text-lg font-medium text-zinc-300 hover:text-white transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                RULES & FAQ
                            </Link>

                            {/* Mobile Timer Button (if hidden on very small screens, or just duplicated for ease) */}
                            <button className="sm:hidden w-full py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors">
                                Timer placeholder
                            </button>
                        </div>
                    </m.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
