import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import ProductsView from "./ProductsView";
import { useState } from "react";
import { ProductsProvider } from "src/context/ProductsContext";
export default function Users() {
    const [productData, setProductData] = useState({})
    const [isUpdateOpen, setIsUpdateOpen] = useState(false)

    const handleUpdate = (data) => {
        console.log("jkajgdajhdaj", data);

        setProductData(data)
        setIsUpdateOpen(true)
    }

    return (
        <>
            <ProductsProvider>
                <AddProduct />
                <UpdateProduct productData={productData} isOpen={isUpdateOpen} onClose={() => setIsUpdateOpen(false)} />
                <ProductsView onUpdateCateg={(categData) => handleUpdate(categData)} />
            </ProductsProvider>
        </>
    )
}