// hooks/useSocket.js
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const useSocket = (token) => {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        // if (token) {
        // https://api.fastchat24.com
        const socketInstance = io('http://localhost:3001/', {
            auth: { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmU4YTFjMDE1YmJjM2ZmNDIyNDgxYjQiLCJyb2xlIjp7Il9pZCI6IjY2ZTYxOTA3Yzg2Y2YwOWQzYzRiNDNjOCIsIm5hbWUiOiJhZG1pbiIsImRlc2NyaXB0aW9uIjoiQWRtaW5pc3RyYXRvciB3aXRoIGZ1bGwgYWNjZXNzIiwicGVybWlzc2lvbnMiOlsiY3JlYXRlIiwiZWRpdCIsImRlbGV0ZSIsIm1hbmFnZV91c2VycyJdLCJjcmVhdGVkQXQiOiIyMDI0LTA5LTE1VDAwOjAwOjAwLjAwMFoiLCJyb2xlSWQiOjF9LCJwaG9uZU51bWJlciI6IjI0OTEyNDQzMzQ3MCIsImlhdCI6MTcyNjUyMjI1NH0.EZuzy5OJqpNBC66XGpjL-SvDHLyE5hDNJkmCnj1oVLk" }, // Pass token for authentication
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
        // }
    }, [token]);

    return socket;
};

export default useSocket;