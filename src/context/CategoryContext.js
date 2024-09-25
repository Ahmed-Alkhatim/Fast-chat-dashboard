import React, { createContext, useContext, useState, useEffect } from 'react';
import CategoryService from '../services/CategoryService'; // Adjust the import path as needed

// Create a context for categories
const CategoryContext = createContext(
    {
        categories: [], fetchCategories: () => { },
        errors: [],
        addCategory: () => { }, updateCategory: () => { }, deleteCategory: () => { }
    }
);

// Define the provider component
export const CategoryProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [errors, setErrors] = useState({});
    // Fetch all categories
    const fetchCategories = async () => {
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
            setCategories([newCategory, ...categories]); // Update the state with the new category
        } catch (error) {
            setErrors(error)

            console.error('Error whaen category:', error);
            throw error;

        }
    };

    // Update a category by ID
    const updateCategory = async (categoryId, updatedCategory) => {
        console.log("will API update category", categoryId, updatedCategory);

        try {
            const updated = await CategoryService.updateCategory(categoryId, updatedCategory);
            setCategories(categories.map(cat => (cat._id === categoryId ? updated : cat)));
        } catch (error) {
            console.error('Error updating category:', error);
            setErrors(error)
            throw error;
        }
    };

    // Delete a category by ID
    const deleteCategory = async (categoryId) => {
        try {
            await CategoryService.deleteCategory(categoryId);
            setCategories(categories.filter(cat => cat._id !== categoryId));
        } catch (error) {
            setErrors(error)
        }
    };

    // Automatically fetch categories when the component mounts
    useEffect(() => {
        console.log("Fetching categories");

        fetchCategories();
    }, []);

    return (
        <CategoryContext.Provider value={{ categories, errors, fetchCategories, addCategory, updateCategory, deleteCategory }
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
