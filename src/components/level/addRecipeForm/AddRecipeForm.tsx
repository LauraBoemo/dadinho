import React, { useEffect, useState } from "react";
import { Formik } from "formik";

import Form from "../../form";
import { Values } from "../../form/FormConfig";

import { AddRecipeFormFields, AddRecipeFormInitialValues, AddRecipeFormValidationSchema } from "./AddRecipeFormConfig";
import { useNewRecipe } from "../../../apis/recipe/useNewRecipe";
import { useGetItems } from "../../../apis/items/useGetItems";
import { DadinhoTypography, DadinhoLoader, DadinhoBox } from "../../common";
import { AddRecipeItemsView } from "./AddRecipeItemsView";

interface NewRecipeFormProps {
  levelId: string | null,
  onNewRecipeSuccess: (level: any) => void;
}

export const AddRecipeForm: React.FC<NewRecipeFormProps> = ({ levelId, onNewRecipeSuccess }) => {
  const [itemSelected, setItemSelected] = useState("");
  
  const [getItems, items, itemsLoading, itemsError] = useGetItems();
  const [createNewRecipe, newRecipe, newRecipeProgress, newRecipeError] = useNewRecipe();

  useEffect(() => {
      getItems();
  }, [])

  useEffect(() => {
    if (newRecipe) {
      onNewRecipeSuccess(newRecipe);
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
              <AddRecipeItemsView items={items} onItemSelected={handleSelectItem} />
          </DadinhoBox>
      )}
      <Formik initialValues={AddRecipeFormInitialValues} validationSchema={AddRecipeFormValidationSchema} onSubmit={handleItem}>
        <Form
          error={newRecipeError}
          isLoading={newRecipeProgress}
          formFields={AddRecipeFormFields}
          errorText={"Os valores estão incorretos 😔"}
          submitText={"Cadastrar Item"}
        />
      </Formik>
    </>
  );
};

export default AddRecipeForm;
