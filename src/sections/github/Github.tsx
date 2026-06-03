export default function Github() {
    return (
    <section
        id="github"
        className="min-h-screen flex flex-col items-center justify-center px-6"
    >
        <h2 className="text-5xl font-bold mb-4">
        GitHub Activity
        </h2>

        <p className="text-gray-400 text-center mb-12">
        Consistent learning, building, and shipping projects.
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
        <img
            src="https://github-readme-stats.vercel.app/api?username=palrishabh06&show_icons=true&theme=tokyonight"
            alt="GitHub Stats"
        />

        <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=palrishabh06&layout=compact&theme=tokyonight"
            alt="Top Languages"
        />
        </div>
    </section>
    );
}