import React, { useEffect, useState } from "react";

import { Values } from "../../form/FormConfig";

import { useGetItems } from "../../../apis/items/useGetItems";
import { DadinhoTypography, DadinhoLoader, DadinhoBox, DadinhoButton } from "../../common";
import { AddRecipeItemsView } from "./AddBasketItemsView";
import { useNewBasket } from "../../../apis/basket/useNewBasket";

interface NewRecipeFormProps {
  levelId: string | null,
  onNewBasketSuccess: (level: any) => void;
}

export const AddBasketForm: React.FC<NewRecipeFormProps> = ({ levelId, onNewBasketSuccess }) => {
  const [itemSelected, setItemSelected] = useState<string[]>([]);
  
  const [getItems, items, itemsLoading, itemsError] = useGetItems();
  const [createNewBasket, newBasket, newBasketProgress, newBasketError] = useNewBasket();

  useEffect(() => {
    getItems();
  }, [])

  useEffect(() => {
    if (newBasket) {
      onNewBasketSuccess(newBasket);
    }
  }, [newBasket]);

  const handleItem = () => {
    createNewBasket({itemsIds: itemSelected, levelId: levelId});
  };

  const handleSelectItem = (itemsId: string[]) => {
    setItemSelected(itemsId);
  }

  return (
    <>
      {!itemsLoading && itemsError && <DadinhoTypography>Não foi possível carregar as opções de níveis</DadinhoTypography>}
      {itemsLoading ? (
          <DadinhoLoader />
      ) : (
          <DadinhoBox>
              <AddRecipeItemsView items={items} onItemSelected={handleSelectItem} />
          </DadinhoBox>
      )}
      <DadinhoButton onClick={handleItem}>Criar novo cesto</DadinhoButton>
    </>
  );
};

export default AddBasketForm;
