import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-zinc-900 border-t border-zinc-800">
            <div className="section-container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">
                            <span className="text-white">FT</span>
                            <span className="text-red-600"> GARAGE</span>
                        </h3>
                        <p className="text-zinc-400 mb-4">
                            Spesialis Remap ECU dan Performance Tuning terpercaya di Surabaya.
                            Tingkatkan performa kendaraan Anda dengan teknologi terkini.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Kontak</h4>
                        <div className="space-y-3">
                            <a href="tel:+6281234567890" className="flex items-center gap-3 text-zinc-400 hover:text-red-600 transition-colors">
                                <Phone size={18} />
                                <span>+62 812-3456-7890</span>
                            </a>
                            <a href="mailto:info@ftgarage.co.id" className="flex items-center gap-3 text-zinc-400 hover:text-red-600 transition-colors">
                                <Mail size={18} />
                                <span>info@ftgarage.co.id</span>
                            </a>
                            <div className="flex items-start gap-3 text-zinc-400">
                                <MapPin size={18} className="flex-shrink-0 mt-1" />
                                <span>Jl. Raya Rungkut No. 123<br />Surabaya, Jawa Timur 60293</span>
                            </div>
                        </div>
                    </div>

                    {/* Operating Hours */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Jam Operasional</h4>
                        <div className="space-y-3 text-zinc-400">
                            <div className="flex items-center gap-3">
                                <Clock size={18} className="text-red-600" />
                                <div>
                                    <div className="font-semibold text-white">Senin - Sabtu</div>
                                    <div className="text-sm">08:00 - 17:00 WIB</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock size={18} className="text-zinc-600" />
                                <div>
                                    <div className="font-semibold text-white">Minggu</div>
                                    <div className="text-sm">Tutup</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Ikuti Kami</h4>
                        <p className="text-zinc-400 text-sm mb-4">
                            Dapatkan update terbaru tentang promo dan tips perawatan kendaraan
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="https://instagram.com/ftgarage"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-zinc-800 rounded-lg hover:bg-red-600 transition-colors"
                            >
                                <Instagram size={20} className="text-white" />
                            </a>
                            <a
                                href="https://facebook.com/ftgarage"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-zinc-800 rounded-lg hover:bg-red-600 transition-colors"
                            >
                                <Facebook size={20} className="text-white" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-zinc-800 text-center">
                    <p className="text-zinc-500 text-sm">
                        © 2026 FT Garage Surabaya. All rights reserved. | Built with passion for automotive excellence.
                    </p>
                </div>
            </div>
        </footer>
    );
}
