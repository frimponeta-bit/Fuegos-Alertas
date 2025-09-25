import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall } from 'lucide-react';

const EmergencyButton = () => {
  const handleCall = () => {
    // En una aplicación real, esto abriría el marcador de teléfono
    // con el número predefinido (ej. "tel:132" para bomberos o "tel:130" para CONAF)
    alert('Llamando a emergencia... (simulado)');
    window.location.href = 'tel:132'; // Ejemplo: Bomberos
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <motion.button
        onClick={handleCall}
        className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl border-4 border-red-400"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9, rotate: -5 }}
      >
        <PhoneCall className="w-8 h-8" />
      </motion.button>
    </motion.div>
  );
};

export default EmergencyButton;