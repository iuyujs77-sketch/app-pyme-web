import Link from "next/link";

export default function Inventario() {
  return (
    <div className="relative h-screen w-full flex flex-col bg-black overflow-hidden font-sans">
      {/* Fondo simulación cámara */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>
      </div>

      {/* Header flotante */}
      <div className="relative z-20 flex flex-col items-center pt-12 px-4">
        <div className="w-full flex justify-between mb-6">
          <Link href="/" className="size-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white">
            <span className="material-symbols-outlined">close</span>
          </Link>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white">
            <div className="size-2 bg-[#37ec13] rounded-full animate-pulse"></div>
            <span className="text-xs font-bold tracking-wide">AI LIVE VIEW</span>
          </div>
          <button className="size-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white">
            <span className="material-symbols-outlined">flash_on</span>
          </button>
        </div>
      </div>

      {/* Cuadro de detección (Bounding Box) */}
      <div className="absolute top-[35%] left-[15%] w-[70%] h-[30%] border-2 border-[#37ec13] rounded-xl shadow-[0_0_20px_rgba(55,236,19,0.3)] animate-pulse z-10">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black px-3 py-1 rounded-full flex items-center gap-2 shadow-lg">
           <span className="material-symbols-outlined text-[#37ec13]">check_circle</span>
           <div className="leading-none">
             <span className="block text-xs font-bold">Sabritas Sal</span>
             <span className="block text-[10px] text-green-700">Stock: 8 un.</span>
           </div>
        </div>
      </div>

      {/* Botón de acción */}
      <div className="absolute bottom-10 w-full px-6 z-30">
        <button className="w-full h-14 bg-[#37ec13] rounded-full text-black font-bold text-lg flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(55,236,19,0.4)] hover:scale-105 transition-transform">
          <span className="material-symbols-outlined">fact_check</span>
          Confirmar y Sincronizar
        </button>
      </div>
    </div>
  );
}