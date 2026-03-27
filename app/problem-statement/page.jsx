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
                            <br />
                             (Don't forget to enter your opted problem statement in google form)
                        </p>
                    </div>




                    {/* Problem Statements Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

    {/* PROBLEM 1 */}
    <ProblemCard
        title="AI for Social Good"
        domain="AI"
        difficulty="Beginner"
        description="Build an AI model to detect disaster-prone areas and suggest evacuation routes."
    />

    {/* PROBLEM 2 */}
    <ProblemCard
        title="Decentralized Identity"
        domain="Blockchain"
        difficulty="Intermediate"
        description="Create a self-sovereign identity system using Ethereum or Solana."
    />

    {/* PROBLEM 3 */}
    <ProblemCard
        title="Next-Gen Fintech App"
        domain="Fintech"
        difficulty="Advanced"
        description="Develop a micro-investment platform for seamless cross-border transactions."
    />

    {/* PROBLEM 4 */}
    <ProblemCard
        title="Gamified Learning"
        domain="Education"
        difficulty="Beginner"
        description="Create an interactive game that teaches coding concepts to children."
    />

    {/* PROBLEM 5 */}
    <ProblemCard
        title="Smart Health Tracker"
        domain="Health"
        difficulty="Intermediate"
        description="A wearable integration that predicts health anomalies using vital signs."
    />

    {/* PROBLEM 6 */}
    <ProblemCard
        title="Generative Art Tool"
        domain="AI"
        difficulty="Advanced"
        description="Allow users to generate unique 3D assets using text prompts."
    />

    {/* PROBLEM 7 */}
    <ProblemCard
        title="Supply Chain Transparency"
        domain="Blockchain"
        difficulty="Intermediate"
        description="Track food safety from farm to table using blockchain technology."
    />

    {/* PROBLEM 8 */}
    <ProblemCard
        title="Sustainable Energy Monitor"
        domain="IoT"
        difficulty="Beginner"
        description="IoT dashboard to monitor and optimize home energy consumption."
    />

    {/* PROBLEM 9 */}
    <ProblemCard
        title="AR Navigation"
        domain="AR/VR"
        difficulty="Advanced"
        description="Augmented reality app for indoor navigation in large complexes."
    />

    {/* PROBLEM 10 */}
    <ProblemCard
        title="Personalized Nutrition"
        domain="Health"
        difficulty="Beginner"
        description="AI-driven meal planner based on genetic data and lifestyle."
    />

    {/* PROBLEM 11 */}
    <ProblemCard
        title="DeFi Lending Protocol"
        domain="Blockchain"
        difficulty="Advanced"
        description="Algorithmic lending platform with under-collateralized loans."
    />

    {/* PROBLEM 12 */}
    <ProblemCard
        title="Mental Health Chatbot"
        domain="AI"
        difficulty="Intermediate"
        description="Empathetic chatbot for mental health support and resource linking."
    />

    {/* PROBLEM 13 */}
    <ProblemCard
        title="Smart Traffic Management"
        domain="Smart City"
        difficulty="Advanced"
        description="Optimize traffic light timings using real-time camera feeds."
    />

    {/* PROBLEM 14 */}
    <ProblemCard
        title="Peer-to-Peer Energy Trading"
        domain="Blockchain"
        difficulty="Intermediate"
        description="Marketplace for neighbors to trade solar energy."
    />

    {/* PROBLEM 15 */}
    <ProblemCard
        title="Virtual Classroom"
        domain="Education"
        difficulty="Beginner"
        description="Immersive video conferencing tool with whiteboard and quizzes."
    />

</div>
                </main>
            </div>
        </div>
    );
}
