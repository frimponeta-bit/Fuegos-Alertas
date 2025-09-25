import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import EmergencyButton from '../components/EmergencyButton';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Lightbulb, Shield } from 'lucide-react';

const educationArticlesData = [
  {
    id: 1,
    title: '¿Qué hacer antes de un incendio forestal?',
    summary: 'Prepara tu hogar y tu familia para reducir riesgos.',
    fullContent: `Prepararse antes de que ocurra un incendio forestal puede marcar la diferencia entre una evacuación segura y una situación peligrosa. Sigue estos pasos clave:

    1. Crea un cortafuegos alrededor de tu propiedad:
    - Limpia al menos 10 metros alrededor de tu casa de vegetación seca, hojas y ramas.
    - Mantén el techo y canaletas libres de hojas y desechos.
    - Poda árboles y arbustos para que no toquen tu casa.

    2. Prepara un kit de emergencia:
    - Incluye agua, alimentos no perecibles, linterna, radio a pilas, medicamentos y documentos importantes.
    - Ten máscaras para el humo y ropa resistente al fuego.
    - Identifica rutas de evacuación y un punto de encuentro familiar.

    3. Realiza un plan familiar:
    - Discute con tu familia qué hacer en caso de incendio.
    - Ensaya evacuaciones y asigna roles (quién lleva a los niños, quién cierra las válvulas de gas).
    - Mantén el tanque de gasolina lleno y el vehículo listo para partir.

    4. Monitorea las alertas:
    - Sintoniza la radio local y sigue las alertas de SENAPRED y municipalidad.
    - Regístrate en sistemas de alerta temprana de tu comuna.

    Recuerda: La prevención es la mejor defensa. Un hogar preparado es una familia segura.`,
    icon: Lightbulb,
    color: 'text-yellow-600'
  },
  {
    id: 2,
    title: 'Durante un incendio: Guía de acción',
    summary: 'Pasos clave para protegerte y actuar con seguridad.',
    fullContent: `Si un incendio forestal se acerca, cada minuto cuenta. Sigue esta guía para actuar con calma y efectividad:

    1. Evalúa la situación:
    - Si ves humo o llamas cercanas, evacua inmediatamente. No esperes órdenes oficiales.
    - Cierra puertas y ventanas, y sella con toallas húmedas para evitar el humo.
    - Apaga aires acondicionados y ventiladores para no aspirar humo.

    2. Evacúa de manera segura:
    - Toma tu kit de emergencia y dirígete a la ruta de evacuación preestablecida.
    - No uses el ascensor; usa las escaleras.
    - Si estás en un vehículo, maneja con precaución, mantén las luces encendidas y sigue las indicaciones de los rescatistas.

    3. Si no puedes evacuar:
    - Ve a una habitación con la menor cantidad de ventanas posible.
    - Mantén las puertas cerradas y colócalas con agua fría.
    - Llama al 132 (Bomberos) y proporciona tu ubicación exacta.
    - Cubre grietas con toallas húmedas y mantén la cabeza baja.

    4. Durante la evacuación:
    - No regreses por pertenencias.
    - Ayuda a vecinos vulnerables (niños, ancianos).
    - Dirígete a un centro de evacuación designado.

    Recuerda: La prioridad es tu vida. Los bienes materiales se pueden reemplazar, pero tú eres irremplazable.`,
    icon: Shield,
    color: 'text-red-600'
  },
  {
    id: 3,
    title: 'Después del incendio: Recuperación y apoyo',
    summary: 'Cómo recuperarse y dónde encontrar ayuda.',
    fullContent: `Un incendio puede ser devastador, pero la recuperación es posible con apoyo comunitario y recursos adecuados. Aquí te guiamos:

    1. Evalúa daños y seguridad:
    - No entres a tu propiedad hasta que las autoridades lo autoricen.
    - Verifica si hay riesgos como cables caídos, gas o estructuras inestables.
    - Documenta los daños con fotos para seguros y ayuda gubernamental.

    2. Accede a ayuda inmediata:
    - Contacta a la Municipalidad de Nacimiento para registro de afectados.
    - Solicita apoyo en el Hospital de Nacimiento (Av. Julio Hemmelmann 628) para chequeos médicos.
    - Regístrate en programas de SENAPRED y FONASA para cobertura de salud.

    3. Reconstrucción y apoyo psicológico:
    - Solicita subsidios para reconstrucción a través de SERVIU y MINVU.
    - Busca asesoría legal para temas de seguros y propiedad.
    - Accede a apoyo psicológico gratuito en centros de salud o programas municipales.

    4. Prevención futura:
    - Participa en talleres de reconstrucción segura.
    - Únete a brigadas comunitarias para fortalecer la resiliencia.
    - Monitorea el Plan de Reducción de Riesgos de la comuna.

    Recuerda: No estás solo. La comunidad de Nacimiento se une en momentos difíciles. Juntos reconstruimos.`,
    icon: BookOpen,
    color: 'text-green-600'
  },
  {
    id: 4,
    title: 'Manejo de desechos vegetales',
    summary: 'Consejos para evitar la acumulación de material combustible.',
    fullContent: `La acumulación de desechos vegetales es uno de los principales riesgos para incendios forestales. Aprende a manejarlos correctamente:

    1. Prevención de acumulación:
    - Recoge hojas secas, ramas y maleza regularmente, especialmente en otoño e invierno.
    - Usa composteros para material orgánico en lugar de quemarlo.
    - Mantén al menos 10 metros libres de vegetación alrededor de tu casa.

    2. Métodos seguros de eliminación:
    - Lleva desechos a puntos de acopio municipales o vertederos autorizados.
    - Si usas compost, mézclalo con material verde para acelerar la descomposición.
    - Nunca quemes desechos sin permiso de CONAF y supervisión.

    3. Alternativas ecológicas:
    - Usa trituradoras de ramas para crear mulch que proteja el suelo.
    - Participa en campañas de recolección comunitaria organizadas por la municipalidad.
    - Planta especies nativas resistentes al fuego en lugar de exóticas inflamables.

    4. Regulaciones locales:
    - Consulta el calendario de quemas autorizadas en tu comuna.
    - Reporta acumulación peligrosa en propiedades vecinas a la autoridad local.
    - Únete a programas de manejo forestal sostenible.

    Un buen manejo de desechos no solo previene incendios, sino que también beneficia el medio ambiente de Nacimiento.`,
    icon: Lightbulb,
    color: 'text-blue-600'
  },
  {
    id: 5,
    title: 'Importancia de los cortafuegos',
    summary: 'Aprende sobre su función y cómo mantenerlos.',
    fullContent: `Los cortafuegos son barreras vitales contra los incendios forestales. Entiende su importancia y mantenimiento:

    1. ¿Qué es un cortafuego?
    - Franja de terreno libre de vegetación que actúa como barrera para detener el avance del fuego.
    - Deben tener al menos 10-20 metros de ancho, dependiendo del riesgo local.
    - En Nacimiento, son esenciales en la interfaz urbano-rural de la cordillera de Nahuelbuta.

    2. Cómo crear y mantener uno:
    - Limpia regularmente de hojas, ramas y maleza.
    - Evita plantar árboles o arbustos en la franja.
    - Coordina con vecinos para cortafuegos comunitarios más efectivos.
    - Usa herramientas manuales o maquinaria autorizada, sin dañar el suelo.

    3. Beneficios y regulaciones:
    - Reduce la intensidad del fuego y da tiempo para evacuar.
    - Obligatorios por ley en propiedades con alto riesgo forestal.
    - La Municipalidad ofrece asesoría y subsidios para su creación.

    4. Errores comunes a evitar:
    - No dejarlos crecer con vegetación baja.
    - No usarlos como basurales.
    - Monitorearlos en temporada seca.

    Un cortafuego bien mantenido protege vidas, hogares y el ecosistema de nuestra comuna.`,
    icon: Shield,
    color: 'text-purple-600'
  }
];

const EducationArticlePage = ({ onMenuClick }) => {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const article = educationArticlesData.find(a => a.id === parseInt(articleId));

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header title="Artículo No Encontrado" onMenuClick={onMenuClick} />
        <div className="flex-1 flex items-center justify-center text-gray-600 text-xl">
          Artículo no encontrado. ¡Quizás se quedó en la biblioteca!
        </div>
        <EmergencyButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header title="Educación y Prevención" onMenuClick={onMenuClick} />
      <motion.div
        className="flex-1 p-4 max-w-4xl mx-auto w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          onClick={() => navigate('/educacion')}
          className="flex items-center gap-2 text-orange-600 hover:text-orange-800 mb-6 font-semibold"
          whileHover={{ x: -5 }}
        >
          <ArrowLeft className="w-5 h-5" /> Volver a Educación
        </motion.button>

        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 mb-6"
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{article.title}</h2>
          <p className="text-gray-600 text-sm mb-6">{article.summary}</p>
          
          <div className="text-gray-700 leading-relaxed whitespace-pre-line">
            {article.fullContent}
          </div>
        </motion.div>
      </motion.div>
      <EmergencyButton />
    </div>
  );
};

export default EducationArticlePage;