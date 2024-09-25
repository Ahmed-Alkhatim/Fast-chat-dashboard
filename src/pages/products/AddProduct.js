import Dialog from "src/components/Dialog";
import { Button, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useUsersContext } from "src/context/UsersContext";

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
    // const { instructors } = useUsersContext()
    const categories = [
        { id: 1, name: 'Programming' },
        { id: 2, name: 'Data Science' },
        { id: 3, name: 'Design' },
        { id: 4, name: 'Marketing' },
        { id: 5, name: 'Web Development' },
    ];

    const [productData, setCourseData] = useState({});
    const [category, setCategory] = useState('');
    const [instructor, setInstructor] = useState('');

    useEffect(() => {
        handleOnSave(() => {
            toast.success('Course added successfully');
            onClose();
            console.log({ ...productData, category, instructor });

        });
    }, [productData, category, instructor]);

    const handleChange = (e) => {
        setCourseData({
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
            <TextField name="nameAr" onChange={handleChange} id="outlined-basic" label="English Name" variant="outlined" value={productData.name || ''} size="small" />
            <TextField name="name" onChange={handleChange} id="outlined-basic" label="Arabic Name" variant="outlined" value={productData.nameAr || ''} size="small" />
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">Category</InputLabel>
                <Select
                    labelId="role"
                    id="demo-select-small"
                    value={category}
                    label="Category"
                    onChange={(e => setCategory(e.target.value))}
                >
                    {categories.map(category => <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>)}

                </Select>
            </FormControl>
            <TextField name="description" onChange={handleChange} id="outlined-basic" label="Description" variant="outlined" value={productData.description || ''} size="small" />
            <TextField name="price" onChange={handleChange} id="outlined-basic" label="Price" variant="outlined" value={productData.price || ''} size="small" />
            <TextField name="link" onChange={handleChange} id="outlined-basic" label="Link" variant="outlined" value={productData.link || ''} size="small" />

        </Box>
    );
};
