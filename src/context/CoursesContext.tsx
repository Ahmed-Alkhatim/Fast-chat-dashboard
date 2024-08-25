import { createContext, ReactNode, useContext, useState } from "react";
import { CourseContextType } from "./types";
import { Course } from "src/services/types";
import CoursesService from "src/services/coursesService";

const CoursesContext = createContext<CourseContextType | null>(null);

interface CoursesProviderProps {
    children: ReactNode;
}

export const CoursesProvider: React.FC<CoursesProviderProps> = ({ children }) => {
    const [courses, setCourses] = useState<Course[] | undefined>();

    const fetchCourses = async (): Promise<void> => {
        await CoursesService.fetchCourses()
            .then(setCourses)
            .catch(error => console.error(error));
    };

    const deleteCourse = async (courseId: string): Promise<void> => {
        await CoursesService.deleteCourse(courseId)
            .then(() => setCourses(prev => prev?.filter(course => course.id !== courseId)))
            .catch(error => console.error(error));
    };

    return (
        <CoursesContext.Provider value={{ courses, fetchCourses, deleteCourse }}>
            {children}
        </CoursesContext.Provider>
    );
};

export const useCoursesContext = (): CourseContextType => {
    const context = useContext(CoursesContext);
    if (!context) {
        throw new Error('useCourses must be used within a CoursesProvider');
    }
    return context;
};
