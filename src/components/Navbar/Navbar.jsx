import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-slate-900 text-white px-8 py-4">

            <div className="flex justify-between items-center">

                <h1 className="text-2xl font-bold">
                    Talal.
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex gap-6">
                    <li className="hover:text-blue-400 cursor-pointer">Home</li>
                    <li className="hover:text-blue-400 cursor-pointer">About</li>
                    <li className="hover:text-blue-400 cursor-pointer">Skills</li>
                    <li className="hover:text-blue-400 cursor-pointer">Projects</li>
                    <li className="hover:text-blue-400 cursor-pointer">Contact</li>
                </ul>

                {/* Mobile Button */}
                <button
                    className="lg:hidden text-3xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? "✕" : "☰"}
                </button>

            </div>
            {menuOpen && (
                <ul className="lg:hidden mt-4 flex flex-col gap-4">
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            )}
        </nav>
    );
}