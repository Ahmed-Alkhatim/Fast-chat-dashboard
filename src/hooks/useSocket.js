// hooks/useSocket.js
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const useSocket = (token) => {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        if (token) {
            const socketInstance = io('fast-chat-eta.vercel.app', {
                auth: { token }, // Pass token for authentication
            });


            socketInstance.on('connect', () => {
                console.log('Connected to WebSocket server');
            });
            socketInstance.emit('register', "249124433470")

            setSocket(socketInstance);

            socketInstance.on('disconnect', () => {
                console.log('Disconnected from WebSocket server');
            });

            return () => {
                socketInstance.disconnect(); // Clean up connection when component unmounts
            };
        }
    }, [token]);

    return socket;
};

export default useSocket;
