"use client";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";

// --- PLACEHOLDER DATA ---
// You can edit this array to update the leaderboard.
/*
const leaderboardData = [
    { rank: 1, team: "NullPointers", problemStatement: "AI for Social Good", projectLink: "https://github.com/example/project", badges: ["🏆", "🔥"] },
    { rank: 2, team: "LazyLoaders", problemStatement: "Decentralized Identity", projectLink: "https://github.com/example/project", badges: ["🥈"] },
    { rank: 3, team: "CodeCrusaders", problemStatement: "Next-Gen Fintech App", projectLink: "https://github.com/example/project", badges: ["🥉"] },
    { rank: 4, team: "BinaryBandits", problemStatement: "Gamified Learning", projectLink: "https://github.com/example/project", badges: [] },
    { rank: 5, team: "GitGud", problemStatement: "Smart Health Tracker", projectLink: "https://github.com/example/project", badges: ["🚀"] },
    { rank: 6, team: "StackOverflowers", problemStatement: "Generative Art Tool", projectLink: "https://github.com/example/project", badges: [] },
    { rank: 7, team: "ReactReactors", problemStatement: "Supply Chain Transparency", projectLink: "https://github.com/example/project", badges: [] },
    { rank: 8, team: "JavaSippers", problemStatement: "Sustainable Energy Monitor", projectLink: "https://github.com/example/project", badges: [] },
    { rank: 9, team: "Pythonistas", problemStatement: "AR Navigation", projectLink: "https://github.com/example/project", badges: ["⚡"] },
    { rank: 10, team: "C++ommandos", problemStatement: "Personalized Nutrition", projectLink: "https://github.com/example/project", badges: [] },
    { rank: 11, team: "RustBuckets", problemStatement: "DeFi Lending Protocol", projectLink: "https://github.com/example/project", badges: [] },
    { rank: 12, team: "GoGophers", problemStatement: "Mental Health Chatbot", projectLink: "https://github.com/example/project", badges: [] },
    { rank: 13, team: "TypeScriptTitans", problemStatement: "Smart Traffic Management", projectLink: "https://github.com/example/project", badges: [] },
    { rank: 14, team: "HTMLHackers", problemStatement: "Peer-to-Peer Energy", projectLink: "https://github.com/example/project", badges: [] },
    { rank: 15, team: "CSSConquerors", problemStatement: "Virtual Classroom", projectLink: "https://github.com/example/project", badges: [] },
];
*/

export default function Leaderboard() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30 overflow-x-hidden relative">
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
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-12 text-center"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
                            Leaderboard
                        </h1>
                        <p className="text-lg text-zinc-400">
                            Top performers battling for glory.
                        </p>
                    </motion.div>

                    {/* Coming Soon / Locked UI */}
                    <div className="flex flex-col items-center justify-center min-h-[60vh] relative z-20">
                        <div className="p-10 rounded-3xl bg-black/40 backdrop-blur-md border border-white/10 text-center relative overflow-hidden group">

                            {/* Scanning Line Animation */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.8)] animate-[scan_3s_ease-in-out_infinite]" />

                            <div className="mb-6 relative inline-block">
                                <span className="text-6xl">🔒</span>
                                <div className="absolute inset-0 bg-purple-500/20 blur-xl animate-pulse"></div>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-orbitron)] tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 mb-4 animate-[pulse_4s_ease-in-out_infinite]">
                                SYSTEM LOCKED
                            </h2>

                            <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6"></div>

                            <p className="text-lg text-zinc-400 font-mono tracking-wider">
                                CALCULATING RESULTS...
                            </p>
                            <p className="text-sm text-zinc-600 mt-2 font-mono">
                                LEADERBOARD_STATUS: <span className="text-red-400">OFFLINE</span>
                            </p>
                        </div>
                    </div>

                    {/* Leaderboard Table Container */}
                    {/*
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/30 backdrop-blur-md shadow-2xl shadow-purple-500/5"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/10 text-xs md:text-sm uppercase tracking-wider text-zinc-500 bg-white/[0.02]">
                                    <th className="p-6 font-medium">Rank</th>
                                    <th className="p-6 font-medium">Team</th>
                                    <th className="p-6 font-medium">Problem Statement</th>
                                    <th className="p-6 font-medium text-right">Project Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                {leaderboardData.map((team, index) => (
                                    <motion.tr
                                        key={team.team}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 + 0.3 }}
                                        className={`group border-b border-white/5 hover:bg-white/[0.02] transition-colors relative
                                            ${index < 3 ? 'bg-gradient-to-r from-transparent via-white/[0.01] to-transparent' : ''}
                                        `}
                                    >
                                        <td className="p-6">
                                            <div className={`
                        flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm relative z-10
                        ${team.rank === 1 ? 'bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 text-yellow-400 border border-yellow-500/30 shadow-[0_0_15px_rgba(234,179,8,0.2)]' :
                                                    team.rank === 2 ? 'bg-gradient-to-br from-zinc-300/20 to-zinc-500/20 text-zinc-300 border border-zinc-400/30 shadow-[0_0_15px_rgba(212,212,216,0.1)]' :
                                                        team.rank === 3 ? 'bg-gradient-to-br from-orange-400/20 to-orange-600/20 text-orange-400 border border-orange-500/30 shadow-[0_0_15px_rgba(249,115,22,0.1)]' :
                                                            'text-zinc-500 bg-zinc-800/30 border border-white/5'}
                      `}>
                                                {team.rank}
                                            </div>
                                            {/* Golden Glow for Rank 1 *\}
                                            {team.rank === 1 && (
                                                <div className="absolute left-0 top-0 w-2 h-full bg-yellow-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                            )}
                                        </td>
                                        <td className="p-6">
                                            <div className="flex items-center gap-3">
                                                <div className={`font-semibold transition-colors ${index < 3 ? 'text-white' : 'text-zinc-300'} group-hover:text-purple-400`}>
                                                    {team.team}
                                                </div>
                                                <div className="flex gap-1">
                                                    {team.badges.map((badge, i) => (
                                                        <span key={i} title="Badge" className="animate-pulse">{badge}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-6 text-zinc-400 font-medium group-hover:text-zinc-300 transition-colors">
                                            {team.problemStatement}
                                        </td>
                                        <td className="p-6 text-right">
                                            <motion.a
                                                href={team.projectLink}
                                                target="_blank"
                                                rel="noreferrer"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="inline-block px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white transition-colors"
                                            >
                                                View Project
                                            </motion.a>
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
                */}
                </main>
            </div>
        </div>
    );
}
