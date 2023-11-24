import React, { useEffect, useState } from "react";
import { Formik } from "formik";

import Form from "../../form";
import { Values } from "../../form/FormConfig";
import { useNewLevel } from "../../../apis/level/useNewLevel";

import { AddLevelFormFields, AddLevelFormInitialValues, AddLevelFormValidationSchema } from "./AddLevelFormConfig";
import { InsertAnswers } from "./InsertAnswers";
import { DadinhoDivider, DadinhoStack, DadinhoTypography } from "../../common";

interface LevelFormProps {
  onNewLevelSuccess: (level: any) => void;
}

const transformArray = (arr: string[]) => {
  const result = [];
  let currentString = '';

  arr.forEach((item) => {
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

export const AddLevelForm: React.FC<LevelFormProps> = ({ onNewLevelSuccess }) => {
  const [answerFormat, setAnswerFormat] = useState([""]);
  const [createNewLevel, newLevel, newLevelProgress, newLevelError] = useNewLevel();

  useEffect(() => {
    if (newLevel) {
      onNewLevelSuccess(newLevel);
    }
  }, [newLevel]);

  const handleItem = (values: Values) => {
    createNewLevel({...values, answers: transformArray(answerFormat)});
  };

  const onAnswerUpdate = (answer: string[]) => {
    setAnswerFormat(answer);
  }

  return (
    <DadinhoStack direction="column" gap={2}>
      <DadinhoDivider>
          <DadinhoTypography variant="h3">
              Cadastrar respostas do nível
          </DadinhoTypography>
      </DadinhoDivider>
      <InsertAnswers onAnswerUpdate={onAnswerUpdate} />
      <DadinhoDivider>
          <DadinhoTypography variant="h3">
              Cadastrar detalhes do nível
          </DadinhoTypography>
      </DadinhoDivider>
      <Formik initialValues={AddLevelFormInitialValues} validationSchema={AddLevelFormValidationSchema} onSubmit={handleItem}>
        <Form
          error={newLevelError}
          isLoading={newLevelProgress}
          formFields={AddLevelFormFields}
          errorText={"Os valores estão incorretos 😔"}
          submitText={"Cadastrar Nível"}
        />
      </Formik>
    </DadinhoStack>
  );
};

export default AddLevelForm;
