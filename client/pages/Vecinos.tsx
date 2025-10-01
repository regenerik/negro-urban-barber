import React from 'react';
import backImage from "../imgs/back_lower.png";
import logoImage from "../imgs/marca_blanco_sin_fondo.png";

export default function Vecinos() {
  const instagramUrl = "https://instagram.com/negrourbanbarber.ok";
  const subtitle ="Los vecinos estamos para darnos una mano. Contá con nosotros.";
  return (
    <div className="w-full max-w-xl mx-auto px-6 mt-6 relative rounded-3xl overflow-hidden shadow-2xl bg-gray-900/90 border border-gray-800/50">
      
      {/* Fondo con opacidad */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-20"
        style={{ backgroundImage: `url(${backImage})` }}
      ></div>

      {/* Contenido sobre el fondo */}
      <div className="relative text-center py-10 px-4">
        
        {/* LOGO: Centrado, arriba de todo el texto */}
        <div className="mb-8 pt-4"> 
          <img 
            src={logoImage} 
            alt="Logo Negro Urban Barber"
            className="w-48 sm:w-56 h-auto mx-auto object-contain drop-shadow-md" 
            loading="lazy"
          />
        </div>

        {/* Subtítulo principal */}
        <p className="leading-relaxed text-white text-lg sm:text-xl font-semibold tracking-wide [font-family:'Inter',sans-serif]">
          {subtitle}
        </p>
        
        <br />
        
        {/* Texto de información */}
        <span className="text-white/80 font-light text-base">
          Tu nuevo local en Palermo está llegando en Noviembre.
        </span>

        <br />
        <br />

        {/* Botón de Instagram */}
        <div className="mt-8 pb-4">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Abrir Instagram (se abre en nueva pestaña)"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-3 transition-colors duration-300 ease-out hover:border-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50 text-base font-medium tracking-wide shadow-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              aria-hidden="true"
              className="fill-white"
            >
              <path d="M7.75 2h8.5C19.216 2 22 4.784 22 8.25v7.5C22 19.216 19.216 22 16.25 22h-8.5C4.784 22 2 19.216 2 16.25v-7.5C2 4.784 4.784 2 7.75 2zm0 1.5C5.345 3.5 3.5 5.345 3.5 7.75v8.5C3.5 18.655 5.345 20.5 7.75 20.5h8.5c2.405 0 4.25-1.845 4.25-4.25v-8.5C20.5 5.345 18.655 3.5 16.25 3.5h-8.5zM12 7.25a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zm0 1.5a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5zM17.5 6a.75.75 0 110 1.5.75.75 0 010-1.5z" />
            </svg>
            <span className="text-white">Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
}