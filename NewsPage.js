import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import EmergencyButton from '../components/EmergencyButton';
import { Newspaper, CalendarDays } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NewsPage = ({ onMenuClick }) => {
  const navigate = useNavigate();

  // Noticias oficiales (ACTUALIZADAS)
  const officialNews = [
    { 
      id: 1, 
      title: 'Nacimiento refuerza su preparación comunitaria con Cursos CERT', 
      date: '2024-07-22', // Fecha actual o aproximada
      summary: 'La Municipalidad de Nacimiento, a través de su Programa de Gestión de Riesgos y con certificación de SENAPRED, desarrolló cursos Equipos Comunitarios de Primera Respuesta a Emergencias (CERT), con el propósito de fortalecer las capacidades de vecinos y vecinas frente a situaciones de riesgo.',
      fullContent: `La Municipalidad de Nacimiento, a través de su Programa de Gestión de Riesgos y con certificación de SENAPRED, desarrolló cursos Equipos Comunitarios de Primera Respuesta a Emergencias (CERT), con el propósito de fortalecer las capacidades de vecinos y vecinas frente a situaciones de riesgo.

      Durante las jornadas, los participantes recibieron formación teórica y práctica en prevención y control de incendios, atención de heridos, búsqueda y rescate, psicología en emergencias y prevención de incendios forestales, adquiriendo herramientas concretas para actuar de manera organizada y segura.

      Esta capacitación se concretó gracias a una alianza público-privada entre CMPC, SENAPRED y la Municipalidad de Nacimiento, contando además con el apoyo de la 4ª Compañía de Bomberos y la Red de Prevención Comunitaria, consolidando así un trabajo conjunto en beneficio de la seguridad y la resiliencia comunal.`,
      author: 'Municipalidad de Nacimiento'
    },
    // Puedes añadir más noticias reales aquí siguiendo el mismo formato
  ];

  const handleReadMore = (articleId) => {
    navigate(`/noticias-comuna/${articleId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header title="Noticias de la Comuna" onMenuClick={onMenuClick} />
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
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Últimas Noticias Oficiales</h2>
          <div className="space-y-4">
            {officialNews.map((newsItem) => (
              <motion.div
                key={newsItem.id}
                className="bg-blue-50 p-6 rounded-xl border border-blue-200 flex flex-col"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: newsItem.id * 0.05 }}
              >
                <h3 className="text-lg font-semibold text-blue-800 mb-2">{newsItem.title}</h3>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <CalendarDays className="w-4 h-4 mr-1" /> {newsItem.date}
                </div>
                <p className="text-gray-700">{newsItem.summary}</p>
                <button 
                  onClick={() => handleReadMore(newsItem.id)}
                  className="text-blue-600 hover:underline mt-3 self-end bg-transparent border-none cursor-pointer p-0"
                >
                  Leer más
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
      <EmergencyButton />
    </div>
  );
};

export default NewsPage;