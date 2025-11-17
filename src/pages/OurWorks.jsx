export default function OurWorks() {
  const works = [
    { 
      title: "Mercadea",
      description: "Plataforma móvil para fábricas, distribuidores y vendedores mayoristas. Permite publicar productos, administrar ventas y conectar proveedores con compradores.",
      image: "/images/proyectoMercadea.png"
    },
    { 
      title: "Sistema de Inventarios",
      description: "Sistema web avanzado para control de stock, registros en tiempo real, alertas automáticas y reportes empresariales.",
      image: "/images/inventarios.png"
    },
    { 
      title: "Seguimiento de Órdenes",
      description: "Plataforma de logística que permite rastrear pedidos, asignar repartidores y monitorear entregas en tiempo real.",
      image: "/images/logistica.png"
    }
  ];

  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-white flex items-center"
      style={{ backgroundImage: "url(/images/Backgrounds.png)" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fadeIn">
          Trabajos Realizados
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 animate-fadeIn">
          {works.map((work, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="h-48 w-full">
                <img 
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover animate-fadeIn"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{work.title}</h3>
                <p className="text-gray-700">{work.description}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
