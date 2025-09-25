import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import EmergencyButton from '../components/EmergencyButton';
import { User, MapPin, Mail, Save, Edit, XCircle } from 'lucide-react';

const ProfilePage = ({ onMenuClick }) => {
  const [profile, setProfile] = useState({
    name: '',
    location: '',
    email: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Cargar perfil desde localStorage al iniciar
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSave = () => {
    localStorage.setItem('userProfile', JSON.stringify(profile));
    setIsEditing(false);
    alert('¡Perfil guardado con éxito! Ahora eres un ciudadano digital.');
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    // Recargar el perfil desde localStorage para descartar cambios no guardados
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    } else {
      setProfile({ name: '', location: '', email: '' });
    }
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header title="Tu Perfil" onMenuClick={onMenuClick} />
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
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Gestiona tu Información</h2>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <User className="w-6 h-6 text-gray-500" />
              <input
                type="text"
                name="name"
                placeholder="Tu Nombre Completo"
                value={profile.name}
                onChange={handleChange}
                readOnly={!isEditing}
                className={`flex-1 p-3 border rounded-xl focus:outline-none ${isEditing ? 'border-gray-300 focus:ring-2 focus:ring-blue-500/30' : 'border-transparent bg-gray-50'}`}
              />
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-gray-500" />
              <input
                type="text"
                name="location"
                placeholder="Tu Ubicación (Ej: Nacimiento, Sector Los Robles)"
                value={profile.location}
                onChange={handleChange}
                readOnly={!isEditing}
                className={`flex-1 p-3 border rounded-xl focus:outline-none ${isEditing ? 'border-gray-300 focus:ring-2 focus:ring-blue-500/30' : 'border-transparent bg-gray-50'}`}
              />
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-gray-500" />
              <input
                type="email"
                name="email"
                placeholder="Tu Correo Electrónico"
                value={profile.email}
                onChange={handleChange}
                readOnly={!isEditing}
                className={`flex-1 p-3 border rounded-xl focus:outline-none ${isEditing ? 'border-gray-300 focus:ring-2 focus:ring-blue-500/30' : 'border-transparent bg-gray-50'}`}
              />
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            {isEditing ? (
              <>
                <motion.button
                  onClick={handleSave}
                  className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-md hover:bg-green-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Save className="w-5 h-5" /> Guardar
                </motion.button>
                <motion.button
                  onClick={handleCancel}
                  className="bg-gray-300 text-gray-800 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-md hover:bg-gray-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <XCircle className="w-5 h-5" /> Cancelar
                </motion.button>
              </>
            ) : (
              <motion.button
                onClick={handleEdit}
                className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-md hover:bg-orange-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Edit className="w-5 h-5" /> Editar Perfil
              </motion.button>
            )}
          </div>
        </motion.div>
      </motion.div>
      <EmergencyButton />
    </div>
  );
};

export default ProfilePage;