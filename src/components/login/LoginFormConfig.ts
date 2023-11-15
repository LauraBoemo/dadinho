import * as yup from "yup";
import { FormFieldType, Values } from "../form/FormConfig";

export const LoginFormValidationSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email address is required"),
  password: yup.string().required("Password is required"),
});

export const LoginFormInitialValues: Values = {
  email: "",
  password: "",
};

export const LoginFormFields: FormFieldType[] = [
  {
    id: "email",
    label: "Email Address",
    placeholder: "Email Address",
    required: true,
  },
  {
    id: "password",
    label: "Password",
    placeholder: "Password",
    required: true,
    type: "password",
  },
];
