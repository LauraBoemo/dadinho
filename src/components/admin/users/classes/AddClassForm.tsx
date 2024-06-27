import React, { useEffect } from "react";
import { Formik } from "formik";
import { AddClassFormFields, AddClassFormInitialValues, AddClassFormValidationSchema } from "./AddClassFormConfig";
import { Values } from "../../../form/FormConfig";
import Form from "../../../form";
import { useAddClass } from "../../../../apis/class/useAddClass";

interface AddClassFormProps {
  onAddClassSuccess: (loggedInUser: any) => void;
}

export const AddClassForm: React.FC<AddClassFormProps> = ({ onAddClassSuccess }) => {
  const [addClass, classAdded, addClassProgress, addClassError] = useAddClass();

  useEffect(() => {
    if (classAdded) {
      onAddClassSuccess(classAdded);
    }
  }, [classAdded]);

  const handleAddClass = (values: Values) => {
    values.grade = Number(values.grade);
    addClass(values);
  };

  return (
    <Formik initialValues={AddClassFormInitialValues} validationSchema={AddClassFormValidationSchema} onSubmit={handleAddClass}>
      <Form
        error={addClassError}
        isLoading={addClassProgress}
        // @ts-ignore
        formFields={AddClassFormFields}
        errorText={"Ocoreu um erro. Contate os desevolvedores."}
        submitText={"Adicionar"}
      />
    </Formik>
  );
};

export default AddClassForm;
