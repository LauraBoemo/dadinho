import React, { useEffect } from "react";
import { Formik } from "formik";

import Form from "../../form";
import { Values } from "../../form/FormConfig";
import { useNewLevel } from "../../../apis/level/useNewLevel";

import { AddLevelFormFields, AddLevelFormInitialValues, AddLevelFormValidationSchema } from "./AddLevelFormConfig";

interface LevelFormProps {
  onNewLevelSuccess: (level: any) => void;
}

export const AddLevelForm: React.FC<LevelFormProps> = ({ onNewLevelSuccess }) => {
  const [createNewLevel, newLevel, newLevelProgress, newLevelError] = useNewLevel();

  useEffect(() => {
    if (newLevel) {
      onNewLevelSuccess(newLevel);
    }
  }, [newLevel]);

  const handleItem = (values: Values) => {
    createNewLevel(values);
  };

  return (
    <Formik initialValues={AddLevelFormInitialValues} validationSchema={AddLevelFormValidationSchema} onSubmit={handleItem}>
      <Form
        error={newLevelError}
        isLoading={newLevelProgress}
        formFields={AddLevelFormFields}
        errorText={"Os valores estão incorretos 😔"}
        submitText={"Cadastrar Item"}
      />
    </Formik>
  );
};

export default AddLevelForm;
