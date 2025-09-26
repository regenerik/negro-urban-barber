import { useState } from "react";
import NavButton from "@/components/dashboard-navbar/NavButton";
import NMain from "@/components/dashboard-navbar/NMain";
import NAgenda from "@/components/dashboard-navbar/NAgenda";
import NClients from "@/components/dashboard-navbar/NClients";
import NReports from "@/components/dashboard-navbar/NReports";
import NSettings from "@/components/dashboard-navbar/NSettings";

export default function Dashboard() {
  const [active, setActive] = useState("main");

  const renderActive = () => {
    switch (active) {
      case "agenda":
        return <NAgenda />;
      case "clients":
        return <NClients />;
      case "reports":
        return <NReports />;
      case "settings":
        return <NSettings />;
      default:
        return <NMain />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-[1400px] mx-auto px-4 py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar (vertical on lg+, horizontal top on small screens) */}
          <aside className="col-span-12 lg:col-span-3 xl:col-span-2">
            {/* top bar on small screens */}
            <div className="w-full flex items-center justify-between lg:block">
              <div className="flex items-center gap-3">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fadca80ee8fc74b4799929f9b24a54891%2F74162de4fcb844988e24c71625b12b2b?format=webp&width=1200"
                  alt="NEGRO"
                  className="w-28 lg:w-36 object-contain"
                />
              </div>

              <nav className="flex lg:hidden items-center gap-2 overflow-x-auto px-2 py-1">
                <NavButton label="Inicio" active={active === "main"} onClick={() => setActive("main")} />
                <NavButton label="Agenda" active={active === "agenda"} onClick={() => setActive("agenda")} />
                <NavButton label="Clientes" active={active === "clients"} onClick={() => setActive("clients")} />
                <NavButton label="Reportes" active={active === "reports"} onClick={() => setActive("reports")} />
                <NavButton label="Ajustes" active={active === "settings"} onClick={() => setActive("settings")} />
              </nav>
            </div>

            {/* vertical nav for larger screens */}
            <div className="hidden lg:block mt-6">
              <nav className="flex flex-col gap-2">
                <NavButton label="Inicio" active={active === "main"} onClick={() => setActive("main")} />
                <NavButton label="Agenda" active={active === "agenda"} onClick={() => setActive("agenda")} />
                <NavButton label="Clientes" active={active === "clients"} onClick={() => setActive("clients")} />
                <NavButton label="Reportes" active={active === "reports"} onClick={() => setActive("reports")} />
                <NavButton label="Ajustes" active={active === "settings"} onClick={() => setActive("settings")} />
              </nav>

              <div className="mt-6">
                <a
                  href="https://instagram.com/NEGRO.barber"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 text-sm text-white/90"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" className="fill-white">
                    <path d="M7.75 2h8.5C19.216 2 22 4.784 22 8.25v7.5C22 19.216 19.216 22 16.25 22h-8.5C4.784 22 2 19.216 2 16.25v-7.5C2 4.784 4.784 2 7.75 2zm0 1.5C5.345 3.5 3.5 5.345 3.5 7.75v8.5C3.5 18.655 5.345 20.5 7.75 20.5h8.5c2.405 0 4.25-1.845 4.25-4.25v-8.5C20.5 5.345 18.655 3.5 16.25 3.5h-8.5zM12 7.25a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zm0 1.5a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5zM17.5 6a.75.75 0 110 1.5.75.75 0 010-1.5z" />
                  </svg>
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Content */}
          <section className="col-span-12 lg:col-span-9 xl:col-span-10">
            <div className="bg-white/3 rounded-lg p-4 lg:p-6 min-h-[60vh]">
              {renderActive()}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
