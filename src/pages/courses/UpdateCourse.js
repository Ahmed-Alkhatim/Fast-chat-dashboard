import Dialog from "src/components/Dialog";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import toast from "react-hot-toast";
import { useEffect } from "react";

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
    useEffect(() => {
        handleOnSave(() => {
            toast.success('Course updated successfully');
            onClose();
        });
    }, [handleOnSave, onClose]);

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label="Title" variant="outlined" value={courseData.title} size="small" />
            <TextField id="outlined-basic" label="Description" variant="outlined" value={courseData.description} size="small" />
            <TextField id="outlined-basic" label="Instructor" variant="outlined" value={courseData.instructor} size="small" />
        </Box>
    );
};
