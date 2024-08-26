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
        category: { id: '1', name: 'Programming' },
        price: '49.99',
        instructor_id: '1',
        lessons: ['lesson-001', 'lesson-002', 'lesson-003'],
        description: 'Learn the fundamentals of JavaScript, the most popular programming language for web development.',
        created_at: '2024-01-15T09:00:00Z',
        updated_at: '2024-01-20T12:30:00Z',
        students_enrolled: [
            {
                id: "student1",
                name: "Alice Johnson",
                email: "alice@example.com",
                enrolledCourses: ["courseId1", "courseId3"],
            },
            {
                id: "student2",
                name: "Bob Smith",
                email: "bob@example.com",
                enrolledCourses: ["courseId2", "courseId4"],
            },
            {
                id: "student3",
                name: "Charlie Brown",
                email: "charlie@example.com",
                enrolledCourses: ["courseId1", "courseId5"],
            },
            {
                id: "student4",
                name: "Daisy Miller",
                email: "daisy@example.com",
                enrolledCourses: ["courseId3", "courseId6"],
            },
            {
                id: "student5",
                name: "Eve Davis",
                email: "eve@example.com",
                enrolledCourses: ["courseId2", "courseId7"],
            },
            {
                id: "student6",
                name: "Frank Wright",
                email: "frank@example.com",
                enrolledCourses: ["courseId4", "courseId8"],
            },
            {
                id: "student7",
                name: "Grace Lee",
                email: "grace@example.com",
                enrolledCourses: ["courseId5", "courseId9"],
            }
        ]
    },
    {
        id: 'course-102',
        title: 'Mastering Python for Data Science',
        category: { id: "2", name: 'Data Science' },
        price: '79.99',
        instructor_id: '3',
        lessons: ['lesson-004', 'lesson-005', 'lesson-006', 'lesson-007'],
        description: 'An in-depth course on using Python for data analysis, visualization, and machine learning.',
        created_at: '2024-02-05T10:15:00Z',
        updated_at: '2024-02-10T14:45:00Z',
        students_enrolled: [
            {
                id: "student1",
                name: "Alice Johnson",
                email: "alice@example.com",
                enrolledCourses: ["courseId1", "courseId3"],
            },
            {
                id: "student2",
                name: "Bob Smith",
                email: "bob@example.com",
                enrolledCourses: ["courseId2", "courseId4"],
            },
            {
                id: "student3",
                name: "Charlie Brown",
                email: "charlie@example.com",
                enrolledCourses: ["courseId1", "courseId5"],
            },
            {
                id: "student4",
                name: "Daisy Miller",
                email: "daisy@example.com",
                enrolledCourses: ["courseId3", "courseId6"],
            },
            {
                id: "student5",
                name: "Eve Davis",
                email: "eve@example.com",
                enrolledCourses: ["courseId2", "courseId7"],
            },
            {
                id: "student6",
                name: "Frank Wright",
                email: "frank@example.com",
                enrolledCourses: ["courseId4", "courseId8"],
            },
            {
                id: "student7",
                name: "Grace Lee",
                email: "grace@example.com",
                enrolledCourses: ["courseId5", "courseId9"],
            }
        ]
    },
    {
        id: 'course-103',
        title: 'UI/UX Design Essentials',
        category: { id: "3", name: 'Design' },
        price: '59.99',
        instructor_id: '3',
        lessons: ['lesson-008', 'lesson-009'],
        description: 'Explore the principles of user interface and user experience design to create intuitive and engaging products.',
        created_at: '2024-03-12T08:30:00Z',
        updated_at: '2024-03-15T11:00:00Z',
        students_enrolled: [
            {
                id: "student1",
                name: "Alice Johnson",
                email: "alice@example.com",
                enrolledCourses: ["courseId1", "courseId3"],
            },
            {
                id: "student2",
                name: "Bob Smith",
                email: "bob@example.com",
                enrolledCourses: ["courseId2", "courseId4"],
            },
            {
                id: "student3",
                name: "Charlie Brown",
                email: "charlie@example.com",
                enrolledCourses: ["courseId1", "courseId5"],
            },
            {
                id: "student4",
                name: "Daisy Miller",
                email: "daisy@example.com",
                enrolledCourses: ["courseId3", "courseId6"],
            },
            {
                id: "student5",
                name: "Eve Davis",
                email: "eve@example.com",
                enrolledCourses: ["courseId2", "courseId7"],
            },
            {
                id: "student6",
                name: "Frank Wright",
                email: "frank@example.com",
                enrolledCourses: ["courseId4", "courseId8"],
            },
            {
                id: "student7",
                name: "Grace Lee",
                email: "grace@example.com",
                enrolledCourses: ["courseId5", "courseId9"],
            }
        ]
    },
    {
        id: 'course-104',
        title: 'Digital Marketing Strategy',
        category: { id: "4", name: 'Marketing' },
        price: '69.99',
        instructor_id: '3',
        lessons: ['lesson-010', 'lesson-011', 'lesson-012', 'lesson-013', 'lesson-014'],
        description: 'Develop effective digital marketing strategies to grow your business and reach more customers online.',
        created_at: '2024-04-20T13:45:00Z',
        updated_at: '2024-04-25T16:20:00Z',
        students_enrolled: [
            {
                id: "student1",
                name: "Alice Johnson",
                email: "alice@example.com",
                enrolledCourses: ["courseId1", "courseId3"],
            },
            {
                id: "student2",
                name: "Bob Smith",
                email: "bob@example.com",
                enrolledCourses: ["courseId2", "courseId4"],
            },
            {
                id: "student3",
                name: "Charlie Brown",
                email: "charlie@example.com",
                enrolledCourses: ["courseId1", "courseId5"],
            },
            {
                id: "student4",
                name: "Daisy Miller",
                email: "daisy@example.com",
                enrolledCourses: ["courseId3", "courseId6"],
            },
            {
                id: "student5",
                name: "Eve Davis",
                email: "eve@example.com",
                enrolledCourses: ["courseId2", "courseId7"],
            },
            {
                id: "student6",
                name: "Frank Wright",
                email: "frank@example.com",
                enrolledCourses: ["courseId4", "courseId8"],
            },
            {
                id: "student7",
                name: "Grace Lee",
                email: "grace@example.com",
                enrolledCourses: ["courseId5", "courseId9"],
            }
        ]
    },
    {
        id: 'course-105',
        title: 'Advanced React and Redux',
        category: { id: "%", name: 'Web Development' },
        price: '89.99',
        instructor_id: '3',
        lessons: ['lesson-015', 'lesson-016', 'lesson-017', 'lesson-018'],
        description: 'Deep dive into advanced concepts of React and state management using Redux for building scalable web applications.',
        created_at: '2024-05-08T07:00:00Z',
        updated_at: '2024-05-12T09:30:00Z',
        students_enrolled: [
            {
                id: "student1",
                name: "Alice Johnson",
                email: "alice@example.com",
                enrolledCourses: ["courseId1", "courseId3"],
            },
            {
                id: "student2",
                name: "Bob Smith",
                email: "bob@example.com",
                enrolledCourses: ["courseId2", "courseId4"],
            },
            {
                id: "student3",
                name: "Charlie Brown",
                email: "charlie@example.com",
                enrolledCourses: ["courseId1", "courseId5"],
            },
            {
                id: "student4",
                name: "Daisy Miller",
                email: "daisy@example.com",
                enrolledCourses: ["courseId3", "courseId6"],
            },
            {
                id: "student5",
                name: "Eve Davis",
                email: "eve@example.com",
                enrolledCourses: ["courseId2", "courseId7"],
            },
            {
                id: "student6",
                name: "Frank Wright",
                email: "frank@example.com",
                enrolledCourses: ["courseId4", "courseId8"],
            },
            {
                id: "student7",
                name: "Grace Lee",
                email: "grace@example.com",
                enrolledCourses: ["courseId5", "courseId9"],
            }
        ]
    },
];



