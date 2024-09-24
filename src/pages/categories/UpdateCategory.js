import Dialog from "src/components/Dialog";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

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

    useEffect(() => {
        console.log("ddddddd", categoryData);

        handleOnSave(() => {
            toast.success("Category updated successfully");
            onClose();
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
                label="Category Name"
                variant="outlined"
                value={data?.name || ''}
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
