import { createContext, useContext, useState, useEffect } from 'react';
import ProductService from 'src/services/productService';
// Create the context
const ProductsContext = createContext({
    products: [],
    errors: {},
    fetchProducts: () => { },
    addProduct: () => { },
    updateProduct: () => { },
    deleteProduct: () => { }
});

// Create a provider component
export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [errors, setErrors] = useState({});
    // Fetch all products from the backend
    const fetchProducts = async () => {
        try {
            const response = await ProductService.fetchProducts();
            console.log("adjhagjhdgajhdahgdf", response);

            setProducts(response);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    // Add a new product
    const addProduct = async (productData) => {
        try {
            const response = await ProductService.addProduct(productData);
            setProducts([...products, response]);
        } catch (error) {
            console.error('Error context adding product:', error);
            setErrors[error]
            throw error
        }
    };

    // Update an existing product
    const updateProduct = async (updatedData) => {
        try {
            const response = await ProductService.updateProduct(updatedData);
            setProducts(products.map((product) => (product._id === updatedData._id ? response : product)));
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    // Delete a product
    const deleteProduct = async (id) => {
        try {
            await ProductService.deleteProduct(id);
            setProducts(products.filter(cat => cat._id !== id));
        } catch (error) {
            console.log("error deleting product", error);

        }
    };
    // Automatically fetch products when the component mounts
    useEffect(() => {
        console.log("Fetching products");
        fetchProducts();
    }, []);
    return (
        <ProductsContext.Provider value={{ products, errors, fetchProducts, addProduct, updateProduct, deleteProduct }}>
            {children}
        </ProductsContext.Provider>
    );
};

// Custom hook to use the ProductsContext
export const useProductsContext = () => useContext(ProductsContext);
