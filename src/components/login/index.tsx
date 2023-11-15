import React, { useEffect } from "react";
import { Formik } from "formik";
import { useLoader } from "../../utils/LoaderProvider";
import { LoginFormFields, LoginFormInitialValues, LoginFormValidationSchema } from "./LoginFormConfig";
import { useLogin } from "../../apis/login/useLogin";
import { Values } from "../form/FormConfig";
import Form from "../form";

interface LoginFormProps {
  onLoginSuccess: (loggedInUser: any) => void;
}

export const Login: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [doLogin, loggedInUser, loginProgress, loginError] = useLogin();
  const { setLoader } = useLoader();

  useEffect(() => {
    setLoader(loginProgress);
    return () => setLoader(false);
  }, [loginProgress]);

  useEffect(() => {
    if (loggedInUser) {
      onLoginSuccess(loggedInUser);
    }
  }, [loggedInUser]);

  const handleLogin = (values: Values) => {
    doLogin(values);
  };

  return (
    <Formik initialValues={LoginFormInitialValues} validationSchema={LoginFormValidationSchema} onSubmit={handleLogin}>
      <Form
        error={loginError}
        formFields={LoginFormFields}
        errorText={"oie"}
        submitText={"Fazer login"}
      />
    </Formik>
  );
};

export default Login;
