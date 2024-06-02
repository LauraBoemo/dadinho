import React, { useEffect } from "react";
import { Formik } from "formik";
import { AddLevelFormFields, AddLevelFormInitialValues, AddLevelFormValidationSchema } from "./AddLevelFormConfig";
import { Values } from "../../../form/FormConfig";
import Form from "../../../form";
import { useNewLevel } from "../../../../apis/level/useNewLevel";

interface AddLevelFormProps {
    onAddLevelSuccess: (loggedInUser: any) => void;
}

export const AddLevelForm: React.FC<AddLevelFormProps> = ({ onAddLevelSuccess }) => {
  const [createNewLevel, newLevel, newLevelProgress, newLevelError] = useNewLevel();

  useEffect(() => {
    if (newLevel) {
        onAddLevelSuccess(newLevel);
    }
  }, [newLevel]);

  const handleAddLevel = (values: Values) => {
    // TODO: Remove Answers from Create
    createNewLevel({...values, answers: ""});
  };

  return (
    <>
        <Formik initialValues={AddLevelFormInitialValues} validationSchema={AddLevelFormValidationSchema} onSubmit={handleAddLevel}>
        <Form
            error={newLevelError}
            isLoading={newLevelProgress}
            formFields={AddLevelFormFields}
            errorText={"Ocoreu um erro. Contate os desevolvedores."}
            submitText={"Adicionar"}
        />
        </Formik>
    </>
  );
};

export default AddLevelForm;
