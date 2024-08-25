import CourseView from "./components/CourseView"
import { CoursesProvider } from "src/context/CoursesContext";
import UpdateCourse from "./components/UpdateCourse";
import { useState } from "react";
import AddCourse from "./components/AddCourse";
import { UsersProvider } from "src/context/UsersContext";

export default function Courses() {
    const [courseData, setCourseData] = useState({});
    const [isUpdateOpen, setIsUpdateOpen] = useState(false);

    const handleUpdate = (data) => {
        setCourseData(data);
        setIsUpdateOpen(true);
    };

    return (
        <CoursesProvider>
            <UsersProvider>
                <AddCourse />
                <UpdateCourse courseData={courseData} isOpen={isUpdateOpen} onClose={() => setIsUpdateOpen(false)} />
                <CourseView onUpdateCourse={(courseData) => handleUpdate(courseData)} />
            </UsersProvider>
        </CoursesProvider>
    );
}
