import React from "react";
import { Formik } from "formik";
import { AddStudentFormFields, AddStudentFormInitialValues, AddStudentFormValidationSchema } from "./AddStudentFormConfig";
import { Values } from "../../../form/FormConfig";
import Form from "../../../form";

interface AddStudentFormProps {
  onAddStudentSuccess: (loggedInUser: any) => void;
}

export const AddStudentForm: React.FC<AddStudentFormProps> = ({ onAddStudentSuccess }) => {
  const handleAddStudent = (values: Values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={AddStudentFormInitialValues} validationSchema={AddStudentFormValidationSchema} onSubmit={handleAddStudent}>
      <Form
        error={undefined}
        isLoading={false}
        formFields={AddStudentFormFields}
        errorText={"Ocoreu um erro. Contate os desevolvedores."}
        submitText={"Adicionar"}
      />
    </Formik>
  );
};

export default AddStudentForm;
