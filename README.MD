# NEGRO Landing - Vite + React

A minimalist, premium landing with three routes and a shared layout.

## Tech
- Vite + React + React Router v6
- Tailwind CSS

## Routes
- /amigos
- /vecinos
- /sociables

Each route renders the same landing with a different subtitle.

## Development
1. npm install (or pnpm install)
2. npm run dev (or pnpm dev)

The logo is expected at client/assets/logo.png (or served from /assets/logo.png in public). Replace with your provided logo. Instagram URL can be edited in client/pages/Landing.tsx.



Como impleente SOCKET IO EN ESTE FRONT END ? ?? >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


            Entonces deje esto en la carpeta lib SocketContext.jsx :

import React, { createContext, useContext, useEffect, useState } from 'react';

import { io } from 'socket.io-client';



const SocketContext = createContext(null);



// Reemplaza esta URL con la dirección de tu servidor backend (Flask, Node.js, etc.)

const BACKEND_URL = "http://localhost:5000";



export const SocketProvider = ({ children }) => {

  const [socket, setSocket] = useState(null);



  useEffect(() => {

    const newSocket = io(BACKEND_URL);

    setSocket(newSocket);



    // Limpia la conexión cuando el componente se desmonta

    return () => newSocket.close();

  }, []);



  return (

    <SocketContext.Provider value={socket}>

      {children}

    </SocketContext.Provider>

  );

};



// Un hook personalizado para usar el socket fácilmente en cualquier componente

export const useSocket = () => {

  return useContext(SocketContext);

};



                Despues el App.tsx ahora esta asi :



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

        <BrowserRouter>

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



                No hay errores a la vista,. y ademas instale,posicionado en client el :



npm install socket.io-client