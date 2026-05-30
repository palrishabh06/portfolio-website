export default function Navbar() {
    return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        <h1 className="text-xl font-bold">
            RISHABH
        </h1>

        <div className="flex items-center gap-8 text-sm">
            <a href="#about" className="hover:text-blue-400 transition-colors">
            About
                </a>

            <a href="#projects" className="hover:text-blue-400 transition-colors">
            Projects
            </a>

            <a href="#github" className="hover:text-blue-400 transition-colors">
            GitHub
            </a>

            <a href="#contact" className="hover:text-blue-400 transition-colors">
            Contact
            </a>
        </div>
        </div>
    </nav>
    );
}