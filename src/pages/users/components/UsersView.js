import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useUsersContext } from 'src/context/UsersContext';
import { useEffect } from 'react';
import { styled } from '@mui/material';
import toast from 'react-hot-toast'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function UsersView({ onUpdateUser }) {

    const { users, fetchUsers, deleteUser } = useUsersContext()
    useEffect(() => {
        fetchUsers()
    }, [])

    const handleDelete = (userId) => {
        deleteUser(userId)
        toast.success('Deleted Successfully')
    }
    if (!users) return <></>

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                    <TableHead>
                        <TableRow>
                            < TableCell>  Phone Number </TableCell>
                            < TableCell> Name </TableCell>
                            < TableCell> Assigned Orders</TableCell>
                            < TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users?.map((user) => (
                            <TableRow
                                key={user._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" >
                                    {user.phoneNumber}
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    {user.name}
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    {user?.assignedOrders?.length}
                                </TableCell>
                                <TableCell>
                                    <ButtonsContainer>
                                        <div>
                                            <EditIcon sx={{ fontSize: 20, cursor: 'pointer', marginInline: "5px" }} onClick={() => onUpdateUser(user)} Outlined />
                                            <DeleteIcon sx={{ fontSize: 20, cursor: 'pointer', marginInline: " 5px " }} onClick={() => handleDelete(user._id)} Outlined />
                                        </div>
                                    </ButtonsContainer>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
        </>
    );
}


const ButtonsContainer = styled('div')({
    display: "flex",
    justifyContent: 'space-around'
})