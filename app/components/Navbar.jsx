export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="font-bold text-xl tracking-tighter bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    <a href="/" className="hover:text-white transition-colors">
                        Randomize_Hack
                    </a>
                </div>
                <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
                    <a href="/problem-statement" className="hover:text-white transition-colors">
                        Problems
                    </a>
                    <a href="/submission" className="hover:text-white transition-colors">
                        Submissions
                    </a>
                    <a href="/leaderboard" className="hover:text-white transition-colors">
                        Leaderboard
                    </a>
                    <a href="/rules" className="hover:text-white transition-colors">
                        RULES & FAQ
                    </a>
                </div>
                <button className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors">
                    Timer placeholder
                </button>
            </div>
        </nav>
    );
}
