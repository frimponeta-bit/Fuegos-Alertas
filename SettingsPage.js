import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import EmergencyButton from '../components/EmergencyButton';
import { Globe, Bell, Info, ChevronRight } from 'lucide-react';

const SettingsPage = ({ onMenuClick }) => {
  const [language, setLanguage] = useState('es');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  useEffect(() => {
    // Cargar preferencias desde localStorage
    const savedLanguage = localStorage.getItem('appLanguage');
    if (savedLanguage) setLanguage(savedLanguage);

    const savedNotifications = localStorage.getItem('appNotifications');
    if (savedNotifications !== null) setNotificationsEnabled(JSON.parse(savedNotifications));
  }, []);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    localStorage.setItem('appLanguage', newLang);
    alert(`Idioma cambiado a: ${newLang === 'es' ? 'Español' : 'English'}. (Simulado)`);
  };

  const handleNotificationsToggle = () => {
    const newState = !notificationsEnabled;
    setNotificationsEnabled(newState);
    localStorage.setItem('appNotifications', JSON.stringify(newState));
    alert(`Notificaciones ${newState ? 'activadas' : 'desactivadas'}. (Simulado)`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header title="Configuración" onMenuClick={onMenuClick} />
      <motion.div
        className="flex-1 p-4 max-w-md mx-auto w-full"
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
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Ajustes de la Aplicación</h2>

          <div className="space-y-6">
            {/* Configuración de Idioma */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200">
              <div className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-blue-600" />
                <span className="font-medium text-gray-800">Idioma</span>
              </div>
              <select
                value={language}
                onChange={handleLanguageChange}
                className="p-2 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-blue-500/30"
              >
                <option value="es">Español</option>
                <option value="en">English</option>
              </select>
            </div>

            {/* Notificaciones */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200">
              <div className="flex items-center gap-3">
                <Bell className="w-6 h-6 text-purple-600" />
                <span className="font-medium text-gray-800">Notificaciones</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  checked={notificationsEnabled}
                  onChange={handleNotificationsToggle}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
              </label>
            </div>

            {/* Información sobre la App */}
            <motion.button
              className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200 text-left hover:bg-gray-100 transition-colors"
              onClick={() => alert('Información de la App: Versión 1.0.0, Desarrollado por Los Russy.')}
              whileHover={{ x: 5 }}
            >
              <div className="flex items-center gap-3">
                <Info className="w-6 h-6 text-green-600" />
                <span className="font-medium text-gray-800">Acerca de la App</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-500" />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
      <EmergencyButton />
    </div>
  );
};

export default SettingsPage;