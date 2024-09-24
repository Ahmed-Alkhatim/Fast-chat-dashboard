import axios from 'axios';
import { apiURL } from './config';

// Fetch all products
export const fetchProducts = async () => {
    try {
        const response = await axios.get(apiURL);
        return response.data; // Returns the fetched products
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

// Add a new product
export const addProduct = async (productData) => {
    try {
        const response = await axios.post(apiURL, productData);
        return response.data; // Returns the newly added product
    } catch (error) {
        console.error('Error adding product:', error);
        throw error;
    }
};

// Update an existing product
export const updateProduct = async (id, updatedData) => {
    try {
        const response = await axios.put(`${apiURL}/${id}`, updatedData);
        return response.data; // Returns the updated product
    } catch (error) {
        console.error('Error updating product:', error);
        throw error;
    }
};

// Delete a product
export const deleteProduct = async (id) => {
    try {
        await axios.delete(`${apiURL}/${id}`);
    } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
    }
};
