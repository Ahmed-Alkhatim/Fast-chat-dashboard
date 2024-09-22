import { apiURL } from "./config"

class ProductsService {
    // Fetch all products
    fetchProducts = async () => {
        try {
            const products = await fetch(apiURL + '/products', {
                headers: {
                    'authorization': `bearer ${localStorage.getItem('token')}`,
                },
            })
            return await products.json();

        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    // Create a new product
    createProduct = async (productData) => {
        try {
            const response = await fetch('/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify(productData),
            });
            if (!response.ok) {
                throw new Error('Error creating product');
            }
            return await response.json();
        } catch (error) {
            console.error('Error creating product:', error);
        }
    }

    // Update an existing product
    updateProduct = async (productId, productData) => {
        try {
            const response = await fetch(`/products/${productId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify(productData),
            });
            if (!response.ok) {
                throw new Error('Error updating product');
            }
            return await response.json();
        } catch (error) {
            console.error('Error updating product:', error);
        }
    }

    // Delete a product
    deleteProduct = async (productId) => {
        try {
            const response = await fetch(`/products/${productId}`, {
                method: 'DELETE',
                headers: {
                    'authorization': `bearer ${localStorage.getItem('token')}`,
                },
            });
            if (!response.ok) {
                throw new Error('Error deleting product');
            }
            return await response.json();
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    }

    // Fetch all categories
    fetchCategories = async () => {
        try {
            const response = await fetch('/categories', {
                headers: {
                    'authorization': `bearer ${localStorage.getItem('token')}`,
                },
            });
            if (!response.ok) {
                throw new Error('Error fetching categories');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    }
}

// Export an instance of ProductsService
export default new ProductsService();
