import React, { useEffect, useRef, useState } from "react";
import backImage from "../imgs/back_lower.png";
import logoImage from "../imgs/marca_blanco_sin_fondo.png";

export default function Amigos() {
  const [bgLoaded, setBgLoaded] = useState(false);
  const [vidLoaded, setVidLoaded] = useState(false);
  const [showUnmute, setShowUnmute] = useState(true);
  const videoRef = useRef(null);

  const instagramUrl = "https://instagram.com/negrourbanbarber.ok";
  const subtitle = "A los amigos hay que tenerlos cerca.";
  const subtitle2 = "Te queremos con nosotros…";
  const subtitle3 = "Que es esta tarjeta?"
  const subtitle4 = "Es una membresia eterna y acceso a extras en nuestras instalaciones.Y es también la invitación a nuestra inaguración. (que en breve daremos a conocer la fecha)"
  // Autoplay/pausa según visibilidad (ahorra batería/datos)
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current) return;
        if (entry.isIntersecting) {
          videoRef.current.play().catch(() => {});
        } else {
          videoRef.current.pause();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const unmute = () => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = false;
    el.play().catch(() => {});
    setShowUnmute(false);
  };

  return (
    <div
      className="
        w-full max-w-xl mx-auto px-6 mt-6 relative rounded-3xl overflow-hidden
        shadow-2xl bg-gray-900/90 border border-gray-800/50
        min-h-[520px] sm:min-h-[560px]
      "
    >
      {/* Fondo */}
      <img
        src={backImage}
        alt=""
        aria-hidden="true"
        onLoad={() => setBgLoaded(true)}
        className={
          'absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-out will-change-[opacity] ' +
          (bgLoaded ? 'opacity-20' : 'opacity-0')
        }
      />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.25),rgba(0,0,0,0.25))] pointer-events-none" />

      {/* Contenido */}
      <div className="relative text-center py-10 px-4">
        {/* LOGO */}
        <div className="mb-6 pt-2">
          <img
            src={logoImage}
            alt="Logo Negro Urban Barber"
            width={224}
            height={80}
            className="w-48 sm:w-56 h-auto mx-auto object-contain drop-shadow-md"
            loading="lazy"
          />
        </div>

        {/* VIDEO vertical justo debajo del logo */}
        <div
          className="
            mx-auto w-full max-w-[420px]
            rounded-2xl overflow-hidden shadow-xl border border-white/20
          "
        >
          {/* Relación 9:16. Casi ancho total, requiere un pelín de scroll para verlo completo */}
          <div className="relative w-full aspect-[9/16] bg-black/70">
            <video
              ref={videoRef}
              className={
                'absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ' +
                (vidLoaded ? 'opacity-100' : 'opacity-0')
              }
              playsInline
              muted
              autoPlay
              loop
              controls
              preload="metadata"
              poster="/media/poster-amigos.webp"
              onLoadedData={() => setVidLoaded(true)}
            >
              <source src="/media/vid_1.webm" type="video/webm" />
              <source src="/media/vid_2.mp4" type="video/mp4" />
            </video>

            {/* Botón para activar sonido */}
            {showUnmute && (
              <button
                onClick={unmute}
                className="
                  absolute bottom-3 right-3 z-10
                  rounded-full bg-black/60 text-white px-3 py-1.5
                  text-xs sm:text-sm backdrop-blur border border-white/20
                "
                aria-label="Activar sonido"
              >
                🔊 Tocar para sonido
              </button>
            )}
          </div>
        </div>

        {/* Subtítulos */}
        <p className="mt-6 leading-relaxed text-white text-lg sm:text-xl font-semibold tracking-wide [font-family:'Inter',sans-serif]">
          {subtitle}
          <br />
          {subtitle2}
                    <br />
                     <br />
          {subtitle3}
          <br /><br />
          {subtitle4}
        </p>

        <br />

        {/* Texto info */}
        <span className="text-white/80 font-light text-base">
          Si llegaste hasta acá, es porque sos importante para nosotros.
        </span>

        <br />
        <br />

        {/* Botón Instagram */}
        <div className="mt-6 pb-2">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Abrir Instagram (se abre en nueva pestaña)"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-3 transition-colors duration-300 ease-out hover:border-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50 text-base font-medium tracking-wide shadow-xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              width="20" height="20" aria-hidden="true" className="fill-white">
              <path d="M7.75 2h8.5C19.216 2 22 4.784 22 8.25v7.5C22 19.216 19.216 22 16.25 22h-8.5C4.784 22 2 19.216 2 16.25v-7.5C2 4.784 4.784 2 7.75 2zm0 1.5C5.345 3.5 3.5 5.345 3.5 7.75v8.5C3.5 18.655 5.345 20.5 7.75 20.5h8.5c2.405 0 4.25-1.845 4.25-4.25v-8.5C20.5 5.345 18.655 3.5 16.25 3.5h-8.5zM12 7.25a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zm0 1.5a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5zM17.5 6a.75.75 0 110 1.5.75.75 0 010-1.5z" />
            </svg>
            <span className="text-white">Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
}
