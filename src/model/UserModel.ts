import User from "./types/UserType";

class UserModel {
    id: string;
    name: string;
    email: string;
    role: 'instructor' | 'student' | 'admin';
    profile_picture: string;
    bio: string;
    courses: string[];
    created_at: string;
    updated_at: string;
    role_id: number;

    constructor({ id, name, email, role, profile_picture, bio, courses, created_at, updated_at, role_id }: User) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
        this.profile_picture = profile_picture;
        this.bio = bio;
        this.courses = courses;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.role_id = role_id;
    }
}

export default UserModel