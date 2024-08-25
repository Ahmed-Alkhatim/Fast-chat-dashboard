import { createContext, ReactNode, useContext, useState } from "react";
import { SubscriptionContextType } from "./types";
import { Subscription } from "src/services/types";
import SubscriptionsService from "src/services/subscriptionsService";

const SubscriptionsContext = createContext<SubscriptionContextType | null>(null);

interface SubscriptionsProviderProps {
    children: ReactNode;
}

export const SubscriptionsProvider: React.FC<SubscriptionsProviderProps> = ({ children }) => {
    const [subscriptions, setSubscriptions] = useState<Subscription[] | undefined>();

    const fetchSubscriptions = async (): Promise<void> => {
        await SubscriptionsService.fetchSubscriptions()
            .then(setSubscriptions)
            .catch(error => console.error(error));
    };

    const deleteSubscription = async (subscriptionId: string): Promise<void> => {
        await SubscriptionsService.deleteSubscription(subscriptionId)
            .then(() => setSubscriptions(prev => prev?.filter(subscription => subscription.id !== subscriptionId)))
            .catch(error => console.error(error));
    };

    return (
        <SubscriptionsContext.Provider value={{ subscriptions, fetchSubscriptions, deleteSubscription }}>
            {children}
        </SubscriptionsContext.Provider>
    );
};

export const useSubscriptionsContext = (): SubscriptionContextType => {
    const context = useContext(SubscriptionsContext);
    if (!context) {
        throw new Error('useSubscriptions must be used within a SubscriptionsProvider');
    }
    return context;
};
