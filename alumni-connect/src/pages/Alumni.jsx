import React from 'react';
import { motion } from 'framer-motion';
import SceneCanvas from "../three/SceneCanvas";

export default function Alumni() {
  // Sample alumni data
  const featuredAlumni = [
    {
      id: 1,
      name: "Sarah Johnson",
      year: "Class of 2018",
      title: "Founder & CEO at TechInnovate",
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      year: "Class of 2017",
      title: "Product Lead at Google",
      image: "https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
      id: 3,
      name: "Priya Sharma",
      year: "Class of 2019",
      title: "Co-founder at EduStart",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  return (
    <main className="pt-20 min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-black text-white relative overflow-hidden">
      {/* Background elements for depth */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-700 opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600 opacity-5 rounded-full blur-3xl"></div>
      
      {/* Three.js canvas - behind content */}
      <div className="absolute inset-0 z-1">
        <SceneCanvas />
      </div>

      {/* Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center z-[1] pointer-events-none opacity-5">
        <img 
          src="/favicon.jpg" 
          alt="Logo Background" 
          className="w-1/2 max-w-[500px]"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400">
            Our Alumni Network
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-blue-100 max-w-3xl mx-auto text-center mb-12"
        >
          Connect with our exceptional alumni who have gone on to make significant impacts in various fields.
        </motion.p>
        
        {/* Featured Alumni */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <h2 className="text-2xl font-semibold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-blue-300">
              Featured Alumni
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredAlumni.map((alumni) => (
              <motion.div 
                key={alumni.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * alumni.id }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-blue-900/20 p-6 rounded-lg backdrop-blur-sm border border-blue-800/30"
              >
                <div className="flex flex-col items-center">
                  <img 
                    src={alumni.image} 
                    alt={alumni.name}
                    className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-blue-400"
                  />
                  <h3 className="text-xl font-medium mb-1 text-white">{alumni.name}</h3>
                  <p className="text-blue-300 text-sm mb-2">{alumni.year}</p>
                  <p className="text-blue-200 text-center">{alumni.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Alumni Directory Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-4xl mx-auto bg-blue-900/20 p-8 rounded-lg backdrop-blur-sm border border-blue-800/30"
        >
          <div className="text-center py-8">
            <h3 className="text-2xl font-bold text-blue-300 mb-4">Full Alumni Directory Coming Soon</h3>
            <p className="text-blue-200 max-w-lg mx-auto mb-8">
              We're currently compiling our complete alumni database. Check back soon to connect with even more fellow E-Cell alumni!
            </p>
            
            <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
              <a href='https://forms.gle/hpkoKLsYjgjdgEoWA'>Register as Alumni</a>
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 