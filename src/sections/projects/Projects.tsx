export default function Projects() {
    return (
    <section
        id="projects"
        className="min-h-screen px-6 py-24"
    >
        <div className="max-w-6xl mx-auto">
        <p className="text-blue-400 uppercase tracking-widest mb-4">
            Featured Projects
        </p>

        <h2 className="text-5xl md:text-6xl font-bold mb-12">
        Things I have Built
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

            <div className="border border-gray-800 rounded-3xl p-8 hover:border-blue-500 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">
                AI Resume Analyzer
            </h3>

            <p className="text-gray-400 mb-6">
                ATS scoring, resume analysis, keyword extraction,
                and job description matching powered by AI.
            </p>

            <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full border border-gray-700">
                Next.js
                </span>

                <span className="px-3 py-1 rounded-full border border-gray-700">
                TypeScript
                </span>

                <span className="px-3 py-1 rounded-full border border-gray-700">
                OpenAI
                </span>
            </div>
            </div>

            <div className="border border-gray-800 rounded-3xl p-8 hover:border-blue-500 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">
                AI Mock Interview
            </h3>

            <p className="text-gray-400 mb-6">
                Intelligent interview practice platform with AI
                feedback and performance analysis.
            </p>

            <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full border border-gray-700">
                React
                </span>

                <span className="px-3 py-1 rounded-full border border-gray-700">
                Node.js
                </span>

                <span className="px-3 py-1 rounded-full border border-gray-700">
                AI
                </span>
            </div>
            </div>

        </div>
        </div>
    </section>
    );
}