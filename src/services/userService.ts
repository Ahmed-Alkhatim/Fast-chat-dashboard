import { User } from "./types";

export interface UserServiceType {
    fetchUsers(): Promise<User[] | undefined>;
    deleteUser(userId: string): Promise<void>;
}


class UsersService implements UserServiceType {

    fetchUsers = async (): Promise<User[] | undefined> => {
        try {
            // const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/users').then(response => response.json());
            return users
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    async deleteUser(userId: string): Promise<void> {

        try {
            await fetch(`/users/${userId}`)
        }

        catch (error) {
            console.error(`Failed to delete user with ID ${userId}`, error);
            throw error;
        }
    }
}

export default new UsersService()

const users: User[] = [
    {
        "id": "1",
        "name": "John Doe",
        "email": "john@example.com",
        "role": "instructor",
        "profile_picture": "https://example.com/profile/john.jpg",
        "bio": "Experienced Flutter Developer",
        "courses": ["courseId1", "courseId3"],
        "created_at": "2024-08-01T10:00:00Z",
        "updated_at": "2024-08-15T12:00:00Z",
        "role_id": 2
    },
    {
        "id": "2",
        "name": "Jane Smith",
        "email": "jane@example.com",
        "role": "student",
        "profile_picture": "https://example.com/profile/jane.jpg",
        "bio": "Aspiring Web Developer",
        "courses": ["courseId2", "courseId4"],
        "created_at": "2024-07-21T08:30:00Z",
        "updated_at": "2024-08-10T09:45:00Z",
        "role_id": 3
    },
    {
        "id": "3",
        "name": "Michael Johnson",
        "email": "michael@example.com",
        "role": "instructor",
        "profile_picture": "https://example.com/profile/michael.jpg",
        "bio": "Senior JavaScript Developer",
        "courses": ["courseId5", "courseId6"],
        "created_at": "2024-06-15T11:20:00Z",
        "updated_at": "2024-07-28T14:00:00Z",
        "role_id": 2
    },
    {
        "id": "4",
        "name": "Emily Davis",
        "email": "emily@example.com",
        "role": "student",
        "profile_picture": "https://example.com/profile/emily.jpg",
        "bio": "Learning Python and Data Science",
        "courses": ["courseId7", "courseId8"],
        "created_at": "2024-05-10T13:50:00Z",
        "updated_at": "2024-08-05T11:35:00Z",
        "role_id": 3
    },
    {
        "id": "5",
        "name": "David Wilson",
        "email": "david@example.com",
        "role": "admin",
        "profile_picture": "https://example.com/profile/david.jpg",
        "bio": "Platform Administrator",
        "courses": [],
        "created_at": "2024-04-01T07:10:00Z",
        "updated_at": "2024-08-18T16:20:00Z",
        "role_id": 1
    },
    {
        "id": "6",
        "name": "Sophia Martinez",
        "email": "sophia@example.com",
        "role": "instructor",
        "profile_picture": "https://example.com/profile/sophia.jpg",
        "bio": "Data Science and AI Expert",
        "courses": ["courseId9", "courseId10"],
        "created_at": "2024-03-22T09:00:00Z",
        "updated_at": "2024-07-29T10:10:00Z",
        "role_id": 2
    },
    {
        "id": "7",
        "name": "James Brown",
        "email": "james@example.com",
        "role": "student",
        "profile_picture": "https://example.com/profile/james.jpg",
        "bio": "Frontend Developer Enthusiast",
        "courses": ["courseId11", "courseId12"],
        "created_at": "2024-02-18T15:30:00Z",
        "updated_at": "2024-08-12T12:55:00Z",
        "role_id": 3
    }
]

const instructors: User[] = [
    {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        role: 'instructor',
        profile_picture: 'https://example.com/profile/john.jpg',
        bio: 'Experienced Flutter Developer',
        courses: ['courseId1', 'courseId3'],
        created_at: '2024-08-01T10:00:00Z',
        updated_at: '2024-08-15T12:00:00Z',
        role_id: 1,
    },
    {
        id: '3',
        name: 'Michael Johnson',
        email: 'michael@example.com',
        role: 'instructor',
        profile_picture: 'https://example.com/profile/michael.jpg',
        bio: 'Senior JavaScript Developer',
        courses: ['courseId5', 'courseId6'],
        created_at: '2024-06-15T11:20:00Z',
        updated_at: '2024-07-28T14:00:00Z',
        role_id: 1,
    },
    {
        id: '6',
        name: 'Sophia Martinez',
        email: 'sophia@example.com',
        role: 'instructor',
        profile_picture: 'https://example.com/profile/sophia.jpg',
        bio: 'Data Science and AI Expert',
        courses: ['courseId9', 'courseId10'],
        created_at: '2024-03-22T09:00:00Z',
        updated_at: '2024-07-29T10:10:00Z',
        role_id: 1,
    }
];

