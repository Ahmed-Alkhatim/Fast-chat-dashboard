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
import { useUsersContext } from 'src/context/UsersContext';

export default function CourseView({ onUpdateCourse }) {

    const { courses, fetchCourses, deleteCourse } = useCoursesContext();
    const { fetchUsers, getInstructorByUserId } = useUsersContext()
    useEffect(() => {
        fetchCourses();
        fetchUsers()
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
                        <TableCell>Description</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Instructor</TableCell>
                        <TableCell>Lessons</TableCell>
                        <TableCell>Students</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {courses?.map((course) => (
                        <TableRow key={course.title}>
                            <TableCell component="th" scope="row">{course.title}</TableCell>
                            <TableCell component="th" scope="row">{course.description}</TableCell>
                            <TableCell>{course.category.name}</TableCell>
                            <TableCell>{course.price}</TableCell>
                            <TableCell>{getInstructorByUserId(course.instructor_id)?.name}</TableCell>
                            <TableCell>{course.lessons.length}</TableCell>
                            <TableCell>{course.students_enrolled.length}</TableCell>
                            <TableCell>
                                <ButtonsContainer >
                                    <EditIcon sx={{ fontSize: 20, cursor: 'pointer', marginInlineEnd: '12px' }} onClick={() => onUpdateCourse(course)} />
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
