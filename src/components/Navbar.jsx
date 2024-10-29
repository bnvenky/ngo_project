import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-rose-600" />
              <span className="text-2xl font-bold text-gray-900">NGO</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-rose-600 transition">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-rose-600 transition">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-rose-600 transition">Services</Link>
            <Link to="/stories" className="text-gray-700 hover:text-rose-600 transition">Success Stories</Link>
            <Link to="/contact" className="text-gray-700 hover:text-rose-600 transition">Contact</Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-rose-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-rose-700 transition"
            >
              Donate Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-rose-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-rose-600">Home</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-rose-600">About</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-rose-600">Services</Link>
            <Link to="/stories" className="block px-3 py-2 text-gray-700 hover:text-rose-600">Success Stories</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-rose-600">Contact</Link>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-full text-center bg-rose-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-rose-700 transition"
            >
              Donate Now
            </motion.button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;