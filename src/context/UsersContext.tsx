import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { User } from "src/services/types"
import UsersService from "src/services/userService"

export interface UserContextType {
    users: User[] | [],
    instructors: User[] | undefined,
    fetchUsers(): Promise<void>;
    deleteUser(userId: string): Promise<void>;
    getInstructorByUserId(instructorId: string): User | undefined;
}

const UsersContext = createContext<UserContextType | null>(null)

interface UsersProviderProps {
    children: ReactNode;
}

export const UsersProvider: React.FC<UsersProviderProps> = ({ children }) => {
    const [users, setUsers] = useState<User[] | []>([])
    const [instructors, setInstructors] = useState<User[] | undefined>()

    useEffect(() => {
        setInstructors(users?.filter((user) => user.role_id == 2))
    }, [users])

    const fetchUsers = async (): Promise<void> => {

        await UsersService.fetchUsers()
            .then(setUsers)
            .catch()

    }

    const getInstructorByUserId = (instructorId: string): User | undefined => {
        return instructors?.filter(instructor => instructor.id === instructorId)[0]
    }

    const deleteUser = async (userId: string): Promise<void> => {
        console.log('The user with id ' + userId + 'will be deleted')
    }

    return (
        <UsersContext.Provider value={{ users, instructors, fetchUsers, deleteUser, getInstructorByUserId }}>
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

