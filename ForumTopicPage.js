import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import EmergencyButton from '../components/EmergencyButton';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Send, User } from 'lucide-react';
import { forumTopicsData } from './ForumPage'; // Importa los datos del foro desde ForumPage

const ForumTopicPage = ({ onMenuClick }) => {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const topic = forumTopicsData.find(t => t.id === parseInt(topicId));

  // Inicializa comments directamente con los comentarios del tema encontrado
  // Esto asegura que siempre se use la versión actual de los comentarios del tema
  const [comments, setComments] = useState(topic ? [...topic.comments] : []); // Crea una copia para evitar mutar el original directamente
  const [newCommentText, setNewCommentText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newCommentText.trim()) {
      const newComment = {
        id: comments.length > 0 ? Math.max(...comments.map(c => c.id)) + 1 : 1,
        author: 'Tú (Usuario Anónimo)',
        text: newCommentText.trim(),
        time: 'Ahora mismo',
      };
      
      // Actualiza el estado local de comments
      setComments(prevComments => [...prevComments, newComment]);

      // Actualiza el objeto del tema en la "base de datos" simulada
      if (topic) {
        topic.comments.push(newComment);
        // topic.replies = topic.comments.length; // Ya no es necesario si no se muestra en ForumPage
        // topic.lastReply = 'Ahora mismo'; // Ya no es necesario si no se muestra en ForumPage
      }
      
      setNewCommentText('');
    }
  };

  if (!topic) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header title="Tema No Encontrado" onMenuClick={onMenuClick} />
        <div className="flex-1 flex items-center justify-center text-gray-600 text-xl">
          Tema no encontrado. ¡Quizás se quemó en un incendio imaginario!
        </div>
        <EmergencyButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header title={topic.title} onMenuClick={onMenuClick} />
      <motion.div
        className="flex-1 p-4 max-w-4xl mx-auto w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          onClick={() => navigate('/foro')}
          className="flex items-center gap-2 text-orange-600 hover:text-orange-800 mb-6 font-semibold"
          whileHover={{ x: -5 }}
        >
          <ArrowLeft className="w-5 h-5" /> Volver al Foro
        </motion.button>

        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 mb-6"
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{topic.title}</h2>
          <p className="text-gray-600 text-sm mb-4">Iniciado por <span className="font-semibold">{topic.author}</span> el {topic.date}</p>
          
          <div className="space-y-4">
            <AnimatePresence>
              {comments.map((comment) => (
                <motion.div
                  key={comment.id}
                  className="bg-gray-50 rounded-xl p-4 border border-gray-200"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <User className="w-4 h-4 text-gray-500" />
                    <span className="font-semibold text-gray-800">{comment.author}</span>
                    <span className="text-sm text-gray-500 ml-auto">{comment.time}</span>
                  </div>
                  <p className="text-gray-700">{comment.text}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200 flex items-center gap-3">
            <textarea
              type="text" // Cambiado de input a textarea para comentarios más largos
              placeholder="Escribe tu comentario aquí..."
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/30 resize-none"
              rows="2"
              value={newCommentText}
              onChange={(e) => setNewCommentText(e.target.value)}
            ></textarea>
            <motion.button
              onClick={handleSubmit}
              className="bg-blue-600 text-white p-3 rounded-xl shadow-md hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={!newCommentText.trim()}
            >
              <Send className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
      <EmergencyButton />
    </div>
  );
};

export default ForumTopicPage;