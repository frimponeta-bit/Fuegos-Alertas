import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import EmergencyButton from '../components/EmergencyButton';
import { Flame, Users, CheckCircle, MapPin, AlertTriangle, Shield, Palette } from 'lucide-react';

const MapPage = ({ onMenuClick }) => {
  const [selectedMap, setSelectedMap] = useState('alerts');

  const mapImages = {
    alerts: "https://utfs.io/f/5BN0V4mlt4NUgJTDVO66BqOy1kIKDulX9hfbSMRcVdnzC4ZA", // Imagen para Alertas en Mapa (sin cambio)
    priority_sectors: "https://utfs.io/f/5BN0V4mlt4NU3bK2Enj6Jy2pdlUv0WDFR5fOBtkEiPmZCNQ9", // Imagen para Sectores Prioritarios (sin cambio)
    risk_map: "https://utfs.io/f/5BN0V4mlt4NUXBX91f3ikVqSE2R0lvYyWceT5uxfm3UMzsrB", // Nueva imagen para Mapa de Riesgo
  };

  const alertMarkers = (
    <>
      <motion.div
        className="absolute top-[15%] left-[20%] p-2 bg-red-500 rounded-full shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
      >
        <Flame className="w-6 h-6 text-white" />
      </motion.div>

      <motion.div
        className="absolute top-[45%] left-[55%] p-2 bg-blue-500 rounded-full shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
      >
        <Users className="w-6 h-6 text-white" />
      </motion.div>

      <motion.div
        className="absolute bottom-[25%] right-[30%] p-2 bg-green-500 rounded-full shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
      >
        <CheckCircle className="w-6 h-6 text-white" />
      </motion.div>
    </>
  );

  const riskLegend = (
    <div className="mt-6 w-full max-w-2xl bg-white rounded-xl shadow-md p-4 border border-gray-200">
      <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">Nivel de Prioridad de Riesgo</h3>
      <div className="grid grid-cols-2 gap-4 text-sm font-medium">
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 bg-[#00B0F0] rounded-full"></span> Prioridad Baja
        </div>
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 bg-[#00B050] rounded-full"></span> Prioridad Media-Baja
        </div>
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 bg-[#FFFF00] rounded-full"></span> Prioridad Media-Alta
        </div>
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 bg-[#FF0000] rounded-full"></span> Prioridad Alta
        </div>
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 bg-fuchsia-600 rounded-full"></span> Prioridad Extrema
        </div>
      </div>
    </div>
  );

  const alertLegend = (
    <div className="mt-6 grid grid-cols-3 gap-4 w-full max-w-2xl">
      <div className="flex items-center justify-center gap-2 text-gray-700 font-medium">
        <Flame className="w-5 h-5 text-red-500" /> Focos Activos
      </div>
      <div className="flex items-center justify-center gap-2 text-gray-700 font-medium">
        <Users className="w-5 h-5 text-blue-500" /> Reportes
      </div>
      <div className="flex items-center justify-center gap-2 text-gray-700 font-medium">
        <CheckCircle className="w-5 h-5 text-green-500" /> Zonas Seguras
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header title="Mapas Interactivos" onMenuClick={onMenuClick} />
      <motion.div
        className="flex-1 flex flex-col items-center justify-center p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6 flex flex-wrap justify-center gap-3 p-2 bg-white rounded-xl shadow-md border border-gray-200">
          <motion.button
            onClick={() => setSelectedMap('alerts')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
              selectedMap === 'alerts' ? 'bg-orange-500 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MapPin className="w-4 h-4" /> Alertas en Mapa
          </motion.button>
          <motion.button
            onClick={() => setSelectedMap('priority_sectors')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
              selectedMap === 'priority_sectors' ? 'bg-orange-500 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Shield className="w-4 h-4" /> Sectores Prioritarios
          </motion.button>
          <motion.button
            onClick={() => setSelectedMap('risk_map')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
              selectedMap === 'risk_map' ? 'bg-orange-500 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AlertTriangle className="w-4 h-4" /> Mapa de Riesgo
          </motion.button>
        </div>

        <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden aspect-video">
          <img 
            src={mapImages[selectedMap]} 
            alt={`Mapa de ${selectedMap}`} 
            className="w-full h-full object-cover" 
          />
          {selectedMap === 'alerts' && alertMarkers}
        </div>
        
        {selectedMap === 'alerts' && alertLegend}
        {selectedMap === 'risk_map' && riskLegend}

      </motion.div>
      <EmergencyButton />
    </div>
  );
};

export default MapPage;