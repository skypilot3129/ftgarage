import { useState } from 'react';
import { Calendar, Car, Wrench, User, CheckCircle } from 'lucide-react';

export default function BookingForm() {
    const [formData, setFormData] = useState({
        name: '',
        carType: '',
        service: '',
        date: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form
        if (!formData.name || !formData.carType || !formData.service || !formData.date) {
            alert('Mohon lengkapi semua field');
            return;
        }

        // Simulate booking submission
        setIsSubmitted(true);

        // In production, this would send to WhatsApp API
        console.log('Booking Data:', formData);
    };

    const handleReset = () => {
        setIsSubmitted(false);
        setFormData({
            name: '',
            carType: '',
            service: '',
            date: ''
        });
    };

    if (isSubmitted) {
        return (
            <section id="booking" className="section-container bg-zinc-950">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="inline-flex p-4 bg-green-600/10 rounded-full mb-6">
                        <CheckCircle className="text-green-600" size={64} />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">Booking Berhasil!</h2>
                    <p className="text-zinc-400 mb-6">
                        Terima kasih, <span className="text-white font-semibold">{formData.name}</span>.
                        Tim kami akan segera menghubungi Anda via WhatsApp untuk konfirmasi jadwal.
                    </p>
                    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mb-6 text-left">
                        <h3 className="text-white font-semibold mb-4">Detail Booking:</h3>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span className="text-zinc-400">Nama:</span>
                                <span className="text-white">{formData.name}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-zinc-400">Tipe Mobil:</span>
                                <span className="text-white">{formData.carType}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-zinc-400">Layanan:</span>
                                <span className="text-white">{formData.service}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-zinc-400">Tanggal:</span>
                                <span className="text-white">{new Date(formData.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleReset} className="btn-secondary">
                        Booking Lagi
                    </button>
                </div>
            </section>
        );
    }

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
                        Isi form di bawah ini dan tim kami akan menghubungi Anda untuk konfirmasi
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

                        {/* Car Type Field */}
                        <div>
                            <label className="block text-white font-semibold mb-2 flex items-center gap-2">
                                <Car size={20} className="text-red-600" />
                                Tipe / Model Mobil
                            </label>
                            <input
                                type="text"
                                name="carType"
                                value={formData.carType}
                                onChange={handleChange}
                                placeholder="Contoh: Honda Civic 2020"
                                className="input-field"
                                required
                            />
                        </div>

                        {/* Service Selection */}
                        <div>
                            <label className="block text-white font-semibold mb-2 flex items-center gap-2">
                                <Wrench size={20} className="text-red-600" />
                                Pilih Layanan
                            </label>
                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className="input-field"
                                required
                            >
                                <option value="">-- Pilih Layanan --</option>
                                <option value="Remap ECU">Remap ECU</option>
                                <option value="Jet Clean">Jet Clean</option>
                                <option value="General Service">General Service</option>
                                <option value="Konsultasi">Konsultasi Performance</option>
                            </select>
                        </div>

                        {/* Date Selection */}
                        <div>
                            <label className="block text-white font-semibold mb-2 flex items-center gap-2">
                                <Calendar size={20} className="text-red-600" />
                                Tanggal Preferensi
                            </label>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                min={new Date().toISOString().split('T')[0]}
                                className="input-field"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="btn-primary w-full">
                            Kirim Booking Request
                        </button>

                        <p className="text-center text-sm text-zinc-500">
                            Dengan melakukan booking, Anda menyetujui bahwa tim kami akan menghubungi via WhatsApp
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
}
