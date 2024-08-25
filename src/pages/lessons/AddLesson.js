import Dialog from "src/components/Dialog";
import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function AddLesson() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button sx={{ marginBottom: '10px' }} onClick={() => setIsOpen(true)} color='primary' variant="contained">Add Lesson</Button>
            <Dialog title='Add Lesson' isOpen={isOpen} onClose={() => setIsOpen(false)}
                render={({ handleOnSave }) =>
                    <AddLessonForm
                        onClose={() => setIsOpen(false)}
                        handleOnSave={handleOnSave}
                    />
                }
            />
        </>
    );
}

const AddLessonForm = ({ onClose, handleOnSave }) => {

    const [lessonData, setLessonData] = useState({});
    useEffect(() => {
        handleOnSave(() => {
            toast.success('Lesson added successfully');
            onClose();
        });
    }, []);

    const handleChange = (e) => {
        setLessonData({
            ...lessonData,
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
            <TextField name="title" onChange={handleChange} id="outlined-basic" label="Title" variant="outlined" value={lessonData.title || ''} size="small" />
            <TextField name="content" onChange={handleChange} id="outlined-basic" label="Content" variant="outlined" value={lessonData.content || ''} size="small" />
            <TextField name="courseId" onChange={handleChange} id="outlined-basic" label="Course ID" variant="outlined" value={lessonData.courseId || ''} size="small" />
        </Box>
    );
};
