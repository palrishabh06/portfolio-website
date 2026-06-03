export default function Contact() {
    return (
        <section
            id="contact"
            className="min-h-screen flex flex-col justify-center items-center px-6"
        >
            <h2 className="text-5xl font-bold mb-4">
                Contact Me
            </h2>

            <p className="text-gray-400 mb-10 text-center">
                Have an opportunity, project, or just want to connect?
            </p>

            <div className="flex flex-col gap-4 text-center">
                <a
                    href="mailto:rajkalasangam@gmail.com"
                    className="px-6 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                    📧 rajkalasangam@gmail.com
                </a>

                <a
                    href="https://github.com/palrishabh06"
                    target="_blank"
                    className="px-6 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                    💻 GitHub
                </a>

                <a
                    href="https://www.linkedin.com/in/palrishabh06/"
                    target="_blank"
                    className="px-6 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                    🔗 LinkedIn
                </a>
            </div>
        </section>
    );
}
