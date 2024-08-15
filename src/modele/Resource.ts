import { Category } from "@/modele/Category";

export class Resource {
	id?: string;
	name: string;
	description: string;
	emote: string;
	temps: string;
	category: Category;

	public constructor(newResource: {
		id?: string;
		name: string;
		description: string;
		emote: string;
		temps: string;
		category: Category;
	}) {
		this.id = newResource.id;
		this.name = newResource.name;
		this.description = newResource.description;
		this.emote = newResource.emote;
		this.temps = newResource.temps;
		this.category = newResource.category;
	}
}
