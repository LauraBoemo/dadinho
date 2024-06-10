import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { AddLevelFormFields, AddLevelFormInitialValues, AddLevelFormValidationSchema } from "./AddLevelFormConfig";
import { Values } from "../../../form/FormConfig";
import Form from "../../../form";
import { useNewLevel } from "../../../../apis/level/useNewLevel";
import { AnswersInput } from "./AnswerInput";

const transformArray = (arr: string[]) => {
  const result = [];
  let currentString = '';

  arr?.forEach((item) => {
    if (item === 'Pegue' && currentString !== '') {
      result.push(currentString.trim());
      currentString = item;
    } else {
      currentString += (currentString ? '|' : '') + item;
    }
  });

  if (currentString !== '') {
    result.push(currentString.trim());
  }

  return result;
}

interface AddLevelFormProps {
    onAddLevelSuccess: (loggedInUser: any) => void;
}

export const AddLevelForm: React.FC<AddLevelFormProps> = ({ onAddLevelSuccess }) => {
  const [answerFormat, setAnswerFormat] = useState([""]);
  const [createNewLevel, newLevel, newLevelProgress, newLevelError] = useNewLevel();

  useEffect(() => {
    if (newLevel) {
        onAddLevelSuccess(newLevel);
    }
  }, [newLevel]);

  const handleAddLevel = (values: Values) => {
    createNewLevel({...values, answers: transformArray(answerFormat)});
  };

  const onAnswerUpdate = (answer: string[]) => {
    setAnswerFormat(answer);
  }

  return (
    <>
        <AnswersInput onAnswerUpdate={onAnswerUpdate} />
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
