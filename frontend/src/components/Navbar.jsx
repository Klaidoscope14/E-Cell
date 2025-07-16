import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Alumni", path: "/alumni" },
    { name: "Team", path: "/team" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" }
  ];
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm bg-opacity-10 text-white px-6 py-4 flex justify-between items-center transition-all duration-300">
      <motion.h1 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-blue-400"
      >
        <Link to="/">E-Cell Alumni Relations</Link>
      </motion.h1>
      
      <motion.ul 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, staggerChildren: 0.1, delayChildren: 0.2 }}
        className="flex gap-6 text-lg"
      >
        {navItems.map((item, index) => (
          <motion.li 
            key={item.name}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
            whileHover={{ scale: 1.1, y: -3 }}
          >
            <Link 
              to={item.path} 
              className="hover:text-orange-400 transition-colors duration-300 relative group"
            >
              {item.name}
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-orange-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
}