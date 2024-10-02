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
import useSocket from '../../hooks/useSocket';
import OrderService from 'src/services/OrderService';
import { useAuth } from "src/hooks/useAuth";
import { Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useUsersContext } from 'src/context/UsersContext';

export default function OrdersView() {
    const { setLoading } = useAuth()
    const [orders, setOrders] = useState([])
    const [messages, serMessages] = useState([])
    const { users, fetchUsers } = useUsersContext()
    const [deliveryUser, setDeliveryUser] = useState({})
    const socket = useSocket(localStorage.getItem('accessToken'));
    const addTwoHours = (dateString) => {
        const date = new Date(dateString);
        date.setHours(date.getHours() + 4);
        return date.toISOString(); // Convert back to a string in ISO format, or use other formats as needed
    };

    useEffect(() => {
        if (socket) {
            socket.on('new-order', (data) => {
                console.log("hahahahahahah", data);

                setOrders([...orders, data.data]);
                toast.success('A new Order has been created')

            });
            return () => {
                // socket.off('orders');
            };
        }
    }, [socket, orders]);

    useEffect(() => {
        (async function () {
            const orders = await OrderService.fetchOrders();
            setOrders(orders);
        })();
        fetchUsers()

    }, [])

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

    const updateOrder = async (order, status) => {
        try {
            const completedOrder = await OrderService.completeOrder(order._id, status)
            setOrders(orders.map(order => order._id == completedOrder._id ? completedOrder : order))
            toast.success('Order completed successfully')
        } catch (error) {

        }
    }

    const orderStatuses = {
        'pending': 'warning', 'processing': 'warning', "confirmed": "secondary", 'shipped': 'info', 'completed': "success", 'cancelled': 'error'
    }

    const handleDelivery = async (id, value) => {
        setDeliveryUser(id, value)
        await OrderService.assignOrder(id, value)
        toast.success("order assigned successfully")
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {/* <TableCell>Order Id</TableCell> */}
                        <TableCell>Customer</TableCell>
                        {/* <TableCell>Price</TableCell> */}
                        <TableCell>Status</TableCell>
                        <TableCell>Created At</TableCell>
                        {/* <TableCell>Updated At</TableCell> */}
                        <TableCell>Payment</TableCell>
                        <TableCell>Items</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders?.map((order, index) => (
                        <TableRow key={order._id}>
                            {/* <TableCell component="th" scope="row">{order.orderId}</TableCell> */}
                            <TableCell>{order.customerNumber}</TableCell>
                            {/* <TableCell>{getTotal(order.items)}</TableCell> */}
                            <TableCell><Button color={orderStatuses[Object.keys(orderStatuses)[order.status]]} variant="contained" size="small">{(Object.keys(orderStatuses)[order.status])}</Button></TableCell>
                            <TableCell>
                                {order.updatedAt.split("T")[0]}
                                <br />
                                {addTwoHours(order.updatedAt).split("T")[1].slice(0, 8)}

                            </TableCell>
                            {/* <TableCell>{order.updatedAt}</TableCell> */}
                            <TableCell>Cash</TableCell>
                            <TableCell>{order.items.map((item, index) => <span key={index}>
                                <div>{item.quantity + " " + item.name}</div>
                            </span>)}</TableCell>
                            <TableCell>
                                <ButtonsContainer>
                                    <div className='flex flex-col'>
                                        <div>
                                            <FormControl sx={{ mb: 1, maxWidth: 200 }} size="small">
                                                <InputLabel id="deliveryUser">Assign Delivery</InputLabel>
                                                <Select
                                                    disabled={order.status > 2}
                                                    labelId="deliveryUser"
                                                    id="deliveryUser"
                                                    value={deliveryUser[order._id]}
                                                    label="deliveryUser"
                                                    onChange={(e => handleDelivery(order._id, e.target.value))}
                                                >
                                                    {users.map(user => <MenuItem key={user._id} value={user._id}>{user.name}</MenuItem>)}

                                                </Select>
                                            </FormControl>
                                        </div>
                                        {order.status != 5 &&
                                            <>
                                                {order.status == 1 &&
                                                    <div style={{ marginBottom: "3px" }}>
                                                        <Button color="secondary" variant="contained" size="small" onClick={() => { updateOrder(order, 2) }}>Confirm</Button>
                                                    </div>
                                                }
                                                {order.status == 2 &&

                                                    <div style={{ marginBottom: "3px" }}>
                                                        <Button color="info" variant="contained" size="small" onClick={() => { updateOrder(order, 3) }}>Shipped</Button>
                                                    </div>
                                                }
                                                {order.status == 3 &&

                                                    <div style={{ marginBottom: "3px" }}>
                                                        <Button color="success" variant="contained" size="small" onClick={() => { updateOrder(order, 4); }}>Complete</Button>
                                                    </div>
                                                }
                                                {order.status != 4 &&
                                                    <div >
                                                        <Button color="error" variant="contained" size="small" onClick={() => { updateOrder(order, 5) }}>Cancel</Button>
                                                    </div>
                                                }
                                            </>}

                                    </div>

                                </ButtonsContainer>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
}

const ButtonsContainer = styled('div')({
    display: "flex",
    justifyContent: 'space-around'
});
