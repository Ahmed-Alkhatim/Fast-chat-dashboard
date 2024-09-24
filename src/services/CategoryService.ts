import { apiURL } from "./config";

export interface Category {
    _id?: string;
    name: string;
    description?: string;
    businessId: string;
}

const CategoryService = {
    // Fetch all categories
    async fetchCategories(): Promise<Category[]> {
        try {
            const response = await fetch(`${apiURL}/categories`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status != 200) {
                throw new Error('Failed to fetch categories');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching categories:', error);
            throw error;
        }
    },

    // Add a new category
    async addCategory(category: Category): Promise<Category> {
        try {
            const response = await fetch(`${apiURL}/categories`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(category),
            });

            if (!response.ok) {
                throw new Error('Failed to add category');
            }

            return await response.json();
        } catch (error) {
            console.error('Error adding category:', error);
            throw error;
        }
    },

    // Update a category by ID
    async updateCategory(categoryId: string, category: Category): Promise<Category> {
        try {
            const response = await fetch(`${apiURL}/categories/${categoryId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(category),
            });

            if (!response.ok) {
                throw new Error('Failed to update category');
            }

            return await response.json();
        } catch (error) {
            console.error('Error updating category:', error);
            throw error;
        }
    },

    // Delete a category by ID
    async deleteCategory(categoryId: string): Promise<void> {
        try {
            const response = await fetch(`${apiURL}/categories/${categoryId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to delete category');
            }
        } catch (error) {
            console.error('Error deleting category:', error);
            throw error;
        }
    }
};

export default CategoryService;
