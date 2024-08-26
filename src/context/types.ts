import { User } from 'src/services/types';
import { Course } from 'src/services/types';


export type ErrCallbackType = (err: { [key: string]: string }) => void;

export type LoginParams = {
  email: string;
  password: string;
  rememberMe?: boolean;
};

export type RegisterParams = {
  email: string;
  username: string;
  password: string;
};

export type UserDataType = {
  id: number;
  role: string;
  email: string;
  fullName: string;
  username: string;
  password: string;
  avatar?: string | null;
};



export type AuthValuesType = {
  loading: boolean;
  logout: () => void;
  user: UserDataType | null;
  setLoading: (value: boolean) => void;
  setUser: (value: UserDataType | null) => void;
  login: (params: LoginParams, errorCallback?: ErrCallbackType) => void;
  register: (params: RegisterParams, errorCallback?: ErrCallbackType) => void;
};



export interface CourseServiceType {
  fetchCourses(): Promise<Course[] | undefined>;
  deleteCourse(courseId: string): Promise<void>;
}

export interface CourseContextType {
  courses: Course[] | undefined;
  fetchCourses(): Promise<void>;
  deleteCourse(courseId: string): Promise<void>;
}

// Lesson Context Types
export interface Lesson {
  id: string;
  title: string;
  content: string;
  duration: number;
  order: number;
  created_at: string;
  updated_at: string;
}
export interface UserContextType {
  users: User[] | undefined,
  instructors: User[] | undefined,
  fetchUsers(): Promise<void>;
  deleteUser(userId: string): Promise<void>;
}
export interface LessonServiceType {
  fetchLessons(courseId: string): Promise<Lesson[] | undefined>;
  deleteLesson(lessonId: string): Promise<void>;
}

export interface LessonContextType {
  lessons: Lesson[] | undefined;
  fetchLessons(courseId: string): Promise<void>;
  deleteLesson(lessonId: string): Promise<void>;
}

// Subscription Context Types
export interface Subscription {
  id: string;
  user_id: string; // User ID
  course_id: string; // Course ID
  status: 'active' | 'expired';
  start_date: string;
  end_date: string;
  payment_id: string;
  created_at: string;
  updated_at: string;
}

export interface SubscriptionServiceType {
  fetchSubscriptions(): Promise<Subscription[] | undefined>;
  deleteSubscription(subscriptionId: string): Promise<void>;
}

export interface SubscriptionContextType {
  subscriptions: Subscription[] | undefined;
  fetchSubscriptions(): Promise<void>;
  deleteSubscription(subscriptionId: string): Promise<void>;
}
