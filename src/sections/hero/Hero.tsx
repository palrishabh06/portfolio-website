export default function Hero() {
    return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="text-center">
        <p className="text-lg text-blue-400 mb-4 font-medium tracking-wide">
            SOFTWARE ENGINEER • FULL STACK • AI
        </p>

        <h1 className="text-7xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            Rishabh Raj
        </h1>

        <h2 className="text-3xl text-gray-400 mb-6">
            Full Stack Developer & Future SDE
        </h2>

        <p className="max-w-3xl text-lg md:text-xl text-gray-400 mx-auto mb-10 leading-relaxed">
    Focused on creating intelligent software, full-stack applications,
    and AI-driven solutions that solve real-world problems.
</p>

<div className="flex justify-center gap-4">
    <button className="px-6 py-3 bg-white text-black rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl">
    View Projects
    </button>

    <button className="px-6 py-3 border border-gray-600 rounded-lg transition-all duration-300 hover:border-white hover:scale-105">
    Resume
    </button>
</div>
        </div>
    </section>
    );
}