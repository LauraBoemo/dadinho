import { useState } from "react";
import { ItemResponse, getItem } from "./itemsService";

const useItems = () => {
  const [itemsData, setItems] = useState<ItemResponse | null>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const api = async () => {
    try {
      setLoading(true);
      setItems(null);
      setError(null);
      const res = (await getItem()) as unknown as ItemResponse;
      setItems(res);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [api, itemsData, loading, error];
};

export { useItems };
