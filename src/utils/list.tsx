import { Resource } from "@/modele/Resource";
import { Category } from "@/modele/Category";

// Création de quelques catégories pour l'exemple
const categoriesExample = [
    new Category({ id: "1", name: "Ship" }),
    new Category({ id: "2", name: "Battle Tank" }),
    new Category({ id: "3", name: "Ship part" }),
    new Category({ id: "4", name: "Train" }),
    new Category({ id: "5", name: "Nuke part" }),
];

// Fonction pour générer une liste de ressources
const generateResources = (): Resource[] => {
    const resources: Resource[] = [];
    
    for (let i = 0; i < 20; i++) {
        const randomCategory = categoriesExample[Math.floor(Math.random() * categoriesExample.length)];
        
        const resource = new Resource({
            id: `res-${i + 1}`,
            name: `Resource ${i + 1}`,
            description: `Description for resource ${i + 1}`,
            emote: ["😊", "🚀", "🎉", "🔥", "💡"][Math.floor(Math.random() * 5)],
            temps: `${Math.floor(Math.random() * 60) + 1} minutes`,
            category: randomCategory,
        });

        resources.push(resource);
    }
    
    return resources;
};

// Génération des ressources
export const resourceListExample = generateResources();