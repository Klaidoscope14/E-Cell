import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SceneCanvas from "../three/SceneCanvas";
import { Link } from 'react-router-dom';
import AlumniCard from "../components/AlumniCard";
import AlumniHero from '../components/AlumniHero';

export default function Alumni() {
  const [RegisterAlumni, setRegisterAlumni] = useState(false);

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
    <main className="relative pt-20 min-h-screen text-white overflow-hidden">
      {/* Fixed Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-950 to-black" />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-700 opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600 opacity-5 rounded-full blur-3xl"></div>
        <SceneCanvas />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
          <img src="/favicon.jpg" alt="Logo Background" className="w-1/2 max-w-[500px]" />
        </div>
      </div>



      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400">WHO WE ARE ?</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-blue-100 max-w-3xl mx-auto text-center mb-12"
        >
          E-Cell IITP fosters a vibrant entrepreneurial culture, empowering students to transform ideas into impactful startups with the support of our alumni community.
        </motion.p>

        <AlumniHero />

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
        

        {/* alumni cards start here */}
    {/*
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex 
        flex-wrap justify-center gap-6 mt-8">
          {featuredAlumni.map((alumni) => (
            <AlumniCard key={alumni.id} name={alumni.name} year={alumni.year} title={alumni.title} image={alumni.image} />
          ))}
        </motion.div>
  */}

        {/* alumni card end here */}
  {/*
        <div className="text-center mb-12">
          <button onClick={() => setRegisterAlumni(true)} className="text-xl font-semibold text-white hover:underline transition mt-8">
            REGISTER AS ALUMNI →
          </button>
        </div>
  */}
        {/* Alumni Directory Coming Soon */}


        {/*register Alumni starts here*/}

          

        {/* {RegisterAlumni && ( */}
        {(true ||RegisterAlumni) && (
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

              <Link
                to="/alumni-registration"
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Register as Alumni Emissary
              </Link>
            </div>
        </motion.div>
        )}

        {/*register alumni ends here*/}


      </div>
    </main>
  );
}
