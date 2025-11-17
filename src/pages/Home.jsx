export default function Home() {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url(/images/home_background.png)" }}
    >
      {/* Overlay negro semi-transparente */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Contenido centrado */}
      <div className="relative z-10 text-center max-w-2xl p-10 rounded-lg">


        <h1 className="text-5xl font-bold mb-6 animate-fadeIn">Bienvenido a Sinem</h1>
        <p className="text-xl mb-4 animate-fadeIn">Tu socio confiable en soluciones tecnológicas y proyectos digitales.</p>
        <a
          href="/about-us"
          className="mt-4 inline-block bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors duration-300 animate-fadeIn"
        >
          Conócenos
        </a>
      </div>
    </div>
  );
}
