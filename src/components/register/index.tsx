import React, { useEffect } from "react";
import { Formik } from "formik";
import { Values } from "../form/FormConfig";
import Form from "../form";
import { useRegister } from "../../apis/register/useRegister";
import { RegisterFormFields, RegisterFormInitialValues, RegisterFormValidationSchema } from "./RegisterFormConfig";

interface RegistarFormProps {
  onRegisterSuccess: (registerUser: any) => void;
}

export const Register: React.FC<RegistarFormProps> = ({ onRegisterSuccess }) => {
  const [doRegister, registerUser, registerProgress, registerError] = useRegister();

  useEffect(() => {
    if (registerUser) {
      onRegisterSuccess(registerUser);
    }
  }, [registerUser]);

  const handleLogin = (values: Values) => {
    doRegister(values);
  };

  return (
    <Formik initialValues={RegisterFormInitialValues} validationSchema={RegisterFormValidationSchema} onSubmit={handleLogin}>
      <Form
        error={registerError}
        isLoading={registerProgress}
        formFields={RegisterFormFields}
        errorText={"Não foi possível criar seu usuário 😔"}
        submitText={"Criar usuário"}
      />
    </Formik>
  );
};

export default Register;
