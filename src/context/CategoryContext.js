import React, { createContext, useContext, useState, useEffect } from 'react';
import CategoryService from '../services/CategoryService'; // Adjust the import path as needed

// Create a context for categories
const CategoryContext = createContext(
    {
        categories: [], fetchCategories: () => { },
        addCategory: () => { }, updateCategory: () => { }, deleteCategory: () => { }
    }
);

// Define the provider component
export const CategoryProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);

    // Fetch all categories
    const fetchCategories = async () => {
        console.log("aklshakjshajkshajkshajkshasjka");

        try {
            const fetchedCategories = await CategoryService.fetchCategories();
            setCategories(fetchedCategories);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    // Add a new category
    const addCategory = async (category) => {
        try {
            const newCategory = await CategoryService.addCategory(category);
            setCategories([...categories, newCategory]); // Update the state with the new category
        } catch (error) {
            console.error('Error adding category:', error);
        }
    };

    // Update a category by ID
    const updateCategory = async (categoryId, updatedCategory) => {
        try {
            const updated = await CategoryService.updateCategory(categoryId, updatedCategory);
            setCategories(categories.map(cat => (cat._id === categoryId ? updated : cat)));
        } catch (error) {
            console.error('Error updating category:', error);
        }
    };

    // Delete a category by ID
    const deleteCategory = async (categoryId) => {
        try {
            await CategoryService.deleteCategory(categoryId);
            setCategories(categories.filter(cat => cat._id !== categoryId));
        } catch (error) {
            console.error('Error deleting category:', error);
        }
    };

    // Automatically fetch categories when the component mounts
    useEffect(() => {
        console.log("Fetching categories");

        fetchCategories();
    }, []);

    return (
        <CategoryContext.Provider value={{ categories, fetchCategories, addCategory, updateCategory, deleteCategory }
        }>
            {children}
        </CategoryContext.Provider>
    );
};

// Custom hook to use the CategoryContext
export const useCategoryContext = () => {
    const context = useContext(CategoryContext);
    if (!context) {
        throw new Error('useCategoryContext must be used within a CategoryProvider');
    }
    return context;
};
