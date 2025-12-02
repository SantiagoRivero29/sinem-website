import { Link } from "react-router-dom";

// Asegúrate de que las animaciones 'fade-in' y los 'delay' estén definidos
// en tu archivo tailwind.config.js para que funcionen correctamente.

// --- Componente de Pie de Página (Footer) ---
// Puedes mover esto a un archivo separado (ej: Footer.jsx) en un proyecto real
function Footer() {
  return (
    <footer className="relative z-20 bg-gray-800 text-white mt-16 pt-8 pb-4 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-6 text-center">
        

        {/* Información de Copyright */}
        <p className="text-gray-500 text-xs mt-4">
          © {new Date().getFullYear()} Sinem. Mercadea. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

// --- Componente Mercadea ---
export default function Mercadea() {
  return (
    // Contenedor principal
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      
      {/* Fondo con Imagen y Gradiente */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/image.png)", opacity: 0.15 }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent"></div>

      {/* Contenido Principal */}
      <main className="relative z-10 py-20 md:py-32 max-w-6xl mx-auto px-6">
        <section className="text-center text-white space-y-16">
          
          {/* INTRODUCCIÓN - MISIÓN (Fade-in 0) */}
          <div className="opacity-0 animate-fadeIn"> 
            
            {/* TÍTULO PRINCIPAL */}
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight">
              Mercadea
            </h1>

            {/* SUBTÍTULO PRINCIPAL (Misión) */}
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-300 font-light mt-10 opacity-0 animate-fadeIn delay-150">
              Nuestra misión es ofrecer una plataforma de comercio segura, rápida y confiable, donde compradores y vendedores realicen transacciones con total tranquilidad. Utilizamos un sistema de Comprobadores que verifican cada compra antes de liberar el pago, creando una experiencia justa para todos.
            </p>
          </div>

          {/* SUBSECCIONES DEL PROYECTO (CARACTERÍSTICAS) */}
          <div className="pt-10">
            <h2 className="text-3xl font-bold mb-10 text-orange-600 opacity-0 animate-fadeIn delay-300">
              Herramientas Esenciales
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* SECCIÓN 1 (Fade-in delay 500) */}
              <div className="bg-white/5 hover:bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/10 transition duration-300 transform hover:scale-[1.02] opacity-0 animate-fadeIn delay-500">
                <div className="text-orange-400 mb-3 text-3xl">📦</div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Gestión de Productos</h3>
                <p className="text-gray-400 text-base">
                  Administra tu catálogo, fotos, precios y categorías de manera rápida y sencilla.
                </p>
              </div>

              {/* SECCIÓN 2 (Fade-in delay 700) */}
              <div className="bg-white/5 hover:bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/10 transition duration-300 transform hover:scale-[1.02] opacity-0 animate-fadeIn delay-700">
                <div className="text-orange-400 mb-3 text-3xl">💡</div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Encuentra todo lo que necesites</h3>
                <p className="text-gray-400 text-base">
                  Podras encontrar mucha variedad de productos y proveedores en un solo lugar.
                </p>
              </div>

              {/* SECCIÓN 3 (Fade-in delay 900) */}
              <div className="bg-white/5 hover:bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/10 transition duration-300 transform hover:scale-[1.02] opacity-0 animate-fadeIn delay-900">
                <div className="text-orange-400 mb-3 text-3xl">📈</div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Ventas</h3>
                <p className="text-gray-400 text-base">
                 Con un solo click te puedes convertir en vendedor!
                </p>
              </div>

            </div>
          </div>
          
          {/* VISIÓN (Fade-in delay 1100) */}
          <div className="text-left max-w-4xl mx-auto pt-16 opacity-0 animate-fadeIn delay-1100">
            <h2 className="text-4xl font-bold mb-4 border-b border-orange-500/50 pb-2">
              Nuestra Visión 🚀
            </h2>
            <p className="text-lg text-gray-300">
              Queremos convertirnos en el marketplace más **confiable y transparente** de Latinoamérica, liderando el comercio digital con innovación, seguridad y un modelo de intermediación que proteja siempre a nuestros usuarios. Aspiramos a que cada persona pueda comprar y vender sin miedo a estafas, sabiendo que Mercadéa está ahí para respaldar cada paso.
            </p>
          </div>

          {/* OBJETIVOS (Fade-in delay 1300) */}
          <div className="text-left max-w-4xl mx-auto pt-10 opacity-0 animate-fadeIn delay-1300">
            <h2 className="text-4xl font-bold mb-4 border-b border-orange-500/50 pb-2">
              Objetivos Clave ✅
            </h2>
            <ul className="text-lg text-gray-300 space-y-3 list-disc list-inside">
              <li className="pl-2">Garantizar **seguridad total** en cada transacción mediante nuestros intermediarios certificados.</li>
              <li className="pl-2">Reducir riesgos de fraude tanto para compradores como para vendedores.</li>
              <li className="pl-2">Optimizar la experiencia de compra y venta, haciéndola más **rápida, clara e intuitiva**.</li>
              <li className="pl-2">Fomentar la **confianza** entre usuarios mediante un sistema transparente de comprobación.</li>
              <li className="pl-2">Impulsar el comercio local conectando de forma eficiente a usuarios y negocios.</li>
              <li className="pl-2">Innovar continuamente en herramientas, métodos de pago y verificación.</li>
            </ul>
          </div>
        
          {/* BOTÓN DE LLAMADA A LA ACCIÓN (Fade-in delay 1500) */}
          <div className="mt-20 opacity-0 animate-fadeIn delay-1500">
            <Link
              to="/mercadea/manual"
              className="inline-block bg-orange-600 text-white px-10 py-4 text-xl font-bold rounded-full shadow-lg hover:bg-orange-500 transition duration-300 transform hover:scale-105"
            >
              Ver Manual de Usuario
            </Link>
          </div>

        </section>
      </main>

      {/* Pie de página (Footer) */}
      <Footer />
      
    </div>
  );
}