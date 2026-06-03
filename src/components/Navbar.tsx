"use client";

import { motion } from "framer-motion";
export default function Navbar() {
    return (
    <motion.nav
        className="fixed top-0 left-0 w-full z-50 px-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        >
        <div className="max-w-5xl mx-auto mt-4 px-8 py-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg shadow-blue-500/5">
        
        <h1 className="text-xl font-bold tracking-wider">
            RISHABH
        </h1>

        <div className="flex items-center gap-10">
            <a href="#about" className="text-gray-400 hover:text-white transition-all duration-300">
                About
            </a>

            <a href="#projects" className="text-gray-400 hover:text-white transition-all duration-300">
                Projects
            </a>

            <a href="#github" className="text-gray-400 hover:text-white transition-all duration-300">
                GitHub
            </a>

            <a href="#contact" className="text-gray-400 hover:text-white transition-all duration-300">
                Contact
            </a>
        </div>
        </div>
    </motion.nav>
    );
}