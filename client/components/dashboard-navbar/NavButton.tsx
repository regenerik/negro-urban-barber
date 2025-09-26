interface NavButtonProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export default function NavButton({ label, active = false, onClick }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className={
        "inline-flex items-center gap-3 rounded-md transition-colors whitespace-nowrap " +
        /* responsive sizing: compact on small screens, full width on lg */
        "px-3 py-2 text-sm lg:w-full lg:text-base " +
        (active
          ? "bg-white/8 text-white font-semibold"
          : "text-white/70 hover:bg-white/3 hover:text-white")
      }
      style={{ minWidth: 64 }}
    >
      <span className="inline-block w-3 h-3 bg-white/60 rounded-full" aria-hidden="true" />
      <span>{label}</span>
    </button>
  );
}
