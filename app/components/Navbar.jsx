import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-10 h-10">
                        <Image
                            src="/logo.png"
                            alt="Randomize Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <span className="font-[family-name:var(--font-orbitron)] text-2xl font-bold tracking-widest bg-gradient-to-r from-purple-500 via-fuchsia-400 to-white bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.8)] transition-all duration-300">
                        RANDOMIZE
                    </span>
                </Link>
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
                <button className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors">
                    Timer placeholder
                </button>
            </div>
        </nav>
    );
}
