import CategoryView from "./CategoryView"
import { CategoryProvider } from "src/context/CategoryContext"
import UpdateCategory from "./UpdateCategory"
import { useState } from "react"
import AddCategory from "./AddCategory"

export default function Users() {
    const [categoryData , setCategData] = useState({})
    const [isUpdateOpen, setIsUpdateOpen] = useState(false)

    const handleUpdate = (data) => {
        console.log("jkajgdajhdaj", data);

        setCategData(data)
        setIsUpdateOpen(true)
    }

    return (
        <>
            <CategoryProvider>
                <AddCategory />
                <UpdateCategory categoryData={categoryData} isOpen={isUpdateOpen} onClose={() => setIsUpdateOpen(false)} />
                <CategoryView onUpdateCateg={(categData) => handleUpdate(categData)} />
            </CategoryProvider>
        </>
    )
}