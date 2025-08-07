import { motion } from "framer-motion";
import SceneCanvas from "../three/SceneCanvas";
import { Link } from "react-router-dom";

export default function Hero() {
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
      
      {/* Content container - added padding-top to account for navbar */}
      <div className="relative z-10 container mx-auto px-6 py-32 pt-40 flex flex-col items-center justify-center min-h-screen">
        {/* Text content with staggered animation */}
        <div className="relative z-20 text-center">
          {/* Added E-Cell Alumni Ambassador text */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-7xl font-bold mb-4 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400">
              E-Cell IIT Patna
            </span>
          </motion.h1>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400">
              Innovate. Impact. Inspire.
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed text-blue-100 font-light"
          >
            Join our vibrant alumni community and relive your E-Cell journey with fellow innovators and leaders.
          </motion.p>
          
          {/* Call to action buttons - top row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
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
          
          {/* Visit E-Cell Site button - bottom row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-6"
          >
            <a href="https://ecell.iitp.ac.in/" target="_blank" rel="noopener noreferrer">
              <button className="bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-lg transform hover:scale-105">
                Visit E-Cell Site
              </button>
            </a>
          </motion.div>
        </div>
      </div>
     {/* ✨ Sleek Shining Down Arrow */}
<motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 1.2 }}
  className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
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