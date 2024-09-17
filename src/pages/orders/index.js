'use client'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material';
import toast from 'react-hot-toast';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import useSocket from '../../hooks/useSocket';

export default function OrdersView() {
    const [orders, setOrders] = useState([])
    const socket = useSocket(localStorage.getItem('token'));

    useEffect(() => {
        if (socket) {
            socket.emit('getOrders');

            socket.on('orders', (data) => {
                setOrders(data.data);
            });

            return () => {
                socket.off('orders');
            };
        }
    }, [socket]);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Order Id</TableCell>
                        <TableCell>Customer</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Created At</TableCell>
                        <TableCell>Updated At</TableCell>
                        <TableCell>Payment</TableCell>
                        <TableCell>Items</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders?.map((order) => (
                        <TableRow key={order._id}>
                            <TableCell component="th" scope="row">{order.orderId}</TableCell>
                            <TableCell>{order.customerNumber}</TableCell>
                            <TableCell>{order.orderTotal}</TableCell>
                            <TableCell>{order.orderStatus}</TableCell>
                            <TableCell>{order.updatedAt}</TableCell>
                            <TableCell>{order.updatedAt}</TableCell>
                            <TableCell>{order.paymentMethod}</TableCell>
                            <TableCell>{order.items.map((item, index) => <span key={index}>
                                {item.name + ", "}
                            </span>)}</TableCell>
                            <TableCell>
                                <ButtonsContainer>
                                    <EditIcon sx={{ fontSize: 20, cursor: 'pointer' }} onClick={() => onUpdateLesson(lesson)} />
                                    <DeleteIcon sx={{ fontSize: 20, cursor: 'pointer' }} onClick={() => handleDelete(lesson.id)} />
                                </ButtonsContainer>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const ButtonsContainer = styled('div')({
    display: "flex",
    justifyContent: 'space-around'
});
