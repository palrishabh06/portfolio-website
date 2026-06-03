"use client";
import { motion } from "framer-motion";
export default function Hero() {
    return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-125 w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl"></div>
        <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
        >
        <motion.p
            className="text-lg text-blue-400 mb-4 font-medium tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            >
            SOFTWARE ENGINEER • FULL STACK • AI
        </motion.p>

        <motion.h1
            className="text-7xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            >
            Rishabh Raj
        </motion.h1>

        <motion.h2
            className="text-3xl text-gray-400 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            >
            Full Stack Developer & Future SDE
        </motion.h2>

        <motion.p
            className="max-w-3xl text-lg md:text-xl text-gray-400 mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            >
                Focused on creating intelligent software, full-stack applications,
                and AI-driven solutions that solve real-world problems.
        </motion.p>
    <motion.div
        className="flex justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        >
    <button className="px-6 py-3 bg-white text-black rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl">
    View Projects
    </button>

    <button className="px-6 py-3 border border-gray-600 rounded-lg transition-all duration-300 hover:border-white hover:scale-105">
    Resume
    </button>
    </motion.div>
    </motion.div>
    </section>
    );
}