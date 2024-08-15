export class Category{
    id?:string;
    name:string;

    public constructor(newCategory: {
        id?:string,
        name:string
    }){
            this.id = newCategory.id;
            this.name = newCategory.name;
    }
    
}