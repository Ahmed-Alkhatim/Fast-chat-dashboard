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
}

export interface UserServiceType {
    fetchUsers(): Promise<User[] | undefined>;
    deleteUser(userId: string): Promise<void>;
}