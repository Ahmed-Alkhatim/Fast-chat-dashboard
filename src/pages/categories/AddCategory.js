import Dialog from "../../components/Dialog"; // Adjust the path as necessary
import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useCategoryContext } from "../../context/CategoryContext"; // Adjust the path as necessary

export default function AddCategory() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button sx={{ marginBottom: '10px' }} onClick={() => setIsOpen(true)} color="primary" variant="contained">
                Add Category
            </Button>
            <Dialog
                title="Add Category"
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                render={({ handleOnSave }) => (
                    <AddCategoryForm
                        onClose={() => setIsOpen(false)}
                        handleOnSave={handleOnSave}
                    />
                )}
            />
        </>
    );
}

const AddCategoryForm = ({ onClose, handleOnSave }) => {
    const { addCategory } = useCategoryContext(); // Access the addCategory function from context
    const [categoryData, setCategoryData] = useState({
        name: '',
        description: '',
        businessId: ''
    });

    useEffect(() => {
        handleOnSave(async () => {
            try {
                await addCategory(categoryData);
                toast.success('Category added successfully');
                onClose();
            } catch (error) {
                toast.error('Failed to add category');
                console.error('Error adding category:', error);
            }
        });
    }, [categoryData, handleOnSave, addCategory, onClose]);

    const handleChange = (e) => {
        setCategoryData({
            ...categoryData,
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
            <TextField
                name="name"
                onChange={handleChange}
                label="Category Name"
                variant="outlined"
                value={categoryData.name}
                size="small"
            />
            <TextField
                name="description"
                onChange={handleChange}
                label="Description"
                variant="outlined"
                value={categoryData.description}
                size="small"
            />
            <TextField
                name="businessId"
                onChange={handleChange}
                label="Business ID"
                variant="outlined"
                value={categoryData.businessId}
                size="small"
            />
        </Box>
    );
};
