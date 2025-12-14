"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
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
        <div className="group relative p-6 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-purple-500/30 transition-all hover:bg-zinc-800/50 flex flex-col h-fit">
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
        </div>
    );
}

export default function ProblemStatements() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30">
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

                {/* Problem Statements Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* PROBLEM 1 */}
                    <ProblemCard
                        title="AI for Social Good" /* EDIT TITLE HERE */
                        domain="AI" /* EDIT DOMAIN HERE */
                        difficulty="Beginner" /* EDIT DIFFICULTY HERE */
                        description="Build an AI model to detect disaster-prone areas and suggest evacuation routes." /* EDIT DESCRIPTION HERE */
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

                    {/* PROBLEM 16 */}
                    <ProblemCard
                        title="Deepfake Detection"
                        domain="AI"
                        difficulty="Advanced"
                        description="Tool to identify deepfake videos and audio in real-time."
                    />

                    {/* PROBLEM 17 */}
                    <ProblemCard
                        title="Automated Legal advisor"
                        domain="AI"
                        difficulty="Intermediate"
                        description="AI that simplifies legal documents and provides basic advice."
                    />

                    {/* PROBLEM 18 */}
                    <ProblemCard
                        title="NFT Ticketing System"
                        domain="Blockchain"
                        difficulty="Beginner"
                        description="Event ticketing system eliminating scalping using NFTs."
                    />

                    {/* PROBLEM 19 */}
                    <ProblemCard
                        title="Remote Patient Monitoring"
                        domain="Health"
                        difficulty="Intermediate"
                        description="System for doctors to monitor patients' post-op recovery remotely."
                    />

                    {/* PROBLEM 20 */}
                    <ProblemCard
                        title="Voice Commerce"
                        domain="Fintech"
                        difficulty="Advanced"
                        description="Voice-activated shopping and payment experience."
                    />

                    {/* PROBLEM 21 */}
                    <ProblemCard
                        title="Cybersecurity Awareness Game"
                        domain="Gaming"
                        difficulty="Beginner"
                        description="Game that teaches users about phishing and password security."
                    />

                    {/* PROBLEM 22 */}
                    <ProblemCard
                        title="Carbon Footprint Tracker"
                        domain="Environment"
                        difficulty="Intermediate"
                        description="App to track and offset personal carbon emissions."
                    />

                    {/* PROBLEM 23 */}
                    <ProblemCard
                        title="Decentralized Voting"
                        domain="Blockchain"
                        difficulty="Advanced"
                        description="Secure voting system for organizations using blockchain."
                    />

                    {/* PROBLEM 24 */}
                    <ProblemCard
                        title="Crop Disease Detection"
                        domain="AI"
                        difficulty="Beginner"
                        description="Mobile app to detect crop diseases from leaf photos."
                    />

                    {/* PROBLEM 25 */}
                    <ProblemCard
                        title="Language Preservation"
                        domain="Education"
                        difficulty="Intermediate"
                        description="Platform to document and teach endangered languages."
                    />

                    {/* PROBLEM 26 */}
                    <ProblemCard
                        title="Prosthetic Control Interface"
                        domain="Health"
                        difficulty="Advanced"
                        description="Software to interpret EMG signals for prosthetic control."
                    />

                    {/* PROBLEM 27 */}
                    <ProblemCard
                        title="Fraud Detection System"
                        domain="Fintech"
                        difficulty="Intermediate"
                        description="Real-time transaction monitoring to detect anomalies."
                    />

                    {/* PROBLEM 28 */}
                    <ProblemCard
                        title="Smart Waste Management"
                        domain="Smart City"
                        difficulty="Beginner"
                        description="IoT sensors to optimize garbage truck routes."
                    />

                    {/* PROBLEM 29 */}
                    <ProblemCard
                        title="Music Composition AI"
                        domain="AI"
                        difficulty="Advanced"
                        description="AI that composes background music for videos."
                    />

                    {/* PROBLEM 30 */}
                    <ProblemCard
                        title="Metaverse Showroom"
                        domain="AR/VR"
                        difficulty="Intermediate"
                        description="Virtual showroom for e-commerce products."
                    />

                    {/* PROBLEM 31 */}
                    <ProblemCard
                        title="Crowdfunding for Science"
                        domain="Fintech"
                        difficulty="Beginner"
                        description="Platform to fund small-scale scientific research projects."
                    />

                    {/* PROBLEM 32 */}
                    <ProblemCard
                        title="DAO Governance Tool"
                        domain="Blockchain"
                        difficulty="Advanced"
                        description="Dashboard for managing DAO proposals and voting."
                    />

                    {/* PROBLEM 33 */}
                    <ProblemCard
                        title="Accessibility Assistant"
                        domain="AI"
                        difficulty="Intermediate"
                        description="Browser extension to make websites more accessible."
                    />

                    {/* PROBLEM 34 */}
                    <ProblemCard
                        title="Sports Performance Analyst"
                        domain="AI"
                        difficulty="Advanced"
                        description="analyze video footage to improve athlete technique."
                    />

                    {/* PROBLEM 35 */}
                    <ProblemCard
                        title="Disaster Relief Logistics"
                        domain="Social Good"
                        difficulty="Intermediate"
                        description="Optimize supply/demand matching for aid distribution."
                    />

                    {/* PROBLEM 36 */}
                    <ProblemCard
                        title="Predictive Maintenance"
                        domain="IoT"
                        difficulty="Advanced"
                        description="Predict machine failures in factories before they happen."
                    />

                    {/* PROBLEM 37 */}
                    <ProblemCard
                        title="Zero-Knowledge Proof Identity"
                        domain="Blockchain"
                        difficulty="Advanced"
                        description="Verify age without revealing birthdate using ZKPs."
                    />

                    {/* PROBLEM 38 */}
                    <ProblemCard
                        title="Smart Mirror"
                        domain="IoT"
                        difficulty="Beginner"
                        description="Mirror that displays weather, news, and calendar."
                    />

                    {/* PROBLEM 39 */}
                    <ProblemCard
                        title="Local Tourism Guide"
                        domain="Travel"
                        difficulty="Beginner"
                        description="App to discover hidden gems in local cities."
                    />

                    {/* PROBLEM 40 */}
                    <ProblemCard
                        title="Fake News Filter"
                        domain="AI"
                        difficulty="Intermediate"
                        description="Browser plugin to flag potentially misleading news articles."
                    />

                    {/* PROBLEM 41 */}
                    <ProblemCard
                        title="Crypto Wallet Tracker"
                        domain="Fintech"
                        difficulty="Beginner"
                        description="Dashboard to view portfolio across multiple chains."
                    />

                    {/* PROBLEM 42 */}
                    <ProblemCard
                        title="Gesture Control System"
                        domain="AI"
                        difficulty="Advanced"
                        description="Control computers using hand gestures via webcam."
                    />

                    {/* PROBLEM 43 */}
                    <ProblemCard
                        title="Decentralized Storage"
                        domain="Blockchain"
                        difficulty="Intermediate"
                        description="Interface for storing files on IPFS/Filecoin seamlessly."
                    />

                    {/* PROBLEM 44 */}
                    <ProblemCard
                        title="Fitness Challenge App"
                        domain="Health"
                        difficulty="Beginner"
                        description="Social app to compete in fitness challenges with friends."
                    />

                    {/* PROBLEM 45 */}
                    <ProblemCard
                        title="Code Review Bot"
                        domain="AI"
                        difficulty="Intermediate"
                        description="Bot that automatically suggests code improvements on PRs."
                    />

                    {/* PROBLEM 46 */}
                    <ProblemCard
                        title="Elderly Care Assistant"
                        domain="IoT"
                        difficulty="Beginner"
                        description="System to monitor daily activity and detect falls."
                    />

                    {/* PROBLEM 47 */}
                    <ProblemCard
                        title="Micro-Insurance Platform"
                        domain="Fintech"
                        difficulty="Advanced"
                        description="On-demand insurance for short-term activities."
                    />

                    {/* PROBLEM 48 */}
                    <ProblemCard
                        title="Wildfire Prediction"
                        domain="AI"
                        difficulty="Advanced"
                        description="Use satellite data to predict wildfire spread."
                    />

                    {/* PROBLEM 49 */}
                    <ProblemCard
                        title="Skill Swap Platform"
                        domain="Social Good"
                        difficulty="Beginner"
                        description="Barter system for trading skills and services."
                    />

                    {/* PROBLEM 50 */}
                    <ProblemCard
                        title="Emotion Based Music Player"
                        domain="AI"
                        difficulty="Intermediate"
                        description="Music player that selects songs based on facial emotion."
                    />

                </div>
            </main>
        </div>
    );
}
