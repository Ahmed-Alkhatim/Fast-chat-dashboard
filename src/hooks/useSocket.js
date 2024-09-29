// hooks/useSocket.js
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import authConfig from 'src/configs/auth'

const useSocket = (token) => {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        // if (token) {
        // https://api.fastchat24.com
        const socketInstance = io('https:api.fastchat24.com', {
            auth: { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmYxYjVjMDI3ZjIwOWIwMDc0M2UwNmQiLCJidXNpbmVzc1Bob25lTnVtYmVyIjoiMjQ5MTI0NDMzNDcwIiwicGhvbmVOdW1iZXIiOiIwMTE4NTE1MTY2IiwiaWF0IjoxNzI3MTIxMDQyfQ.oiARV3mj8eAv9ZjnRdEeSQrJQDBboPkAv8QEe72x3iI' }, // Pass token for authentication
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