import { apiURL } from "./config";

class OrdersService {

    fetchOrders = async () => {
        try {
            const orders = await fetch('/orders', {
                headers: {
                    'authorization': `bearer ${localStorage.getItem(authConfig.storageTokenKeyName)}`,
                },
            }).then(response => response.json());
            return orders;
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    }
}

new OrdersService().fetchOrders()
// export default new OrdersService();