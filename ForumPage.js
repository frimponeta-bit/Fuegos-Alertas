import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import EmergencyButton from '../components/EmergencyButton';
import { MessageSquare, Plus, MessageCircle, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Datos de ejemplo para los temas del foro (AHORA VACÍO POR DEFECTO)
// Usamos un array mutable para simular la "base de datos"
export let forumTopicsData = []; // ¡Vacío por defecto!

const ForumPage = ({ onMenuClick }) => {
  const navigate = useNavigate();
  const [topics, setTopics] = useState(forumTopicsData); // Estado local para los temas
  const [showNewTopicModal, setShowNewTopicModal] = useState(false);
  const [newTopicTitle, setNewTopicTitle] = useState('');

  const handleTopicClick = (topicId) => {
    navigate(`/foro/${topicId}`);
  };

  const handleCreateNewTopic = () => {
    if (newTopicTitle.trim()) {
      const newId = topics.length > 0 ? Math.max(...topics.map(t => t.id)) + 1 : 1;
      const newTopic = {
        id: newId,
        title: newTopicTitle.trim(),
        author: 'Usuario Anónimo',
        date: new Date().toISOString().slice(0, 10), // Fecha actual
        comments: [], // Nuevo tema sin comentarios iniciales
      };
      forumTopicsData.push(newTopic); // Actualiza la "base de datos" simulada
      setTopics([...forumTopicsData]); // Actualiza el estado local para re-renderizar
      setNewTopicTitle('');
      setShowNewTopicModal(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header title="Foro Comunitario" onMenuClick={onMenuClick} />
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
            <h2 className="text-2xl font-bold text-gray-800">Temas de Discusión</h2>
            <motion.button
              onClick={() => setShowNewTopicModal(true)}
              className="bg-orange-500 text-white px-4 py-2 rounded-xl shadow-md hover:bg-orange-600 transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Plus className="w-5 h-5" /> Nuevo Tema
            </motion.button>
          </div>

          {topics.length === 0 ? (
            <motion.div 
              className="p-8 bg-gray-50 rounded-xl border border-gray-200 text-center text-gray-600"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <MessageSquare className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <p className="text-lg font-semibold">¡El foro está un poco callado!</p>
              <p>Sé el primero en iniciar una discusión. ¡Tu voz importa!</p>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {topics.map((topic) => (
                <motion.div
                  key={topic.id}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: topic.id * 0.05 }}
                  onClick={() => handleTopicClick(topic.id)}
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{topic.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">Por {topic.author} el {topic.date}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <MessageCircle className="w-4 h-4 mr-1" /> {topic.comments.length} respuestas
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
      <EmergencyButton />

      {/* Modal para Nuevo Tema */}
      <AnimatePresence>
        {showNewTopicModal && (
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
              <h3 className="text-xl font-bold text-gray-800 mb-4">Crear Nuevo Tema</h3>
              <input
                type="text"
                placeholder="Título del tema"
                className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500/30"
                value={newTopicTitle}
                onChange={(e) => setNewTopicTitle(e.target.value)}
              />
              <div className="flex justify-end gap-3">
                <motion.button
                  onClick={() => setShowNewTopicModal(false)}
                  className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Cancelar
                </motion.button>
                <motion.button
                  onClick={handleCreateNewTopic}
                  className="px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!newTopicTitle.trim()}
                >
                  Crear
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ForumPage;