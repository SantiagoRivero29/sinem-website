import React from "react";
// Si vas a usar enlaces a los proyectos:
import { Link } from "react-router-dom"; 

export default function OurWorks() {
  const works = [
    { 
      title: "Mercadea",
      description: "Plataforma móvil para fábricas, distribuidores y vendedores mayoristas. Permite publicar productos, administrar ventas y conectar proveedores con compradores.",
      image: "/images/mercadea_logo.jpeg",
      accent: "orange", // Color de acento para la tarjeta
      link: "/proyectos/mercadea"
    },
    { 
      title: "Sistema de Inventarios SH",
      description: "Sistema web avanzado para control de inventario para una tienda de suplementos, Proyecto Integrador Ganador 2 Semestre 2024.",
      image: "/images/shlogo.png",
      accent: "yellow", // Color de acento para la tarjeta
      link: "/proyectos/inventarios-sh"
    },
    // Puedes añadir más proyectos aquí
  ];

  const getAccentColor = (accent) => {
    return accent === 'orange' ? 'border-orange-500 text-orange-400' : 'border-yellow-500 text-yellow-400';
  }

  return (
    <div
      className="relative min-h-screen bg-gray-900 flex items-center py-20 overflow-hidden"
    >       
      {/* IMAGEN DE FONDO (Opcional, la mostramos con baja opacidad y tinte oscuro) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/YellowBackgrounds.png)", opacity: 0.1 }}
      ></div>
      {/* Gradiente Oscuro para unificar el fondo */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 w-full">
        
        {/* TÍTULO PRINCIPAL (Fade-in 0) */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-16 tracking-tight text-white opacity-0 animate-fadeIn">
          Nuestros <span className="text-yellow-400">Proyectos Destacados</span>
        </h2>

        {/* LISTA DE TRABAJOS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10"> {/* Cambié a 2 columnas para que las tarjetas sean más grandes */}
          {works.map((work, index) => (
            <div
              key={index}
              className={`
                bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl p-6 
                overflow-hidden ${getAccentColor(work.accent)} border border-white/20
                hover:scale-[1.02] hover:shadow-yellow-500/20
                transition-all duration-300 opacity-0 animate-fadeIn
              `}
              // Animación escalonada
              style={{ animationDelay: `${0.3 + index * 0.3}s` }} 
            >
              <div className="flex flex-col md:flex-row gap-6">
                
                {/* Contenedor de Imagen/Logo */}
                <div className="flex-shrink-0 w-full md:w-32 h-32 overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                
                {/* Contenido de Texto */}
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-2 text-white">
                    {work.title}
                  </h3>
                  <p className={`text-sm font-semibold mb-3 ${getAccentColor(work.accent)}`}>
                    {work.accent === 'orange' ? 'Plataforma B2B' : 'Sistema Empresarial'}
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {work.description}
                  </p>
                  
              
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}