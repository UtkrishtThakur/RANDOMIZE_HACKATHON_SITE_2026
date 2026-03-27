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

const domainStyles = {
    EDTECH: "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20",
    Fintech: "bg-green-500/10 text-green-400 border border-green-500/20",
    Blockchain: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    Healthcare: "bg-red-500/10 text-red-400 border border-red-500/20",
    Miscellaneous: "bg-orange-500/10 text-orange-400 border border-orange-500/20",
};

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
          ${domainStyles[domain] || "bg-zinc-500/10 text-zinc-400 border border-zinc-500/20"}`}
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
                            <a
                                href="https://forms.gle/bgsuCFGNvh2h1yCc6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-4 px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-all hover:scale-105 active:scale-95"
                            >
                                Submit your choice of problem statements
                            </a>
                        </p>
                    </div>




                    {/* Problem Statements Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* PROBLEM 1 */}
                        <ProblemCard
                            title="PS 1: GhostWriter Detector - AI vs Student Authorship Engine"
                            domain="EDTECH"
                            description="Background: With widespread use of LLMs, educators struggle to determine whether submissions
                reflect genuine student understanding or AI-generated content.
                Challenge: Design a system that analyzes writing style evolution, keystroke
                dynamics, and contextual reasoning patterns to estimate authorship authenticity."
                        />

                        {/* PROBLEM 2 */}
                        <ProblemCard
                            title="PS 2: Dropout Radar - Early Risk Detection System"
                            domain="EDTECH"
                            description="Background: Universities often identify struggling students too late, leading to
                high dropout rates.
                Challenge: Build a predictive system that flags at-risk students using behavioral,
                academic, and
                engagement signals before failure occurs."
                        />

                        {/* PROBLEM 3 */}
                        <ProblemCard
                            title="PS 3: ExplainLikeAI - Concept Simplifier for Any Level"
                            domain="EDTECH"
                            description="Background: Students often fail not due to lack of content but due to poor
                explanations tailored to
                their level.
                Challenge: Create an AI system that dynamically explains the same concept at
                multiple levels
                (child, beginner, expert) with adaptive analogies."
                        />

                        {/* PROBLEM 4 */}
                        <ProblemCard
                            title="PS 4: ShadowIntern - Virtual Industry Simulation Engine"
                            domain="EDTECH"
                            description="Background: Students lack real-world exposure before entering jobs.
Challenge: Develop a simulation platform that mimics real company workflows
(tickets, standups,
deadlines) to train students in realistic environments."
                        />

                        {/* PROBLEM 5 */}
                        <ProblemCard
                            title="PS 5: BiasLens Edu - Curriculum Bias Analyzer"
                            domain="EDTECH"
                            description="Background: Educational content often contains hidden cultural or ideological
bias.
Challenge: Build a system that audits textbooks and lectures to detect bias,
missing perspectives,
or skewed narratives."
                        />

                        <br />

                        {/* PROBLEM 6 */}
                        <ProblemCard
                            title="PS 1: ScamSense - Real-Time Scam Call & Message Shield"
                            domain="Fintech"
                            description="Background: Digital fraud is shifting to social engineering via calls, WhatsApp,
and SMS.
Challenge: Develop a system that analyzes conversations in real time to detect
scams and warn users before financial loss."
                        />

                        {/* PROBLEM 7 */}
                        <ProblemCard
                            title="PS 2:  ShadowCredit - Behavioral Credit Engine for Gig Workers"
                            domain="Fintech"
                            description="Background: Gig workers lack stable income proof, making them invisible to
traditional credit systems.
Challenge: Create a dynamic credit scoring system using earning patterns,
platform ratings, and work consistency."
                        />

                        {/* PROBLEM 8 */}
                        <ProblemCard
                            title="PS 3: ImpulseGuard - Behavioral Spending Intervention AI"
                            domain="Fintech"
                            description="Background: Users overspend due to impulsive decisions rather than lack of
awareness.
Challenge: Design an AI that detects impulsive buying patterns and intervenes in
real time with personalized nudges."
                        />

                        {/* PROBLEM 9 */}
                        <ProblemCard
                            title="PS 4: FinTwin - Personal Financial Digital Twin"
                            domain="Fintech"
                            description="Background: People lack a simulation environment to test financial decisions
safely.
Challenge: Build a digital twin that simulates future financial outcomes based on
user decisions like loans, investments, or spending."
                        />

                        {/* PROBLEM 10 */}
                        <ProblemCard
                            title="PS 5: DarkPattern Detector for Fintech Apps"
                            domain="Fintech"
                            description="Background: Many financial apps use UX dark patterns to manipulate user
decisions.
Challenge: Create a system that detects manipulative UI/UX patterns in fintech
apps and flags them."
                        />

                        <br />

                        {/* PROBLEM 11 */}
                        <ProblemCard
                            title="PS 1: ProofOfImpact - Verifiable Social Impact Protocol"
                            domain="Blockchain"
                            description="Background: NGOs struggle to prove actual impact of funds received. Challenge:
Design a blockchain system that ties fund disbursement to verifiable real-world
outcomes using oracles and proofs."
                        />

                        {/* PROBLEM 12 */}
                        <ProblemCard
                            title="PS 2: DataDAO - Personal Data Monetization Marketplace"
                            domain="Blockchain"
                            description="Background: Users generate valuable data but don’t benefit from it.
Challenge: Build a decentralized marketplace where users can sell anonymized
data with full ownership and control."
                        />

                        {/* PROBLEM 13 */}
                        <ProblemCard
                            title="PS 3: DeadMan Switch Wallet System"
                            domain="Blockchain"
                            description="Background: Crypto assets are often lost due to lack of inheritance mechanisms.
Challenge: Create a smart contract system that securely transfers assets to
beneficiaries upon inactivity or verified events."
                        />

                        {/* PROBLEM 14 */}
                        <ProblemCard
                            title="PS 4: AntiRug - Smart Contract Risk Analyzer"
                            domain="Blockchain"
                            description="Background: Users fall victim to rug pulls due to lack of contract transparency.
Challenge: Develop a tool that analyzes smart contracts and flags potential
malicious behaviors before interaction."
                        />

                        {/* PROBLEM 15 */}
                        <ProblemCard
                            title="PS 5: ReputationChain - Cross-Platform Trust Score"
                            domain="Blockchain"
                            description="Background: Reputation is fragmented across platforms (GitHub, LinkedIn, etc.).
Challenge: Build a decentralized reputation layer aggregating verifiable
achievements across ecosystems."
                        />

                        <br />

                        {/* PROBLEM 16 */}
                        <ProblemCard
                            title="PS 1: Symptom Drift Tracker - Long-Term Disease Evolution AI"
                            domain="Healthcare"
                            description="Background: Chronic diseases evolve slowly and patterns are often missed.
Challenge: Build a system that tracks symptom evolution over time and
detects subtle health deterioration trends."
                        />

                        {/* PROBLEM 17 */}
                        <ProblemCard
                            title="PS 2: ICU Load Balancer - Emergency Resource Routing System"
                            domain="Healthcare"
                            description="Background: Hospitals face uneven ICU loads leading to preventable deaths.
Challenge: Design a real-time system that redistributes patients across
hospitals based on capacity and urgency."
                        />

                        {/* PROBLEM 18 */}
                        <ProblemCard
                            title="PS 3: MedExplain - Report-to-Human Translator"
                            domain="Healthcare"
                            description="Background: Patients struggle to understand medical reports and jargon.
Challenge: Create an AI that converts complex reports into simple, actionable
explanations."
                        />

                        {/* PROBLEM 19 */}
                        <ProblemCard
                            title="PS 4: Drug Conflict Detector - Prescription Safety AI"
                            domain="Healthcare"
                            description="Background: Patients taking multiple medications risk dangerous drug
interactions.
Challenge: Build a system that detects harmful drug combinations in real time."
                        />

                        {/* PROBLEM 20 */}
                        <ProblemCard
                            title="PS 5: Burnout Monitor for Healthcare Workers"
                            domain="Healthcare"
                            description="Background: Healthcare professionals face high burnout rates impacting care
quality.
Challenge: Develop a system that detects burnout signals using schedules,
workload, and behavioral patterns."
                        />

                        <br />

                        {/* PROBLEM 21 */}
                        <ProblemCard
                            title="PS 1: DeepTrust - Deepfake Real-Time Video Authenticator"
                            domain="Miscellaneous"
                            description="Background: Deepfake videos are becoming indistinguishable from real ones.
Challenge: Build a system that verifies video authenticity in real time during
streaming or calls."
                        />

                        {/* PROBLEM 22 */}
                        <ProblemCard
                            title="PS 2: CrowdSignal - Real-Time Public Sentiment Heatmap"
                            domain="Miscellaneous"
                            description="Background: Authorities lack real-time understanding of public mood during
events.
Challenge: Design a system that aggregates social signals to visualize crowd
sentiment geographically."
                        />

                        {/* PROBLEM 23 */}
                        <ProblemCard
                            title="PS 3: AI Debate Judge - Argument Quality Evaluator"
                            domain="Miscellaneous"
                            description="Background: Debates are often judged subjectively.
Challenge: Create a system that evaluates arguments based on logic, evidence,
and coherence."
                        />

                        {/* PROBLEM 24 */}
                        <ProblemCard
                            title="PS 4: NoiseMap - Urban Sound Pollution Intelligence System"
                            domain="Miscellaneous"
                            description="Background: Noise pollution is under-monitored despite major health impacts.
Challenge: Build a system that maps and predicts noise pollution hotspots in
cities."
                        />

                        {/* PROBLEM 25 */}
                        <ProblemCard
                            title="PS 5: MemoryVault - Personal Digital Memory Organizer"
                            domain="Miscellaneous"
                            description="Background: People generate massive digital memories but struggle to organize
or retrieve them.
Challenge: Develop an AI system that organizes, summarizes, and retrieves
personal memories contextually."
                        />


                    </div>
                </main>
            </div>
        </div>
    );
}
