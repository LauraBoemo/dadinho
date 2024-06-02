import React, { useEffect } from "react";
import { Formik } from "formik";
import { Values } from "../../../form/FormConfig";
import Form from "../../../form";
import { AddItemFormInitialValues, AddItemFormValidationSchema, AddItemFormFields } from "./AddItemFormConfig";
import { usePostItems } from "../../../../apis/items/usePostItems";

interface AddItemFormProps {
    onAddItemSuccess: (loggedInUser: any) => void;
}

export const AddItemForm: React.FC<AddItemFormProps> = ({ onAddItemSuccess }) => {
  const [createItem, item, itemProgress, itemError] = usePostItems();

  useEffect(() => {
    if (item) {
      onAddItemSuccess(item);
    }
  }, [item]);

  const handleAddItem = (values: Values) => {
    createItem(values);
  };
  return (
    <>
        <Formik initialValues={AddItemFormInitialValues} validationSchema={AddItemFormValidationSchema} onSubmit={handleAddItem}>
        <Form
            error={itemError}
            isLoading={itemProgress}
            formFields={AddItemFormFields}
            errorText={"Ocoreu um erro. Contate os desevolvedores."}
            submitText={"Adicionar"}
        />
        </Formik>
    </>
  );
};

export default AddItemForm;
