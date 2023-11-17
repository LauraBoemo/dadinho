import React, { useEffect } from "react";
import { Formik } from "formik";
import { LoginFormFields, LoginFormInitialValues, LoginFormValidationSchema } from "./LoginFormConfig";
import { useLogin } from "../../apis/login/useLogin";
import { Values } from "../form/FormConfig";
import Form from "../form";
import baseService from "../../apis/base";

interface LoginFormProps {
  onLoginSuccess: (loggedInUser: any) => void;
}

export const Login: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [doLogin, loggedInUser, loginProgress, loginError] = useLogin();

  useEffect(() => {
    if (loggedInUser) {
      onLoginSuccess(loggedInUser);
    }
  }, [loggedInUser]);

  const handleLogin = (values: Values) => {
    baseService.post("auth/register", values);
    doLogin(values);
  };

  return (
    <Formik initialValues={LoginFormInitialValues} validationSchema={LoginFormValidationSchema} onSubmit={handleLogin}>
      <Form
        error={loginError}
        isLoading={loginProgress}
        formFields={LoginFormFields}
        errorText={"O email ou a senha inseridos não estão certos 😔"}
        submitText={"Fazer login"}
      />
    </Formik>
  );
};

export default Login;
