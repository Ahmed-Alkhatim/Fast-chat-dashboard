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

    addUser = async (user: User) => {
        try {
            const response = await fetch(apiURL + '/delivery/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + window.localStorage.getItem(authConfig.storageTokenKeyName),
                },
                body: JSON.stringify(user)
            });

            if (response.status === 201) {
                return response.json();  // Return the response if successful
            } else {
                throw new Error('Failed to add user: ' + response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
            throw error;  // Re-throw the error to handle it in context
        }
    };


    async deleteUser(userId: string): Promise<void> {

        try {
            await fetch(`/users/${userId}`)
        }

        catch (error) {
            console.error(`Failed to delete user with ID ${userId} `, error);
            throw error;
        }
    }
}

export default new UsersService()




