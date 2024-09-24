import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useCoursesContext } from 'src/context/CoursesContext';
import { useEffect } from 'react';
import { styled } from '@mui/material';
import toast from 'react-hot-toast';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useProductsContext } from 'src/context/ProductsContext';
import { useCategoryContext } from 'src/context/CategoryContext';

export default function ProductsView({ onUpdateCourse }) {

    const { products, fetchProducts, deleteProduct } = useProductsContext();
    const { fetchCategories, categories } = useCategoryContext()
    useEffect(() => {
        fetchProducts();
        fetchCategories()
    }, []);

    const handleDelete = (productId) => {
        deleteProduct(productId);
        toast.success('Course Deleted Successfully');
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="product table">
                <TableHead>
                    <TableRow>
                        <TableCell>Product Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Currency</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Retailer ID</TableCell>
                        <TableCell>Product Link</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* {products?.map((product) => (
                        <TableRow key={product.name}>
                            <TableCell component="th" scope="row">{product.name}</TableCell>
                            <TableCell>{product.description}</TableCell>
                            <TableCell>{product.price}</TableCell>
                            <TableCell>{product.currency}</TableCell>
                            <TableCell>{product.category?.name}</TableCell>
                            <TableCell>{product.retailer_id}</TableCell>
                            <TableCell>
                                <a href={product.link} target="_blank" rel="noopener noreferrer">
                                    {product.link ? 'View Product' : 'N/A'}
                                </a>
                            </TableCell>
                            <TableCell>
                                <ButtonsContainer>
                                    <EditIcon
                                        sx={{ fontSize: 20, cursor: 'pointer', marginInlineEnd: '12px' }}
                                        onClick={() => onUpdateProduct(product)}
                                    />
                                    <DeleteIcon
                                        sx={{ fontSize: 20, cursor: 'pointer' }}
                                        onClick={() => handleDelete(product._id)}
                                    />
                                </ButtonsContainer>
                            </TableCell>
                        </TableRow>
                    ))} */}
                </TableBody>
            </Table>
        </TableContainer>

    );
}

const ButtonsContainer = styled('div')({
    display: "flex",
    justifyContent: 'space-around'
});
