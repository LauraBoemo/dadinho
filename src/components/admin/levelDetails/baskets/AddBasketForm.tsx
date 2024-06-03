import React, { useEffect, useState } from "react";
import { useNewBasket } from "../../../../apis/basket/useNewBasket";
import { useGetItems } from "../../../../apis/items/useGetItems";
import { DadinhoTypography, DadinhoLoader, DadinhoBox, DadinhoButton } from "../../../common";
import { AddRecipeItemsView } from "./AddBasketItemsView";

interface NewRecipeFormProps {
  levelId: string | undefined,
  onAddBasketSuccess: (level: any) => void;
}

export const AddBasketForm: React.FC<NewRecipeFormProps> = ({ levelId, onAddBasketSuccess }) => {
  const [itemSelected, setItemSelected] = useState<string[]>([]);
  
  const [getItems, items, itemsLoading, itemsError] = useGetItems();
  const [createNewBasket, newBasket, newBasketProgress, newBasketError] = useNewBasket();

  useEffect(() => {
    getItems();
  }, [])

  useEffect(() => {
    if (newBasket) {
      onAddBasketSuccess(newBasket);
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
