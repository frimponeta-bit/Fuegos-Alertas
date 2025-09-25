import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import EmergencyButton from '../components/EmergencyButton';
import { Bell, MapPin, Clock, AlertTriangle, CheckCircle, Plus, User } from 'lucide-react'; // Importa el icono User

// Alertas reales (AHORA VACÍO POR DEFECTO)
export let alertsData = []; // Usamos un array mutable para simular la "base de datos"

const AlertsPage = ({ onMenuClick }) => {
  const [alerts, setAlerts] = useState(alertsData); // Estado local para las alertas
  const [showNewAlertModal, setShowNewAlertModal] = useState(false);
  const [newAlert, setNewAlert] = useState({
    type: '',
    location: '',
    description: '',
    severity: 'medium' // Default severity
  });

  const handleCreateNewAlert = () => {
    if (newAlert.type.trim() && newAlert.location.trim() && newAlert.description.trim()) {
      const newId = alerts.length > 0 ? Math.max(...alerts.map(a => a.id)) + 1 : 1;
      const alertToAdd = {
        id: newId,
        ...newAlert,
        status: 'Activa',
        time: 'Ahora mismo',
        author: 'Usuario Anónimo' // ¡Aquí se especifica el autor!
      };
      alertsData.push(alertToAdd); // Actualiza la "base de datos" simulada
      setAlerts([...alertsData]); // Actualiza el estado local para re-renderizar
      setNewAlert({ type: '', location: '', description: '', severity: 'medium' }); // Reset form
      setShowNewAlertModal(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header title="Alertas Recientes" onMenuClick={onMenuClick} />
      <motion.div
        className="flex-1 p-4 max-w-4xl mx-auto w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Alertas Activas y Históricas</h2>
            <motion.button
              onClick={() => setShowNewAlertModal(true)}
              className="bg-orange-500 text-white px-4 py-2 rounded-xl shadow-md hover:bg-orange-600 transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Plus className="w-5 h-5" /> Crear Alerta
            </motion.button>
          </div>
          
          {alerts.length === 0 ? (
            <motion.div 
              className="p-8 bg-gray-50 rounded-xl border border-gray-200 text-center text-gray-600"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Bell className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <p className="text-lg font-semibold">¡Todo tranquilo por ahora!</p>
              <p>No hay alertas recientes para mostrar. Crea una nueva alerta para comenzar.</p>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {alerts.map((alert, index) => (
                <motion.div
                  key={alert.id}
                  className={`p-6 rounded-xl border ${
                    alert.severity === 'high' ? 'bg-red-50 border-red-200' :
                    alert.severity === 'medium' ? 'bg-yellow-50 border-yellow-200' :
                    'bg-green-50 border-green-200'
                  } flex items-start gap-4`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {alert.severity === 'high' && <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />}
                  {alert.severity === 'medium' && <Bell className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />}
                  {alert.severity === 'low' && <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />}
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{alert.type} - {alert.location}</h3>
                    <p className="text-gray-700 mb-2">{alert.description}</p>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-1" /> {alert.time}
                      <span className={`ml-3 px-2 py-0.5 rounded-full text-xs font-semibold ${
                        alert.status === 'Activa' ? 'bg-red-200 text-red-800' :
                        alert.status === 'Preventiva' ? 'bg-yellow-200 text-yellow-800' :
                        'bg-green-200 text-green-800'
                      }`}>
                        {alert.status}
                      </span>
                      {alert.author && ( // Muestra el autor si existe
                        <span className="ml-3 flex items-center gap-1 text-gray-500">
                          <User className="w-4 h-4" /> {alert.author}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
      <EmergencyButton />

      {/* Modal para Crear Nueva Alerta */}
      <AnimatePresence>
        {showNewAlertModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-xl w-full max-w-md"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">Crear Nueva Alerta</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Tipo de Alerta (ej. Incendio, Inundación)"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/30"
                  value={newAlert.type}
                  onChange={(e) => setNewAlert({ ...newAlert, type: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Ubicación (ej. Sector Los Robles)"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/30"
                  value={newAlert.location}
                  onChange={(e) => setNewAlert({ ...newAlert, location: e.target.value })}
                />
                <textarea
                  placeholder="Descripción detallada de la alerta"
                  rows="3"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/30 resize-none"
                  value={newAlert.description}
                  onChange={(e) => setNewAlert({ ...newAlert, description: e.target.value })}
                ></textarea>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/30"
                  value={newAlert.severity}
                  onChange={(e) => setNewAlert({ ...newAlert, severity: e.target.value })}
                >
                  <option value="low">Severidad: Baja</option>
                  <option value="medium">Severidad: Media</option>
                  <option value="high">Severidad: Alta</option>
                </select>
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <motion.button
                  onClick={() => setShowNewAlertModal(false)}
                  className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Cancelar
                </motion.button>
                <motion.button
                  onClick={handleCreateNewAlert}
                  className="px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!(newAlert.type.trim() && newAlert.location.trim() && newAlert.description.trim())}
                >
                  Crear Alerta
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AlertsPage;