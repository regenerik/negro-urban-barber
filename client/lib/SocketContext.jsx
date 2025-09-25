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