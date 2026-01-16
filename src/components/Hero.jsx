import { Zap, Gauge, Leaf, ArrowRight } from 'lucide-react';

export default function Hero() {
    const scrollToBooking = () => {
        const element = document.getElementById('booking');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url(/hero-bg.png)',
                    filter: 'brightness(0.3)',
                }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-zinc-950/70 to-zinc-950" />

            {/* Content */}
            <div className="relative z-10 section-container text-center">
                <div className="max-w-4xl mx-auto">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-full mb-6">
                        <Zap className="text-red-600" size={20} />
                        <span className="text-red-600 font-semibold">Spesialis Performa Mesin</span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-7xl headline-speed mb-6 text-shadow">
                        Unleash Your Engine Potential
                    </h1>

                    <p className="text-lg sm:text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
                        Tingkatkan performa kendaraan Anda dengan teknologi ECU Remapping terkini.
                        Dapatkan tenaga maksimal, efisiensi bahan bakar, dan driving experience yang luar biasa.
                    </p>

                    {/* Performance Indicators */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
                        <div className="bg-zinc-900/50 backdrop-blur border border-zinc-800 rounded-lg p-4">
                            <Gauge className="text-red-600 mx-auto mb-2" size={32} />
                            <div className="text-2xl font-bold text-white">+30%</div>
                            <div className="text-sm text-zinc-400">Torque Increase</div>
                        </div>
                        <div className="bg-zinc-900/50 backdrop-blur border border-zinc-800 rounded-lg p-4">
                            <Zap className="text-red-600 mx-auto mb-2" size={32} />
                            <div className="text-2xl font-bold text-white">+25%</div>
                            <div className="text-sm text-zinc-400">Horsepower Boost</div>
                        </div>
                        <div className="bg-zinc-900/50 backdrop-blur border border-zinc-800 rounded-lg p-4">
                            <Leaf className="text-red-600 mx-auto mb-2" size={32} />
                            <div className="text-2xl font-bold text-white">15%</div>
                            <div className="text-sm text-zinc-400">Fuel Efficiency</div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button onClick={scrollToBooking} className="btn-primary flex items-center justify-center gap-2">
                            Booking Sekarang
                            <ArrowRight size={20} />
                        </button>
                        <button onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })} className="btn-secondary">
                            Lihat Layanan
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
