import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/store";

export default function Home() {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const logoSrc = "https://cdn.builder.io/api/v1/image/assets%2Fadca80ee8fc74b4799929f9b24a54891%2F74162de4fcb844988e24c71625b12b2b?format=webp&width=1200";
  const bgSrc = "https://cdn.builder.io/api/v1/image/assets%2Fadca80ee8fc74b4799929f9b24a54891%2Fdf027a68b15145f59ad5d277e5ac7a25?format=webp&width=1600";

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // no-op
  }, []);

  const handleSocial = async (provider: "google" | "facebook") => {
    try {
      setLoading(true);
      await new Promise((r) => setTimeout(r, 700));
      const user = { id: provider + "-123", name: provider === "google" ? "Google User" : "FB User", provider };
      setUser(user, "fake-token");
    } catch (e) {
      console.error(e);
      alert("Social login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleEmailLogin = async () => {
    try {
      setLoading(true);
      await new Promise((r) => setTimeout(r, 700));
      setUser({ id: "local-1", name: email, email }, "tok");
    } catch (e: any) {
      console.error(e);
      alert(e.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    try {
      setLoading(true);
      await new Promise((r) => setTimeout(r, 700));
      setUser({ id: "local-new", name: email, email }, "tok");
    } catch (e: any) {
      console.error(e);
      alert(e.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const handleReserve = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-black text-white">
      <div className="w-full max-w-6xl relative">
        {/* Background image for small screens */}
        <img src={bgSrc} alt="backdrop" className="absolute inset-0 w-full h-full object-cover opacity-30 lg:opacity-0 pointer-events-none z-0 rounded-3xl" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch relative z-10">
          {/* Left decorative image (only on large screens) */}
          <div className="hidden lg:block h-full">
            <div className="relative overflow-hidden h-full rounded-l-2xl rounded-r-none">
              <img src={bgSrc} alt="barber" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/80" />
            </div>
          </div>

          {/* Content area (spans 2 columns on large screens) */}
          <div className="col-span-1 lg:col-span-2 flex flex-col h-full">
            {/* Reserve card (minimal: large logo + button) */}
            <div className="rounded-2xl lg:rounded-l-none lg:rounded-r-2xl border border-white/6 bg-gradient-to-b from-black/50 to-black/40 p-6 shadow-xl mb-6">
              <div className="grid" style={{ gridTemplateColumns: '1fr 1px 1fr', alignItems: 'center' }}>
                <div className="flex items-center justify-center">
                  <img src={logoSrc} alt="NEGRO" className="max-w-[360px] w-full object-contain" />
                </div>
                <div className="mx-4 h-24 bg-white/30" aria-hidden></div>
                <div className="flex items-center justify-center">
                  <button onClick={handleReserve} className="rounded-md px-6 py-3 bg-gradient-to-r from-white to-white/90 text-black font-semibold hover:scale-[1.02] transition transform shadow-lg">Reservar turno</button>
                </div>
              </div>
            </div>

            {/* Auth card (compact) */}
            <div className="relative overflow-hidden rounded-2xl lg:rounded-l-none lg:rounded-r-2xl border border-white/8 bg-gradient-to-b from-black/60 via-black/50 to-black/40 p-6 shadow-xl">
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-28" aria-hidden></div>
                  <div className="flex gap-3 flex-1">
                    <button
                      onClick={() => handleSocial("google")}
                      disabled={loading}
                      className="group relative flex-1 rounded-md px-3 py-2 text-sm bg-white text-black font-medium overflow-hidden shadow-sm transform transition duration-300 hover:scale-[1.02]"
                    >
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/20 via-white/40 to-white/20 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 pointer-events-none" />
                      <div className="relative flex items-center justify-center gap-2">
                        <img src="https://www.svgrepo.com/show/355037/google.svg" alt="google" className="w-4 h-4" />
                        <span>Google</span>
                      </div>
                    </button>

                    <button
                      onClick={() => handleSocial("facebook")}
                      disabled={loading}
                      className="group relative flex-1 rounded-md px-3 py-2 text-sm bg-[#1877F2] text-white font-medium overflow-hidden shadow-sm transform transition duration-300 hover:scale-[1.02]"
                    >
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/10 via-white/20 to-white/10 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 pointer-events-none" />
                      <div className="relative flex items-center justify-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                          <path d="M22 12.073C22 6.477 17.523 2 11.927 2 6.33 2 1.853 6.477 1.853 12.073 1.853 17.06 5.66 21.203 10.5 22v-7.02H8.077v-2.9H10.5V9.15c0-2.4 1.432-3.713 3.625-3.713 1.05 0 2.146.187 2.146.187v2.357h-1.207c-1.19 0-1.558.737-1.558 1.494v1.786h2.656l-.425 2.9h-2.231V22C18.34 21.203 22 17.06 22 12.073z" />
                        </svg>
                        <span>Facebook</span>
                      </div>
                    </button>
                  </div>
                </div>

                <div className="py-2 border-t border-white/10" />

                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <label htmlFor="email" className="w-28 text-sm text-white/70 text-right">Email</label>
                    <div className="relative flex-1">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" className="w-4 h-4"><path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                      </span>
                      <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="tu@correo.com" className="w-full pl-10 px-4 py-3 rounded-md bg-black/25 border border-white/8 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/10" />
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <label htmlFor="password" className="w-28 text-sm text-white/70 text-right">Contraseña</label>
                    <div className="relative flex-1">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" className="w-4 h-4"><path fill="currentColor" d="M12 17a2 2 0 110-4 2 2 0 010 4zm6-7h-1V7a5 5 0 00-10 0v3H6a2 2 0 00-2 2v7a2 2 0 002 2h12a2 2 0 002-2v-7a2 2 0 00-2-2zM9 7a3 3 0 016 0v3H9V7z"/></svg>
                      </span>
                      <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="w-full pl-10 px-4 py-3 rounded-md bg-black/25 border border-white/8 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/10" />
                    </div>
                  </div>

                  <div className="flex items-start gap-3 mt-2">
                    <div className="w-28" aria-hidden></div>
                    <div className="flex gap-3 flex-1">
                      <button onClick={handleEmailLogin} disabled={loading} className="flex-1 rounded-md px-3 py-2 bg-white text-black font-semibold transition hover:shadow-lg">Ingresar</button>
                      <button onClick={handleRegister} disabled={loading} className="flex-1 rounded-md px-3 py-2 border border-white/10 text-white transition hover:shadow-lg">Registrarse</button>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-white/60 mt-4">Al registrarte aceptas los términos. Opciones sociales usan OAuth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
