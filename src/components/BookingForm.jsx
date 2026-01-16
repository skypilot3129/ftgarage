import { useState } from 'react';
import { Calendar, Car, Wrench, User, CheckCircle, Gauge, Fuel, Settings } from 'lucide-react';

export default function BookingForm() {
    const [formData, setFormData] = useState({
        name: '',
        merkMobil: '',
        modelMobil: '',
        ccMobil: '',
        fuelType: '',
        tahunMobil: '',
        transmisi: '',
        kmMobil: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form
        if (!formData.name || !formData.merkMobil || !formData.modelMobil ||
            !formData.ccMobil || !formData.fuelType || !formData.tahunMobil ||
            !formData.transmisi || !formData.kmMobil) {
            alert('Mohon lengkapi semua field');
            return;
        }

        // Format WhatsApp message
        const greetingMessage = `Haii Hallo FT HOLICS 🤗

Terima kasih telah menghubungi FT GARAGE.

Jam Operasional: 
Senin-Jum'at jam 08.00 - 17.00
Sabtu jam 08.00 - 16.00
Minggu & Hari Besar lainnya LIBUR.

Silahkan Beri tahu apa yang bisa kami bantu. 
Berikut data informasi saya 👇

Nama: ${formData.name}
Merk Mobil: ${formData.merkMobil}
Model/Type Mobil: ${formData.modelMobil}
CC Mobil: ${formData.ccMobil}
Diesel/Bensin: ${formData.fuelType}
Tahun Mobil: ${formData.tahunMobil}
Transmisi: ${formData.transmisi}
KM mobil: ${formData.kmMobil}`;

        // Encode message for WhatsApp URL
        const encodedMessage = encodeURIComponent(greetingMessage);
        const phoneNumber = '6281268369074'; // Format: country code + number without leading 0
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        // Open WhatsApp in new window
        window.open(whatsappUrl, '_blank');
    };

    const handleReset = () => {
        setFormData({
            name: '',
            merkMobil: '',
            modelMobil: '',
            ccMobil: '',
            fuelType: '',
            tahunMobil: '',
            transmisi: '',
            kmMobil: ''
        });
    };

    return (
        <section id="booking" className="section-container bg-gradient-to-b from-zinc-950 to-zinc-900">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-block px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-full mb-4">
                        <span className="text-red-600 font-semibold">Reservasi Online</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        <span className="headline-speed">Book</span> Your Service Slot
                    </h2>
                    <p className="text-zinc-400 text-lg">
                        Isi form di bawah ini untuk menghubungi kami via WhatsApp
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
                    <div className="space-y-6">
                        {/* Name Field */}
                        <div>
                            <label className="block text-white font-semibold mb-2 flex items-center gap-2">
                                <User size={20} className="text-red-600" />
                                Nama Lengkap
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Masukkan nama Anda"
                                className="input-field"
                                required
                            />
                        </div>

                        {/* Car Brand Field */}
                        <div>
                            <label className="block text-white font-semibold mb-2 flex items-center gap-2">
                                <Car size={20} className="text-red-600" />
                                Merk Mobil
                            </label>
                            <input
                                type="text"
                                name="merkMobil"
                                value={formData.merkMobil}
                                onChange={handleChange}
                                placeholder="Contoh: Honda"
                                className="input-field"
                                required
                            />
                        </div>

                        {/* Car Model Field */}
                        <div>
                            <label className="block text-white font-semibold mb-2 flex items-center gap-2">
                                <Car size={20} className="text-red-600" />
                                Model/Type Mobil
                            </label>
                            <input
                                type="text"
                                name="modelMobil"
                                value={formData.modelMobil}
                                onChange={handleChange}
                                placeholder="Contoh: HRV RU5"
                                className="input-field"
                                required
                            />
                        </div>

                        {/* Grid for 2 columns on larger screens */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* CC Field */}
                            <div>
                                <label className="block text-white font-semibold mb-2 flex items-center gap-2">
                                    <Gauge size={20} className="text-red-600" />
                                    CC Mobil
                                </label>
                                <input
                                    type="text"
                                    name="ccMobil"
                                    value={formData.ccMobil}
                                    onChange={handleChange}
                                    placeholder="Contoh: 1.8"
                                    className="input-field"
                                    required
                                />
                            </div>

                            {/* Fuel Type */}
                            <div>
                                <label className="block text-white font-semibold mb-2 flex items-center gap-2">
                                    <Fuel size={20} className="text-red-600" />
                                    Diesel/Bensin
                                </label>
                                <select
                                    name="fuelType"
                                    value={formData.fuelType}
                                    onChange={handleChange}
                                    className="input-field"
                                    required
                                >
                                    <option value="">-- Pilih --</option>
                                    <option value="Bensin">Bensin</option>
                                    <option value="Diesel">Diesel</option>
                                </select>
                            </div>
                        </div>

                        {/* Grid for 2 columns */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Year Field */}
                            <div>
                                <label className="block text-white font-semibold mb-2 flex items-center gap-2">
                                    <Calendar size={20} className="text-red-600" />
                                    Tahun Mobil
                                </label>
                                <input
                                    type="number"
                                    name="tahunMobil"
                                    value={formData.tahunMobil}
                                    onChange={handleChange}
                                    placeholder="Contoh: 2019"
                                    min="1900"
                                    max={new Date().getFullYear() + 1}
                                    className="input-field"
                                    required
                                />
                            </div>

                            {/* Transmission */}
                            <div>
                                <label className="block text-white font-semibold mb-2 flex items-center gap-2">
                                    <Settings size={20} className="text-red-600" />
                                    Transmisi
                                </label>
                                <select
                                    name="transmisi"
                                    value={formData.transmisi}
                                    onChange={handleChange}
                                    className="input-field"
                                    required
                                >
                                    <option value="">-- Pilih --</option>
                                    <option value="MT">MT (Manual)</option>
                                    <option value="AT">AT (Automatic)</option>
                                    <option value="CVT">CVT</option>
                                    <option value="DCT">DCT</option>
                                </select>
                            </div>
                        </div>

                        {/* Mileage Field */}
                        <div>
                            <label className="block text-white font-semibold mb-2 flex items-center gap-2">
                                <Wrench size={20} className="text-red-600" />
                                KM Mobil
                            </label>
                            <input
                                type="text"
                                name="kmMobil"
                                value={formData.kmMobil}
                                onChange={handleChange}
                                placeholder="Contoh: 65.xxx"
                                className="input-field"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="btn-primary w-full">
                            Kirim ke WhatsApp
                        </button>

                        <p className="text-center text-sm text-zinc-500">
                            Dengan melakukan booking, Anda akan diarahkan ke WhatsApp FT GARAGE
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
}
