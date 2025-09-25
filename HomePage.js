import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const HomePage = () => {
  const navigate = useNavigate();

  const handleEnterApp = () => {
    navigate('/mapa');
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 to-green-50 p-4 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.img
        src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0bT3ZLnKDNMSTyYFBwi9AfJR5ZG84XoHxg1c6" // ¡Aquí está tu flamante logo!
        alt="FuegoAlerta Nacimiento Logo"
        className="w-48 h-48 mb-8"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.3 }}
      />
      <motion.h1
        className="text-4xl font-extrabold text-gray-800 mb-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        FuegoAlerta Nacimiento
      </motion.h1>
      <motion.p
        className="text-lg text-gray-600 mb-12 max-w-md"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        Protegiendo nuestra comuna, juntos.
      </motion.p>
      <Button onClick={handleEnterApp}>
        Ingresar
      </Button>
    </motion.div>
  );
};

export default HomePage;