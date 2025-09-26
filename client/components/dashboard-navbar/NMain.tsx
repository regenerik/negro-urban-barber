export default function NMain() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-white mb-4">Panel principal</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-black/40 rounded-lg">
          <h3 className="text-white/90 font-medium mb-2">Ventas recientes</h3>
          <div className="h-28 bg-white/5 rounded-md flex items-center justify-center text-white/60">Gráfico placeholder</div>
        </div>
        <div className="p-4 bg-black/40 rounded-lg">
          <h3 className="text-white/90 font-medium mb-2">Próximos agendamientos</h3>
          <div className="h-28 bg-white/5 rounded-md flex items-center justify-center text-white/60">Agenda placeholder</div>
        </div>
      </div>
      <div className="mt-6 p-4 bg-black/40 rounded-lg">
        <h3 className="text-white/90 font-medium mb-2">Histórico</h3>
        <div className="h-24 bg-white/5 rounded-md flex items-center justify-center text-white/60">Tabla placeholder</div>
      </div>
    </div>
  );
}
