export interface User {
    id: string,
    name: string;
    email: string;
    role: 'instructor' | 'student' | 'admin';
    profile_picture: string;
    bio: string;
    courses: string[]; // Array of course IDs
    created_at: string;
    updated_at: string;
    role_id: number
}

export interface UserServiceType {
    fetchUsers(): Promise<User[] | undefined>;
    fetchInstructors(): Promise<User[] | undefined>
    deleteUser(userId: string): Promise<void>;
}

export interface Subscription {
    id: string;
    user_id: string; // Reference to the user (User ID)
    course_id: string; // Reference to the course (Course ID)
    status: 'active' | 'inactive' | 'completed'; // Subscription status
    start_date: string;
    end_date: string;
    created_at: string;
    updated_at: string;
}

export interface SubscriptionServiceType {
    fetchSubscriptions(): Promise<Subscription[] | undefined>;
    deleteSubscription(subscriptionId: string): Promise<void>;
}

export interface Lesson {
    id: string;
    courseId: string;
    title: string;
    order: number; // The order in which this lesson appears in the course
    duration: number; // Duration in minutes
    content: string; // Could be a URL or text content
    course_id: string; // Reference to the course (Course ID)
    created_at: string;
    updated_at: string;
}

export interface LessonServiceType {
    fetchLessons(): Promise<Lesson[] | undefined>;
    deleteLesson(lessonId: string): Promise<void>;
}

export interface Course {
    id: string;
    title: string;
    category_id: string;
    price: string;
    instructor_id: string; // Reference to the instructor (User ID)
    lessons: string[]; // Array of lesson IDs
    description: string;
    created_at: string;
    updated_at: string;
}

export interface CourseServiceType {
    fetchCourses(): Promise<Course[] | undefined>;
    deleteCourse(courseId: string): Promise<void>;
}

