import Dialog from "src/components/Dialog";
import { TextField, InputLabel, Select, MenuItem, FormControl } from "@mui/material";
import Box from "@mui/material/Box";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useUsersContext } from "src/context/UsersContext";

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
    const { updateUser } = useUsersContext()
    const roles = [{ name: 'Admin', id: 1 }, { name: 'Instructor', id: 2 }, { name: 'Student', id: 3 }]

    const [data, setData] = useState(userData)

    useEffect(() => {
        handleOnSave(async () => {
            try {
                await updateUser(data)
                toast.success('user updated successfully')
                onClose()
            } catch (error) {

            }

        })
    }, [data])

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
            <TextField onChange={handleChange} id="name" label="Name" variant="outlined" value={data.name} size="small" />
            <TextField onChange={handleChange} id="phoneNumber" label="Phone Number" variant="outlined" value={data.phoneNumber} size="small" />
            <TextField onChange={handleChange} id="password" label="password" variant="outlined" value={data.password} size="small" />
        </Box>
    )
}