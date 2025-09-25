import "./global.css";
import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Root from "./routes/Root";
import Home from "./pages/Home";
import Amigos from "./pages/Amigos";
import Vecinos from "./pages/Vecinos";
import Sociables from "./pages/Sociables";
import { SocketProvider } from "./lib/SocketContext.jsx"; // O la ruta donde lo hayas guardado

const queryClient = new QueryClient();

const App = () => (

  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* Aquí es donde envuelves tu aplicación con el SocketProvider */}
      <SocketProvider>
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <Routes>
            <Route element={<Root />}>
            <Route index element={<Home />} />
            <Route path="/amigos" element={<Amigos />} />
            <Route path="/vecinos" element={<Vecinos />} />
            <Route path="/sociables" element={<Sociables />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </SocketProvider>
    </TooltipProvider>
  </QueryClientProvider>
);



createRoot(document.getElementById("root")!).render(<App />);