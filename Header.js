import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, Map, Bell, BookOpen, MessageSquare } from 'lucide-react';

const Header = ({ title, onMenuClick }) => {
  return (
    <motion.header
      className="bg-white/90 backdrop-blur-lg border-b border-gray-200 p-4 flex items-center justify-between shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 14 }}
    >
      <motion.button
        onClick={onMenuClick}
        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Menu className="w-6 h-6 text-gray-700" />
      </motion.button>
      <h1 className="text-xl font-bold text-gray-800">{title}</h1>
      <div className="w-6 h-6" /> {/* Placeholder para centrar el título */}
    </motion.header>
  );
};

export default Header;