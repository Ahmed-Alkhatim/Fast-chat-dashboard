import CategoryType from "src/model/types/CategoryType"

interface CategoriesServiceType {
    getCategories(): Promise<CategoryType[] | undefined>,
    deleteCategory(): Promise<void>
}

class CategoriesService implements CategoriesServiceType {

    async getCategories(): Promise<CategoryType[] | undefined> {
        try {
            const response = await fetch(`${process.env.API_URL}/categories`).then(res => res.json())
            return response.data
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    async deleteCategory(): Promise<void> {
        try {
            const response = await fetch(`${process.env.API_URL}/categories`, {
                method: 'DELETE',
            })
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

}

export default new CategoriesService();