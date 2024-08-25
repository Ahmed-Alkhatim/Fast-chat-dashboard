import Dialog from "src/components/Dialog";
import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

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

    const [courseData, setCourseData] = useState({});
    useEffect(() => {
        handleOnSave(() => {
            toast.success('Course added successfully');
            onClose();
        });
    }, []);

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
            <TextField name="instructor" onChange={handleChange} id="outlined-basic" label="Instructor" variant="outlined" value={courseData.instructor || ''} size="small" />
        </Box>
    );
};
