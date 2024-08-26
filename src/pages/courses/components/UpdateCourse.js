import Dialog from "src/components/Dialog";
import { TextField, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Box from "@mui/material/Box";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useUsersContext } from "src/context/UsersContext";

export default function UpdateCourse({ courseData, isOpen, onClose }) {

    return (
        <div>
            <Dialog title="Update Course" isOpen={isOpen} onClose={() => onClose()}
                render={({ handleOnSave }) =>
                    <UpdateCourseForm
                        courseData={courseData}
                        onClose={() => onClose()}
                        handleOnSave={handleOnSave}
                    />
                }
            />
        </div>
    );
}

const UpdateCourseForm = ({ courseData, onClose, handleOnSave }) => {

    const { instructors } = useUsersContext()
    const categories = [
        { id: 1, name: 'Programming' },
        { id: 2, name: 'Data Science' },
        { id: 3, name: 'Design' },
        { id: 4, name: 'Marketing' },
        { id: 5, name: 'Web Development' },
    ];

    const [instructor, setInstructor] = useState(courseData.instructor_id)
    const [category, setCategory] = useState(courseData.category_id)
    const [data, setData] = useState(courseData)

    useEffect(() => {
        handleOnSave(() => {
            toast.success('Course updated successfully');
            onClose();
            console.log(data);
        });
    }, [data, instructor, category]);

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
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
            <TextField name="title" onChange={handleChange} id="outlined-basic" label="Title" variant="outlined" value={data.title || ''} size="small" />
            <TextField name="description" onChange={handleChange} id="outlined-basic" label="Description" variant="outlined" value={data.description || ''} size="small" />
            <TextField name="price" onChange={handleChange} id="outlined-basic" label="Price" variant="outlined" value={data.price || ''} size="small" />
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
