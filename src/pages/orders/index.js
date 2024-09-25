'use client'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material';
import toast from 'react-hot-toast';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import useSocket from '../../hooks/useSocket';
import demoServise from 'src/services/demoServise';
import OrderService from 'src/services/OrderService';

export default function OrdersView() {
    const [orders, setOrders] = useState([])
    const [messages, serMessages] = useState([])
    const socket = useSocket(localStorage.getItem('token'));
    const addTwoHours = (dateString) => {
        const date = new Date(dateString);
        date.setHours(date.getHours() + 4);
        return date.toISOString(); // Convert back to a string in ISO format, or use other formats as needed
    };

    useEffect(() => {
        if (socket) {
            socket.emit('getOrders');
            // socket.emit('getMessages', { conversationId: "66e7900ae7096fdb8df2ba5f" })
            // socket.emit('getOrders')

            socket.on('orders', (data) => {
                console.log("hahahahahahah", data);

                setOrders(data.data);
            });

            // socket.on('messages', (data) => {
            //     serMessages(data.messages);
            //     console.log('Messages received', data.messages);
            // });

            // socket.on('conversations', (data) => {
            //     serMessages(data.conversations);
            //     console.log('conversations received', data.conversations);
            // });

            return () => {
                // socket.off('orders');
                // socket.off('messages');
                // socket.off('conversations');
            };
        }
    }, [socket]);

    useEffect(() => {
        (async function () {
            const orders = await OrderService.fetchOrders();
            setOrders(orders);
        })();
    })
    const items = {
        "Test Rubber Duck_random_retailer_id": "Camera 28X",
        "Test Chair_random_retailer_id": "Smart phone  realme 6.5-inch",
        "Test Basketball_random_retailer_id": "Basketball",
    }

    const getTotal = (items) => {
        let total = 0;
        for (let i = 0; i < items.length; i++) {
            total += Number(items[i].price)
        }

        return total
    }

    const complete = async (order) => {
        await demoServise.complete(order.customerNumber)
        order.orderStatus = "completed"
    }

    const ready = async (order) => {
        await demoServise.ready(order.customerNumber)
        order.orderStatus = "ready"
    }

    const [btn, showBtn] = useState(null)
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {/* <TableCell>Order Id</TableCell> */}
                        <TableCell>Customer</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Created At</TableCell>
                        {/* <TableCell>Updated At</TableCell> */}
                        <TableCell>Payment</TableCell>
                        <TableCell>Items</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </TableContainer >
    );
}

const ButtonsContainer = styled('div')({
    display: "flex",
    justifyContent: 'space-around'
});
