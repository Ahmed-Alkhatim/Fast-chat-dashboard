import Dialog from "src/components/Dialog";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import toast from "react-hot-toast";
import { useEffect } from "react";

export default function UpdateUser({ userData, isOpen, onClose }) {

    return (
        <div>
            <Dialog title="Update user" isOpen={isOpen} onClose={() => onClose()}
                render={({ handleOnSave }) =>
                    <UpdateUserForm
                        userData={userData}
                        onClose={() => onClose()}
                        handleOnSave={handleOnSave}
                    />
                }
            />
        </div>
    )
}

const UpdateUserForm = ({ userData, onClose, handleOnSave }) => {
    useEffect(() => {
        handleOnSave(() => {
            toast.success('user updated successfully')
            onClose()
        })
    })

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label="name" variant="outlined" value={userData.name} size="small" />
            <TextField id="outlined-basic" label="email" variant="outlined" value={userData.email} size="small" />
            <TextField id="outlined-basic" label="password" variant="outlined" value={userData.courses} size="small" />
        </Box>
    )
}