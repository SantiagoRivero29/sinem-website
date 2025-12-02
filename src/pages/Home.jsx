import React from "react";
// Usamos Link si vas a usar react-router-dom, en lugar de <a>
import { Link } from "react-router-dom"; 

export default function Home() {
  return (
    // Contenedor principal: Ocupa toda la pantalla y usa fondo oscuro
    <div
      className="relative min-h-screen bg-gray-900 flex items-center justify-center text-white overflow-hidden"
    >
      {/* IMAGEN DE FONDO con filtros */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ 
          backgroundImage: "url(/images/home_background.png)",
          opacity: 0.3, // Menor opacidad para que el texto resalte
          filter: "grayscale(50%) blur(1px)", // Efecto dramático
        }}
      ></div>

      {/* Gradiente Oscuro para asegurar el contraste del texto */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-black/70 to-transparent"></div>

      {/* Contenido centrado con foco */}
      <div className="relative z-10 text-center max-w-4xl p-8 md:p-10">

        {/* TÍTULO PRINCIPAL (Animación: Fade-in) */}
        <h1 
          className="text-6xl md:text-8xl font-extrabold mb-6 leading-none text-white opacity-0 animate-fadeIn"
          style={{ animationDelay: '0.2s' }} // Ajuste de delay para la entrada
        >
          Bienvenido a <span className="text-yellow-400">Sinem</span>
        </h1>

        {/* SUBTÍTULO (Animación: Fade-in con delay) */}
        <p 
          className="text-xl md:text-3xl mb-12 text-gray-300 max-w-2xl mx-auto opacity-0 animate-fadeIn"
          style={{ animationDelay: '0.6s' }} // Ligeramente después del título
        >
          Tu socio confiable en soluciones tecnológicas y proyectos digitales innovadores.
        </p>
        
        {/* BOTÓN DE ACCIÓN (Animación: Fade-in con mayor delay) */}
        <div className="opacity-0 animate-fadeIn" style={{ animationDelay: '1s' }}>
          <Link
            to="/about-us" // Usamos Link en lugar de <a> si estás en un proyecto React Router
            className="mt-4 inline-block bg-yellow-400 text-gray-900 font-bold px-10 py-4 text-xl rounded-full shadow-2xl shadow-yellow-500/50 
                       hover:bg-yellow-300 transition duration-300 transform hover:scale-105"
          >
            Conócenos y Transfórmate
          </Link>
        </div>

      </div>
    </div>
  );
}