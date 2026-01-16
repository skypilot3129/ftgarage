import { Shield, Clock, FileText, Users } from 'lucide-react';

export default function WhyChooseUs() {
    const features = [
        {
            icon: Shield,
            title: 'Peralatan Professional',
            description: 'Menggunakan alat diagnostic dan tuning terkini dari brand ternama untuk hasil maksimal.'
        },
        {
            icon: Clock,
            title: 'Ruang Tunggu Nyaman',
            description: 'Fasilitas lengkap dengan AC, WiFi, dan refreshment gratis selama menunggu.'
        },
        {
            icon: FileText,
            title: 'Transparansi Harga',
            description: 'Tidak ada biaya tersembunyi. Konsultasi gratis sebelum memutuskan layanan.'
        },
        {
            icon: Users,
            title: 'Teknisi Bersertifikat',
            description: 'Tim mekanik berpengalaman dan tersertifikasi dengan track record terpercaya.'
        }
    ];

    return (
        <section id="why-us" className="section-container bg-zinc-950">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                    <div className="inline-block px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-full mb-4">
                        <span className="text-red-600 font-semibold">Mengapa Pilih Kami</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        Kepercayaan & <span className="headline-speed">Kualitas</span> adalah Prioritas
                    </h2>
                    <p className="text-zinc-400 text-lg mb-8">
                        FT Garage bukan hanya bengkel biasa. Kami adalah partner Anda dalam mengoptimalkan
                        performa kendaraan dengan teknologi terdepan dan layanan yang transparan.
                    </p>

                    <div className="space-y-4">
                        {features.map((feature, index) => {
                            const IconComponent = feature.icon;
                            return (
                                <div key={index} className="flex gap-4 p-4 bg-zinc-900/50 rounded-lg border border-zinc-800 hover:border-red-600/50 transition-colors">
                                    <div className="flex-shrink-0">
                                        <div className="p-3 bg-red-600/10 rounded-lg">
                                            <IconComponent className="text-red-600" size={24} />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                                        <p className="text-zinc-400 text-sm">{feature.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Right Content - Image Placeholder */}
                <div className="relative">
                    <div className="aspect-square rounded-2xl overflow-hidden border border-zinc-800">
                        <img
                            src="/general-service.png"
                            alt="FT Garage Workshop"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Floating Stats Card */}
                    <div className="absolute -bottom-6 -left-6 bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-2xl">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-red-600/10 rounded-lg">
                                <Shield className="text-red-600" size={32} />
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-white">Garansi</div>
                                <div className="text-zinc-400">6 Bulan Service</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
