import React from 'react';
import { motion } from 'framer-motion';
import { PlusCircle } from 'lucide-react';

const CreateAlertButton = ({ onClick }) => {
  return (
    <motion.div
      className="fixed bottom-6 left-6 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
    >
      <motion.button
        onClick={onClick}
        className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl border-4 border-green-400"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9, rotate: -5 }}
      >
        <PlusCircle className="w-8 h-8" />
      </motion.button>
    </motion.div>
  );
};

export default CreateAlertButton;