import React, { useEffect, useState } from "react";

import { AddElementsItemsView } from "./AddElementsItemsView";
import { useGetItems } from "../../../../apis/items/useGetItems";
import { useNewRecipe } from "../../../../apis/recipe/useNewRecipe";
import { DadinhoTypography, DadinhoLoader, DadinhoBox } from "../../../common";
import { Values } from "../../../form/FormConfig";
import { AddElementFormInitialValues, AddElementFormValidationSchema, AddElementFormFields } from "./AddElementFormConfig";
import Form from "../../../form";
import { Formik } from "formik";

interface AddElementFormProps {
  levelId: string | undefined,
  onAddElementSuccess: (level: any) => void;
}

export const AddElementForm: React.FC<AddElementFormProps> = ({ levelId, onAddElementSuccess }) => {
  const [itemSelected, setItemSelected] = useState("");
  
  const [getItems, items, itemsLoading, itemsError] = useGetItems();
  const [createNewRecipe, newRecipe, newRecipeProgress, newRecipeError] = useNewRecipe();

  useEffect(() => {
      getItems();
  }, [])

  useEffect(() => {
    if (newRecipe) {
      onAddElementSuccess(newRecipe);
    }
  }, [newRecipe]);

  const handleItem = (values: Values) => {
    createNewRecipe({...values, itemId: itemSelected, levelId: levelId});
  };

  const handleSelectItem = (itemId: string) => {
    setItemSelected(itemId);
  }

  return (
    <>
      {!itemsLoading && itemsError && <DadinhoTypography>Não foi possível carregar as opções de níveis</DadinhoTypography>}
      {itemsLoading ? (
          <DadinhoLoader />
      ) : (
          <DadinhoBox>
              <AddElementsItemsView items={items} onItemSelected={handleSelectItem} />
          </DadinhoBox>
      )}
      <Formik initialValues={AddElementFormInitialValues} validationSchema={AddElementFormValidationSchema} onSubmit={handleItem}>
        <Form
          error={newRecipeError}
          isLoading={newRecipeProgress}
          formFields={AddElementFormFields}
          errorText={"Os valores estão incorretos 😔"}
          submitText={"Cadastrar Item"}
        />
      </Formik>
    </>
  );
};

export default AddElementForm;
