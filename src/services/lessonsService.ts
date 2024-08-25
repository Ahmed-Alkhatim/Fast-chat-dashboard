import { Lesson, LessonServiceType } from "./types";

class LessonsService implements LessonServiceType {

    fetchLessons = async (): Promise<Lesson[] | undefined> => {
        try {
            // const response = await fetch(process.env.API_URL + '/lessons').then(response => response.json());
            return lessons;
        } catch (error) {
            console.error('Error fetching lessons:', error);
        }
    }

    async deleteLesson(lessonId: string): Promise<void> {
        try {
            await fetch(process.env.API_URL + `/lessons/${lessonId}`, { method: 'DELETE' });
        } catch (error) {
            console.error(`Failed to delete lesson with ID ${lessonId}`, error);
            throw error;
        }
    }
}

export default new LessonsService();

const lessons: Lesson[] = [
    {
        "id": 'lesson1',
        "title": "Introduction to JavaScript",
        "description": "Learn the basics of JavaScript programming.",
        "courseId": 'courseId1',
        "duration": "30 minutes",
        "publishedDate": "2024-08-01T10:00:00Z"
    },
    {
        "id": 'lesson2',
        "title": "Advanced CSS Techniques",
        "description": "Explore advanced CSS techniques for better styling.",
        "courseId": 'courseId2',
        "duration": "45 minutes",
        "publishedDate": "2024-07-15T11:30:00Z"
    },
    {
        "id": 'lesson3',
        "title": "React Hooks Deep Dive",
        "description": "An in-depth look at React hooks and their usage.",
        "courseId": 'courseId3',
        "duration": "50 minutes",
        "publishedDate": "2024-06-20T09:00:00Z"
    },
    {
        "id": 'lesson4',
        "title": "Introduction to TypeScript",
        "description": "A beginner's guide to using TypeScript with JavaScript.",
        "courseId": 'courseId4',
        "duration": "40 minutes",
        "publishedDate": "2024-05-10T14:00:00Z"
    },
    {
        "id": 'lesson5',
        "title": "Building REST APIs",
        "description": "Learn how to build and consume RESTful APIs.",
        "courseId": 'courseId5',
        "duration": "60 minutes",
        "publishedDate": "2024-04-25T16:00:00Z"
    }
];


