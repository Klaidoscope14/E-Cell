import AlumniCard from '../components/AlumniCard';
import SceneCanvas from "../three/SceneCanvas";
import { motion } from "framer-motion";

const alumniData = [
  {
    name: "Saatvik Pandey",
    title: "Organizing Coordinator",
    image: "./Saatvik.jpg",
    linkedinUrl: "https://www.linkedin.com/in/saatvik-pandey-4a0919287/",
    instagramUrl: "https://www.instagram.com/saatvikpandey05?igsh=MXIzd2ptZ2txeHB0MA=="
  },
  {
    name: "Parth Ganjewar",
    title: "Organizing Coordinator",
    image: "./Parth.jpg",
    linkedinUrl: "https://www.linkedin.com/in/parth-ganjewar-9b2317298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagramUrl: "https://www.instagram.com/parth__ganjewar?igsh=MWhuZ3JidWpjeXBzOA=="
  }
];

export default function AlumniGrid() {
  return (
    <section className="relative py-0 px-6 bg-gradient-to-br from-gray-900 via-blue-950 to-black text-white min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background elements for depth */}
      <div className="absolute inset-0 bg-black opacity-30 z-[1]"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-700 opacity-5 rounded-full blur-3xl z-[1]"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600 opacity-5 rounded-full blur-3xl z-[1]"></div>
      
      {/* Three.js canvas - behind content */}
      <div className="absolute inset-0 z-[2]">
        <SceneCanvas />
      </div>
      
      {/* Content container */}
      <div className="relative z-[10] container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400"
        >
          Meet Our Organizing Coordinators
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-24 max-w-5xl mx-auto px-4 sm:px-8"
        >
          {alumniData.map((alum, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="w-full sm:w-2/5 max-w-md"
            >
              <AlumniCard {...alum} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}