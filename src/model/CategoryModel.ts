import CategoryType from "./types/CategoryType";

class CategoryModel {
    id: string;
    name: string;

    constructor({ id, name }: CategoryType) {
        this.id = id;
        this.name = name
    }
}

export default CategoryModel 