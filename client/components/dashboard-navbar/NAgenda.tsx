export default function NAgenda() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-white mb-4">Agenda</h2>
      <div className="p-4 bg-black/40 rounded-lg">
        {/* Simple calendar placeholder - could be replaced with a real calendar component */}
        <div className="grid grid-cols-7 gap-2 text-sm text-white/80">
          {Array.from({ length: 35 }).map((_, i) => (
            <div key={i} className="h-14 bg-white/5 rounded flex items-center justify-center">
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
