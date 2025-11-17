import { Link } from "react-router-dom";

export default function Mercadea() {
  return (
    <div
      className="relative py-28 bg-cover bg-center h-screen"
      style={{ backgroundImage: "url(/images/image.png)" }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <section className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">

        {/* TÍTULO */}
        <h2 className="text-5xl font-bold mb-6 opacity-0 animate-fadeIn">
          Mercadea
        </h2>

        {/* SUBTÍTULO PRINCIPAL */}
        <p className="text-lg max-w-3xl mx-auto text-gray-200 mb-10 opacity-0 animate-fadeIn delay-150">
          Mercadea es nuestra plataforma diseñada para ayudar a negocios a
          impulsar sus ventas, mejorar su presencia digital y administrar sus
          productos de manera eficiente.
        </p>

        {/* SUBSECCIONES DEL PROYECTO */}
        <div className="grid md:grid-cols-3 gap-10 mt-12">

          {/* SECCIÓN 1 */}
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-white/20 opacity-0 animate-fadeIn delay-300">
            <h3 className="text-xl font-semibold mb-3">Gestión de Productos</h3>
            <p className="text-gray-300 text-sm">
              Administra tu catálogo, fotos, precios y categorías de manera rápida y sencilla.
            </p>
          </div>

          {/* SECCIÓN 2 */}
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-white/20 opacity-0 animate-fadeIn delay-500">
            <h3 className="text-xl font-semibold mb-3">Marketing Inteligente</h3>
            <p className="text-gray-300 text-sm">
              Optimiza tu visibilidad con herramientas pensadas para aumentar tus ventas.
            </p>
          </div>

          {/* SECCIÓN 3 */}
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-white/20 opacity-0 animate-fadeIn delay-700">
            <h3 className="text-xl font-semibold mb-3">Reportes y Análisis</h3>
            <p className="text-gray-300 text-sm">
              Obtén métricas claras para entender y mejorar tu rendimiento digital.
            </p>
          </div>

        </div>

        {/* BOTÓN */}
        <div className="mt-14 opacity-0 animate-fadeIn delay-1000">
          <Link
            to="/mercadea/manual"
            className="inline-block bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-yellow-300 transition duration-300"
          >
            Ver Manual de Usuario
          </Link>
        </div>

      </section>
    </div>
  );
}
