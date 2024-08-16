export type TableParameter = {
    label:string;
    value:string;
    estAffiche:boolean;
}

export function ResourcesParameter() {
    const name:TableParameter = {
        label: 'Name',
        value: 'name',
        estAffiche: true,
    }
    const emote:TableParameter = {
        label: 'Emote',
        value: 'emote',
        estAffiche: true,
    }
    const time:TableParameter = {
        label: 'Crafting time',
        value: 'temps',
        estAffiche: true,
    }
    const category:TableParameter = {
        label: 'Category',
        value: 'category',
        estAffiche: true,
    }

    return [name, emote, time, category];
}