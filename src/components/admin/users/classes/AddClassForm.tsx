import React from "react";
import { Formik } from "formik";
import { AddClassFormFields, AddClassFormInitialValues, AddClassFormValidationSchema } from "./AddClassFormConfig";
import { Values } from "../../../form/FormConfig";
import Form from "../../../form";

interface AddClassFormProps {
  onAddClassSuccess: (loggedInUser: any) => void;
}

export const AddClassForm: React.FC<AddClassFormProps> = ({ onAddClassSuccess }) => {
  const handleAddClass = (values: Values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={AddClassFormInitialValues} validationSchema={AddClassFormValidationSchema} onSubmit={handleAddClass}>
      <Form
        error={undefined}
        isLoading={false}
        formFields={AddClassFormFields}
        errorText={"Ocoreu um erro. Contate os desevolvedores."}
        submitText={"Adicionar"}
      />
    </Formik>
  );
};

export default AddClassForm;
