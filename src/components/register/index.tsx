import React, { useEffect } from "react";
import { Formik } from "formik";
import { Values } from "../form/FormConfig";
import Form from "../form";
import { useRegister } from "../../apis/register/useRegister";
import { RegisterFormFields, RegisterFormInitialValues, RegisterFormValidationSchema } from "./RegisterFormConfig";

interface RegistarFormProps {
  onRegisterSuccess: (loggedInUser: any) => void;
}

export const Register: React.FC<RegistarFormProps> = ({ onRegisterSuccess }) => {
  const [doLogin, loggedInUser, loginProgress, loginError] = useRegister();

  useEffect(() => {
    if (loggedInUser) {
      onRegisterSuccess(loggedInUser);
    }
  }, [loggedInUser]);

  const handleLogin = (values: Values) => {
    doLogin(values);
  };

  return (
    <Formik initialValues={RegisterFormInitialValues} validationSchema={RegisterFormValidationSchema} onSubmit={handleLogin}>
      <Form
        error={loginError}
        isLoading={loginProgress}
        formFields={RegisterFormFields}
        errorText={"Não foi possível criar seu usuário 😔"}
        submitText={"Criar usuário"}
      />
    </Formik>
  );
};

export default Register;
