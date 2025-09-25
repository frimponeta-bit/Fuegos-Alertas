import React from 'react';
import { motion } from 'framer-motion';
import { UserCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const ProfileButton = () => {
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleClick = () => {
    navigate('/perfil'); // Navega a la ruta /perfil
  };

  return (
    <motion.div
      className="absolute top-4 right-4 z-30" // Posicionado en la esquina superior derecha
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <motion.button
        onClick={handleClick} // Usa el manejador de clic
        className="bg-white text-gray-700 rounded-full p-2 shadow-md flex items-center gap-2 hover:bg-gray-100 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <UserCircle className="w-6 h-6" />
        <span className="hidden sm:block font-semibold">Tu Perfil</span>
      </motion.button>
    </motion.div>
  );
};

export default ProfileButton;