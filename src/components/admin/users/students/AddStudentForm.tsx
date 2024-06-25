import React, { useEffect } from "react";
import { Formik } from "formik";
import { AddStudentFormFields, AddStudentFormInitialValues, AddStudentFormValidationSchema } from "./AddStudentFormConfig";
import { Values } from "../../../form/FormConfig";
import Form from "../../../form";
import { useUser } from "../../../../apis/user/useUser";

interface AddStudentFormProps {
  onAddStudentSuccess: (studentAdded: any) => void;
}

export const AddStudentForm: React.FC<AddStudentFormProps> = ({ onAddStudentSuccess }) => {
  const [addStudent, studentAdded, addStudentProgress, addStudentError] = useUser();

  useEffect(() => {
    if (studentAdded) {
      onAddStudentSuccess(studentAdded);
    }
  }, [studentAdded]);

  const handleAddStudent = (values: Values) => {
    addStudent(values);
  };

  return (
    <Formik initialValues={AddStudentFormInitialValues} validationSchema={AddStudentFormValidationSchema} onSubmit={handleAddStudent}>
      <Form
        error={addStudentError}
        isLoading={addStudentProgress}
        formFields={AddStudentFormFields}
        errorText={"Ocoreu um erro. Contate os desevolvedores."}
        submitText={"Adicionar"}
      />
    </Formik>
  );
};

export default AddStudentForm;
