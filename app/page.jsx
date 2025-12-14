import Image from "next/image";

import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30">
      <Navbar />

      <main className="flex flex-col w-full">
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
          {/* Background Gradients */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/20 rounded-full blur-[120px] -z-10" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -z-10" />

          <div className="container px-6 mx-auto text-center z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-zinc-300 tracking-wide uppercase">Applications Open</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
              BUILD THE <br /> IMPOSSIBLE.
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed">
              Join 500+ developers, designers, and innovators for 48 hours of pure creation.
              The ultimate hackathon experience coming to your city.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="h-12 px-8 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95">
                Apply with Devfolio
              </button>
              <button className="h-12 px-8 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all text-white font-medium">
                View Discord
              </button>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-zinc-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
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
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">What is Randomize?</h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-6">
              Randomize is not just another hackathon. It's a gathering of minds, a collision of ideas, and a celebration of code.
              Whether you're a seasoned pro or writing your first line of code, we have a place for you.
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed">
              We provide the meals, the caffeine, and the swag. You bring the creativity.
              Compete for cash prizes, connect with top tech companies, and build something that matters.
            </p>
          </div>
        </section>

        {/* Tracks Section */}
        <section id="tracks" className="py-32 px-6 bg-zinc-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Tracks & Themes</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "AI & ML", desc: "Push the boundaries of artificial intelligence. Build smart agents, generative models, or predictive systems." },
                { title: "Blockchain", desc: "Decentralize the future. Create dApps, smart contracts, or new financial primitives on the chain." },
                { title: "Social Good", desc: "Code for a cause. Solve real-world problems affecting your community or the globe." },
                { title: "Fintech", desc: "Revolutionize finance. Build the next generation of payments, banking, or trading tools." },
                { title: "Gaming", desc: "Create immersive experiences. From indie games to VR worlds, let your imagination run wild." },
                { title: "Open Innovation", desc: "No boundaries. If it's cool, hacky, and works, build it here." },
              ].map((track, i) => (
                <div key={i} className="group p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-purple-500/30 transition-all hover:bg-zinc-800/50">
                  <h3 className="text-xl font-bold mb-4 text-zinc-100 group-hover:text-purple-400 transition-colors">{track.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{track.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-white/10 bg-black">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-zinc-500 text-sm">
              © 2026 Randomize Hackathon. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-zinc-500 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors">Discord</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
