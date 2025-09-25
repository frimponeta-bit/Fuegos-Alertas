import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, className = '', variant = 'primary', ...props }) => {
  const baseStyle = "px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2";
  let variantStyle = "";

  switch (variant) {
    case 'primary':
      variantStyle = "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg hover:shadow-xl hover:scale-105";
      break;
    case 'secondary':
      variantStyle = "bg-green-500 text-white shadow-lg hover:shadow-xl hover:scale-105";
      break;
    case 'outline':
      variantStyle = "bg-white border border-gray-300 text-gray-800 hover:bg-gray-100 hover:scale-105";
      break;
    case 'danger':
      variantStyle = "bg-red-600 text-white shadow-lg hover:shadow-xl hover:scale-105";
      break;
    default:
      variantStyle = "bg-orange-500 text-white shadow-lg hover:shadow-xl hover:scale-105";
  }

  return (
    <motion.button
      onClick={onClick}
      className={`${baseStyle} ${variantStyle} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;