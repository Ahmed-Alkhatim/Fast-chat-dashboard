import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import ProductsView from "./ProductsView";
import { useEffect, useState } from "react";
import { ProductsProvider } from "src/context/ProductsContext";
import { CategoryProvider } from "src/context/CategoryContext";
import { useCategoryContext } from "src/context/CategoryContext";

export default function Users() {
    const [productData, setProductData] = useState({})
    const [isUpdateOpen, setIsUpdateOpen] = useState(false)
    const { fetchCategories } = useCategoryContext()

    const handleUpdate = (data) => {
        setProductData(data)
        setIsUpdateOpen(true)
    }

    useEffect(() => {
        fetchCategories()
    }, [])
    return (
        <CategoryProvider>
            <ProductsProvider>
                <AddProduct />
                <UpdateProduct productData={productData} isOpen={isUpdateOpen} onClose={() => setIsUpdateOpen(false)} />
                <ProductsView onUpdateProduct={(productData) => handleUpdate(productData)} />
            </ProductsProvider>
        </CategoryProvider>
    )
}