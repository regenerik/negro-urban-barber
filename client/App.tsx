import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Root from "./routes/Root";
import Landing from "./pages/Landing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Root />}>
            <Route index element={<Navigate to="/amigos" replace />} />
            <Route path="/amigos" element={<Landing subtitle="A los amigos hay que tenerlos cerca. Te queremos con nosotros…" />} />
            <Route path="/vecinos" element={<Landing subtitle="Los vecinos estamos para darnos una mano siempre… contá con nosotros." />} />
            <Route path="/sociables" element={<Landing subtitle="Personas como vos, son el tipo de personas que queremos siempre en nuestro lugar… sentite bienvenid@." />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
