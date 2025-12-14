"use client";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

// --- PLACEHOLDER DATA ---
// You can edit this array to update the leaderboard.
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

export default function Leaderboard() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30">
            <Navbar />

            <main className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
                {/* Page Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
                        Leaderboard
                    </h1>
                    <p className="text-lg text-zinc-400">
                        Top performers battling for glory.
                    </p>
                </div>

                {/* Leaderboard Table Container */}
                <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/30 backdrop-blur-md">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/10 text-xs md:text-sm uppercase tracking-wider text-zinc-500">
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
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="group border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                                    >
                                        <td className="p-6">
                                            <div className={`
                        flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm
                        ${team.rank === 1 ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                                                    team.rank === 2 ? 'bg-zinc-400/20 text-zinc-300 border border-zinc-400/30' :
                                                        team.rank === 3 ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                                                            'text-zinc-500'}
                      `}>
                                                {team.rank}
                                            </div>
                                        </td>
                                        <td className="p-6">
                                            <div className="flex items-center gap-3">
                                                <div className="font-semibold text-zinc-200 group-hover:text-purple-400 transition-colors">
                                                    {team.team}
                                                </div>
                                                <div className="flex gap-1">
                                                    {team.badges.map((badge, i) => (
                                                        <span key={i} title="Badge">{badge}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-6 text-zinc-400 font-medium">
                                            {team.problemStatement}
                                        </td>
                                        <td className="p-6 text-right">
                                            <a
                                                href={team.projectLink}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-block px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white transition-colors"
                                            >
                                                View Project
                                            </a>
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
}
