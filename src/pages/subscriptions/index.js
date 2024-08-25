import SubscriptionView from "./SubscriptionView";
import { SubscriptionsProvider } from "src/context/SubscriptionsContext";
import UpdateSubscription from "./UpdateSubscription";
import { useState } from "react";
import AddSubscription from "./AddSubscription";

export default function Subscriptions() {
    const [subscriptionData, setSubscriptionData] = useState({});
    const [isUpdateOpen, setIsUpdateOpen] = useState(false);

    const handleUpdate = (data) => {
        setSubscriptionData(data);
        setIsUpdateOpen(true);
    };

    return (
        <SubscriptionsProvider>
            <AddSubscription />
            <UpdateSubscription subscriptionData={subscriptionData} isOpen={isUpdateOpen} onClose={() => setIsUpdateOpen(false)} />
            <SubscriptionView onUpdateSubscription={(subscriptionData) => handleUpdate(subscriptionData)} />
        </SubscriptionsProvider>
    );
}
