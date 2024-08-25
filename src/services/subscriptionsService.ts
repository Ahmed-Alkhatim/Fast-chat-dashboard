import { Subscription, SubscriptionServiceType } from "./types";

class SubscriptionsService implements SubscriptionServiceType {

    fetchSubscriptions = async (): Promise<Subscription[] | undefined> => {
        try {
            // const response = await fetch(process.env.API_URL + '/subscriptions').then(response => response.json());
            return subscriptions;
        } catch (error) {
            console.error('Error fetching subscriptions:', error);
        }
    }

    async deleteSubscription(subscriptionId: string): Promise<void> {
        try {
            await fetch(process.env.API_URL + `/subscriptions/${subscriptionId}`, { method: 'DELETE' });
        } catch (error) {
            console.error(`Failed to delete subscription with ID ${subscriptionId}`, error);
            throw error;
        }
    }
}

export default new SubscriptionsService();

const subscriptions: Subscription[] = [
    {
        "id": 'sub1',
        "userId": '1',
        "courseId": 'courseId1',
        "status": 'active',
        "startDate": "2024-07-01T10:00:00Z",
        "endDate": "2024-12-31T23:59:59Z"
    },
    {
        "id": 'sub2',
        "userId": '2',
        "courseId": 'courseId2',
        "status": 'inactive',
        "startDate": "2024-06-15T09:30:00Z",
        "endDate": "2024-09-15T18:00:00Z"
    },
    {
        "id": 'sub3',
        "userId": '3',
        "courseId": 'courseId3',
        "status": 'active',
        "startDate": "2024-05-20T11:00:00Z",
        "endDate": "2024-11-20T17:00:00Z"
    },
    {
        "id": 'sub4',
        "userId": '4',
        "courseId": 'courseId4',
        "status": 'expired',
        "startDate": "2024-03-10T08:00:00Z",
        "endDate": "2024-06-10T22:00:00Z"
    },
    {
        "id": 'sub5',
        "userId": '5',
        "courseId": 'courseId5',
        "status": 'active',
        "startDate": "2024-01-01T00:00:00Z",
        "endDate": "2024-12-31T23:59:59Z"
    },
    {
        "id": 'sub6',
        "userId": '6',
        "courseId": 'courseId6',
        "status": 'inactive',
        "startDate": "2024-02-15T10:30:00Z",
        "endDate": "2024-07-15T15:30:00Z"
    },
    {
        "id": 'sub7',
        "userId": '7',
        "courseId": 'courseId7',
        "status": 'active',
        "startDate": "2024-08-01T12:00:00Z",
        "endDate": "2024-12-31T23:59:59Z"
    }
];


