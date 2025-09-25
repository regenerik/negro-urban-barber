import React, { useEffect, useState } from 'react';
import { useSocket } from '../lib/SocketContext'; // Ajusta la ruta si es necesario

const TestWebSocket = () => {
  const socket = useSocket();
  const [serverMessage, setServerMessage] = useState('');
  const [status, setStatus] = useState('Conectando...');

  useEffect(() => {
    if (socket) {
      // Manejar la conexión exitosa
      socket.on('connect', () => {
        setStatus('¡Conexión establecida!');
        console.log("Mensaje del servidor: ¡Conexión establecida!");
        
        // Enviar un mensaje al servidor apenas se conecta
        socket.emit('test_message', { 'data': 'Hola servidor, estoy conectado!' });
      });

      // Manejar mensajes del servidor
      socket.on('response', (data) => {
        setServerMessage(data);
        console.log('Respuesta del servidor:', data);
      });

      // Manejar la desconexión
      socket.on('disconnect', () => {
        setStatus('Desconectado.');
        console.log("Desconectado del servidor.");
      });

      // Limpiar los listeners al desmontar el componente
      return () => {
        socket.off('connect');
        socket.off('response');
        socket.off('disconnect');
      };
    }
  }, [socket]);

  return (
    <div>
      <h1>Página de test de web socket</h1>
      <p>Revisa la consola del navegador para ver la comunicación con el servidor.</p>
      <p>Estado: {status}</p>
      {serverMessage && (
        <div>
          <h3>Mensaje recibido del servidor:</h3>
          <pre>{JSON.stringify(serverMessage, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default TestWebSocket;