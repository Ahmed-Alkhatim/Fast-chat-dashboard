import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useLessonsContext } from 'src/context/LessonsContext';
import { useEffect } from 'react';
import { styled } from '@mui/material';
import toast from 'react-hot-toast';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function LessonView({ onUpdateLesson }) {

    const { lessons, fetchLessons, deleteLesson } = useLessonsContext();
    useEffect(() => {
        fetchLessons();
    }, []);

    const handleDelete = (lessonId) => {
        deleteLesson(lessonId);
        toast.success('Lesson Deleted Successfully');
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Order</TableCell>
                        <TableCell>Duration</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {lessons?.map((lesson) => (
                        <TableRow key={lesson.title}>
                            <TableCell component="th" scope="row">{lesson.title}</TableCell>
                            <TableCell>{lesson.order}</TableCell>
                            <TableCell>{lesson.duration} mins</TableCell>
                            <TableCell>
                                <ButtonsContainer>
                                    <EditIcon sx={{ fontSize: 20, cursor: 'pointer' }} onClick={() => onUpdateLesson(lesson)} />
                                    <DeleteIcon sx={{ fontSize: 20, cursor: 'pointer' }} onClick={() => handleDelete(lesson.id)} />
                                </ButtonsContainer>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const ButtonsContainer = styled('div')({
    display: "flex",
    justifyContent: 'space-around'
});
