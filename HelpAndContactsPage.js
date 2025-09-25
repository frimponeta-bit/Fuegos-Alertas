import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import EmergencyButton from '../components/EmergencyButton';
import { Phone, MapPin, Building, Hospital, ShieldAlert, Info } from 'lucide-react';

const HelpAndContactsPage = ({ onMenuClick }) => {
  const contactInfo = {
    bomberos: { number: '132', description: 'Emergencias de incendios y rescate.' },
    carabineros: { number: '133', description: 'Emergencias policiales y seguridad ciudadana.' },
    // municipalidad: { number: '43 240 5000', description: 'Información general y servicios municipales.' }, // Eliminado
  };

  // Centros de evacuación eliminados
  // const evacuationCenters = [
  //   { name: 'Gimnasio Municipal', address: 'Calle Pedro de Valdivia #500', capacity: '500 personas', status: 'Abierto' },
  //   { name: 'Escuela Nacimiento', address: 'Avenida La Cruz #120', capacity: '300 personas', status: 'Abierto' },
  //   { name: 'Sede Vecinal Los Robles', address: 'Pasaje Los Robles #45', capacity: '100 personas', status: 'Cerrado temporalmente' },
  // ];

  const hospitalsAndRefuges = [
    { name: 'Hospital de Nacimiento', address: 'Av. Julio Hemmelmann 628, Nacimiento, Bío Bío', type: 'Hospital', services: 'Urgencias 24/7, hospitalización.' }, // Dirección actualizada
    // { name: 'Liceo Industrial', address: 'Avenida Estación #789', type: 'Refugio', services: 'Habilitado en caso de emergencia mayor.' }, // Eliminado
    // { name: 'Centro de Salud Familiar (CESFAM)', address: 'Calle O´Higgins #150', type: 'Centro de Salud', services: 'Atención primaria, primeros auxilios.' }, // Eliminado
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header title="Ayuda y Contactos" onMenuClick={onMenuClick} />
      <motion.div
        className="flex-1 p-4 max-w-4xl mx-auto w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 mb-6"
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Números de Emergencia</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"> {/* Ajustado a 2 columnas */}
            {Object.entries(contactInfo).map(([key, value]) => (
              <motion.div
                key={key}
                className="bg-orange-50 p-6 rounded-xl border border-orange-200 flex flex-col items-center text-center"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Phone className="w-8 h-8 text-orange-600 mb-3" />
                <h3 className="text-xl font-semibold text-orange-700 capitalize">{key}</h3>
                <p className="text-2xl font-bold text-orange-800 my-2">{value.number}</p>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Centros de Evacuación y Refugios - Sección Eliminada */}
          {/* <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Centros de Evacuación y Refugios</h2>
          <div className="space-y-4 mb-8">
            {evacuationCenters.map((center, index) => (
              <motion.div
                key={index}
                className="bg-blue-50 p-6 rounded-xl border border-blue-200 flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-800">{center.name}</h3>
                  <p className="text-gray-700">{center.address}</p>
                  <p className="text-gray-600 text-sm">Capacidad: {center.capacity} | Estado: <span className={`font-semibold ${center.status === 'Abierto' ? 'text-green-600' : 'text-red-600'}`}>{center.status}</span></p>
                </div>
              </motion.div>
            ))}
          </div> */}

          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Hospitales y Centros de Salud</h2>
          <div className="space-y-4">
            {hospitalsAndRefuges.map((place, index) => (
              <motion.div
                key={index}
                className="bg-green-50 p-6 rounded-xl border border-green-200 flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Hospital className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-green-800">{place.name}</h3>
                  <p className="text-gray-700">{place.address}</p>
                  <p className="text-gray-600 text-sm">Tipo: {place.type} | Servicios: {place.services}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </motion.div>
      <EmergencyButton />
    </div>
  );
};

export default HelpAndContactsPage;