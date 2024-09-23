import Dialog from "src/components/Dialog";
import { Button, TextField, InputLabel, Select, MenuItem, FormControl } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import userService from "src/services/userService";
import { useUsersContext } from "src/context/UsersContext";

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
    const { addUser, errors, fetchUsers } = useUsersContext()
    const [userData, setUserData] = useState({})

    const add = async (user) => {
        const newUser = await addUser(userData)
        await fetchUsers()
        toast.success('user added successfully')
        onClose()
    }

    useEffect(() => {
        handleOnSave(() => {
            add()
        })
    }, [userData])


    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.id]: e.target.value })
    }

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >

            <TextField onChange={handleChange} id="name" label="Name" variant="outlined" value={userData.name} size="small" />
            <TextField onChange={handleChange} id="phoneNumber" label="Phone Number" variant="outlined" value={userData.phoneNumber} size="small" />
            <TextField onChange={handleChange} id="password" label="password" variant="outlined" value={userData.password} size="small" />
            {/* <div>{}</div> */}
        </Box >
    )
}