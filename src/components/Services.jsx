import { Cpu, Sparkles, Wrench, ArrowRight } from 'lucide-react';

export default function Services() {
    const services = [
        {
            id: 1,
            icon: Cpu,
            category: 'Performance',
            title: 'Remap ECU',
            description: 'Custom engine tuning untuk performa maksimal. Tingkatkan tenaga, torsi, dan responsivitas throttle kendaraan Anda.',
            price: 'Mulai dari Rp 3.500.000',
            features: ['Dyno Test', 'Custom Mapping', 'Garansi 6 Bulan'],
            image: '/ecu-remap.png'
        },
        {
            id: 2,
            icon: Sparkles,
            category: 'Maintenance',
            title: 'Jet Clean',
            description: 'Pembersihan menyeluruh sistem injeksi dan ruang bakar. Kembalikan performa mesin seperti baru.',
            price: 'Mulai dari Rp 750.000',
            features: ['Deep Cleaning', 'Fuel System', 'Intake Manifold'],
            image: '/jet-clean.png'
        },
        {
            id: 3,
            icon: Wrench,
            category: 'Service',
            title: 'General Service',
            description: 'Perawatan berkala lengkap dengan teknisi bersertifikat. Diagnosis menyeluruh dengan alat modern.',
            price: 'Mulai dari Rp 500.000',
            features: ['Full Inspection', 'Oli & Filter', 'Free Diagnostic'],
            image: '/general-service.png'
        }
    ];

    return (
        <section id="services" className="section-container bg-zinc-950">
            <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-full mb-4">
                    <span className="text-red-600 font-semibold">Layanan Kami</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                    Premium <span className="headline-speed">Automotive Services</span>
                </h2>
                <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                    Solusi lengkap untuk meningkatkan performa dan merawat kendaraan Anda
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => {
                    const IconComponent = service.icon;
                    return (
                        <div key={service.id} className="service-card group">
                            {/* Service Image */}
                            <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4">
                                    <span className="px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-full">
                                        {service.category}
                                    </span>
                                </div>
                            </div>

                            {/* Service Info */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-red-600/10 rounded-lg">
                                    <IconComponent className="text-red-600" size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                            </div>

                            <p className="text-zinc-400 mb-4">
                                {service.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-2 mb-6">
                                {service.features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-2 text-sm text-zinc-500">
                                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Price & CTA */}
                            <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                                <div>
                                    <div className="text-xs text-zinc-500 mb-1">Harga</div>
                                    <div className="text-white font-semibold">{service.price}</div>
                                </div>
                                <button className="flex items-center gap-2 text-red-600 font-semibold hover:gap-3 transition-all">
                                    Detail
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
