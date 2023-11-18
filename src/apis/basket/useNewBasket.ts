import { useState } from "react";
import { BasketPayload, postBasket } from "./basketService";

const useNewBasket = () => {
  const [recipeData, setRecipe] = useState<boolean | null>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const api = async (registerBasket: BasketPayload) => {
    try {
      const { itemsIds, levelId } = registerBasket;
      setLoading(true);
      setRecipe(null);
      setError(null);
      const res = (await postBasket({
        itemsIds,
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

export { useNewBasket };
