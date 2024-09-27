import { UsersProvider } from 'src/context/UsersContext';
import OrdersView from './ViewOrders';
export default () => <UsersProvider>
    <OrdersView />
</UsersProvider>