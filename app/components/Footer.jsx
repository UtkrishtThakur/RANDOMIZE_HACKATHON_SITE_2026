export default function Footer() {
    return (
        <footer className="py-12 border-t border-white/10 bg-black text-center md:text-left">
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
    );
}
