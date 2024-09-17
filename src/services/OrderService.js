class OrdersService {

    fetchOrders = async () => {
        try {
            const orders = await fetch('http://localhost:3000/orders', {
                headers: {
                    'authorization': `bearer ${localStorage.getItem('token')}`,
                },
            }).then(response => response.json());
            return orders;
        } catch (error) {
            console.error('Error fetching lessons:', error);
        }
    }
}

// new OrdersService().fetchOrders()
export default new OrdersService();