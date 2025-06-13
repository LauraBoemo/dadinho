import { GameSetupRecipe, GameSetupBasket } from "../../../../apis/game/gameService";

export const getRandomOptions = (
    recipe?: GameSetupRecipe[],
    baskets?: GameSetupBasket[],
) => {
    const options: string[] = ['Pegue', 'Remova', 'do Meu Cesto'];

    const itemIcons = new Set<string>();

    baskets?.forEach((basket, idx) => {
        options.push(`do cesto ${idx + 1}`);
        basket.items.forEach(item => itemIcons.add(item.icon));
    });

    recipe?.forEach(entry => {
        itemIcons.add(entry.item.icon);
    });

    itemIcons.forEach(icon => {
        options.push(`uma ${icon}`);
        options.push(`todas as ${icon}`);
    });

    const uniqueOptions = Array.from(new Set(options));
    for (let i = uniqueOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [uniqueOptions[i], uniqueOptions[j]] = [uniqueOptions[j], uniqueOptions[i]];
    }

    return uniqueOptions;
};

export default getRandomOptions;