import React from "react";
import { Formik } from "formik";
import { AddTeacherFormFields, AddTeacherFormInitialValues, AddTeacherFormValidationSchema } from "./AddTeacherFormConfig";
import { Values } from "../../../form/FormConfig";
import Form from "../../../form";

interface AddTeacherFormProps {
  onAddTeacherSuccess: (loggedInUser: any) => void;
}

export const AddTeacherForm: React.FC<AddTeacherFormProps> = ({ onAddTeacherSuccess }) => {
  const handleAddTeacher = (values: Values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={AddTeacherFormInitialValues} validationSchema={AddTeacherFormValidationSchema} onSubmit={handleAddTeacher}>
      <Form
        error={undefined}
        isLoading={false}
        formFields={AddTeacherFormFields}
        errorText={"Ocoreu um erro. Contate os desevolvedores."}
        submitText={"Adicionar"}
      />
    </Formik>
  );
};

export default AddTeacherForm;
