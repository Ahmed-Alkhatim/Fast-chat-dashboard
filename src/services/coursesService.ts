import { Course, CourseServiceType } from "./types";

class CoursesService implements CourseServiceType {

    fetchCourses = async (): Promise<Course[] | undefined> => {
        try {
            // const response = await fetch(process.env.API_URL + '/courses').then(response => response.json());
            return courses;
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    }

    async deleteCourse(courseId: string): Promise<void> {
        try {
            await fetch(process.env.API_URL + `/courses/${courseId}`, { method: 'DELETE' });
        } catch (error) {
            console.error(`Failed to delete course with ID ${courseId}`, error);
            throw error;
        }
    }
}

export default new CoursesService();

const courses: Course[] = [
    {
        "id": 'courseId1',
        "title": "JavaScript Fundamentals",
        "category": "Programming",
        "price": "$99",
        "instructor_id": '1',
        "created_at": "2024-01-01T10:00:00Z",
        "updated_at": "2024-08-01T12:00:00Z"
    },
    {
        "id": 'courseId2',
        "title": "Mastering CSS",
        "category": "Design",
        "price": "$79",
        "instructor_id": '2',
        "created_at": "2024-02-15T09:30:00Z",
        "updated_at": "2024-07-15T11:45:00Z"
    },
    {
        "id": 'courseId3',
        "title": "React for Beginners",
        "category": "Programming",
        "price": "$129",
        "instructor_id": '3',
        "created_at": "2024-03-10T08:00:00Z",
        "updated_at": "2024-06-20T10:30:00Z"
    },
    {
        "id": 'courseId4',
        "title": "TypeScript Essentials",
        "category": "Programming",
        "price": "$89",
        "instructor_id": '4',
        "created_at": "2024-04-20T15:00:00Z",
        "updated_at": "2024-05-10T13:45:00Z"
    },
    {
        "id": 'courseId5',
        "title": "REST API Development",
        "category": "Web Development",
        "price": "$149",
        "instructor_id": '5',
        "created_at": "2024-05-30T11:00:00Z",
        "updated_at": "2024-04-25T14:20:00Z"
    }
];


