import UsersView from "./UsersView"
import { UsersProvider } from "src/context/UsersContext"
import UpdateUser from "./UpdateUser"
import { useState } from "react"
import AddUser from "./AddUser"

export default function Users() {
    const [userData, setUserData] = useState({})
    const [isUpdateOpen, setIsUpdateOpen] = useState(false)

    const handleUpdate = (data) => {
        setUserData(data)
        setIsUpdateOpen(true)
    }

    return (
        <UsersProvider>
            <AddUser />
            <UpdateUser userData={userData} isOpen={isUpdateOpen} onClose={() => setIsUpdateOpen(false)} />
            <UsersView onUpdateUser={(userData) => handleUpdate(userData)} />
        </UsersProvider>
    )
}