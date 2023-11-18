import { useState } from "react";
import { RecipePayload, postRecipe } from "./recipeService";

const useNewRecipe = () => {
  const [recipeData, setRecipe] = useState<boolean | null>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const api = async (registerItem: RecipePayload) => {
    try {
      const { itemId, quantity, levelId } = registerItem;
      setLoading(true);
      setRecipe(null);
      setError(null);
      const res = (await postRecipe({
        itemId,
        quantity,
        levelId
      })) as unknown as boolean;
      setRecipe(res !== null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [api, recipeData, loading, error];
};

export { useNewRecipe };
