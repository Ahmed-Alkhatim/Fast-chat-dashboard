// hooks/useSocket.js
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import authConfig from 'src/configs/auth'
import { apiURL } from 'src/services/config';

const useSocket = (token) => {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const socketInstance = io(apiURL, {
            auth: { token: window.localStorage.getItem(authConfig.storageTokenKeyName) }, // Pass token for authentication
        });


        socketInstance.on('connect', () => {
            console.log('Connected to WebSocket server');
        });
        socketInstance.emit('register', "0118515166")

        setSocket(socketInstance);

        socketInstance.on('disconnect', () => {
            console.log('Disconnected from WebSocket server');
        });

        return () => {
            socketInstance.disconnect(); // Clean up connection when component unmounts
        };
        // }
    }, [token]);

    return socket;
};

export default useSocket;