"use client";
import { motion } from "framer-motion";
export default function Skills() {
    const skills = [
    "C++",
    "Java",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "SQL",
    "Git",
    "Tailwind CSS",
    "Machine Learning",
    "Deep Learning",
    ];

    return (
    <section
        id="skills"
        className="min-h-screen flex flex-col justify-center items-center px-6"
    >
        <h2 className="text-5xl font-bold mb-12">
        Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill) => (
    <motion.div
        key={skill}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300 cursor-pointer"
    >
        {skill}
    </motion.div>
            ))}
</div>
    </section>
    );
}