import { Table, TableBody, TableRow, TableHead, TableContainer, TableCell, Paper, Button } from '@mui/material';
import { useEffect } from 'react';
import { styled } from '@mui/material';
import toast from 'react-hot-toast';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useProductsContext } from 'src/context/ProductsContext';
import { useCategoryContext } from 'src/context/CategoryContext';

export default function ProductsView({ onUpdateProduct }) {

    const { products, fetchProducts, deleteProduct } = useProductsContext();
    const { fetchCategories, categories } = useCategoryContext()
    useEffect(() => {
        fetchProducts();
        fetchCategories()
    }, []);

    const handleDelete = async (productId) => {
        await deleteProduct(productId);
        toast.success('Product Deleted Successfully');
    }

    return (
        <TableContainer component={Paper} sx={{ marginBottom: 10 }} >
            <Table sx={{ minWidth: 650 }} aria-label="product table">
                <TableHead>
                    <TableRow>
                        <TableCell>English Name</TableCell>
                        <TableCell>Arabic Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Quantity</TableCell>
                        {/* <TableCell>Currency</TableCell> */}
                        <TableCell>Category</TableCell>
                        {/* <TableCell>Retailer ID</TableCell> */}
                        <TableCell>Instock</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products?.map((product) => (
                        <TableRow key={product._id}>
                            <TableCell component="th" scope="row">{product.name}</TableCell>
                            <TableCell component="th" scope="row">{product.nameAr}</TableCell>
                            <TableCell>{product.description}</TableCell>
                            <TableCell>{product.price}</TableCell>
                            <TableCell>{product.quantity}</TableCell>
                            <TableCell>{product.category?.name}</TableCell>
                            <TableCell><Button size='small' color={product.instock ? 'success' : 'error'} variant="contained">{product.instock ? "Yes" : "False"}</Button>  </TableCell>
                            {/* <TableCell>{product.retailer_id}</TableCell> */}
                            {/* <TableCell>
                                <a href={product.link} target="_blank" rel="noopener noreferrer">
                                    {product.link ? 'View' : 'N/A'}
                                </a>
                            </TableCell> */}
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
