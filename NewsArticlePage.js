import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import EmergencyButton from '../components/EmergencyButton';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CalendarDays, User } from 'lucide-react';

// Datos de ejemplo para las noticias (deben coincidir con los de NewsPage)
const newsArticlesData = [
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
  // Si añades más noticias en NewsPage, asegúrate de añadirlas aquí también con su fullContent
];

const NewsArticlePage = ({ onMenuClick }) => {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const article = newsArticlesData.find(a => a.id === parseInt(articleId));

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header title="Noticia No Encontrada" onMenuClick={onMenuClick} />
        <div className="flex-1 flex items-center justify-center text-gray-600 text-xl">
          Noticia no encontrada. ¡Quizás se quemó en el servidor!
        </div>
        <EmergencyButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header title="Noticias de la Comuna" onMenuClick={onMenuClick} />
      <motion.div
        className="flex-1 p-4 max-w-4xl mx-auto w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          onClick={() => navigate('/noticias-comuna')}
          className="flex items-center gap-2 text-orange-600 hover:text-orange-800 mb-6 font-semibold"
          whileHover={{ x: -5 }}
        >
          <ArrowLeft className="w-5 h-5" /> Volver a Noticias
        </motion.button>

        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 mb-6"
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{article.title}</h2>
          <div className="flex items-center gap-4 text-gray-600 text-sm mb-6">
            <div className="flex items-center gap-1">
              <CalendarDays className="w-4 h-4" /> {article.date}
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" /> {article.author}
            </div>
          </div>
          
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {article.fullContent}
          </p>
        </motion.div>
      </motion.div>
      <EmergencyButton />
    </div>
  );
};

export default NewsArticlePage;