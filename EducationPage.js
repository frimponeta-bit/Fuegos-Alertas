import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import EmergencyButton from '../components/EmergencyButton';
import { BookOpen, Lightbulb, Shield, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EducationPage = ({ onMenuClick }) => {
  const navigate = useNavigate();

  const articles = [
    {
      id: 1,
      title: '¿Qué hacer antes de un incendio forestal?',
      summary: 'Prepara tu hogar y tu familia para reducir riesgos.',
      icon: Lightbulb,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200'
    },
    {
      id: 2,
      title: 'Durante un incendio: Guía de acción',
      summary: 'Pasos clave para protegerte y actuar con seguridad.',
      icon: Shield,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    },
    {
      id: 3,
      title: 'Después del incendio: Recuperación y apoyo',
      summary: 'Cómo recuperarse y dónde encontrar ayuda.',
      icon: BookOpen,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      id: 4,
      title: 'Manejo de desechos vegetales',
      summary: 'Consejos para evitar la acumulación de material combustible.',
      icon: Lightbulb,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      id: 5,
      title: 'Importancia de los cortafuegos',
      summary: 'Aprende sobre su función y cómo mantenerlos.',
      icon: Shield,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
  ];

  const handleArticleClick = (articleId) => {
    navigate(`/educacion/${articleId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header title="Educación y Prevención" onMenuClick={onMenuClick} />
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
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Artículos y Guías de Prevención</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article, index) => {
              const IconComponent = article.icon;
              return (
                <motion.div
                  key={article.id}
                  className={`${article.bgColor} p-6 rounded-xl border ${article.borderColor} flex items-start gap-4 cursor-pointer hover:shadow-md transition-shadow duration-300`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleArticleClick(article.id)}
                >
                  <IconComponent className={`w-8 h-8 ${article.color} flex-shrink-0 mt-1`} />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{article.title}</h3>
                    <p className="text-gray-700 text-sm">{article.summary}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Enlace al documento PDF */}
          <motion.a
            href="https://ligup-v2.s3.amazonaws.com/nacimiento/accountability/4512_plan_reduccion_del_riesgo_de_desastre_comuna_nacimiento_2024.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-center mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ExternalLink className="w-5 h-5" /> Accede al Plan de Reducción de Riesgos completo aquí
          </motion.a>

        </motion.div>
      </motion.div>
      <EmergencyButton />
    </div>
  );
};

export default EducationPage;