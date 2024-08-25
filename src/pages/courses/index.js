import CourseView from "./CourseView";
import { CoursesProvider } from "src/context/CoursesContext";
import UpdateCourse from "./UpdateCourse";
import { useState } from "react";
import AddCourse from "./AddCourse";

export default function Courses() {
    const [courseData, setCourseData] = useState({});
    const [isUpdateOpen, setIsUpdateOpen] = useState(false);

    const handleUpdate = (data) => {
        setCourseData(data);
        setIsUpdateOpen(true);
    };

    return (
        <CoursesProvider>
            <AddCourse />
            <UpdateCourse courseData={courseData} isOpen={isUpdateOpen} onClose={() => setIsUpdateOpen(false)} />
            <CourseView onUpdateCourse={(courseData) => handleUpdate(courseData)} />
        </CoursesProvider>
    );
}
