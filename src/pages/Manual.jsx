import { Link } from "react-router-dom";

// --- Componente de Pie de Página (Footer) ---
// Mantenemos la función Footer aquí para que el archivo sea autocontenido, 
// tal como se hizo en Mercadea.jsx.
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

// --- Componente Manual ---
export default function Manual() {
  return (
    // Contenedor principal con fondo (Igual que Mercadea)
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      
      {/* Fondo con Imagen y Gradiente (Igual que Mercadea) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/image.png)", opacity: 0.15 }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent"></div>

      {/* Contenido Principal */}
      <main className="relative z-10 py-16 md:py-24 max-w-4xl mx-auto px-6 text-white">
        
        {/* ENCABEZADO (Fade-in 0) */}
        <header className="text-center mb-12 opacity-0 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-3 leading-tight">
            Manual de Usuario <span className="text-orange-500">Mercadea</span>
          </h1>
          <p className="text-xl text-gray-400 mt-4">
            Guía completa para un comercio seguro.
          </p>
        </header>

        {/* SECCIÓN 1: INTRODUCCIÓN (Fade-in delay 300) */}
        <section className="bg-white/5 backdrop-blur-md p-8 rounded-xl shadow-2xl mb-10 border border-white/10 opacity-0 animate-fadeIn delay-300">
          <h2 className="text-3xl font-bold mb-4 text-orange-500 flex items-center">
            <span className="text-4xl mr-3">💡</span> Nuestra Promesa de Seguridad
          </h2>
          <p className="text-gray-300 leading-relaxed">
            ¡Bienvenido/a! Mercadéa se basa en la confianza. Este manual explica cómo funciona nuestro sistema de Comprobadores (intermediarios certificados) para asegurar que cada transacción se complete con éxito y justicia para ambas partes.
          </p>
        </section>

        {/* SECCIÓN 2: ROL DEL COMPRADOR (Fade-in delay 600) */}
        <section className="mt-12 opacity-0 animate-fadeIn delay-600">
          <h2 className="text-4xl font-bold mb-6 text-white border-b border-orange-500/50 pb-2">
            🛒 Compradores: Tu Ruta Segura
          </h2>
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl space-y-6 border border-white/10">
            <h3 className="text-2xl font-semibold text-orange-600">1. Proceso de Compra con Escrow</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-3 pl-4">
              <li>El monto de tu compra se **retiene** en una cuenta segura (Escrow).</li>
              <li>El **Comprobador** revisa la calidad y exactitud del producto.</li>
              <li>El vendedor solo puede enviar/entregar después de la verificación positiva.</li>
              <li>Una vez que recibes y apruebas, el pago se libera al vendedor. ¡Tú tienes el control!</li>
            </ul>

            <h3 className="text-2xl font-semibold text-orange-500 pt-4">2. ¿Disputas?</h3>
            <p className="text-gray-300">
              Si hay un problema, abre una disputa. El Comprobador actuará como árbitro neutral para garantizar que se aplique la política acordada.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3: ROL DEL VENDEDOR (Fade-in delay 900) */}
        <section className="mt-12 opacity-0 animate-fadeIn delay-900">
          <h2 className="text-4xl font-bold mb-6 text-white border-b border-orange-500/50 pb-2">
            📦 Vendedores: Vende con Confianza
          </h2>
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl space-y-6 border border-white/10">
            <h3 className="text-2xl font-semibold text-orange-500">1. Publicación y Verificación</h3>
            <p className="text-gray-300">
              Asegúrate de que las fotos y la descripción del producto sean impecables, ya que el Comprobador lo revisará antes de validar la venta.
            </p>
            
            <h3 className="text-2xl font-semibold text-orange-500 pt-4">2. Cobro Garantizado</h3>
            <p className="text-gray-300">
              Una vez que el Comprobador aprueba el producto y el comprador confirma la recepción, tu pago se libera **automáticamente**. Nunca tendrás que preocuparte por no recibir el dinero.
            </p>
          </div>
        </section>
        
        {/* LLAMADA A LA ACCIÓN / VOLVER (Fade-in delay 1200) */}
        <div className="text-center mt-16 opacity-0 animate-fadeIn delay-1200">
          <Link
            to="/mercadea"
            className="inline-flex items-center bg-orange-600 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:bg-orange-700 transition duration-300 transform hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Volver a la Página Principal
          </Link>
        </div>

      </main>

      {/* Pie de página (Footer) */}
      <Footer />
      
    </div>
  );
}