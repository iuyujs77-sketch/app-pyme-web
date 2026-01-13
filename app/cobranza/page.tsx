import Link from "next/link";

export default function Cobranza() {
  return (
    <div className="min-h-screen bg-[#f6f8f6] dark:bg-[#132210] text-[#121811] dark:text-white font-sans pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-[#132210]/80 backdrop-blur-md px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 dark:hover:bg-white/10">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1 className="text-lg font-bold">Cobranza Amigable</h1>
        <button className="w-10 h-10"><span className="material-symbols-outlined">more_vert</span></button>
      </header>

      <main className="px-6 py-4 space-y-6">
        {/* Tarjeta de Resumen */}
        <div className="bg-white dark:bg-[#1c3019] rounded-2xl p-6 shadow-sm border border-black/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#37ec13]/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
          <p className="text-sm font-medium text-gray-500 mb-1">Total por cobrar</p>
          <h2 className="text-4xl font-extrabold">$1,250.00 <span className="text-sm font-bold text-gray-400">MXN</span></h2>
        </div>

        <h3 className="font-bold text-lg flex items-center gap-2">
          Clientes pendientes <span className="bg-gray-200 dark:bg-white/10 text-xs px-2 py-0.5 rounded-full">3</span>
        </h3>

        {/* Lista de Clientes */}
        <div className="bg-white dark:bg-[#1c3019] p-5 rounded-2xl shadow-sm border border-black/5">
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-3">
                <div className="size-12 rounded-full bg-gray-200 bg-[url('https://i.pravatar.cc/150?u=maria')] bg-cover"></div>
                <div>
                  <h4 className="font-bold">María González</h4>
                  <p className="text-xs text-gray-500">Hace 5 días</p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-lg">$350.00</div>
                <div className="text-[10px] font-bold text-red-500 bg-red-100 px-2 py-0.5 rounded">PENDIENTE</div>
              </div>
            </div>
            <button className="w-full py-3 bg-[#37ec13] text-black font-bold rounded-full text-sm flex items-center justify-center gap-2 hover:bg-green-400 transition-colors">
              <span className="material-symbols-outlined text-lg">whatsapp</span> Recordatorio Amigable
            </button>
          </div>
      </main>
      
      {/* Botón flotante */}
      <button className="fixed bottom-6 right-6 size-14 bg-[#37ec13] rounded-full text-black flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
    </div>
  );
}