import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import HomePage from './pages/HomePage';
import MapPage from './pages/MapPage';
import EducationPage from './pages/EducationPage';
import EducationArticlePage from './pages/EducationArticlePage';
import AlertsPage from './pages/AlertsPage';
import ForumPage from './pages/ForumPage';
import ForumTopicPage from './pages/ForumTopicPage';
import ProfilePage from './pages/ProfilePage';
import HelpAndContactsPage from './pages/HelpAndContactsPage';
import SettingsPage from './pages/SettingsPage';
import NewsPage from './pages/NewsPage';
import NewsArticlePage from './pages/NewsArticlePage'; // Importa la nueva página de artículo de noticia
import StatsPage from './pages/StatsPage';
import EmergencyButton from './components/EmergencyButton';
import ProfileButton from './components/ProfileButton';
import Header from './components/Header';
import { X, Map, Bell, BookOpen, MessageSquare, User, Phone, Settings, BarChart, Newspaper } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="relative">
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 p-6 flex flex-col"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: "spring", stiffness: 120, damping: 17 }}
            >
              <div className="flex justify-end mb-8">
                <motion.button
                  onClick={toggleMenu}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6 text-gray-700" />
                </motion.button>
              </div>
              <ul className="space-y-2">
                {/* Grupo de Peligro Inminente */}
                <li>
                  <motion.a
                    href="#/mapa"
                    className="flex items-center gap-3 text-lg font-medium text-gray-700 hover:text-orange-500 transition-colors"
                    whileHover={{ x: 5 }}
                    onClick={toggleMenu}
                  >
                    <Map className="w-6 h-6" /> Mapas Interactivos
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="#/alertas"
                    className="flex items-center gap-3 text-lg font-medium text-gray-700 hover:text-orange-500 transition-colors"
                    whileHover={{ x: 5 }}
                    onClick={toggleMenu}
                  >
                    <Bell className="w-6 h-6" /> Alertas
                  </motion.a>
                </li>
                <li className="mb-4">
                  <motion.a
                    href="#/noticias-comuna"
                    className="flex items-center gap-3 text-lg font-medium text-gray-700 hover:text-orange-500 transition-colors"
                    whileHover={{ x: 5 }}
                    onClick={toggleMenu}
                  >
                    <Newspaper className="w-6 h-6" /> Noticias
                  </motion.a>
                </li>

                {/* Grupo de Comunidad y Educación */}
                <li>
                  <motion.a
                    href="#/educacion"
                    className="flex items-center gap-3 text-lg font-medium text-gray-700 hover:text-orange-500 transition-colors"
                    whileHover={{ x: 5 }}
                    onClick={toggleMenu}
                  >
                    <BookOpen className="w-6 h-6" /> Educación
                  </motion.a>
                </li>
                <li className="mb-4">
                  <motion.a
                    href="#/foro"
                    className="flex items-center gap-3 text-lg font-medium text-gray-700 hover:text-orange-500 transition-colors"
                    whileHover={{ x: 5 }}
                    onClick={toggleMenu}
                  >
                    <MessageSquare className="w-6 h-6" /> Foro Comunitario
                  </motion.a>
                </li>

                {/* Grupo de Utilidades y Perfil */}
                <li>
                  <motion.a
                    href="#/ayuda"
                    className="flex items-center gap-3 text-lg font-medium text-gray-700 hover:text-orange-500 transition-colors"
                    whileHover={{ x: 5 }}
                    onClick={toggleMenu}
                  >
                    <Phone className="w-6 h-6" /> Ayuda y Contactos
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="#/estadisticas"
                    className="flex items-center gap-3 text-lg font-medium text-gray-700 hover:text-orange-500 transition-colors"
                    whileHover={{ x: 5 }}
                    onClick={toggleMenu}
                  >
                    <BarChart className="w-6 h-6" /> Estadísticas
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="#/configuracion"
                    className="flex items-center gap-3 text-lg font-medium text-gray-700 hover:text-orange-500 transition-colors"
                    whileHover={{ x: 5 }}
                    onClick={toggleMenu}
                  >
                    <Settings className="w-6 h-6" /> Configuración
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="#/perfil"
                    className="flex items-center gap-3 text-lg font-medium text-gray-700 hover:text-orange-500 transition-colors"
                    whileHover={{ x: 5 }}
                    onClick={toggleMenu}
                  >
                    <User className="w-6 h-6" /> Tu Perfil
                  </motion.a>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mapa" element={<MapPage onMenuClick={toggleMenu} />} />
          <Route path="/educacion" element={<EducationPage onMenuClick={toggleMenu} />} />
          <Route path="/educacion/:articleId" element={<EducationArticlePage onMenuClick={toggleMenu} />} />
          <Route path="/alertas" element={<AlertsPage onMenuClick={toggleMenu} />} />
          <Route path="/foro" element={<ForumPage onMenuClick={toggleMenu} />} />
          <Route path="/foro/:topicId" element={<ForumTopicPage onMenuClick={toggleMenu} />} />
          <Route path="/perfil" element={<ProfilePage onMenuClick={toggleMenu} />} />
          <Route path="/ayuda" element={<HelpAndContactsPage onMenuClick={toggleMenu} />} />
          <Route path="/noticias-comuna" element={<NewsPage onMenuClick={toggleMenu} />} />
          <Route path="/noticias-comuna/:articleId" element={<NewsArticlePage onMenuClick={toggleMenu} />} /> {/* Nueva ruta para el artículo de noticia */}
          <Route path="/estadisticas" element={<StatsPage onMenuClick={toggleMenu} />} />
          <Route path="/configuracion" element={<SettingsPage onMenuClick={toggleMenu} />} />
        </Routes>
        <ProfileButton />
      </div>
    </Router>
  );
};

export default App;