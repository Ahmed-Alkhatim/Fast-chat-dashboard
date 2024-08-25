import Dialog from "src/components/Dialog";
import { Button, TextField, InputLabel, Select, MenuItem, FormControl } from "@mui/material";
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
    const [role, setRole] = useState('')

    useEffect(() => {
        handleOnSave(() => {
            toast.success('user added successfully')
            onClose()
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
            <TextField onChange={handleChange} id="name" label="name" variant="outlined" value={userData.name} size="small" />
            <TextField onChange={handleChange} id="email" label="email" variant="outlined" value={userData.email} size="small" />
            <TextField onChange={handleChange} id="password" label="password" variant="outlined" value={userData.password} size="small" />
            <TextField onChange={handleChange} id="bio" label="bio" variant="outlined" value={userData.bio} size="small" />
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">Role</InputLabel>
                <Select
                    labelId="role"
                    id="demo-select-small"
                    value={role}
                    label="Role"
                    onChange={(e => setRole(e.target.value))}
                >
                    <MenuItem value={1}>Student</MenuItem>
                    <MenuItem value={2}>Instructor</MenuItem>
                    <MenuItem value={3}>Admin</MenuItem>
                </Select>
            </FormControl>
        </Box >
    )
}