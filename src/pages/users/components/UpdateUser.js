import Dialog from "src/components/Dialog";
import { TextField, InputLabel, Select, MenuItem, FormControl } from "@mui/material";
import Box from "@mui/material/Box";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

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

    const roles = [{ name: 'Admin', id: 1 }, { name: 'Instructor', id: 2 }, { name: 'Student', id: 3 }]

    const [data, setData] = useState(userData)
    const [role, setRole] = useState(userData.role_id)

    useEffect(() => {
        handleOnSave(() => {
            toast.success('user updated successfully')
            onClose()
        })
    }, [data, role])

    const handleChange = (event) => {
        setData({ ...data, [event.target.id]: event.target.value })
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

            <TextField onChange={handleChange} id="name" label="name" variant="outlined" value={data.name} size="small" />
            <TextField onChange={handleChange} id="email" label="email" variant="outlined" value={data.email} size="small" />
            <TextField onChange={handleChange} id="password" label="password" variant="outlined" value={data.password} size="small" />
            <TextField onChange={handleChange} id="bio" label="bio" variant="outlined" value={data.bio} size="small" />
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="role">Role</InputLabel>
                <Select
                    labelId="role"
                    id="role"
                    value={role}
                    label="Role"
                    onChange={(e) => setRole(e.target.value)}
                >
                    {roles.map(role => <MenuItem key={role.id} value={role.id}>{role.name}</MenuItem>)}
                </Select>
            </FormControl>
        </Box>
    )
}