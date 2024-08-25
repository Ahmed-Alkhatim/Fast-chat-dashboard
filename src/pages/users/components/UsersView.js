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

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} ariaLabel="simple table" >
                    <TableHead>
                        <TableRow>
                            < TableCell> Info </TableCell>
                            < TableCell> ٌRole</TableCell>
                            < TableCell> Courses</TableCell>
                            < TableCell> Bio</TableCell>
                            < TableCell> Created at</TableCell>
                            < TableCell> Updated at</TableCell>
                            < TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users?.map((user) => (
                            <TableRow
                                key={user.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" >
                                    {user.name}
                                    <br />
                                    {user.email}
                                </TableCell>

                                <TableCell> {user.role} </TableCell>
                                <TableCell> {user.courses.length} </TableCell>
                                <TableCell> {user.bio} </TableCell>
                                <TableCell> {user.created_at} </TableCell>
                                <TableCell> {user.updated_at} </TableCell>
                                <TableCell>
                                    <ButtonsContainer>
                                        {/* <Button color='primary' variant = "contained" size='small' >Edit</Button> */}
                                        <EditIcon sx={{ fontSize: 20, cursor: 'pointer' }} onClick={() => onUpdateUser(user)} Outlined />
                                        <DeleteIcon sx={{ fontSize: 20, cursor: 'pointer' }} onClick={() => handleDelete(user.id)} Outlined />
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