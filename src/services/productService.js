import { apiURL } from './config';
import authConfig from 'src/configs/auth'

// ProductService object
const ProductService = {
    // Fetch all products
    fetchProducts: async () => {
        try {
            const response = await fetch(`${apiURL}/products`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + window.localStorage.getItem(authConfig.storageTokenKeyName),
                },
            });
            if (response.status != 200) {
                throw new Error(`Error fetching products: ${response}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    },

    // Add a new product
    addProduct: async (productData) => {
        try {
            const response = await fetch(apiURL + "/products", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + window.localStorage.getItem(authConfig.storageTokenKeyName),

                },
                body: JSON.stringify(productData),
            });
            if (response.status == 422) {

                const errors = await response.json()
                throw errors.errors
            }
            if (response.status == 200) {
                const newProduct = await response.json();
                console.log("SFJSDSFJFFS", newProduct);

                return newProduct;
            } else {
                throw new Error("Unknow response")
            }
        } catch (error) {
            console.error('Error adding product:', error);
            throw error;
        }
    },

    // Update an existing product
    updateProduct: async (updatedData) => {
        try {
            const response = await fetch(`${apiURL}/products/${updatedData._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + window.localStorage.getItem(authConfig.storageTokenKeyName),

                },
                body: JSON.stringify(updatedData),
            });
            if (response.status != 200) {
                throw new Error(`Error updating product: ${response.statusText}`);
            }
            const updatedProduct = await response.json();
            return updatedProduct; // Returns the updated product
        } catch (error) {
            console.error('Error updating product:', error);
            throw error;
        }
    },

    // Delete a product
    deleteProduct: async (id) => {
        try {
            const response = await fetch(`${apiURL}/products/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + window.localStorage.getItem(authConfig.storageTokenKeyName),

                },
            });

            if (response.status != 204) {
                throw new Error('Failed to delete category');
            }
        } catch (error) {
            console.error('Error deleting product:', error);
            throw error;
        }
    },
};

export default ProductService;
