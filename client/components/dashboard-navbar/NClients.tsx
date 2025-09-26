export default function NClients() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-white mb-4">Clientes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="p-4 bg-black/40 rounded-md flex items-center gap-3">
            <div className="w-12 h-12 bg-white/10 rounded-full" />
            <div>
              <div className="font-medium text-white">Cliente {i + 1}</div>
              <div className="text-sm text-white/70">Contacto: 000-000</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
