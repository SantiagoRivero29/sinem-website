import React from "react";
// Si usas Link de react-router-dom en el futuro, solo descomenta:
// import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    // Contenedor principal: Ajustamos la altura para que el contenido sea el foco.
    <section
      className="relative min-h-screen bg-gray-900 flex items-center py-20 overflow-hidden"
    >
      
      {/* IMAGEN DE FONDO (Opcional, la mostramos con baja opacidad y tinte oscuro) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/YellowBackgrounds.png)", opacity: 0.1 }}
      ></div>
      {/* Gradiente Oscuro para unificar el fondo */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>


      {/* CONTENIDO PRINCIPAL CENTRADO */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 w-full">
        
        {/* Bloque principal de texto e introducción */}
        <div className="text-center mb-16 opacity-0 animate-fadeIn">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-4 leading-tight text-white">
            <span className="text-yellow-400">Sinem</span>: Quienes Somos
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 font-light mt-6 opacity-0 animate-fadeIn delay-300">
            Desarrollamos soluciones digitales que transforman empresas. Creamos aplicaciones móviles, plataformas web y sistemas empresariales diseñados para optimizar procesos y potenciar resultados.
          </p>
        </div>

        {/* CONTENEDOR DE MISIÓN, VISIÓN Y VALORES */}
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          
          {/* TARJETA 1: MISIÓN (Fade-in delay 600) */}
          <div className="bg-white/5 hover:bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border-t-4 border-yellow-500 transition duration-300 transform hover:-translate-y-1 opacity-0 animate-fadeIn delay-600">
            <div className="text-yellow-400 mb-4 text-4xl">🎯</div>
            <h3 className="text-2xl font-bold mb-3 text-white">Nuestra Misión</h3>
            <p className="text-gray-300 mt-2">
              Impulsar el crecimiento empresarial mediante tecnología moderna y soluciones digitales eficientes, enfocados siempre en el éxito del cliente.
            </p>
          </div>

          {/* TARJETA 2: VISIÓN (Fade-in delay 800) */}
          <div className="bg-white/5 hover:bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border-t-4 border-yellow-500 transition duration-300 transform hover:-translate-y-1 opacity-0 animate-fadeIn delay-800">
            <div className="text-yellow-400 mb-4 text-4xl">🔭</div>
            <h3 className="text-2xl font-bold mb-3 text-white">Nuestra Visión</h3>
            <p className="text-gray-300 mt-2">
              Ser el referente tecnológico líder en Bolivia y Latinoamérica, creando productos que definan el futuro del comercio digital y empresarial.
            </p>
          </div>

          {/* TARJETA 3: VALORES (Fade-in delay 1000) */}
          <div className="bg-white/5 hover:bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border-t-4 border-yellow-500 transition duration-300 transform hover:-translate-y-1 opacity-0 animate-fadeIn delay-1000">
            <div className="text-yellow-400 mb-4 text-4xl">🤝</div>
            <h3 className="text-2xl font-bold mb-3 text-white">Valores Clave</h3>
            <ul className="list-none text-gray-300 space-y-2 mt-2">
              <li className="flex items-center">
                <span className="text-yellow-400 mr-2">•</span> Innovación y Creatividad
              </li>
              <li className="flex items-center">
                <span className="text-yellow-400 mr-2">•</span> Calidad y Rigor Técnico
              </li>
              <li className="flex items-center">
                <span className="text-yellow-400 mr-2">•</span> Transparencia y Ética
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </section>
  );
}