import { apiURL } from "./config";
import authConfig from 'src/configs/auth'

class OrdersService {

    fetchOrders = async () => {
        try {
            const orders = await fetch(apiURL + '/orders', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + window.localStorage.getItem(authConfig.storageTokenKeyName),
                },
            }).then(response => response.json());

            return orders;
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    }


    completeOrder = async (id, status) => {
        try {
            const response = await fetch(apiURL + '/orders/' + id, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + window.localStorage.getItem(authConfig.storageTokenKeyName),
                },
                body: JSON.stringify({ status: status })
            })

            if (response.status == 200) {
                return await response.json();
            }

        } catch (error) {

        }
    }

    assignOrder = async (orderId, userId) => {

        try {
            const response = await fetch(apiURL + '/order/assign', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + window.localStorage.getItem(authConfig.storageTokenKeyName),
                },
                body: JSON.stringify({ orderId, userId })
            })

            if (response.status == 200) {
                return await response.json();
            }

        } catch (error) {

        }
    }
}

// new OrdersService().fetchOrders()
export default new OrdersService();