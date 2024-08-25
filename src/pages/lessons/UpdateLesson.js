import Dialog from "src/components/Dialog";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import toast from "react-hot-toast";
import { useEffect } from "react";

export default function UpdateLesson({ lessonData, isOpen, onClose }) {
    return (
        <div>
            <Dialog title="Update Lesson" isOpen={isOpen} onClose={() => onClose()}
                render={({ handleOnSave }) =>
                    <UpdateLessonForm
                        lessonData={lessonData}
                        onClose={() => onClose()}
                        handleOnSave={handleOnSave}
                    />
                }
            />
        </div>
    );
}

const UpdateLessonForm = ({ lessonData, onClose, handleOnSave }) => {
    useEffect(() => {
        handleOnSave(() => {
            toast.success('Lesson updated successfully');
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
            <TextField id="outlined-basic" label="Title" variant="outlined" value={lessonData.title} size="small" />
            <TextField id="outlined-basic" label="Content" variant="outlined" value={lessonData.content} size="small" />
            <TextField id="outlined-basic" label="Course ID" variant="outlined" value={lessonData.courseId} size="small" />
        </Box>
    );
};
