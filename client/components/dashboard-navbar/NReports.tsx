export default function NReports() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-white mb-4">Reportes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-black/40 rounded-lg">
          <h3 className="text-white/90 mb-2">Ventas</h3>
          <div className="h-36 bg-white/5 rounded-md flex items-center justify-center text-white/60">Chart</div>
        </div>
        <div className="p-4 bg-black/40 rounded-lg">
          <h3 className="text-white/90 mb-2">Conversiones</h3>
          <div className="h-36 bg-white/5 rounded-md flex items-center justify-center text-white/60">Metric</div>
        </div>
      </div>
    </div>
  );
}
