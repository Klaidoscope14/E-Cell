import { motion } from "framer-motion";
import SceneCanvas from "../three/SceneCanvas";
import { Link } from "react-router-dom";
import { useTimer } from "react-timer-hook";
import React from "react";

function CountdownTimer() {
  const expiryTimestamp = new Date("2025-08-16T13:30:00+05:30");
  const { days, hours, minutes, seconds } = useTimer({ expiryTimestamp });

  return (
    <div
      className="mt-8 bg-black/50 px-6 py-4 rounded-xl inline-block text-center"
      style={{ fontFamily: "'Orbitron', sans-serif" }}
    >
      <p className="text-lg font-semibold text-blue-200 mb-2">
        ⏳ Countdown to Xplore 2025
      </p>
      <div className="flex gap-6 justify-center">
        <div>
          <span className="text-3xl font-bold text-white">{days}</span>
          <p className="text-sm text-gray-300">{days === 1 ? "Day" : "Days"}</p>
        </div>
        <div>
          <span className="text-3xl font-bold text-white">{hours}</span>
          <p className="text-sm text-gray-300">{hours === 1 ? "Hour" : "Hours"}</p>
        </div>
        <div>
          <span className="text-3xl font-bold text-white">{minutes}</span>
          <p className="text-sm text-gray-300">{minutes === 1 ? "Minute" : "Minutes"}</p>
        </div>
        <div>
          <span className="text-3xl font-bold text-white">{seconds}</span>
          <p className="text-sm text-gray-300">{seconds === 1 ? "Second" : "Seconds"}</p>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  React.useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-blue-950 to-black text-white">
      {/* Background elements for depth */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-700 opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600 opacity-5 rounded-full blur-3xl"></div>

      {/* Three.js canvas - moved higher in z-index but behind content */}
      <div className="absolute inset-0 z-1">
        <SceneCanvas />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-32 pt-5 flex flex-col items-center justify-start min-h-screen">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-7xl font-bold mb-4 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400">
              E-Cell IIT Patna
            </span>
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-6xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400">
              Innovate. Impact. Inspire.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed text-blue-100 font-light"
          >
            Join our vibrant alumni community and relive your E-Cell journey
            with fellow innovators and leaders.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/alumni">
              <button className="bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-lg transform hover:scale-105">
                Join the Community
              </button>
            </Link>
            <Link to="/about">
              <button className="bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-lg transform hover:scale-105">
                Learn More
              </button>
            </Link>
          </motion.div>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <CountdownTimer />
          </motion.div>
        </div>
      </div>
     {/* ✨ Sleek Shining Down Arrow */}
<motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 1.2 }}
  className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
>
  <a href="#mission-vision" className="group">
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-7 h-7 text-white group-hover:text-blue-400 transition-colors duration-300"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      animate={{
        opacity: [0.7, 1, 0.7],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </motion.svg>
  </a>
</motion.div>
    </section>
  );
}
