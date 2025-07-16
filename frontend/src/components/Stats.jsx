// src/components/Stats.jsx
import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { label: "Alumni", count: 1000 },
    { label: "Startups", count: 120 },
    { label: "Events", count: 60 },
    { label: "Mentors", count: 40 }
  ];

  return (
    <section id="stats" className="py-20 bg-[#0d1b2a] text-white">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <h3 className="text-4xl font-bold text-orange-400">{stat.count}+</h3>
            <p className="text-gray-300 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
