import Link from "next/link";

export default function Mensajes() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#020617] text-slate-900 dark:text-white pb-24 font-sans">
      <header className="px-6 py-6 flex justify-between items-center sticky top-0 bg-gray-50/90 dark:bg-[#020617]/90 backdrop-blur z-20">
        <div className="flex items-center gap-3">
            <Link href="/"><span className="material-symbols-outlined">arrow_back</span></Link>
            <h1 className="text-xl font-bold">Centro de Mensajes</h1>
        </div>
        <div className="size-10 rounded-full bg-gray-200 overflow-hidden border border-gray-300">
             <img src="https://i.pravatar.cc/150?u=admin" alt="Admin" className="w-full h-full object-cover" />
        </div>
      </header>

      {/* Estadísticas */}
      <div className="px-6 grid grid-cols-2 gap-3 mb-6">
        <div className="bg-white dark:bg-[#1e293b] p-4 rounded-2xl shadow-sm">
            <div className="flex justify-between text-emerald-500 mb-2"><span className="material-symbols-outlined">verified</span> <span className="text-xs bg-emerald-500/10 px-2 rounded-full">+0.2</span></div>
            <div className="text-3xl font-bold">4.9</div>
            <div className="text-xs text-gray-500">Reputación</div>
        </div>
        <div className="bg-white dark:bg-[#1e293b] p-4 rounded-2xl shadow-sm border border-orange-500/30 relative overflow-hidden">
             <div className="absolute inset-0 bg-orange-500/5"></div>
             <span className="material-symbols-outlined text-orange-500 mb-2">mark_chat_unread</span>
             <div className="text-3xl font-bold">3</div>
             <div className="text-xs text-gray-500">Pendientes</div>
        </div>
      </div>

      {/* Mensajes */}
      <div className="px-6 space-y-4">
        <div className="bg-white dark:bg-[#1e293b] p-5 rounded-2xl shadow-sm border-l-4 border-blue-500">
            <div className="flex justify-between items-start mb-3">
                <div className="flex gap-3">
                    <img src="https://i.pravatar.cc/150?u=juan" className="size-10 rounded-full" />
                    <div>
                        <h3 className="font-bold text-sm">Juan Pérez</h3>
                        <div className="flex text-yellow-400 text-[10px]">★★★★★</div>
                    </div>
                </div>
                <span className="text-[10px] font-bold bg-blue-100 text-blue-600 px-2 py-1 rounded">GOOGLE</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">"¡Los mejores tacos! La salsa verde está increíble."</p>
            <button className="w-full py-2 bg-[#37ec13] text-black text-sm font-bold rounded-full flex justify-center items-center gap-2 hover:brightness-105">
                <span className="material-symbols-outlined text-sm">auto_awesome</span> Responder con IA
            </button>
        </div>
      </div>
    </div>
  );
}