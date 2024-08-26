import Dialog from "src/components/Dialog";
import { Button, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useUsersContext } from "src/context/UsersContext";

export default function AddCourse() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button sx={{ marginBottom: '10px' }} onClick={() => setIsOpen(true)} color='primary' variant="contained">Add Course</Button>
            <Dialog title='Add Course' isOpen={isOpen} onClose={() => setIsOpen(false)}
                render={({ handleOnSave }) =>
                    <AddCourseForm
                        onClose={() => setIsOpen(false)}
                        handleOnSave={handleOnSave}
                    />
                }
            />
        </>
    );
}

const AddCourseForm = ({ onClose, handleOnSave }) => {
    const { instructors } = useUsersContext()
    const categories = [
        { id: 1, name: 'Programming' },
        { id: 2, name: 'Data Science' },
        { id: 3, name: 'Design' },
        { id: 4, name: 'Marketing' },
        { id: 5, name: 'Web Development' },
    ];

    const [courseData, setCourseData] = useState({});
    const [category, setCategory] = useState('');
    const [instructor, setInstructor] = useState('');

    useEffect(() => {
        handleOnSave(() => {
            toast.success('Course added successfully');
            onClose();
            console.log({ ...courseData, category, instructor });

        });
    }, [courseData, category, instructor]);

    const handleChange = (e) => {
        setCourseData({
            ...courseData,
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
            <TextField name="title" onChange={handleChange} id="outlined-basic" label="Title" variant="outlined" value={courseData.title || ''} size="small" />
            <TextField name="description" onChange={handleChange} id="outlined-basic" label="Description" variant="outlined" value={courseData.description || ''} size="small" />
            <TextField name="price" onChange={handleChange} id="outlined-basic" label="Price" variant="outlined" value={courseData.price || ''} size="small" />
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
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">Instructor</InputLabel>
                <Select
                    labelId="instructor_id"
                    id="demo-select-small"
                    value={instructor}
                    label="Instructor"
                    onChange={(e => setInstructor(e.target.value))}
                >
                    {instructors?.map(instructor => <MenuItem key={instructor.id} value={instructor.id}>{instructor.name}</MenuItem>)}

                </Select>
            </FormControl>
        </Box>
    );
};
