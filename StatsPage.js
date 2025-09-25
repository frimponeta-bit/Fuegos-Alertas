import React from 'react';
import { motion } from 'framer-motion';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import Header from '../components/Header';
import EmergencyButton from '../components/EmergencyButton';
import { BarChart, Flame, Info, ExternalLink } from 'lucide-react';

ChartJS.register(ArcElement, Tooltip, Legend);

const StatsPage = ({ onMenuClick }) => {
  // Datos simulados de incendios anteriores
  const historicalFires = [
    { 
      year: 2017, 
      name: 'Rinconada',
      location: 'San José Dollinco',
      affectedHectares: 2600, 
      details: '4 Casas y 1 Iglesia Consumida',
      affectedPeople: 30
    },
    { 
      year: 2022, 
      name: 'San José Grande',
      location: 'Chequenal',
      affectedHectares: 5300, 
      details: '11 Casas Consumidas',
      affectedPeople: 50
    },
    { 
      year: 2023,
      name: 'Santa Ana y Quillota',
      location: 'Distintos Sectores Rurales',
      affectedHectares: 44000, 
      details: '180 Casas Consumidas, 1 Colegio, 2 Sedes Sociales, 3 Fallecidos',
      affectedPeople: 750
    },
  ];

  // Datos para el gráfico circular de causas de incendios (2009-2019)
  const chartData = {
    labels: [
      'Incendios intencionales',
      'Tránsito de personas, vehículos y aeronaves',
      'Faenas forestales',
      'Incendios de causa desconocida',
      'Accidentes eléctricos',
      'Quema de desechos',
      'Actividades recreativas',
      'Faenas agrícolas y pecuarias',
      'Act. extinción I.F., incendios estructurales u otros',
      'Incendios naturales',
      'Otras actividades'
    ],
    datasets: [
      {
        label: 'Porcentaje',
        data: [38, 19, 13, 9, 9, 3, 3, 2, 2, 1, 1],
        backgroundColor: [
          '#FF6B6B', // Rojo para intencionales
          '#4ECDC4', // Turquesa para tránsito
          '#45B7D1', // Azul para faenas forestales
          '#96CEB4', // Verde claro para desconocida
          '#FFEAA7', // Amarillo para eléctricos
          '#DDA0DD', // Lila para quema de desechos
          '#98D8C8', // Verde menta para recreativas
          '#F7DC6F', // Amarillo dorado para agrícolas
          '#BB8FCE', // Púrpura para extinción
          '#82E0AA', // Verde para naturales
          '#F8C471'  // Naranja para otras
        ],
        borderColor: '#ffffff',
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 20,
          font: {
            size: 11
          },
          usePointStyle: true,
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.parsed;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return `${label}: ${value}% (${percentage}% del total)`;
          }
        },
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleFont: {
          size: 14
        },
        bodyFont: {
          size: 12
        }
      },
      title: {
        display: true,
        text: 'Causas Estimadas de Incendios Forestales en Nacimiento (Período: 2009-2019)',
        font: {
          size: 16,
          weight: 'bold'
        },
        color: '#374151',
        padding: {
          top: 10,
          bottom: 20
        }
      }
    },
    animation: {
      animateScale: true,
      animateRotate: true,
      duration: 2000
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header title="Estadísticas de la Comuna" onMenuClick={onMenuClick} />
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
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Datos de Incendios Históricos</h2>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Año</th>
                  <th className="py-3 px-6 text-left">Nombre / Ubicación</th>
                  <th className="py-3 px-6 text-left">Hectáreas Quemadas</th>
                  <th className="py-3 px-6 text-left">Detalles / Afectación</th>
                  <th className="py-3 px-6 text-left">Personas Afectadas</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm font-light">
                {historicalFires.map((data, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-6 text-left whitespace-nowrap">{data.year}</td>
                    <td className="py-3 px-6 text-left">{data.name} en {data.location}</td>
                    <td className="py-3 px-6 text-left">{data.affectedHectares.toLocaleString()} Ha</td>
                    <td className="py-3 px-6 text-left">{data.details}</td>
                    <td className="py-3 px-6 text-left">{data.affectedPeople}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Información Clave sobre Incendios Forestales</h2>
          <div className="bg-red-50 p-6 rounded-xl border border-red-200 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Flame className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold text-red-700">Causa Principal y Factores de Vulnerabilidad</h3>
            </div>
            <p className="text-gray-700 mb-3">
              <span className="font-semibold">Causa principal:</span> Desarrollo forestal en la cordillera de Nahuelbuta, con plantaciones de especies exóticas (pino y eucalipto).
            </p>
            <p className="text-gray-700 font-semibold mb-2">Factores de vulnerabilidad:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Construcciones principalmente de madera.</li>
              <li>Zonas de interfaz urbano-rural con deficiente regulación constructiva.</li>
              <li>Población rural expuesta: 5.561 personas, de las cuales un 21% son adultos mayores.</li>
            </ul>
            <p className="text-gray-700 mt-3">
              <span className="font-semibold">Riesgo de desastre comunal:</span> Asociado principalmente a los incendios forestales en la cordillera de Nahuelbuta.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Gráficos sobre la Comuna</h2>
          <div className="mb-8 p-4 bg-white rounded-xl border border-gray-200 shadow-md">
            <div className="h-96 mb-4">
              <Pie data={chartData} options={chartOptions} />
            </div>
          </div>

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

export default StatsPage;