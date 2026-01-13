import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex flex-col bg-[#020617] text-white overflow-hidden pb-24 font-sans">
      {/* Fondo con efecto de rejilla */}
      <div className="fixed inset-0 pointer-events-none opacity-40 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="fixed top-[-10%] left-[-20%] w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-[100px] animate-pulse"></div>

      {/* Encabezado */}
      <header className="flex items-center justify-between px-6 pt-12 pb-6 z-20">
        <div>
          <p className="text-sm text-slate-400 font-medium mb-1">Hola,</p>
          <h1 className="text-2xl font-bold">Bienvenido</h1>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
          <div className="size-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_#34d399]"></div>
          <span className="text-[10px] font-bold text-slate-200 uppercase">Online</span>
        </div>
      </header>

      {/* Botones Principales */}
      <main className="flex-1 flex flex-col px-6 gap-6 w-full max-w-md mx-auto z-10 relative mt-4">
        <button className="group relative w-full h-48 rounded-[2.5rem] bg-gradient-to-br from-[#10B981] to-[#047857] shadow-neon-glow overflow-hidden border border-white/20 transition-all hover:scale-[1.02]">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <div className="p-4 rounded-full bg-black/10 backdrop-blur-sm border border-white/20">
              <span className="material-symbols-outlined text-4xl">point_of_sale</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl font-black">Vender</span>
              <span className="block text-emerald-100/90 text-sm font-medium mt-1">Nueva transacción</span>
            </div>
          </div>
        </button>

        <div className="grid grid-cols-2 gap-5 w-full">
          <Link href="/inventario" className="group relative aspect-square bg-white/5 backdrop-blur-xl rounded-[2rem] flex flex-col items-center justify-center gap-4 border border-white/10 hover:bg-white/10 transition-all">
            <div className="size-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
              <span className="material-symbols-outlined text-3xl">move_to_inbox</span>
            </div>
            <span className="font-bold text-slate-100">Recibir</span>
          </Link>

          <Link href="/cobranza" className="group relative aspect-square bg-white/5 backdrop-blur-xl rounded-[2rem] flex flex-col items-center justify-center gap-4 border border-white/10 hover:bg-white/10 transition-all">
            <div className="size-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-400">
              <span className="material-symbols-outlined text-3xl">monetization_on</span>
            </div>
            <span className="font-bold text-slate-100">Cuentas</span>
          </Link>
        </div>
      </main>

      {/* Menú inferior */}
      <div className="fixed bottom-8 left-6 right-6 z-40">
        <nav className="bg-[#0f172a]/80 backdrop-blur-xl rounded-3xl px-6 py-4 flex justify-between items-center shadow-2xl border border-white/10">
          <Link href="/" className="text-emerald-400"><span className="material-symbols-outlined">home</span></Link>
          <Link href="/inventario" className="text-slate-400 hover:text-white"><span className="material-symbols-outlined">inventory_2</span></Link>
          <Link href="/mensajes" className="text-slate-400 hover:text-white"><span className="material-symbols-outlined">forum</span></Link>
          <Link href="/cobranza" className="text-slate-400 hover:text-white"><span className="material-symbols-outlined">account_balance_wallet</span></Link>
        </nav>
      </div>
    </div>
  );
}