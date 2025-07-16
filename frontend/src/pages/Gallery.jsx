import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SceneCanvas from "../three/SceneCanvas";
import { Link } from 'react-router-dom';

export default function Contact() {
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
      
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-4xl mx-auto bg-blue-900/20 p-8 rounded-lg backdrop-blur-sm border border-blue-800/30"
        >
          <div className="text-center py-8">
            <h3 className="text-2xl font-bold text-blue-300 mb-4">Gallery Coming Soon</h3>
            <p className="text-blue-200 max-w-lg mx-auto mb-8">
              We're putting the finishing touches in our gallery. Check back soon to explore inspiring moments, milestones and memories from our journey!
            </p>
            
          </div>
        </motion.div>
    </main>
  );
} 