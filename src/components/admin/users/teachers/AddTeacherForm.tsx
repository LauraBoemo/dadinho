import React, { useEffect } from "react";
import { Formik } from "formik";
import { AddTeacherFormFields, AddTeacherFormInitialValues, AddTeacherFormValidationSchema } from "./AddTeacherFormConfig";
import { Values } from "../../../form/FormConfig";
import Form from "../../../form";
import { useUser } from "../../../../apis/user/useUser";

interface AddTeacherFormProps {
  onAddTeacherSuccess: (loggedInUser: any) => void;
}

export const AddTeacherForm: React.FC<AddTeacherFormProps> = ({ onAddTeacherSuccess }) => {
  const [addTeacher, studentAdded, addTeacherProgress, addTeacherError] = useUser();

  useEffect(() => {
    if (studentAdded) {
      onAddTeacherSuccess(studentAdded);
    }
  }, [studentAdded]);

  const handleAddTeacher = (values: Values) => {
    addTeacher(values);
  };

  return (
    <Formik initialValues={AddTeacherFormInitialValues} validationSchema={AddTeacherFormValidationSchema} onSubmit={handleAddTeacher}>
      <Form
        error={addTeacherError}
        isLoading={addTeacherProgress}
        formFields={AddTeacherFormFields}
        errorText={"Ocoreu um erro. Contate os desevolvedores."}
        submitText={"Adicionar"}
      />
    </Formik>
  );
};

export default AddTeacherForm;
