import { Car, Star, Award, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Stats() {
    const [counts, setCounts] = useState({
        cars: 0,
        rating: 0,
        years: 0,
        satisfaction: 0
    });

    useEffect(() => {
        // Animate counters on mount
        const intervals = [];

        // Cars counter
        intervals.push(setInterval(() => {
            setCounts(prev => {
                if (prev.cars >= 1500) return prev;
                return { ...prev, cars: Math.min(prev.cars + 50, 1500) };
            });
        }, 30));

        // Rating counter
        intervals.push(setInterval(() => {
            setCounts(prev => {
                if (prev.rating >= 4.9) return prev;
                return { ...prev, rating: Math.min(prev.rating + 0.1, 4.9) };
            });
        }, 100));

        // Years counter
        intervals.push(setInterval(() => {
            setCounts(prev => {
                if (prev.years >= 8) return prev;
                return { ...prev, years: prev.years + 1 };
            });
        }, 200));

        // Satisfaction counter
        intervals.push(setInterval(() => {
            setCounts(prev => {
                if (prev.satisfaction >= 98) return prev;
                return { ...prev, satisfaction: Math.min(prev.satisfaction + 2, 98) };
            });
        }, 50));

        return () => intervals.forEach(interval => clearInterval(interval));
    }, []);

    const stats = [
        {
            icon: Car,
            value: counts.cars.toFixed(0),
            label: 'Kendaraan Ditangani',
            suffix: '+'
        },
        {
            icon: Star,
            value: counts.rating.toFixed(1),
            label: 'Rating Google Maps',
            suffix: '/5.0'
        },
        {
            icon: Award,
            value: counts.years.toFixed(0),
            label: 'Tahun Pengalaman',
            suffix: '+'
        },
        {
            icon: TrendingUp,
            value: counts.satisfaction.toFixed(0),
            label: 'Kepuasan Pelanggan',
            suffix: '%'
        }
    ];

    return (
        <section className="section-container bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                        <div key={index} className="text-center group">
                            <div className="inline-flex p-4 bg-red-600/10 rounded-full mb-4 group-hover:bg-red-600/20 transition-colors">
                                <IconComponent className="text-red-600" size={32} />
                            </div>
                            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                                {stat.value}{stat.suffix}
                            </div>
                            <div className="text-sm sm:text-base text-zinc-400">
                                {stat.label}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
