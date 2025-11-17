import React from "react";

export default function AboutUs() {
  return (
    <section
      className="relative bg-cover bg-center text-white h-screen py-24"
      style={{ backgroundImage: "url(/images/YellowBackgrounds.png)" }}
    >
      {/* overlay (solo sobre la sección) */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>

      {/* contenido interior con padding (no ocupa toda la pantalla) */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 lg:p-12 shadow-lg animate-fadeIn">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-yellow-400">Quiénes Somos</h2>

          <p className="text-lg leading-relaxed text-gray-200 mb-6">
            En <strong>Sinem</strong> desarrollamos soluciones digitales que transforman empresas.
            Creamos aplicaciones móviles, plataformas web y sistemas empresariales diseñados
            para optimizar procesos y potenciar resultados.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div>
              <h3 className="text-xl font-semibold text-yellow-300">Nuestra Misión</h3>
              <p className="text-gray-300 mt-2">Impulsar el crecimiento empresarial mediante tecnología moderna y soluciones digitales eficientes.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-yellow-300">Nuestra Visión</h3>
              <p className="text-gray-300 mt-2">Ser un referente tecnológico en Bolivia y Latinoamérica, creando productos innovadores.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-yellow-300">Valores</h3>
              <ul className="list-disc ml-5 text-gray-300 mt-2 space-y-1">
                <li>Innovación</li>
                <li>Calidad</li>
                <li>Transparencia</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
