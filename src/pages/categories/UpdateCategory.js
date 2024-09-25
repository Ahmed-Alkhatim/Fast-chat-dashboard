import Dialog from "src/components/Dialog";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useCategoryContext } from "../../context/CategoryContext"; // Adjust the path as necessary

export default function UpdateCategory({ categoryData, isOpen, onClose }) {
    return (
        <div>
            <Dialog
                title="Update Category"
                isOpen={isOpen}
                onClose={() => onClose()}
                render={({ handleOnSave }) => (
                    <UpdateCategoryForm
                        categoryData={categoryData}
                        onClose={() => onClose()}
                        handleOnSave={handleOnSave}
                    />
                )}
            />
        </div>
    );
}

const UpdateCategoryForm = ({ categoryData, onClose, handleOnSave }) => {
    const [data, setData] = useState(categoryData);
    const { updateCategory, errors } = useCategoryContext(); // Access the addCategory function from context

    useEffect(() => {
        handleOnSave(async () => {

            console.log("Category", data);
            try {
                await updateCategory(data._id, data);
                toast.success('Category added successfully');
                onClose();
            } catch (error) {
                toast.error('Failed to add category');
                console.error('Error adding category:', error);
            }
        });
    }, [data]);

    const handleChange = (event) => {
        setData({ ...data, [event.target.id]: event.target.value });
    };

    return (
        <Box
            component="form"
            sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                onChange={handleChange}
                id="name"
                label="English Name "
                variant="outlined"
                value={data?.name || ''}
                size="small"
            />
            <TextField
                onChange={handleChange}
                id="nameAr"
                label="Arabic Name"
                variant="outlined"
                value={data?.nameAr || ''}
                size="small"
            />
            <TextField
                onChange={handleChange}
                id="description"
                label="Description"
                variant="outlined"
                value={data?.description || ''}
                size="small"
            />
        </Box>
    );
};
