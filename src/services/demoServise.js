class DemoService {
    complete = async (phoneNumber) => {
        try {
            const response = await fetch('http://localhost:3001/complete', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phoneNumber }),
            })
            const data = await response.json()
            console.log(response.status, data);
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    ready = async (phoneNumber) => {
        try {
            const response = await fetch('http://localhost:3001/ready', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phoneNumber }),
            })
            const data = await response.json()
            console.log(response.status, data);
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    }
}

export default new DemoService()