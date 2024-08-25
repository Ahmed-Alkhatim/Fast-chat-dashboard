import Dialog from "src/components/Dialog";
import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function AddSubscription() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button sx={{ marginBottom: '10px' }} onClick={() => setIsOpen(true)} color='primary' variant="contained">Add Subscription</Button>
            <Dialog title='Add Subscription' isOpen={isOpen} onClose={() => setIsOpen(false)}
                render={({ handleOnSave }) =>
                    <AddSubscriptionForm
                        onClose={() => setIsOpen(false)}
                        handleOnSave={handleOnSave}
                    />
                }
            />
        </>
    );
}

const AddSubscriptionForm = ({ onClose, handleOnSave }) => {

    const [subscriptionData, setSubscriptionData] = useState({});
    useEffect(() => {
        handleOnSave(() => {
            toast.success('Subscription added successfully');
            onClose();
        });
    }, []);

    const handleChange = (e) => {
        setSubscriptionData({
            ...subscriptionData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField name="userId" onChange={handleChange} id="outlined-basic" label="User ID" variant="outlined" value={subscriptionData.userId || ''} size="small" />
            <TextField name="courseId" onChange={handleChange} id="outlined-basic" label="Course ID" variant="outlined" value={subscriptionData.courseId || ''} size="small" />
            <TextField name="startDate" onChange={handleChange} id="outlined-basic" label="Start Date" variant="outlined" value={subscriptionData.startDate || ''} size="small" />
        </Box>
    );
};
