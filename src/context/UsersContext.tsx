import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { User } from "src/services/types"
import UsersService from "src/services/userService"

export interface UserContextType {
    users: User[] | [],
    instructors: User[] | undefined,
    fetchUsers(): Promise<void>;
    addUser(user: User): Promise<void>
    deleteUser(userId: string): Promise<void>;
    getInstructorByUserId(instructorId: string): User | undefined;
}

const UsersContext = createContext<UserContextType | null>(null)

type Error = {
    message: [];
}
interface UsersProviderProps {
    children: ReactNode;
}

export const UsersProvider: React.FC<UsersProviderProps> = ({ children }) => {
    const [users, setUsers] = useState<User[] | []>([])
    const [errors, setError] = useState()
    const [instructors, setInstructors] = useState<User[] | undefined>()

    useEffect(() => {
        setInstructors(users?.filter((user) => user.role_id == 2))
    }, [users])

    const fetchUsers = async (): Promise<void> => {

        await UsersService.fetchUsers()
            .then(setUsers)
            .catch()

    }
    const addUser = async (user: User) => {
        try {
            const newUser = await UsersService.addUser(user);
            setUsers([...users, newUser]);
        } catch (error: Error) {
            console.error('Error adding user in context:', error.message);
            setError(error.message);
        }
    };

    const getInstructorByUserId = (instructorId: string): User | undefined => {
        return instructors?.filter(instructor => instructor.id === instructorId)[0]
    }

    const deleteUser = async (userId: string): Promise<void> => {
        try {
            await UsersService.deleteUser(userId);
            setUsers(users.filter(user => user._id !== userId));
        } catch (error) {
            console.error('Error adding user in context:', error.message);
            setError(error.message);
        }
    }

    return (
        <UsersContext.Provider value={{ users, errors, instructors, addUser, fetchUsers, deleteUser, getInstructorByUserId }}>
            {children}
        </UsersContext.Provider>
    )
}

export const useUsersContext = (): UserContextType => {
    const context = useContext(UsersContext);
    if (!context) {
        throw new Error('useUsers must be used within a UsersProvider');
    }
    return context;
};

