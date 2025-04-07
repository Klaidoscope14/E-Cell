import { motion } from "framer-motion";

export default function Footer() {
    return (
      <footer className="text-black py-3 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-6"
        >
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-blue-400"
          >
            © {new Date().getFullYear()} E-Cell Alumni Connect. All rights reserved.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1, delayChildren: 0.2 }}
            className="flex gap-6"
          >
            {["Privacy", "Terms", "Contact"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <a 
                  href="#" 
                  className="hover:text-orange-400 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-orange-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </footer>
    );
  }  