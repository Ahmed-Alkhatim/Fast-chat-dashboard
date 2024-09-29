import { apiURL } from "./config";

class AuthService {
    login = async (username, password) => {
        try {
            const response = await fetch(apiURL + '/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            })
            const data = await response.json()
            console.log(response.status, data);
            // localStorage.setItem('token', data.token)
            return data
        }
        catch (error) {
            console.error('Error fetching data:', error);
            throw error
        }
    }
}

// new AuthService().login('test', '12345')
export default new AuthService()