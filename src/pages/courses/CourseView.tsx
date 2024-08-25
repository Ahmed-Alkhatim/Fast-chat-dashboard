import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useCoursesContext } from 'src/context/CoursesContext';
import { useEffect } from 'react';
import { styled } from '@mui/material';
import toast from 'react-hot-toast';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function CourseView({ onUpdateCourse }) {

    const { courses, fetchCourses, deleteCourse } = useCoursesContext();
    useEffect(() => {
        fetchCourses();
    }, []);

    const handleDelete = (courseId) => {
        deleteCourse(courseId);
        toast.success('Course Deleted Successfully');
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Instructor</TableCell>
                        {/* <TableCell>Lessons</TableCell> */}
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {courses?.map((course) => (
                        <TableRow key={course.title}>
                            <TableCell component="th" scope="row">{course.title}</TableCell>
                            <TableCell>{course.category}</TableCell>
                            <TableCell>{course.price}</TableCell>
                            <TableCell>{course.instructor_id}</TableCell>
                            {/* <TableCell>{course.lessons.join(', ')}</TableCell> */}
                            <TableCell>
                                <ButtonsContainer>
                                    <EditIcon sx={{ fontSize: 20, cursor: 'pointer' }} onClick={() => onUpdateCourse(course)} />
                                    <DeleteIcon sx={{ fontSize: 20, cursor: 'pointer' }} onClick={() => handleDelete(course.id)} />
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
