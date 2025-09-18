import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center px-6">
        <h1 className="text-4xl font-semibold mb-3">404</h1>
        <p className="text-base text-white/70 mb-6">Página no encontrada</p>
        <a
          href="/amigos"
          className="inline-flex items-center justify-center rounded-full border border-white/20 text-white px-5 py-2.5 hover:border-white/40 hover:bg-white/5 transition-colors"
        >
          Ir al inicio
        </a>
      </div>
    </div>
  );
};

export default NotFound;
