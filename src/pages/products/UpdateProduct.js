import Dialog from "src/components/Dialog";
import { TextField, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Box from "@mui/material/Box";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useProductsContext } from "src/context/ProductsContext";
import { useCategoryContext } from "src/context/CategoryContext";

export default function UpdateCourse({ productData, isOpen, onClose }) {

    return (
        <div>
            <Dialog title="Update Course" isOpen={isOpen} onClose={() => onClose()}
                render={({ handleOnSave }) =>
                    <UpdateCourseForm
                        productData={productData}
                        onClose={() => onClose()}
                        handleOnSave={handleOnSave}
                    />
                }
            />
        </div>
    );
}

const UpdateCourseForm = ({ productData, onClose, handleOnSave }) => {

    const { categories } = useCategoryContext()
    const { errors, updateProduct } = useProductsContext()
    const [data, setCategoryData] = useState(productData);
    const [category, setCategory] = useState(productData.category._id);

    useEffect(() => {
        handleOnSave(async () => {
            try {
                await updateProduct(data)
                toast.success('Course updated successfully');
                onClose();
            } catch (error) {
                console.log(error);

            }
        });
    }, [data, category]);

    const handleChange = (event) => {
        setCategoryData({ ...data, [event.target.name]: event.target.value });
    }

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField name="name" onChange={handleChange} id="name" label="Arabic Name" variant="outlined" value={data.name || ''} size="small" helperText={errors['name']} />
            <TextField name="nameAr" onChange={handleChange} id="nameAr" label="English Name" variant="outlined" value={data.nameAr || ''} size="small" helperText={errors['nameAr']} />
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
            <TextField name="description" helperText={errors['description']} onChange={handleChange} id="outlined-basic" label="Description" variant="outlined" value={data.description || ''} size="small" />
            <TextField name="price" helperText={errors['price']} onChange={handleChange} id="outlined-basic" label="Price" variant="outlined" value={data.price || ''} size="small" />
            <TextField name="link" helperText={errors['link']} onChange={handleChange} id="outlined-basic" label="Link" variant="outlined" value={data.link || ''} size="small" />

        </Box>
    );
};
