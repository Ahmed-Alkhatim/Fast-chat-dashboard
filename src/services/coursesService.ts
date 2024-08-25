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
        id: 'course-101',
        title: 'Introduction to JavaScript',
        category: 'Programming',
        price: '49.99',
        instructor_id: 'instructor-001',
        lessons: ['lesson-001', 'lesson-002', 'lesson-003'],
        description: 'Learn the fundamentals of JavaScript, the most popular programming language for web development.',
        created_at: '2024-01-15T09:00:00Z',
        updated_at: '2024-01-20T12:30:00Z',
    },
    {
        id: 'course-102',
        title: 'Mastering Python for Data Science',
        category: 'Data Science',
        price: '79.99',
        instructor_id: 'instructor-002',
        lessons: ['lesson-004', 'lesson-005', 'lesson-006', 'lesson-007'],
        description: 'An in-depth course on using Python for data analysis, visualization, and machine learning.',
        created_at: '2024-02-05T10:15:00Z',
        updated_at: '2024-02-10T14:45:00Z',
    },
    {
        id: 'course-103',
        title: 'UI/UX Design Essentials',
        category: 'Design',
        price: '59.99',
        instructor_id: 'instructor-003',
        lessons: ['lesson-008', 'lesson-009'],
        description: 'Explore the principles of user interface and user experience design to create intuitive and engaging products.',
        created_at: '2024-03-12T08:30:00Z',
        updated_at: '2024-03-15T11:00:00Z',
    },
    {
        id: 'course-104',
        title: 'Digital Marketing Strategy',
        category: 'Marketing',
        price: '69.99',
        instructor_id: 'instructor-004',
        lessons: ['lesson-010', 'lesson-011', 'lesson-012', 'lesson-013', 'lesson-014'],
        description: 'Develop effective digital marketing strategies to grow your business and reach more customers online.',
        created_at: '2024-04-20T13:45:00Z',
        updated_at: '2024-04-25T16:20:00Z',
    },
    {
        id: 'course-105',
        title: 'Advanced React and Redux',
        category: 'Web Development',
        price: '89.99',
        instructor_id: 'instructor-005',
        lessons: ['lesson-015', 'lesson-016', 'lesson-017', 'lesson-018'],
        description: 'Deep dive into advanced concepts of React and state management using Redux for building scalable web applications.',
        created_at: '2024-05-08T07:00:00Z',
        updated_at: '2024-05-12T09:30:00Z',
    },
];



