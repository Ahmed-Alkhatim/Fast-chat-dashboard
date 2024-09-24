import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useCategoryContext } from 'src/context/CategoryContext';
import { useEffect } from 'react';
import { styled } from '@mui/material';
import toast from 'react-hot-toast'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function UsersView({ onUpdateCateg }) {

    const { categories, fetchCategories, deleteCategory } = useCategoryContext()
    useEffect(() => {
        fetchCategories()
    }, [])

    const handleDelete = (userId) => {
        // deleteUser(userId)
        toast.success('Deleted Successfully')
    }
    // if (!users) return <></>

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                    <TableHead>
                        <TableRow>
                            < TableCell> Name </TableCell>
                            < TableCell> Description</TableCell>
                            < TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {categories?.map((category) => (
                            <TableRow
                                key={category.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" >
                                    {category.name}
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    {category.description}
                                </TableCell>
                                <TableCell>
                                    <ButtonsContainer>
                                        <div>
                                            <EditIcon sx={{ fontSize: 20, cursor: 'pointer', marginInline: "5px" }} onClick={() => onUpdateCateg(category)} Outlined />
                                            <DeleteIcon sx={{ fontSize: 20, cursor: 'pointer', marginInline: " 5px " }} onClick={() => handleDelete(user.id)} Outlined />
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