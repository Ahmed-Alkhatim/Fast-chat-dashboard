import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSubscriptionsContext } from 'src/context/SubscriptionsContext';
import { useEffect } from 'react';
import { styled } from '@mui/material';
import toast from 'react-hot-toast';
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import EditOutlined from '@mui/icons-material/EditOutlined';
import IconButton from '@mui/material/IconButton';
import PreviewIcon from '@mui/icons-material/Preview';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    fontWeight: 'bold',
}));

export default function SubscriptionView({ onUpdateSubscription }) {
    const { subscriptions, fetchSubscriptions, deleteSubscription } = useSubscriptionsContext();

    useEffect(() => {
        fetchSubscriptions();
    }, [fetchSubscriptions]);

    const handleDelete = (subscriptionId) => {
        deleteSubscription(subscriptionId)
            .then(() => {
                toast.success('Subscription Deleted Successfully');
            })
            .catch((error) => {
                toast.error('Failed to delete subscription');
                console.error(error);
            });
    };

    const handleEdit = (subscription: any) => {
        onUpdateSubscription(subscription);
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>User ID</StyledTableCell>
                        <StyledTableCell>Course ID</StyledTableCell>
                        <StyledTableCell>Status</StyledTableCell>
                        <StyledTableCell>Start Date</StyledTableCell>
                        <StyledTableCell>End Date</StyledTableCell>
                        <StyledTableCell>Actions</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {subscriptions?.map((subscription) => (
                        <TableRow key={subscription.id}>
                            <TableCell>{subscription.userId}</TableCell>
                            <TableCell>{subscription.courseId}</TableCell>
                            <TableCell>{subscription.status}</TableCell>
                            <TableCell>{new Date(subscription.startDate).toLocaleDateString()}</TableCell>
                            <TableCell>{new Date(subscription.endDate).toLocaleDateString()}</TableCell>
                            <TableCell>
                                <IconButton
                                    aria-label="edit"
                                    onClick={() => handleEdit(subscription)}
                                >
                                    <EditOutlined color='primary' />
                                </IconButton>
                                <IconButton
                                    aria-label="delete"
                                    onClick={() => handleDelete(subscription.id)}
                                >
                                    <DeleteOutline color='error' />
                                </IconButton>
                                {/* <IconButton
                                    aria-label="view"
                                >
                                    <PreviewIcon color='primary' />
                                </IconButton> */}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
