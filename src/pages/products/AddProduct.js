import Dialog from "src/components/Dialog";
import { Button, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useCategoryContext } from "src/context/CategoryContext";
import { useProductsContext } from "src/context/ProductsContext";

export default function AddProduct() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button sx={{ marginBottom: '10px' }} onClick={() => setIsOpen(true)} color='primary' variant="contained">Add Product</Button>
            <Dialog title='Add Course' isOpen={isOpen} onClose={() => setIsOpen(false)}
                render={({ handleOnSave }) =>
                    <AddProductForm
                        onClose={() => setIsOpen(false)}
                        handleOnSave={handleOnSave}
                    />
                }
            />
        </>
    );
}

const AddProductForm = ({ onClose, handleOnSave }) => {
    const { categories } = useCategoryContext()
    const { addProduct, errors } = useProductsContext()
    const [productData, setCategoryData] = useState({});
    const [category, setCategory] = useState('');

    useEffect(() => {
        handleOnSave(async () => {
            try {
                await addProduct({ ...productData, category })
                toast.success('Course added successfully');
                onClose();
            } catch (error) {
                toast.error('Failed to add category');
                console.error('Error adding category:', error['category']);
            }

        });
    }, [productData, category]);

    const handleChange = (e) => {
        setCategoryData({
            ...productData,
            [e.target.name]: e.target.value
        });
    };


    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField name="name" onChange={handleChange} id="name" label="Arabic Name" variant="outlined" value={productData.name || ''} size="small" helperText={errors['name']} />
            <TextField name="nameAr" onChange={handleChange} id="nameAr" label="English Name" variant="outlined" value={productData.nameAr || ''} size="small" helperText={errors['nameAr']} />
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="category">Category</InputLabel>
                <Select
                    labelId="category"
                    id="category"
                    value={category}
                    label="Category"
                    onChange={(e => setCategory(e.target.value))}
                    helperText={errors['category']}
                >
                    {categories.map(category => <MenuItem key={category._id} value={category._id}>{category.name}</MenuItem>)}

                </Select>
            </FormControl>
            <TextField name="description" helperText={errors['description']} onChange={handleChange} id="outlined-basic" label="Description" variant="outlined" value={productData.description || ''} size="small" />
            <TextField name="price" helperText={errors['price']} onChange={handleChange} id="outlined-basic" label="Price" variant="outlined" value={productData.price || ''} size="small" />
            <TextField name="link" helperText={errors['link']} onChange={handleChange} id="outlined-basic" label="Link" variant="outlined" value={productData.link || ''} size="small" />

        </Box>
    );
};
