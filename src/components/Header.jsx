import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-900">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold">
                            <span className="text-white">FT</span>
                            <span className="text-red-600"> GARAGE</span>
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <button onClick={() => scrollToSection('home')} className="text-zinc-400 hover:text-white transition-colors">
                            Home
                        </button>
                        <button onClick={() => scrollToSection('services')} className="text-zinc-400 hover:text-white transition-colors">
                            Layanan
                        </button>
                        <button onClick={() => scrollToSection('why-us')} className="text-zinc-400 hover:text-white transition-colors">
                            Keunggulan
                        </button>
                        <button onClick={() => scrollToSection('booking')} className="btn-primary">
                            Booking Sekarang
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-white p-2"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 space-y-3">
                        <button onClick={() => scrollToSection('home')} className="block w-full text-left text-zinc-400 hover:text-white transition-colors py-2">
                            Home
                        </button>
                        <button onClick={() => scrollToSection('services')} className="block w-full text-left text-zinc-400 hover:text-white transition-colors py-2">
                            Layanan
                        </button>
                        <button onClick={() => scrollToSection('why-us')} className="block w-full text-left text-zinc-400 hover:text-white transition-colors py-2">
                            Keunggulan
                        </button>
                        <button onClick={() => scrollToSection('booking')} className="btn-primary w-full">
                            Booking Sekarang
                        </button>
                    </div>
                )}
            </nav>
        </header>
    );
}
