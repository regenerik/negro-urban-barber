import { cn } from "@/lib/utils";

interface LandingProps {
  subtitle: string;
  instagramUrl?: string;
}

export default function Landing({ subtitle, instagramUrl = "https://instagram.com/NEGRO.barber" }: LandingProps) {
  return (
    <div className="w-full max-w-xl mx-auto text-center px-6">
      <p className={cn(
        "mt-3 leading-relaxed text-white/80",
        "text-base sm:text-lg md:text-xl",
        "font-medium",
        "tracking-wide",
        "[font-family:'Playfair Display',serif]"
      )}>
        {subtitle}
      </p>

      <div className="mt-10">
        <a
          href={instagramUrl}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Abrir Instagram (se abre en una nueva pestaña)"
          className={cn(
            "inline-flex items-center justify-center gap-3 rounded-full",
            "border border-white/20 text-white px-6 py-3",
            "transition-colors duration-300 ease-out",
            "hover:border-white/40 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
            "text-sm tracking-wide"
          )}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" className="fill-white/90">
            <path d="M7.75 2h8.5C19.216 2 22 4.784 22 8.25v7.5C22 19.216 19.216 22 16.25 22h-8.5C4.784 22 2 19.216 2 16.25v-7.5C2 4.784 4.784 2 7.75 2zm0 1.5C5.345 3.5 3.5 5.345 3.5 7.75v8.5C3.5 18.655 5.345 20.5 7.75 20.5h8.5c2.405 0 4.25-1.845 4.25-4.25v-8.5C20.5 5.345 18.655 3.5 16.25 3.5h-8.5zM12 7.25a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zm0 1.5a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5zM17.5 6a.75.75 0 110 1.5.75.75 0 010-1.5z" />
          </svg>
          <span className="sr-only">Visitar Instagram</span>
          <span className="text-white/95">Instagram</span>
        </a>
      </div>
    </div>
  );
}
