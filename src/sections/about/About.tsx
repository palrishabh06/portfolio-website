export default function About() {
    return (
    <section
        id="about"
        className="min-h-screen flex items-center px-6 py-20"
    >
        <div className="max-w-6xl mx-auto w-full">
        <p className="text-blue-400 uppercase tracking-widest mb-4">
            About Me
        </p>

        <h2 className="text-5xl md:text-6xl font-bold mb-10">
            Building software that creates impact.
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
            <div>
            <p className="text-lg text-gray-400 leading-relaxed">
                I am a Full Stack Developer focused on building modern web
                applications, AI-powered products, and scalable software
                solutions. My goal is to combine strong engineering
                fundamentals with exceptional user experiences.
            </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
            <div className="border border-gray-800 rounded-2xl p-6">
                <h3 className="text-3xl font-bold">5+</h3>
                <p className="text-gray-400 mt-2">Projects Built</p>
            </div>

            <div className="border border-gray-800 rounded-2xl p-6">
                <h3 className="text-3xl font-bold">300+</h3>
                <p className="text-gray-400 mt-2">DSA Problems</p>
            </div>

            <div className="border border-gray-800 rounded-2xl p-6">
                <h3 className="text-3xl font-bold">AI</h3>
                <p className="text-gray-400 mt-2">Focused Development</p>
            </div>

            <div className="border border-gray-800 rounded-2xl p-6">
                <h3 className="text-3xl font-bold">Full Stack</h3>
                <p className="text-gray-400 mt-2">Engineering</p>
            </div>
            </div>
        </div>
        </div>
    </section>
    );
}