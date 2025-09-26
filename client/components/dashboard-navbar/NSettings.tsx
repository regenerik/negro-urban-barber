export default function NSettings() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-white mb-4">Ajustes</h2>
      <div className="space-y-4">
        <div className="p-4 bg-black/40 rounded-md">
          <label className="block text-white/90 mb-1">Nombre del negocio</label>
          <input className="w-full bg-black/20 border border-white/10 rounded px-3 py-2 text-white" defaultValue="NEGRO" />
        </div>
        <div className="p-4 bg-black/40 rounded-md">
          <label className="block text-white/90 mb-1">Zona horaria</label>
          <select className="w-full bg-black/20 border border-white/10 rounded px-3 py-2 text-white">
            <option>America/Montevideo</option>
            <option>America/Argentina/Buenos_Aires</option>
          </select>
        </div>
      </div>
    </div>
  );
}
