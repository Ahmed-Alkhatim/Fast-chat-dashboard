class AuthService {
    login = async (username, password) => {
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            })
            const data = await response.json()
            console.log(response.status, data);
            localStorage.setItem('token', data.token)
            return response.data
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    }
}

new AuthService().login('alkhatim', 'hashedPasswordHere')
// export default new AuthService()