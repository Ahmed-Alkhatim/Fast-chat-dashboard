import Dialog from "src/components/Dialog";
import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function AddUser() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Button sx={{ marginBottom: '10px' }} onClick={() => setIsOpen(true)} color='primary' variant="contained">Add User</Button>
            <Dialog title='Add user' isOpen={isOpen} onClose={() => { setIsOpen(false) }}
                render={({ handleOnSave }) =>
                    <AddUserForm
                        onClose={() => { setIsOpen(false) }}
                        handleOnSave={handleOnSave}
                    />
                }
            />
        </>
    )
}

const AddUserForm = ({ onClose, handleOnSave }) => {

    const [userData, setUserData] = useState({})
    useEffect(() => {
        handleOnSave(() => {
            toast.success('user added successfully')
            onClose()
        })
    }, [])

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