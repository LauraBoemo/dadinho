import React, { useEffect } from "react";
import { Formik } from "formik";

import Form from "../form";
import { Values } from "../form/FormConfig";

import { usePostItems } from "../../apis/items/usePostItems";

import { AddItemFormFields, AddItemFormInitialValues, AddItemFormValidationSchema } from "./AddItemFormConfig";

interface ItemFormProps {
  onItemSuccess: (item: any) => void;
}

export const AddItemForm: React.FC<ItemFormProps> = ({ onItemSuccess }) => {
  const [doItem, item, itemProgress, itemError] = usePostItems();

  useEffect(() => {
    if (item) {
      onItemSuccess(item);
    }
  }, [item]);

  const handleItem = (values: Values) => {
    doItem(values);
  };

  return (
    <Formik initialValues={AddItemFormInitialValues} validationSchema={AddItemFormValidationSchema} onSubmit={handleItem}>
      <Form
        error={itemError}
        isLoading={itemProgress}
        formFields={AddItemFormFields}
        errorText={"Os valores estão incorretos 😔"}
        submitText={"Cadastrar Item"}
      />
    </Formik>
  );
};

export default AddItemForm;
