import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the context
const ProductsContext = createContext({
    products: [],
    fetchProducts: () => { },
    addProduct: () => { },
    updateProduct: () => { },
    deleteProduct: () => { }
});

// Create a provider component
export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    // Fetch all products from the backend
    const fetchProducts = async () => {
        try {
            const response = await axios.get('/api/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    // Add a new product
    const addProduct = async (productData) => {
        try {
            const response = await axios.post('/api/products', productData);
            setProducts([...products, response.data]);
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    // Update an existing product
    const updateProduct = async (id, updatedData) => {
        try {
            const response = await axios.put(`/api/products/${id}`, updatedData);
            setProducts(products.map((product) => (product._id === id ? response.data : product)));
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    // Delete a product
    const deleteProduct = async (id) => {
        try {
            await axios.delete(`/api/products/${id}`);
            setProducts(products.filter((product) => product._id !== id));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };
    // Automatically fetch products when the component mounts
    useEffect(() => {
        console.log("Fetching products");
        fetchProducts();
    }, []);
    return (
        <ProductsContext.Provider value={{ products, fetchProducts, addProduct, updateProduct, deleteProduct }}>
            {children}
        </ProductsContext.Provider>
    );
};

// Custom hook to use the ProductsContext
export const useProductsContext = () => useContext(ProductsContext);
