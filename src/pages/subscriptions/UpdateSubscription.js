import Dialog from "src/components/Dialog";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import toast from "react-hot-toast";
import { useEffect } from "react";

export default function UpdateSubscription({ subscriptionData, isOpen, onClose }) {
    return (
        <div>
            <Dialog title="Update Subscription" isOpen={isOpen} onClose={() => onClose()}
                render={({ handleOnSave }) =>
                    <UpdateSubscriptionForm
                        subscriptionData={subscriptionData}
                        onClose={() => onClose()}
                        handleOnSave={handleOnSave}
                    />
                }
            />
        </div>
    );
}

const UpdateSubscriptionForm = ({ subscriptionData, onClose, handleOnSave }) => {
    useEffect(() => {
        handleOnSave(() => {
            toast.success('Subscription updated successfully');
            onClose();
        });
    }, [handleOnSave, onClose]);

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label="User ID" variant="outlined" value={subscriptionData.userId} size="small" />
            <TextField id="outlined-basic" label="Course ID" variant="outlined" value={subscriptionData.courseId} size="small" />
            <TextField id="outlined-basic" label="Start Date" variant="outlined" value={subscriptionData.startDate} size="small" />
        </Box>
    );
};
