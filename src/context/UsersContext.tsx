import { createContext, ReactNode, useContext, useState } from "react"
import { UserContextType } from "./types"
import { User } from "src/services/types"
import UsersService from "src/services/userService"

const UsersContext = createContext<UserContextType | null>(null)

interface UsersProviderProps {
    children: ReactNode;
}

export const UsersProvider: React.FC<UsersProviderProps> = ({ children }) => {
    const [users, setUsers] = useState<User[] | undefined>()

    const fetchUsers = async (): Promise<void> => {

        await UsersService.fetchUsers()
            .then(setUsers)
            .catch()

    }

    const deleteUser = async (userId: string): Promise<void> => {
        console.log('The user with id ' + userId + 'will be deleted')

    }

    return (
        <UsersContext.Provider value={{ users, fetchUsers, deleteUser }}>
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

