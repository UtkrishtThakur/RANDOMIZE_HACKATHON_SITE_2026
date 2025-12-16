"use client";
import Navbar from "./components/Navbar";
import { m } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
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

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30 overflow-x-hidden">
      <Navbar />

      <main className="flex flex-col w-full">
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

          {/* Concentric Waves Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background: 'repeating-radial-gradient(circle at center, rgba(168, 85, 247, 0.15) 0px, transparent 100px, rgba(168, 85, 247, 0.05) 200px)'
              }}
            />
            {/* Faded Background Logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] opacity-20 blur-sm mix-blend-screen pointer-events-none">
              <Image
                src="/logo.png"
                alt="Background Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Animated Background Gradients */}
          <m.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] -z-10"
          />
          <m.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -z-10"
          />

          <div className="container px-6 mx-auto text-center z-10">
            <m.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <m.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 hover:bg-white/10 transition-colors cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-medium text-zinc-300 tracking-wide uppercase">Connected</span>
              </m.div>


              <m.h1 variants={fadeInUp} className="text-6xl md:text-9xl font-bold tracking-tighter mb-6 bg-gradient-to-b from-white via-white to-zinc-500 bg-clip-text text-transparent pb-2 relative z-10 drop-shadow-[0_20px_50px_rgba(168,85,247,0.5)]">
                BUILD THE <br /> IMPOSSIBLE.
              </m.h1>

              <m.p variants={fadeInUp} className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed">
                Join 500+ developers, designers, and innovators for 48 hours of pure creation.
                The ultimate hackathon experience coming to your city.
              </m.p>

              <m.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/problem-statement">
                  <button className="h-12 px-8 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95">
                    Problem Statements
                  </button>
                </Link>
                <Link href="/submission">
                  <button className="h-12 px-8 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all text-white font-medium hover:scale-105 active:scale-95">
                    Submission Page
                  </button>
                </Link>
              </m.div>
            </m.div>
          </div>

          {/* Scroll Down Indicator */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 2, duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </m.div>
        </section>

        {/* Stats Section */}
        <section className="border-y border-white/5 bg-white/[0.02] backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Prizes", value: "$50k+" },
              { label: "Hackers", value: "500+" },
              { label: "Hours", value: "48" },
              { label: "Themes", value: "5" },
            ].map((stat, i) => (
              <m.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider">{stat.label}</div>
              </m.div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6 relative">
          <div className="max-w-4xl mx-auto">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent inline-block">What is Randomize?</h2>
              <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-6 font-light">
                Randomize is not just another hackathon. It's a gathering of minds, a collision of ideas, and a celebration of code.
                Whether you're a seasoned pro or writing your first line of code, we have a place for you.
              </p>
              <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light">
                We provide the meals, the caffeine, and the swag. You bring the creativity.
                Compete for cash prizes, connect with top tech companies, and build something that matters.
              </p>
            </m.div>
          </div>
        </section>

        {/* Tracks Section */}
        <section id="tracks" className="py-32 px-6 bg-zinc-900/30">
          <div className="max-w-7xl mx-auto">
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-16 text-center"
            >
              Tracks & Themes
            </m.h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "AI & ML", desc: "Push the boundaries of artificial intelligence. Build smart agents, generative models, or predictive systems." },
                { title: "Blockchain", desc: "Decentralize the future. Create dApps, smart contracts, or new financial primitives on the chain." },
                { title: "Social Good", desc: "Code for a cause. Solve real-world problems affecting your community or the globe." },
                { title: "Fintech", desc: "Revolutionize finance. Build the next generation of payments, banking, or trading tools." },
                { title: "Gaming", desc: "Create immersive experiences. From indie games to VR worlds, let your imagination run wild." },
                { title: "Open Innovation", desc: "No boundaries. If it's cool, hacky, and works, build it here." },
              ].map((track, i) => (
                <m.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.03)" }}
                  className="group p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-purple-500/30 transition-all cursor-default"
                >
                  <h3 className="text-xl font-bold mb-4 text-zinc-100 group-hover:text-purple-400 transition-colors">{track.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{track.desc}</p>
                </m.div>
              ))}
            </div>
          </div>
        </section>


      </main>
    </div>
  );
}
