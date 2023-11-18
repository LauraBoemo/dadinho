import { useState } from "react";
import { ItemPayload, postItem } from "./itemsService";

const usePostItems = () => {
  const [itemData, setItems] = useState<boolean | null>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const api = async (registerItem: ItemPayload) => {
    try {
      const { icon, name } = registerItem;
      setLoading(true);
      setItems(null);
      setError(null);
      const res = (await postItem({
        icon,
        name
      })) as unknown as boolean;
      setItems(res !== null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [api, itemData, loading, error];
};

export { usePostItems };
