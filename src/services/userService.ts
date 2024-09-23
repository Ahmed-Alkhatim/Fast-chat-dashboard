import { apiURL } from "./config";
import { User } from "./types";
import authConfig from 'src/configs/auth'

export interface UserServiceType {
    fetchUsers(): Promise<User[] | undefined>;
    deleteUser(userId: string): Promise<void>;
}


class UsersService implements UserServiceType {

    fetchUsers = async (): Promise<User[] | undefined> => {
        try {
            const response = await fetch(apiURL + '/delivery/users', {
                headers: {
                    Authorization: 'Bearer ' + window.localStorage.getItem(authConfig.storageTokenKeyName),
                }
            });
            console.log("Hadssdaf", response);

            if (response.status == 200) {
                return response.json()
            }
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




